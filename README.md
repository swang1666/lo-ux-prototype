# Longevity.Omics UX Prototype

Patient Management / Report Management / Order 的交互原型（1440×1024 画框，左侧菜单栏与线上一致）。

在线版本（GitHub Pages）：https://swang1666.github.io/lo-ux-prototype/

## 怎么看
1. 下载或 clone 本仓库。
2. 双击 `index.html`，用 Chrome / Edge 打开即可，不需要安装任何东西。
3. 画框上方可切换 Patient / Report / Order 三个页面；表格行可点进病人详情，再 Back 会保留搜索和筛选。

## 页面状态
- **Patient、Report**：已按会议结论改过的新版。
- **Order**：按正式版现有功能原样还原的基线，用来在此基础上讨论修改。入口有三个：左侧菜单 Order、Report 页的 NEW REPORT、病人档案里的 NEW REPORT。下单提交后，新订单会出现在 Report Management 顶部和病人档案里（只保存在当前页面，刷新即恢复）。

## 文件
- `index.html` 原型本体（单文件）
- `screens/` 关键状态截图（列表、搜索、筛选、病人档案、下单提醒、Order 各步骤）
- `Manage.png` 当前线上版本的 Figma 参考稿

## 深链接参数（演示用）
- Patient / Report：`?q=chan&type=Omni-Health&status=Available#reports`、`?gender=Female&open=gender#patients`、`?detail=CL-10127#patients`（病人档案）、`?detail=CL-10127&order=gd#patients`（下单提醒）
- Order：`#order`（第一步）、`?op=CL-10030#order`（已选病人）、`?opick=1#order`（选病人弹窗）、`?op=CL-10030&os=Gen-Decoder#order`（第二步）、`?op=CL-10127&os=Omni-Health#order`（Omni-Health 表单）
