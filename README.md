# Longevity.Omics UX Prototype

Patient Management / Report Management 的交互原型（1440×1024 画框，左侧菜单栏与线上一致）。

在线版本（GitHub Pages）：https://swang1666.github.io/lo-ux-prototype/

## 怎么看
1. 下载或 clone 本仓库。
2. 双击 `index.html`，用 Chrome / Edge 打开即可，不需要安装任何东西。
3. 画框上方可切换 Patient / Report 两个页面；表格行可点进病人详情，再 Back 会保留搜索和筛选。

## 文件
- `index.html` 原型本体（单文件）
- `screens/` 关键状态截图（列表、搜索、筛选、病人档案、下单提醒）
- `Manage.png` 当前线上版本的 Figma 参考稿

## 深链接参数（演示用）
`?q=chan&type=Omni-Health&status=Available#reports`、`?gender=Female&open=gender#patients`、`?detail=CL-10127#patients`（病人档案）、`?detail=CL-10127&order=gd#patients`（下单提醒）
