import { useTranslation } from 'react-i18next'

/**
 * 获取站点配置的 Hook
 */
export function useSiteConfig() {
  const { t } = useTranslation('site')
  
  return {
    site: {
      name: t('site.name'),
      title: t('site.title'),
      description: t('site.description'),
      email: t('site.email'),
      copyright: t('site.copyright')
    },
    nav: {
      items: [
        { name: t('nav.home'), path: '/' },
        { name: t('nav.resume'), path: '/resume' },
        { name: t('nav.blog'), path: '/blog' }
      ]
    },
    social: {
      github: 'https://github.com/coderfe',
      linkedin: 'https://linkedin.com',
      email: t('site.email')
    },
    hero: {
      typewriterText: t('hero.typewriterText', { returnObjects: true }) as string[],
      greeting: t('hero.greeting'),
      name: t('hero.name'),
      description: t('hero.description'),
      subDescription: t('hero.subDescription'),
      scrollHint: t('hero.scrollHint'),
      buttons: {
        resume: t('hero.buttons.resume'),
        blog: t('hero.buttons.blog')
      }
    },
    skills: {
      title: t('skills.title'),
      description: t('skills.description'),
      items: t('skills.items', { returnObjects: true }) as Array<{
        title: string
        description: string
        icon: string
        gradient: string
      }>
    },
    cta: {
      title: t('cta.title'),
      highlight: t('cta.highlight'),
      description: t('cta.description'),
      buttonText: t('cta.buttonText')
    },
    blog: {
      title: t('blog.title'),
      subtitle: t('blog.subtitle'),
      searchPlaceholder: t('blog.searchPlaceholder'),
      clearFilters: t('blog.clearFilters'),
      noMatchingPosts: t('blog.noMatchingPosts'),
      noPosts: t('blog.noPosts'),
      foundPosts: t('blog.foundPosts'),
      comments: t('blog.comments'),
      updatedAt: t('blog.updatedAt'),
      publishedAt: t('blog.publishedAt'),
      readingTime: t('blog.readingTime'),
      backToList: t('blog.backToList'),
      postNotFound: t('blog.postNotFound'),
      backToBlogList: t('blog.backToBlogList'),
      viewOnGitHub: t('blog.viewOnGitHub'),
      commentsTitle: t('blog.commentsTitle'),
      toc: t('blog.toc')
    },
    common: {
      loading: t('common.loading')
    }
  }
}

/**
 * 获取项目配置的 Hook
 */
export function useProjectsConfig() {
  const { t } = useTranslation('projects')
  
  return {
    title: t('projects.title'),
    description: t('projects.description'),
    viewDetail: t('projects.viewDetail'),
    items: t('projects.items', { returnObjects: true }) as Array<{
      title: string
      description: string
      image: string
      tags: string[]
    }>
  }
}

/**
 * 获取简历配置的 Hook
 */
export function useResumeConfig() {
  const { t } = useTranslation('resume')
  
  return {
    name: t('resume.name'),
    title: t('resume.title'),
    avatar: t('resume.avatar'),
    contact: t('resume.contact', { returnObjects: true }) as {
      email: string
      location: string
      github: string
      website: string
    },
    summary: t('resume.summary'),
    experience: t('resume.experience', { returnObjects: true }) as Array<{
      company: string
      position: string
      startDate: string
      endDate: string
      description: string
      highlights: string[]
    }>,
    education: t('resume.education', { returnObjects: true }) as Array<{
      school: string
      degree: string
      field: string
      startDate: string
      endDate: string
      description: string
    }>,
    skills: t('resume.skills', { returnObjects: true }) as Array<{
      category: string
      skills: string[]
    }>,
    projects: t('resume.projects', { returnObjects: true }) as Array<{
      name: string
      description: string
      technologies: string[]
      github?: string
      url?: string
    }>
  }
}