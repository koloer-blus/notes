import siteConfig from "./site.json"

export type SiteConfig = typeof siteConfig

export type NavItem = SiteConfig["nav"]["items"][number]
export type SkillItem = SiteConfig["skills"]["items"][number]
export type ProjectItem = SiteConfig["projects"]["items"][number]

export { siteConfig }
