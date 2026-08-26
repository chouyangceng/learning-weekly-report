import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';

const html = fs.readFileSync(new URL('./index.html', import.meta.url), 'utf8');
const script = html.match(/<script>([\s\S]*?)<\/script>/)?.[1];
assert.ok(script, 'index.html should contain an inline script');

const elements = new Map();
const element = id => {
  if (!elements.has(id)) elements.set(id, {
    id,
    dataset: {},
    disabled: false,
    textContent: '',
    files: [],
    addEventListener() {},
    click() {},
  });
  return elements.get(id);
};

const context = vm.createContext({
  console,
  Blob,
  Date,
  FileReader: class {},
  navigator: { clipboard: { writeText: async () => {} } },
  URL: { createObjectURL: () => 'blob:test', revokeObjectURL() {} },
  document: {
    getElementById: element,
    createElement: () => element('download-link'),
  },
});

vm.runInContext(script, context);

const count = vm.runInContext(`countNewMaterials([
  { time: '2026-08-24T08:00:00+08:00' },
  { time: '2026-08-17T08:00:00+08:00' },
  { time: 'not-a-date' },
  {}
], new Date('2026-08-24T00:00:00+08:00'), new Date('2026-08-30T23:59:59+08:00'))`, context);
assert.equal(count, 1, 'material count should use each item timestamp');

const report = vm.runInContext(`(() => {
  const range = weekRange(0);
  state.weekOffset = 0;
  state.material = { items: [
    { time: range.monday.toISOString(), status: '已整理', subject: '控制' },
    { time: new Date(range.monday.getTime() - 8 * 86400000).toISOString(), status: '待整理', subject: '感知' }
  ] };
  state.vsr = { focusSessions: [{ date: dateKey(range.monday), duration: 45, subjectName: '控制' }] };
  return generate();
})()`, context);

assert.match(report, /本周新增：\*\*1\*\* 条/);
assert.match(report, /新增资料 1 条/);
assert.equal((report.match(/重新起步/g) || []).length, 1);
assert.doesNotMatch(html, /alert\s*\(/, 'user feedback should be inline');
assert.doesNotMatch(html, /[—–]/, 'visible copy should avoid decorative long dashes');
assert.match(html, /aria-live="polite"/);

console.log('learning-weekly-report checks passed');
