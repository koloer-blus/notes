import { useTranslation } from 'react-i18next'
import { Languages } from 'lucide-react'
import { cn } from '@/lib/utils'

export function LanguageSwitcher() {
  const { i18n, t } = useTranslation('site')

  const toggleLanguage = () => {
    const newLang = i18n.language === 'zh' ? 'en' : 'zh'
    i18n.changeLanguage(newLang)
  }

  return (
    <button
      onClick={toggleLanguage}
      className={cn(
        "p-2 rounded-lg transition-colors",
        "hover:bg-accent hover:text-accent-foreground",
        "focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
      )}
      aria-label="Toggle language"
      title={i18n.language === 'zh' ? t('common.language.switchToEnglish') : t('common.language.switchToChinese')}
    >
      <Languages size={20} />
      <span className="sr-only">
        {i18n.language === 'zh' ? t('common.language.switchToEnglish') : t('common.language.switchToChinese')}
      </span>
    </button>
  )
}
