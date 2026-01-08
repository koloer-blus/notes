import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { Calendar, Clock, MessageCircle } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { fetchIssues, fetchLabels } from "@/services/github"
import { BlogPost, Label } from "@/types"
import { formatDate, formatRelativeTime } from "@/lib/utils"

export function BlogListPage() {
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [labels, setLabels] = useState<Label[]>([])
  const [selectedLabels, setSelectedLabels] = useState<string[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    Promise.all([fetchIssues(), fetchLabels()])
      .then(([postsData, labelsData]) => {
        setPosts(postsData)
        setLabels(labelsData)
        setLoading(false)
      })
      .catch((err) => {
        console.error("Failed to fetch data:", err)
        setLoading(false)
      })
  }, [])

  const filteredPosts = selectedLabels.length > 0
    ? posts.filter((post) =>
        post.labels.some((label) => selectedLabels.includes(label.name))
      )
    : posts

  const toggleLabel = (labelName: string) => {
    setSelectedLabels((prev) =>
      prev.includes(labelName)
        ? prev.filter((l) => l !== labelName)
        : [...prev, labelName]
    )
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary" />
      </div>
    )
  }

  return (
    <div className="min-h-screen py-16 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">博客</h1>
          <p className="text-xl text-muted-foreground">
            记录技术探索与生活感悟
          </p>
        </motion.div>

        {/* Tags Filter */}
        {labels.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-10"
          >
            <div className="flex flex-wrap gap-2 justify-center">
              {labels.map((label) => (
                <button
                  key={label.id}
                  onClick={() => toggleLabel(label.name)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    selectedLabels.includes(label.name)
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted hover:bg-muted/80"
                  }`}
                  style={{
                    borderColor: selectedLabels.includes(label.name)
                      ? undefined
                      : `#${label.color}`,
                    borderWidth: "1px",
                  }}
                >
                  {label.name}
                </button>
              ))}
              {selectedLabels.length > 0 && (
                <button
                  onClick={() => setSelectedLabels([])}
                  className="px-4 py-2 rounded-full text-sm font-medium bg-destructive/10 text-destructive hover:bg-destructive/20 transition-all"
                >
                  清除筛选
                </button>
              )}
            </div>
          </motion.div>
        )}

        {/* Posts List */}
        {filteredPosts.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <p className="text-xl text-muted-foreground">
              {selectedLabels.length > 0 ? "没有找到匹配的文章" : "暂无文章"}
            </p>
          </motion.div>
        ) : (
          <div className="space-y-6">
            {filteredPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <Link to={`/blog/${post.number}`}>
                  <Card className="group cursor-pointer hover:border-primary/50">
                    <CardHeader>
                      <CardTitle className="text-xl md:text-2xl group-hover:text-primary transition-colors">
                        {post.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      {/* Labels */}
                      {post.labels.length > 0 && (
                        <div className="flex flex-wrap gap-2 mb-4">
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

                      {/* Excerpt */}
                      <p className="text-muted-foreground line-clamp-2 mb-4">
                        {post.body.slice(0, 200).replace(/[#*`]/g, "")}...
                      </p>

                      {/* Meta */}
                      <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Calendar size={14} />
                          {formatDate(post.created_at)}
                        </span>
                        {post.updated_at !== post.created_at && (
                          <span className="flex items-center gap-1">
                            <Clock size={14} />
                            更新于 {formatRelativeTime(post.updated_at)}
                          </span>
                        )}
                        {post.comments > 0 && (
                          <span className="flex items-center gap-1">
                            <MessageCircle size={14} />
                            {post.comments} 条评论
                          </span>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
