import { useState, useEffect, useMemo, useCallback } from "react"
import { useTranslation } from "react-i18next"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronRight, List } from "lucide-react"
import { cn } from "@/lib/utils"
import { TocItem } from "@/types"

interface TableOfContentsProps {
  content: string
}

function extractHeadings(markdown: string): TocItem[] {
  const headingRegex = /^(#{1,3})\s+(.+)$/gm
  const headings: TocItem[] = []
  let match

  while ((match = headingRegex.exec(markdown)) !== null) {
    const level = match[1].length
    const text = match[2].replace(/[*_`]/g, "").trim()
    const id = text.toLowerCase().replace(/\s+/g, "-")
    headings.push({ id, text, level })
  }

  return headings
}

export function TableOfContents({ content }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>("")
  const [isExpanded, setIsExpanded] = useState(true)
  const { t } = useTranslation()
  const headings = useMemo(() => extractHeadings(content), [content])

  // 处理初始 hash 滚动
  useEffect(() => {
    const hash = window.location.hash.slice(1)
    if (hash && headings.length > 0) {
      // 延迟执行以确保 DOM 已渲染
      const timer = setTimeout(() => {
        const element = document.getElementById(decodeURIComponent(hash))
        if (element) {
          element.scrollIntoView({ behavior: "smooth" })
          setActiveId(decodeURIComponent(hash))
        }
      }, 100)
      return () => clearTimeout(timer)
    }
  }, [headings])

  // 监听 URL hash 变化
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1)
      if (hash) {
        const element = document.getElementById(decodeURIComponent(hash))
        if (element) {
          element.scrollIntoView({ behavior: "smooth" })
          setActiveId(decodeURIComponent(hash))
        }
      }
    }

    window.addEventListener("hashchange", handleHashChange)
    return () => window.removeEventListener("hashchange", handleHashChange)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
            // 更新 URL hash（不触发滚动）
            const newHash = `#${encodeURIComponent(entry.target.id)}`
            if (window.location.hash !== newHash) {
              history.replaceState(null, "", newHash)
            }
          }
        })
      },
      {
        rootMargin: "-80px 0px -80% 0px",
        threshold: 0,
      }
    )

    headings.forEach((heading) => {
      const element = document.getElementById(heading.id)
      if (element) {
        observer.observe(element)
      }
    })

    return () => observer.disconnect()
  }, [headings])

  const handleClick = useCallback((id: string) => {
    const element = document.getElementById(id)
    if (element) {
      // 更新 URL hash
      window.location.hash = encodeURIComponent(id)
      element.scrollIntoView({ behavior: "smooth" })
      setActiveId(id)
    }
  }, [])

  if (headings.length === 0) {
    return null
  }

  return (
    <nav className="bg-muted/30 rounded-lg border border-border/50">
      {/* Header - 可点击收起/展开 */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full flex items-center justify-between px-4 py-3 hover:bg-muted/50 transition-colors rounded-lg"
      >
        <span className="flex items-center gap-2 font-medium text-sm text-muted-foreground">
          <List size={16} />
          {t('blog.toc')}
          <span className="text-xs text-muted-foreground/60">
            ({headings.length})
          </span>
        </span>
        <motion.span
          animate={{ rotate: isExpanded ? 90 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronRight size={16} className="text-muted-foreground" />
        </motion.span>
      </button>

      {/* Content */}
      <AnimatePresence initial={false}>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <ul className="px-4 pb-3 space-y-1 max-h-[60vh] overflow-y-auto">
              {headings.map((heading) => (
                <li
                  key={heading.id}
                  style={{ paddingLeft: `${(heading.level - 1) * 12}px` }}
                >
                  <button
                    onClick={() => handleClick(heading.id)}
                    className={cn(
                      "text-sm text-left w-full py-1.5 px-2 rounded transition-colors hover:bg-muted/50 truncate",
                      activeId === heading.id
                        ? "text-primary font-medium bg-primary/10"
                        : "text-muted-foreground"
                    )}
                    title={heading.text}
                  >
                    {heading.text}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
