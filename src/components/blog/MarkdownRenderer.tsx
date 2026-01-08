import { useEffect, useState, useRef, useCallback } from "react"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import remarkMath from "remark-math"
import rehypeRaw from "rehype-raw"
import rehypeKatex from "rehype-katex"
import { Copy, Check } from "lucide-react"
import { cn } from "@/lib/utils"
import "katex/dist/katex.min.css"

interface MarkdownRendererProps {
  content: string
}

interface CodeBlockProps {
  className?: string
  children?: React.ReactNode
  inline?: boolean
}

function CodeBlock({ className, children, inline }: CodeBlockProps) {
  const [copied, setCopied] = useState(false)
  const [highlighted, setHighlighted] = useState<string>("")
  const codeRef = useRef<HTMLElement>(null)
  const match = /language-(\w+)/.exec(className || "")
  const language = match ? match[1] : ""
  const codeString = String(children).replace(/\n$/, "")

  useEffect(() => {
    if (!inline && language) {
      import("shiki").then(({ codeToHtml }) => {
        codeToHtml(codeString, {
          lang: language,
          theme: "github-dark",
        }).then(setHighlighted)
      })
    }
  }, [codeString, language, inline])

  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText(codeString)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }, [codeString])

  if (inline) {
    return (
      <code className="px-1.5 py-0.5 rounded bg-muted text-sm font-mono">
        {children}
      </code>
    )
  }

  return (
    <div className="relative group my-6">
      {language && (
        <div className="absolute top-0 left-4 px-2 py-1 text-xs text-muted-foreground bg-muted rounded-b">
          {language}
        </div>
      )}
      <button
        onClick={handleCopy}
        className="absolute top-2 right-2 p-2 rounded-lg bg-muted/50 opacity-0 group-hover:opacity-100 transition-opacity hover:bg-muted"
        aria-label="Copy code"
      >
        {copied ? <Check size={16} className="text-green-500" /> : <Copy size={16} />}
      </button>
      {highlighted ? (
        <div
          className="rounded-lg overflow-x-auto [&>pre]:p-4 [&>pre]:pt-8"
          dangerouslySetInnerHTML={{ __html: highlighted }}
        />
      ) : (
        <pre className="p-4 pt-8 rounded-lg bg-[#24292e] overflow-x-auto">
          <code ref={codeRef} className={cn("text-sm font-mono", className)}>
            {children}
          </code>
        </pre>
      )}
    </div>
  )
}

function MermaidBlock({ content }: { content: string }) {
  const [svg, setSvg] = useState<string>("")
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    import("mermaid").then((mermaid) => {
      mermaid.default.initialize({
        startOnLoad: false,
        theme: "neutral",
        securityLevel: "loose",
      })
      const id = `mermaid-${Math.random().toString(36).substr(2, 9)}`
      mermaid.default.render(id, content).then(({ svg }) => {
        setSvg(svg)
      })
    })
  }, [content])

  if (!svg) {
    return (
      <div className="flex items-center justify-center py-8 text-muted-foreground">
        Loading diagram...
      </div>
    )
  }

  return (
    <div
      ref={containerRef}
      className="mermaid flex justify-center my-6 overflow-x-auto"
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  )
}

export function MarkdownRenderer({ content }: MarkdownRendererProps) {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm, remarkMath]}
      rehypePlugins={[rehypeRaw, rehypeKatex]}
      components={{
        code({ className, children, ...props }) {
          const match = /language-(\w+)/.exec(className || "")
          const isInline = !match && !className?.includes("language-")
          
          // Handle mermaid blocks
          if (match && match[1] === "mermaid") {
            return <MermaidBlock content={String(children).replace(/\n$/, "")} />
          }

          return (
            <CodeBlock className={className} inline={isInline} {...props}>
              {children}
            </CodeBlock>
          )
        },
        h1: ({ children, ...props }) => (
          <h1
            id={String(children).toLowerCase().replace(/\s+/g, "-")}
            className="scroll-mt-24"
            {...props}
          >
            {children}
          </h1>
        ),
        h2: ({ children, ...props }) => (
          <h2
            id={String(children).toLowerCase().replace(/\s+/g, "-")}
            className="scroll-mt-24"
            {...props}
          >
            {children}
          </h2>
        ),
        h3: ({ children, ...props }) => (
          <h3
            id={String(children).toLowerCase().replace(/\s+/g, "-")}
            className="scroll-mt-24"
            {...props}
          >
            {children}
          </h3>
        ),
        a: ({ href, children, ...props }) => (
          <a
            href={href}
            target={href?.startsWith("http") ? "_blank" : undefined}
            rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
            className="text-primary hover:underline"
            {...props}
          >
            {children}
          </a>
        ),
        img: ({ src, alt, ...props }) => (
          <img
            src={src}
            alt={alt}
            className="rounded-lg shadow-md max-w-full h-auto"
            loading="lazy"
            {...props}
          />
        ),
        blockquote: ({ children, ...props }) => (
          <blockquote
            className="border-l-4 border-primary pl-4 italic text-muted-foreground"
            {...props}
          >
            {children}
          </blockquote>
        ),
        table: ({ children, ...props }) => (
          <div className="overflow-x-auto my-6">
            <table className="w-full border-collapse" {...props}>
              {children}
            </table>
          </div>
        ),
        th: ({ children, ...props }) => (
          <th
            className="border border-border px-4 py-2 bg-muted text-left font-semibold"
            {...props}
          >
            {children}
          </th>
        ),
        td: ({ children, ...props }) => (
          <td className="border border-border px-4 py-2" {...props}>
            {children}
          </td>
        ),
      }}
    >
      {content}
    </ReactMarkdown>
  )
}
