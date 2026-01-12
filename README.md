# 个人网站模板

<p align="center">
  <img src="https://img.shields.io/badge/React-18.3-61DAFB?logo=react" alt="React" />
  <img src="https://img.shields.io/badge/TypeScript-5.6-3178C6?logo=typescript" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Vite-5.4-646CFF?logo=vite" alt="Vite" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-3.4-06B6D4?logo=tailwindcss" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/License-MIT-green" alt="License" />
</p>

<p align="center">
  <a href="./README.md">中文</a> | <a href="./README_EN.md">English</a>
</p>

一个基于 React + Vite + shadcn/ui 构建的现代化个人网站模板，开箱即用，支持高度自定义配置。

## ✨ 功能特性

### 🏠 首页
- **像素风格打字机动画** - 使用 typed.js 实现，支持自定义文字
- **滚动驱动动画** - Framer Motion + GSAP ScrollTrigger 视差效果
- **技能卡片展示** - 悬浮动效、渐变背景
- **项目作品展示** - 图片缩放、标签动画
- **CTA 区域** - 浮动光球动画效果

### 📝 博客系统
- **GitHub Issues 作为 CMS** - 无需数据库，直接使用 GitHub Issues 管理文章
- **标签筛选** - 支持按标签分类筛选文章
- **标题搜索** - 支持搜索文章标题和内容，关键词高亮
- **分页功能** - 自动分页，URL 参数同步
- **完整 Markdown 渲染**：
  - Shiki 代码高亮（支持多种主题）
  - Mermaid 流程图
  - KaTeX 数学公式
  - GFM 表格、任务列表
- **目录导航** - 侧边栏大纲，支持收起/展开
- **Giscus 评论** - 基于 GitHub Discussions 的评论系统

### 📄 简历页面
- **JSON 配置驱动** - 修改 JSON 文件即可更新简历内容
- **响应式设计** - 适配各种屏幕尺寸
- **打印友好** - 支持导出 PDF

### 🎨 其他特性
- **深色/浅色主题** - 自动跟随系统主题
- **响应式布局** - 完美适配移动端和桌面端
- **滚动按钮** - 一键回到顶部/底部
- **SEO 友好** - 语义化 HTML 结构
- **高性能** - Vite 构建，快速加载

## 🛠️ 技术栈

| 类别 | 技术 |
|------|------|
| 框架 | React 18 + TypeScript |
| 构建工具 | Vite 5 |
| 样式 | Tailwind CSS + shadcn/ui |
| 动画 | Framer Motion + GSAP |
| 路由 | React Router (HashRouter) |
| Markdown | react-markdown + Shiki + Mermaid + KaTeX |
| 评论 | Giscus |
| 打字机 | typed.js |

## 🚀 快速开始

### 环境要求

- Node.js >= 18
- npm / yarn / pnpm

### 安装

```bash
# 克隆项目
git clone https://github.com/your-username/your-repo.git
cd your-repo

# 安装依赖
npm install
# 或
yarn install
# 或
pnpm install
```

### 开发

```bash
# 启动开发服务器
npm run dev
```

访问 http://localhost:5173 查看效果。

### 构建

```bash
# 构建生产版本
npm run build

# 本地预览构建结果
npm run preview
```

## ⚙️ 配置说明

### 1. 网站基本配置

编辑 `src/config/site.json` 文件，配置网站的所有文案：

```json
{
  "site": {
    "name": "你的网站名称",
    "title": "网站标题",
    "description": "网站描述",
    "email": "your@email.com",
    "copyright": "版权信息"
  },
  "nav": {
    "items": [
      { "name": "首页", "path": "/" },
      { "name": "简历", "path": "/resume" },
      { "name": "博客", "path": "/blog" }
    ]
  },
  "social": {
    "github": "https://github.com/your-username",
    "linkedin": "https://linkedin.com/in/your-profile",
    "email": "your@email.com"
  },
  "hero": {
    "typewriterText": ["HELLO!", "你好！"],
    "greeting": "你好，我是",
    "name": "你的名字",
    "description": "你的简介",
    "buttons": {
      "resume": "查看简历",
      "blog": "阅读博客"
    }
  },
  "skills": {
    "title": "技术栈",
    "items": [...]
  },
  "projects": {
    "title": "精选作品",
    "items": [...]
  },
  "cta": {
    "title": "让我们一起",
    "highlight": "创造精彩",
    "buttonText": "联系我"
  }
}
```

### 2. 博客配置

编辑 `src/services/github.ts`，修改 GitHub 仓库信息：

```typescript
const REPO_OWNER = "your-github-username"  // 你的 GitHub 用户名
const REPO_NAME = "your-repo-name"         // 你的仓库名
```

**可选**：配置 GitHub Token 以提高 API 请求限制：

1. 创建 `.env` 文件：
```bash
VITE_GITHUB_TOKEN=your_github_token
```

2. 在 [GitHub Settings > Developer settings > Personal access tokens](https://github.com/settings/tokens) 创建 Token（无需任何权限，仅用于提高 API 限制）

### 3. 评论系统配置

1. 访问 [giscus.app](https://giscus.app/zh-CN) 获取配置
2. 编辑 `src/components/blog/GiscusComments.tsx`：

```typescript
<Giscus
  repo="your-username/your-repo"
  repoId="从 giscus.app 获取"
  category="Announcements"
  categoryId="从 giscus.app 获取"
  // ...
/>
```

### 4. 简历配置

编辑 `public/resume.json` 文件：

```json
{
  "name": "你的名字",
  "title": "职位",
  "avatar": "头像URL",
  "contact": {
    "email": "邮箱",
    "phone": "电话",
    "github": "GitHub链接",
    "website": "个人网站"
  },
  "summary": "个人简介",
  "experience": [
    {
      "company": "公司名称",
      "position": "职位",
      "period": "2020 - 至今",
      "description": "工作描述",
      "highlights": ["亮点1", "亮点2"]
    }
  ],
  "education": [...],
  "skills": [...],
  "projects": [...]
}
```

### 5. 部署配置

编辑 `vite.config.ts` 中的 `base` 路径：

```typescript
export default defineConfig({
  base: "/your-repo-name/",  // GitHub Pages 部署时需要设置
  // 如果部署到根域名，设置为 "/"
  // ...
})
```

## 📦 部署

### GitHub Pages（推荐）

项目已配置 GitHub Actions 自动部署。

1. 在仓库 Settings > Pages 中，设置 Source 为 "GitHub Actions"
2. 推送代码到 `master` 分支，自动触发部署

### Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

1. 导入 GitHub 仓库
2. 框架选择 Vite
3. 点击 Deploy

### Netlify

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start)

1. 导入 GitHub 仓库
2. 构建命令：`npm run build`
3. 发布目录：`dist`

## 📁 项目结构

```
├── public/
│   └── resume.json          # 简历配置文件
├── src/
│   ├── components/
│   │   ├── blog/            # 博客相关组件
│   │   │   ├── GiscusComments.tsx
│   │   │   ├── MarkdownRenderer.tsx
│   │   │   └── TableOfContents.tsx
│   │   ├── home/            # 首页相关组件
│   │   │   ├── AnimatedBackground.tsx
│   │   │   ├── CTASection.tsx
│   │   │   ├── HeroSection.tsx
│   │   │   ├── PixelTypewriter.tsx
│   │   │   ├── ProjectCard.tsx
│   │   │   ├── ScrollSection.tsx
│   │   │   └── SkillCard.tsx
│   │   ├── layout/          # 布局组件
│   │   │   ├── Footer.tsx
│   │   │   ├── Layout.tsx
│   │   │   └── Navbar.tsx
│   │   ├── resume/          # 简历相关组件
│   │   └── ui/              # UI 基础组件 (shadcn/ui)
│   ├── config/
│   │   ├── site.json        # 网站文案配置
│   │   └── index.ts         # 配置导出
│   ├── hooks/               # 自定义 Hooks
│   ├── lib/                 # 工具函数
│   ├── pages/               # 页面组件
│   │   ├── HomePage.tsx
│   │   ├── BlogListPage.tsx
│   │   ├── BlogDetailPage.tsx
│   │   └── ResumePage.tsx
│   ├── services/            # API 服务
│   │   └── github.ts        # GitHub API 封装
│   ├── types/               # TypeScript 类型定义
│   ├── App.tsx              # 应用入口
│   ├── index.css            # 全局样式
│   └── main.tsx             # 渲染入口
├── index.html
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

1. Fork 本仓库
2. 创建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 提交 Pull Request

## 📄 许可证

本项目基于 [MIT 许可证](./LICENSE) 开源。

## 🙏 致谢

- [shadcn/ui](https://ui.shadcn.com/) - 精美的 UI 组件库
- [Framer Motion](https://www.framer.com/motion/) - 强大的动画库
- [Giscus](https://giscus.app/) - 基于 GitHub Discussions 的评论系统
- [Shiki](https://shiki.style/) - 代码高亮
- [typed.js](https://mattboldt.com/demos/typed-js/) - 打字机效果

---

如果这个项目对你有帮助，欢迎给一个 ⭐ Star！
