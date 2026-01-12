import { useState, useEffect, useCallback, useMemo } from "react"
import { Link, useSearchParams } from "react-router-dom"
import { motion } from "framer-motion"
import { Calendar, Clock, MessageCircle } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Pagination } from "@/components/ui/pagination"
import { SearchInput } from "@/components/ui/search-input"
import { fetchIssues, fetchLabels, PaginatedResult } from "@/services/github"
import { BlogPost, Label } from "@/types"
import { formatDate, formatRelativeTime } from "@/lib/utils"

export function BlogListPage() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [postsResult, setPostsResult] = useState<PaginatedResult<BlogPost>>({
    data: [],
    totalPages: 1,
    currentPage: 1,
    hasNext: false,
  })
  const [labels, setLabels] = useState<Label[]>([])
  const [selectedLabels, setSelectedLabels] = useState<string[]>([])
  const [searchQuery, setSearchQuery] = useState("")
  const [loading, setLoading] = useState(true)

  // 从 URL 获取当前页码和搜索词
  const currentPage = parseInt(searchParams.get("page") || "1", 10)
  const urlSearch = searchParams.get("q") || ""

  // 初始化搜索词
  useEffect(() => {
    setSearchQuery(urlSearch)
  }, [urlSearch])

  const loadPosts = useCallback(async (page: number, labelFilter?: string[]) => {
    setLoading(true)
    try {
      const result = await fetchIssues(page, labelFilter)
      setPostsResult(result)
    } catch (err) {
      console.error("Failed to fetch posts:", err)
    } finally {
      setLoading(false)
    }
  }, [])

  // 初始加载标签
  useEffect(() => {
    fetchLabels()
      .then(setLabels)
      .catch((err) => console.error("Failed to fetch labels:", err))
  }, [])

  // 加载文章（依赖页码和标签筛选）
  useEffect(() => {
    loadPosts(currentPage, selectedLabels.length > 0 ? selectedLabels : undefined)
  }, [currentPage, selectedLabels, loadPosts])

  // 前端过滤搜索结果
  const filteredPosts = useMemo(() => {
    if (!searchQuery.trim()) {
      return postsResult.data
    }
    
    const query = searchQuery.toLowerCase().trim()
    return postsResult.data.filter((post) =>
      post.title.toLowerCase().includes(query) ||
      post.body.toLowerCase().includes(query)
    )
  }, [postsResult.data, searchQuery])

  const updateSearchParams = useCallback((updates: Record<string, string | null>) => {
    const newParams = new URLSearchParams(searchParams)
    
    Object.entries(updates).forEach(([key, value]) => {
      if (value === null || value === "" || value === "1") {
        newParams.delete(key)
      } else {
        newParams.set(key, value)
      }
    })
    
    setSearchParams(newParams)
  }, [searchParams, setSearchParams])

  const handlePageChange = (page: number) => {
    updateSearchParams({ page: page.toString() })
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const handleSearchChange = (query: string) => {
    setSearchQuery(query)
    // 搜索时重置到第一页
    updateSearchParams({ q: query, page: null })
  }

  const toggleLabel = (labelName: string) => {
    setSelectedLabels((prev) => {
      const newLabels = prev.includes(labelName)
        ? prev.filter((l) => l !== labelName)
        : [...prev, labelName]
      
      updateSearchParams({ page: "1" })
      
      return newLabels
    })
  }

  const clearFilters = () => {
    setSelectedLabels([])
    setSearchQuery("")
    updateSearchParams({ page: null, q: null })
  }

  const hasActiveFilters = selectedLabels.length > 0 || searchQuery.trim() !== ""

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

        {/* Search Input */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="mb-6"
        >
          <SearchInput
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder="搜索文章标题或内容..."
            className="max-w-md mx-auto"
          />
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
              {hasActiveFilters && (
                <button
                  onClick={clearFilters}
                  className="px-4 py-2 rounded-full text-sm font-medium bg-destructive/10 text-destructive hover:bg-destructive/20 transition-all"
                >
                  清除筛选
                </button>
              )}
            </div>
          </motion.div>
        )}

        {/* Loading State */}
        {loading ? (
          <div className="flex items-center justify-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary" />
          </div>
        ) : filteredPosts.length === 0 ? (
          /* Empty State */
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <p className="text-xl text-muted-foreground">
              {hasActiveFilters ? "没有找到匹配的文章" : "暂无文章"}
            </p>
          </motion.div>
        ) : (
          <>
            {/* Search Results Info */}
            {searchQuery.trim() && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mb-6 text-center text-muted-foreground"
              >
                找到 {filteredPosts.length} 篇相关文章
              </motion.div>
            )}

            {/* Posts List */}
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
                          <HighlightText text={post.title} query={searchQuery} />
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
                          <HighlightText 
                            text={post.body.slice(0, 200).replace(/[#*`]/g, "") + "..."} 
                            query={searchQuery} 
                          />
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

            {/* Pagination - 搜索时隐藏分页 */}
            {!searchQuery.trim() && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="mt-12"
              >
                <Pagination
                  currentPage={postsResult.currentPage}
                  totalPages={postsResult.totalPages}
                  onPageChange={handlePageChange}
                />
              </motion.div>
            )}
          </>
        )}
      </div>
    </div>
  )
}

// 高亮搜索关键词组件
function HighlightText({ text, query }: { text: string; query: string }) {
  if (!query.trim()) {
    return <>{text}</>
  }

  const regex = new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")})`, "gi")
  const parts = text.split(regex)

  return (
    <>
      {parts.map((part, index) =>
        regex.test(part) ? (
          <mark key={index} className="bg-yellow-200 dark:bg-yellow-800 text-inherit rounded px-0.5">
            {part}
          </mark>
        ) : (
          part
        )
      )}
    </>
  )
}
