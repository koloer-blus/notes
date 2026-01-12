# 更新日志

所有重要的版本更新都会记录在此文件中。

格式基于 [Keep a Changelog](https://keepachangelog.com/zh-CN/1.0.0/)，
版本号遵循 [语义化版本](https://semver.org/lang/zh-CN/)。

## [1.0.0] - 2025-01-12

### 新增

#### 首页
- 像素风格打字机动画组件 (`PixelTypewriter`)，使用 typed.js 实现
- Hero 首屏组件，支持打字机效果和平滑过渡
- 技能卡片组件 (`SkillCard`)，悬浮动效和渐变背景
- 项目卡片组件 (`ProjectCard`)，图片缩放和标签动画
- CTA 区域组件 (`CTASection`)，浮动光球动画
- 滚动驱动动画，Framer Motion + GSAP ScrollTrigger

#### 博客系统
- GitHub Issues 作为 CMS，无需数据库
- 标签筛选功能
- 标题和内容搜索，关键词高亮
- 分页功能，URL 参数同步
- 完整 Markdown 渲染：
  - Shiki 代码高亮
  - Mermaid 流程图
  - KaTeX 数学公式
  - GFM 表格、任务列表
- 可收起/展开的目录导航
- Giscus 评论系统集成

#### 简历页面
- JSON 配置驱动的简历展示
- 响应式设计
- 打印友好

#### 通用功能
- 深色/浅色主题切换
- 响应式布局
- 滚动到顶部/底部按钮
- 网站文案 JSON 配置化 (`src/config/site.json`)
- 自定义字体支持（月星楷）

### 技术栈
- React 18 + TypeScript
- Vite 5
- Tailwind CSS + shadcn/ui
- Framer Motion + GSAP
- React Router (HashRouter)

---

## 版本说明

### 主版本号 (Major)
当进行不兼容的 API 更改时递增。

### 次版本号 (Minor)
当以向后兼容的方式添加功能时递增。

### 修订号 (Patch)
当进行向后兼容的错误修复时递增。

---

## 即将推出

- [ ] 多语言支持 (i18n)
- [ ] 文章阅读时间估算
- [ ] 文章目录锚点定位优化
- [ ] RSS 订阅支持
- [ ] 站点地图生成
- [ ] PWA 支持
