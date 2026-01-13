import { useState, useCallback } from "react"
import { Highlight, themes } from "prism-react-renderer"
import { Copy, Check } from "lucide-react"
import { cn } from "@/lib/utils"
import { useSystemTheme } from "@/hooks/useSystemTheme"

interface CodeBlockProps {
  code: string
  language: string
  showLineNumbers?: boolean
}

export function CodeBlock({ code, language, showLineNumbers = true }: CodeBlockProps) {
  const [copied, setCopied] = useState(false)
  const theme = useSystemTheme()

  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }, [code])

  // 根据系统主题选择对应的代码高亮主题
  const prismTheme = theme === "dark" ? themes.vsDark : themes.vsLight

  return (
    <div className="relative group my-6">
      {language && (
        <div className="absolute top-0 left-4 px-2 py-1 text-xs text-muted-foreground bg-muted rounded-b z-10">
          {language}
        </div>
      )}
      <button
        onClick={handleCopy}
        className="absolute top-2 right-2 p-2 rounded-lg bg-muted/50 opacity-0 group-hover:opacity-100 transition-opacity hover:bg-muted z-10"
        aria-label="Copy code"
      >
        {copied ? <Check size={16} className="text-green-500" /> : <Copy size={16} />}
      </button>
      <Highlight theme={prismTheme} code={code} language={language || "text"}>
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre
            className={cn(
              className,
              "p-4 pt-8 rounded-lg overflow-x-auto text-sm"
            )}
            style={style}
          >
            {tokens.map((line, i) => {
              const lineProps = getLineProps({ line, key: i })
              return (
                <div
                  key={i}
                  {...lineProps}
                  className={cn(lineProps.className, "table-row")}
                >
                  {showLineNumbers && (
                    <span className="table-cell text-right pr-4 select-none opacity-50 text-xs w-8">
                      {i + 1}
                    </span>
                  )}
                  <span className="table-cell">
                    {line.map((token, key) => (
                      <span key={key} {...getTokenProps({ token, key })} />
                    ))}
                  </span>
                </div>
              )
            })}
          </pre>
        )}
      </Highlight>
    </div>
  )
}

// 用于 MarkdownRenderer 的包装组件
interface MarkdownCodeBlockProps {
  className?: string
  children?: React.ReactNode
  inline?: boolean
}

export function MarkdownCodeBlock({ className, children, inline }: MarkdownCodeBlockProps) {
  const match = /language-(\w+)/.exec(className || "")
  const language = match ? match[1] : ""
  const codeString = String(children).replace(/\n$/, "")

  if (inline) {
    return (
      <code className="px-1.5 py-0.5 rounded bg-muted text-sm font-mono">
        {children}
      </code>
    )
  }

  return <CodeBlock code={codeString} language={language} />
}
