import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

export default defineConfig({
  base: "/notes/",
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    host: "0.0.0.0",
    allowedHosts: true,
  },
  build: {
    outDir: "dist",
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          // React 核心
          'vendor-react': ['react', 'react-dom', 'react-router-dom'],
          // 动画库
          'vendor-animation': ['framer-motion', 'gsap'],
          // Markdown 渲染
          'vendor-markdown': ['react-markdown', 'remark-gfm', 'remark-math', 'rehype-raw', 'rehype-katex'],
          // 代码高亮 (prism-react-renderer)
          'vendor-prism': ['prism-react-renderer'],
          // 流程图
          'vendor-mermaid': ['mermaid'],
          // 数学公式
          'vendor-katex': ['katex'],
          // i18n
          'vendor-i18n': ['i18next', 'react-i18next'],
        },
      },
    },
    // 提高 chunk 大小警告阈值
    chunkSizeWarningLimit: 500,
  },
  // 优化依赖预构建
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom', 'framer-motion'],
  },
})
