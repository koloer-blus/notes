import { motion } from "framer-motion"
import { Sun, Moon, Monitor } from "lucide-react"
import { useTheme } from "@/hooks/useTheme"
import { cn } from "@/lib/utils"

interface ThemeToggleProps {
  className?: string
}

export function ThemeToggle({ className }: ThemeToggleProps) {
  const { theme, setTheme } = useTheme()

  const themes = [
    { value: "light" as const, icon: Sun, label: "浅色" },
    { value: "dark" as const, icon: Moon, label: "深色" },
    { value: "system" as const, icon: Monitor, label: "系统" },
  ]

  return (
    <div
      className={cn(
        "flex items-center gap-1 p-1 rounded-full bg-muted/50 border border-border/50",
        className
      )}
    >
      {themes.map(({ value, icon: Icon, label }) => (
        <button
          key={value}
          onClick={() => setTheme(value)}
          className={cn(
            "relative p-2 rounded-full transition-colors",
            theme === value
              ? "text-primary"
              : "text-muted-foreground hover:text-foreground"
          )}
          aria-label={label}
          title={label}
        >
          {theme === value && (
            <motion.div
              layoutId="theme-indicator"
              className="absolute inset-0 bg-background rounded-full shadow-sm border border-border/50"
              transition={{ type: "spring", duration: 0.3 }}
            />
          )}
          <Icon size={16} className="relative z-10" />
        </button>
      ))}
    </div>
  )
}

// 简化版本 - 只切换明暗
export function ThemeToggleSimple({ className }: ThemeToggleProps) {
  const { theme, setTheme } = useTheme()

  const isDark =
    theme === "dark" ||
    (theme === "system" &&
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)

  const toggleTheme = () => {
    setTheme(isDark ? "light" : "dark")
  }

  return (
    <button
      onClick={toggleTheme}
      className={cn(
        "p-2 rounded-lg transition-colors hover:bg-accent",
        className
      )}
      aria-label={isDark ? "切换到浅色模式" : "切换到深色模式"}
    >
      <motion.div
        initial={false}
        animate={{ rotate: isDark ? 180 : 0 }}
        transition={{ duration: 0.3 }}
      >
        {isDark ? <Moon size={20} /> : <Sun size={20} />}
      </motion.div>
    </button>
  )
}
