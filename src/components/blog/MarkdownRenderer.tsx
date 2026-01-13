import { useEffect, useState, useRef } from "react"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import remarkMath from "remark-math"
import rehypeRaw from "rehype-raw"
import rehypeKatex from "rehype-katex"
import { MarkdownCodeBlock } from "@/components/blog/CodeBlock"
import "katex/dist/katex.min.css"

interface MarkdownRendererProps {
  content: string
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
            <MarkdownCodeBlock className={className} inline={isInline} {...props}>
              {children}
            </MarkdownCodeBlock>
          )
        },
        h1: ({ children, ...props }) => (
          <h1
            id={String(children).toLowerCase().replace(/\s+/g, "-")}
            className="scroll-mt-24 text-3xl font-bold mt-8 mb-4"
            {...props}
          >
            {children}
          </h1>
        ),
        h2: ({ children, ...props }) => (
          <h2
            id={String(children).toLowerCase().replace(/\s+/g, "-")}
            className="scroll-mt-24 text-2xl font-semibold mt-8 mb-3 pb-2 border-b border-border"
            {...props}
          >
            {children}
          </h2>
        ),
        h3: ({ children, ...props }) => (
          <h3
            id={String(children).toLowerCase().replace(/\s+/g, "-")}
            className="scroll-mt-24 text-xl font-semibold mt-6 mb-3"
            {...props}
          >
            {children}
          </h3>
        ),
        h4: ({ children, ...props }) => (
          <h4
            id={String(children).toLowerCase().replace(/\s+/g, "-")}
            className="scroll-mt-24 text-lg font-semibold mt-4 mb-2"
            {...props}
          >
            {children}
          </h4>
        ),
        h5: ({ children, ...props }) => (
          <h5
            id={String(children).toLowerCase().replace(/\s+/g, "-")}
            className="scroll-mt-24 text-base font-semibold mt-4 mb-2"
            {...props}
          >
            {children}
          </h5>
        ),
        h6: ({ children, ...props }) => (
          <h6
            id={String(children).toLowerCase().replace(/\s+/g, "-")}
            className="scroll-mt-24 text-sm font-semibold mt-4 mb-2 text-muted-foreground"
            {...props}
          >
            {children}
          </h6>
        ),
        p: ({ children, ...props }) => (
          <p className="my-4 leading-7" {...props}>
            {children}
          </p>
        ),
        ul: ({ children, ...props }) => (
          <ul className="my-4 ml-6 list-disc space-y-2" {...props}>
            {children}
          </ul>
        ),
        ol: ({ children, ...props }) => (
          <ol className="my-4 ml-6 list-decimal space-y-2" {...props}>
            {children}
          </ol>
        ),
        li: ({ children, ...props }) => (
          <li className="leading-7" {...props}>
            {children}
          </li>
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
            className="rounded-lg shadow-md max-w-full h-auto my-4"
            loading="lazy"
            {...props}
          />
        ),
        blockquote: ({ children, ...props }) => (
          <blockquote
            className="border-l-4 border-primary pl-4 my-4 italic text-muted-foreground"
            {...props}
          >
            {children}
          </blockquote>
        ),
        hr: ({ ...props }) => (
          <hr className="my-8 border-border" {...props} />
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
        strong: ({ children, ...props }) => (
          <strong className="font-semibold" {...props}>
            {children}
          </strong>
        ),
        em: ({ children, ...props }) => (
          <em className="italic" {...props}>
            {children}
          </em>
        ),
      }}
    >
      {content}
    </ReactMarkdown>
  )
}
