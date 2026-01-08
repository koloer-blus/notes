import { HashRouter, Routes, Route } from "react-router-dom"
import { Layout } from "@/components/layout/Layout"
import { HomePage } from "@/pages/HomePage"
import { ResumePage } from "@/pages/ResumePage"
import { BlogListPage } from "@/pages/BlogListPage"
import { BlogDetailPage } from "@/pages/BlogDetailPage"

function App() {
  return (
    <HashRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/resume" element={<ResumePage />} />
          <Route path="/blog" element={<BlogListPage />} />
          <Route path="/blog/:number" element={<BlogDetailPage />} />
        </Routes>
      </Layout>
    </HashRouter>
  )
}

export default App
