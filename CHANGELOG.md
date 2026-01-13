# 更新日志

所有重要的版本更新都会记录在此文件中。

格式基于 [Keep a Changelog](https://keepachangelog.com/zh-CN/1.0.0/)，
版本号遵循 [语义化版本](https://semver.org/lang/zh-CN/)。

## [1.2.0] - 2025-01-13

### 新增

#### 国际化支持 (i18n)
- 完整的中英文双语支持，基于 react-i18next
- 命名空间化的翻译文件结构：
  - `site` - 站点信息、导航、首页、技能、CTA、博客、通用文案
  - `projects` - 项目展示内容
  - `resume` - 简历数据和 UI 标签
- 语言切换组件 (`LanguageSwitcher`)，支持中英文切换
- 自动检测系统语言偏好
- 配置文件国际化：
  - 迁移 `src/config/site.json` 到 i18n 系统
  - 迁移 `public/resume.json` 到 i18n 系统
- 实用工具函数：
  - `useSiteConfig()` - 站点配置钩子
  - `useProjectsConfig()` - 项目配置钩子
  - `useResumeConfig()` - 简历配置钩子

#### 组件国际化
- 所有 UI 组件支持多语言：
  - 导航栏、页脚、主题切换器
  - 简历页面所有组件 (标题、按钮、标签)
  - 博客系统相关文案
- 移除所有硬编码中文文本
- 统一使用 `useTranslation` 钩子

### 改进
- 重构配置系统，提升可维护性
- 优化文件结构，支持模块化翻译管理
- 增强 TypeScript 类型安全

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
- react-i18next (国际化)

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

### 博客功能增强
- [ ] 文章阅读时间估算
- [ ] 文章目录锚点定位优化
- [ ] 文章分类和归档页面
- [ ] 相关文章推荐
- [ ] RSS 订阅支持

### 性能和体验优化
- [ ] 图片懒加载和优化
- [ ] 代码块复制功能
- [ ] 全站搜索功能
- [ ] 页面加载进度条
- [ ] PWA 支持（离线访问）

### 国际化扩展
- [ ] 更多语言支持（日语、韩语、法语等）
- [ ] 语言检测和自动切换
- [ ] 多语言 SEO 优化

### 技术改进
- [ ] 站点地图自动生成
- [ ] 错误页面优化
- [ ] 单元测试覆盖
- [ ] 性能监控集成
