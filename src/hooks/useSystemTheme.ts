import { useState, useEffect } from "react"

/**
 * 获取当前实际应用的主题（解析 system 为实际的 light/dark）
 */
export function useSystemTheme(): "light" | "dark" {
  const [resolvedTheme, setResolvedTheme] = useState<"light" | "dark">(() => {
    if (typeof window !== "undefined") {
      // 检查 document 上的 class
      if (document.documentElement.classList.contains("dark")) {
        return "dark"
      }
      if (document.documentElement.classList.contains("light")) {
        return "light"
      }
      // 回退到系统偏好
      return window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light"
    }
    return "light"
  })

  useEffect(() => {
    // 监听 document class 变化
    const observer = new MutationObserver(() => {
      if (document.documentElement.classList.contains("dark")) {
        setResolvedTheme("dark")
      } else {
        setResolvedTheme("light")
      }
    })

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    })

    // 同时监听系统主题变化
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)")
    const handleChange = () => {
      // 只有在 system 模式下才需要响应
      const storedTheme = localStorage.getItem("theme")
      if (storedTheme === "system" || !storedTheme) {
        setResolvedTheme(mediaQuery.matches ? "dark" : "light")
      }
    }

    mediaQuery.addEventListener("change", handleChange)

    return () => {
      observer.disconnect()
      mediaQuery.removeEventListener("change", handleChange)
    }
  }, [])

  return resolvedTheme
}
