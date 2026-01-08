# 个人网站

基于 React + Vite + shadcn/ui 构建的个人网站，包含首页、简历、博客功能。

## 功能特性

- **首页**：Framer Motion 滚动驱动动画，GSAP ScrollTrigger 视差效果
- **简历**：读取本地 JSON 配置，展示个人信息、工作经历、技能、项目
- **博客**：从 GitHub Issues 获取文章，支持标签筛选、时间展示
- **博客详情**：完整 Markdown 渲染（Shiki 代码高亮、Mermaid 流程图、KaTeX 数学公式）、侧边大纲导航
- **评论系统**：集成 Giscus（基于 GitHub Discussions）

## 技术栈

- React 18 + TypeScript
- Vite 5
- Tailwind CSS + shadcn/ui
- Framer Motion + GSAP
- React Router (HashRouter)

## 快速开始

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build
```

## 配置说明

### 简历配置

编辑 `public/resume.json` 文件：

```json
{
  "name": "你的名字",
  "title": "职位",
  "avatar": "头像URL",
  "contact": {
    "email": "邮箱",
    "github": "GitHub链接",
    "website": "个人网站"
  },
  "summary": "个人简介",
  "experience": [...],
  "education": [...],
  "skills": [...],
  "projects": [...]
}
```

### 博客配置

编辑 `src/services/github.ts`：

```typescript
const REPO_OWNER = "你的GitHub用户名"
const REPO_NAME = "仓库名"
```

### 评论系统配置

编辑 `src/components/blog/GiscusComments.tsx`：

```typescript
repo="用户名/仓库名"
repoId="从 giscus.app 获取"
category="Announcements"
categoryId="从 giscus.app 获取"
```

获取配置：访问 [giscus.app](https://giscus.app) 按指引操作。

### 部署配置

编辑 `vite.config.ts` 中的 `base` 路径：

```typescript
base: "/你的仓库名/"
```

## 部署

项目已配置 GitHub Actions 自动部署到 GitHub Pages。

推送到 `master` 分支后会自动触发构建和部署。

## 目录结构

```
src/
├── components/
│   ├── blog/          # 博客相关组件
│   ├── home/          # 首页相关组件
│   ├── layout/        # 布局组件
│   ├── resume/        # 简历相关组件
│   └── ui/            # UI 基础组件
├── hooks/             # 自定义 Hooks
├── pages/             # 页面组件
├── services/          # API 服务
├── types/             # TypeScript 类型定义
└── lib/               # 工具函数
```
