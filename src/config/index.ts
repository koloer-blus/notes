// 配置文件已迁移到国际化系统
// 请使用 @/utils/config 中的 useSiteConfig 和 useResumeConfig hooks

export type NavItem = {
  name: string
  path: string
}

export type SkillItem = {
  title: string
  description: string
  icon: string
  gradient: string
}

export type ProjectItem = {
  title: string
  description: string
  image: string
  tags: string[]
}
