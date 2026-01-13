import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

// 导入拆分后的翻译文件
import zhSite from './locales/zh/site.json'
import zhProjects from './locales/zh/projects.json'
import zhResume from './locales/zh/resume.json'

import enSite from './locales/en/site.json'
import enProjects from './locales/en/projects.json'
import enResume from './locales/en/resume.json'

const savedLanguage = localStorage.getItem('language') || 'zh'

// 合并翻译资源
const resources = {
  zh: {
    site: zhSite,
    projects: zhProjects,
    resume: zhResume,
  },
  en: {
    site: enSite,
    projects: enProjects,
    resume: enResume,
  },
}

i18n.use(initReactI18next).init({
  resources,
  lng: savedLanguage,
  fallbackLng: 'zh',
  
  // 使用命名空间
  ns: ['site', 'projects', 'resume'],
  defaultNS: 'site',
  
  interpolation: {
    escapeValue: false
  }
})

// 监听语言变化，持久化到 localStorage
i18n.on('languageChanged', (lng) => {
  localStorage.setItem('language', lng)
})

export default i18n
