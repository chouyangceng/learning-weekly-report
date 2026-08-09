# 🎯 考研工具全家桶 · 清华车辆 822

一套互相联动的考研数字工具链，服务"清华车辆工程考研"这一主线目标。

## 工具总览

| 工具 | 仓库 | 用途 | 打开方式 |
|---|---|---|---|
| ⚙️ **822 考研引擎** | [822-kaoyan-engine](https://github.com/chouyangceng/822-kaoyan-engine) | 考点图谱/题型训练/结论卡/阶段验收/今日推荐 | 双击 index.html 或 GitHub Pages |
| 🎯 **考研执行看板** | [kaoyan-dashboard](https://github.com/chouyangceng/kaoyan-dashboard) | 阶段1完整17周任务勾选 + 周复盘导出 | 双击 index.html |
| 📝 **拾题错题本** | [mistake-notebook-kaoyan](https://github.com/chouyangceng/mistake-notebook-kaoyan) | 822控制科目录入/复习/跨端同步 | Electron 打包版或浏览器 |
| 📚 **虚拟自习室** | [virtual-study-room](https://github.com/chouyangceng/virtual-study-room) | 番茄钟 + 822计划导入 + 学科进度 | PWA / 单文件版 |
| 🗂️ **考研资料管家** | [kaoyan-materials-manager](https://github.com/chouyangceng/kaoyan-materials-manager) | 资料索引 + 822目录 + 双端同步 | PWA / 浏览器 |
| 📊 **学习周报生成器** | [learning-weekly-report](https://github.com/chouyangceng/learning-weekly-report) | 汇总四源数据生成周报 | 双击 index.html |
| 📅 **考研计划 xlsx** | 桌面文件 | 总计划（已审计修复） | Excel / WPS |

## 数据流

```
清华822考研计划.xlsx（总计划）
   ├──→ 考研执行看板（周任务执行+复盘）
   ├──→ 822引擎（考点/题型/结论卡/阶段验收）
   ├──→ 虚拟自习室（822计划导入+专注统计）
   └──→ 错题本（822控制错题+间隔复习）
          │
          └──→ 学习周报生成器（周报汇总）
```

## 联动说明

- **822 引擎 → 错题本**：题型训练中"记入错题本"导出 JSON，错题本合并导入（不覆盖）
- **822 引擎 → 周报**：导出学习报告(.md)，周报生成器自动汇总模块掌握度
- **看板 → 周复盘**：每周日导出 .md 直接贴进 xlsx 06 页打卡
- **自习室 → 计划**：822 控制导入模板 xlsx 一键导入周任务

## 当前备考阶段（2026-08 阶段1）

- 高数基础：30讲 + 1000A（每日错题≥10道）
- 雅思：11月中考试（7.0 目标）
- **822 入门**：系统建模 → 时域 → 稳定性 → 频域（用 822 引擎 + 结论卡）

## 里程碑

- 2026-11 月底：阶段1验收（高数基础收口/雅思完成/822入门图谱成型）
- 2026-12 ~ 2027-03：822 一轮基础
- 2027-07：专题强化（芝麻研行）
- 2027-09：真题一轮
- 2027-12-18/19：初试
