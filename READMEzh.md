# GameTrack

## 介绍

GameTrack是一个网页应用，专为足球教练在赛前准备和赛后分析中提供数据支持的可视化数据分析系统。它提供高级、可靠的数据可视化和分析工具，帮助教练从数据角度选择首发阵容、战术练习和训练计划，提供构建完美足球队的更好建议。

## 主要功能

用户管理：用户登录与注册功能。
数据上传：支持上传Excel文件进行数据分析。
比赛信息：获取比赛相关信息。
球员数据：查看所有球员的数据。
任务管理：任务列表的获取、更新与删除。
安装与启动
确保你已经安装了Node.js和npm。然后执行以下步骤：

bash
Copy code

### 安装依赖

npm install

### 在开发模式下运行

npm run dev

### 构建生产版本

npm run build

## API概览

- POST /auth/login: User Login function
- POST /auth/register: Create a new user
- POST /api/upload: Upload Excel file
- GET  /api/matches: Get match information
- DELETE /api/match?date=: Deleting information about a specific match
- GET  /api/players: Get data of all players
- GET  /api/tasks: Get the task list
- DELETE /api/tasks: Delete the chosen task
- PUT  /api/tasks: Update a task
- POST /api/tasks: Update a new task

## 技术栈

Vue: 前端框架。
Vite: 现代前端构建工具。
Vue Router: Vue的官方路由器。
Element Plus: Vue的UI组件库。
SCSS: 高级CSS。
ECharts: 丰富的图表库。
Pinia: 状态管理。
Axios: 用于HTTP请求的库。

## 贡献指南

欢迎贡献！如果你有好的想法或发现了错误，请发起Issue或Pull Request。
