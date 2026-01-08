// Blog types
export interface Label {
  id: number
  name: string
  color: string
  description?: string
}

export interface BlogPost {
  id: number
  number: number
  title: string
  body: string
  labels: Label[]
  created_at: string
  updated_at: string
  html_url: string
  comments: number
}

// Resume types
export interface ContactInfo {
  email: string
  phone?: string
  location?: string
  github?: string
  linkedin?: string
  website?: string
}

export interface WorkExperience {
  company: string
  position: string
  startDate: string
  endDate: string
  description: string
  highlights: string[]
}

export interface Education {
  school: string
  degree: string
  field: string
  startDate: string
  endDate: string
  description?: string
}

export interface SkillCategory {
  category: string
  skills: string[]
}

export interface Project {
  name: string
  description: string
  technologies: string[]
  url?: string
  github?: string
  image?: string
}

export interface ResumeData {
  name: string
  title: string
  avatar?: string
  contact: ContactInfo
  summary: string
  experience: WorkExperience[]
  education: Education[]
  skills: SkillCategory[]
  projects?: Project[]
}

// Table of Contents types
export interface TocItem {
  id: string
  text: string
  level: number
}
