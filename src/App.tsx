import { Suspense, lazy } from "react"
import { HashRouter, Routes, Route } from "react-router-dom"
import { Layout } from "@/components/layout/Layout"
import { ScrollButtons } from "@/components/ui/scroll-buttons"

// 路由懒加载 - 非首屏页面按需加载
const HomePage = lazy(() => import("@/pages/HomePage"))
const ResumePage = lazy(() => import("@/pages/ResumePage"))
const BlogListPage = lazy(() => import("@/pages/BlogListPage"))
const BlogDetailPage = lazy(() => import("@/pages/BlogDetailPage"))

// 加载占位组件
function PageLoading() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary" />
    </div>
  )
}

function App() {
  return (
    <HashRouter>
      <Layout>
        <Suspense fallback={<PageLoading />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/resume" element={<ResumePage />} />
            <Route path="/blog" element={<BlogListPage />} />
            <Route path="/blog/:number" element={<BlogDetailPage />} />
          </Routes>
        </Suspense>
      </Layout>
      <ScrollButtons />
    </HashRouter>
  )
}

export default App
