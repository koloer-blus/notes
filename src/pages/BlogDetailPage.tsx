import { useState, useEffect } from "react"
import { useParams, Link } from "react-router-dom"
import { motion } from "framer-motion"
import { ArrowLeft, Calendar, Clock, ExternalLink } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MarkdownRenderer } from "@/components/blog/MarkdownRenderer"
import { TableOfContents } from "@/components/blog/TableOfContents"
import { GiscusComments } from "@/components/blog/GiscusComments"
import { fetchIssueByNumber } from "@/services/github"
import { BlogPost } from "@/types"
import { formatDate, formatRelativeTime } from "@/lib/utils"

export function BlogDetailPage() {
  const { number } = useParams<{ number: string }>()
  const [post, setPost] = useState<BlogPost | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!number) return

    fetchIssueByNumber(parseInt(number))
      .then((data) => {
        setPost(data)
        setLoading(false)
      })
      .catch((err) => {
        console.error("Failed to fetch post:", err)
        setLoading(false)
      })
  }, [number])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary" />
      </div>
    )
  }

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4">
        <p className="text-xl text-muted-foreground">文章不存在</p>
        <Link to="/blog">
          <Button variant="outline">
            <ArrowLeft className="mr-2 h-4 w-4" />
            返回博客列表
          </Button>
        </Link>
      </div>
    )
  }

  return (
    <div className="min-h-screen py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex gap-8">
          {/* Main Content */}
          <article className="flex-1 max-w-4xl">
            {/* Back button */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              className="mb-8"
            >
              <Link to="/blog">
                <Button variant="ghost" className="gap-2">
                  <ArrowLeft size={18} />
                  返回列表
                </Button>
              </Link>
            </motion.div>

            {/* Header */}
            <motion.header
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-10"
            >
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                {post.title}
              </h1>

              {/* Labels */}
              {post.labels.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-6">
                  {post.labels.map((label) => (
                    <Badge
                      key={label.id}
                      variant="secondary"
                      style={{
                        backgroundColor: `#${label.color}20`,
                        color: `#${label.color}`,
                        borderColor: `#${label.color}`,
                      }}
                      className="border"
                    >
                      {label.name}
                    </Badge>
                  ))}
                </div>
              )}

              {/* Meta */}
              <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
                <span className="flex items-center gap-2">
                  <Calendar size={16} />
                  发布于 {formatDate(post.created_at)}
                </span>
                {post.updated_at !== post.created_at && (
                  <span className="flex items-center gap-2">
                    <Clock size={16} />
                    更新于 {formatRelativeTime(post.updated_at)}
                  </span>
                )}
                <a
                  href={post.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-primary transition-colors"
                >
                  <ExternalLink size={16} />
                  在 GitHub 上查看
                </a>
              </div>
            </motion.header>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="prose prose-lg dark:prose-invert max-w-none"
            >
              <MarkdownRenderer content={post.body} />
            </motion.div>

            {/* Comments */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-16 pt-10 border-t"
            >
              <h2 className="text-2xl font-bold mb-8">评论</h2>
              <GiscusComments />
            </motion.div>
          </article>

          {/* Table of Contents */}
          <aside className="hidden xl:block w-64 shrink-0">
            <div className="sticky top-24">
              <TableOfContents content={post.body} />
            </div>
          </aside>
        </div>
      </div>
    </div>
  )
}
