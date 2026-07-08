<p align="center">
  <img src="src/renderer/assets/openexam-app-icon.png" width="96" alt="AdmitUp App Icon" />
</p>

<h1 align="center">AdmitUp</h1>

<p align="center">
  面向考公与考研的本地优先 AI 备考桌面应用
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Electron-Desktop-24292F?style=flat-square&logo=electron&logoColor=9FEAF9" alt="Electron" />
  <img src="https://img.shields.io/badge/React-UI-24292F?style=flat-square&logo=react&logoColor=61DAFB" alt="React" />
  <img src="https://img.shields.io/badge/SQLite-Local_Data-24292F?style=flat-square&logo=sqlite&logoColor=74C0FC" alt="SQLite" />
  <img src="https://img.shields.io/badge/AI-Multi_Model-24292F?style=flat-square&logo=openai&logoColor=FFFFFF" alt="AI" />
  <img src="https://img.shields.io/badge/License-GPL--3.0--or--later-24292F?style=flat-square" alt="License" />
</p>

AdmitUp 是一个基于 `Electron + React + SQLite` 的桌面端刷题与 AI 出卷应用。项目从 OpenExam 二次开发而来，当前聚焦两个独立备考模式：`考公` 与 `考研`。两个模式共用交互模板，但题库分类、AI 出卷配置、练习历史、错题、成长数据和成就统计互相隔离。

## 功能亮点

- `双模式备考`：只保留考公、考研两个入口，避免类目过多造成混乱。
- `独立学习空间`：考公与考研的练习记录、打卡天数、成长中心、成就、错题本和 AI 试卷历史分别统计。
- `规范化题库分类`：考公保留行测五大类；考研使用高数、408、英语、政治等分类。
- `AI 出卷`：按当前模式显示不同出卷配置，支持专项组卷、综合组卷、难度控制和解析风格设置。
- `AI 导师`：支持讲题、追问、知识点梳理和学习诊断。
- `本地优先`：题库、答题记录、错题、AI 设置等数据默认保存在本机 SQLite 数据库中。
- `桌面打包`：支持 Windows NSIS 安装包和 macOS 包构建。

## 模式分类

### 考公

- 言语理解
- 数量关系
- 判断推理
- 资料分析
- 常识判断

### 考研

- 高等数学
- 408 数据结构
- 408 计算机组成原理
- 408 操作系统
- 408 计算机网络
- 考研英语
- 考研政治

## 技术栈

| 层级 | 技术 |
| --- | --- |
| 桌面容器 | Electron |
| 前端 | React + Vite |
| 本地数据库 | SQLite + better-sqlite3 |
| AI 接入 | OpenAI / Claude / DeepSeek / 豆包 / Kimi / 通义千问 / 智谱 GLM / OpenAI 兼容接口 |
| 打包 | electron-builder |

## 本地开发

环境要求：

- Node.js 20+
- npm
- Windows/macOS 桌面环境

```bash
npm install
npm run dev
```

## 常用命令

```bash
# 构建前端
npm run build

# 启动 Electron
npm run start

# 重建 Electron 原生依赖
npm run rebuild:electron

# 打包 Windows 安装包
npm run dist:win

# 打包 macOS 应用
npm run dist:mac
```

## 数据与隐私

- 用户数据默认保存在 Electron `userData` 目录下的本地 SQLite 数据库中。
- 题库种子库从 `data/openexam.seed.db.gz` 初始化。
- AI API Key 保存在本地设置中，不会提交到仓库。
- `release/`、`dist/`、`node_modules/` 等构建产物已加入 `.gitignore`。

## GitHub 发布

仓库包含 GitHub Actions：

- `Build`：在 push / PR 时执行前端构建。
- `Release Desktop Apps`：推送 `v*` 标签后构建 Windows 与 macOS 安装包，并上传到 GitHub Release。

示例：

```bash
git tag v0.2.2
git push origin main
git push origin v0.2.2
```

## 项目来源与许可

本项目基于 OpenExam 二次开发，继续遵循 `GPL-3.0-or-later` 许可。第三方题库数据、图片资源与外部抓取内容不默认归入 GPL 授权范围，需遵循其各自来源与许可说明。
