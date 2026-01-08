import { useRef, useEffect } from "react"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ArrowDown, ArrowRight, Code, Server, Rocket } from "lucide-react"
import { Button } from "@/components/ui/button"
import { AnimatedBackground } from "@/components/home/AnimatedBackground"
import { ScrollSection } from "@/components/home/ScrollSection"
import { useScrollProgress } from "@/hooks/useScrollProgress"

gsap.registerPlugin(ScrollTrigger)

export function HomePage() {
  const heroRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const scrollProgress = useScrollProgress()

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero title parallax effect
      if (titleRef.current) {
        gsap.to(titleRef.current, {
          y: 100,
          opacity: 0,
          ease: "none",
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        })
      }
    }, heroRef)

    return () => ctx.revert()
  }, [])

  return (
    <div className="relative overflow-hidden">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="min-h-screen flex flex-col items-center justify-center relative"
      >
        {/* Animated Background */}
        <AnimatedBackground scrollProgress={scrollProgress} />

        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background pointer-events-none" />
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-background to-transparent pointer-events-none" />

        <div ref={titleRef} className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6">
              <span className="block text-foreground">你好，我是</span>
              <span className="block bg-gradient-to-r from-apple-blue to-blue-400 bg-clip-text text-transparent">
                KOLOER-BLUS
              </span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            全栈开发工程师，专注于构建优雅且高性能的 Web 应用。
            <br className="hidden md:block" />
            热爱代码，热爱生活。
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link to="/resume">
              <Button size="lg" variant="apple" className="min-w-[160px]">
                查看简历
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link to="/blog">
              <Button size="lg" variant="outline" className="min-w-[160px]">
                阅读博客
              </Button>
            </Link>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2 text-muted-foreground"
          >
            <span className="text-sm font-medium">向下滚动探索</span>
            <ArrowDown className="h-5 w-5" />
          </motion.div>
        </motion.div>
      </section>

      {/* Skills Section */}
      <section className="py-32 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <ScrollSection animation="fadeUp" className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              技术栈
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              多年的开发经验让我熟练掌握了多种技术，能够应对各种复杂的开发需求
            </p>
          </ScrollSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "前端开发",
                description: "React、Vue、TypeScript、Next.js、Tailwind CSS 等现代前端技术栈",
                icon: Code,
                gradient: "from-blue-500 to-cyan-500",
              },
              {
                title: "后端开发",
                description: "Node.js、Python、PostgreSQL、MongoDB、Redis 等后端技术",
                icon: Server,
                gradient: "from-purple-500 to-pink-500",
              },
              {
                title: "工具与部署",
                description: "Git、Docker、Linux、CI/CD、云服务等 DevOps 工具链",
                icon: Rocket,
                gradient: "from-orange-500 to-red-500",
              },
            ].map((skill, index) => (
              <ScrollSection
                key={skill.title}
                animation="fadeUp"
                delay={index * 0.1}
              >
                <div className="group relative p-8 rounded-3xl bg-card border hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
                  <div
                    className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${skill.gradient} mb-6`}
                  >
                    <skill.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{skill.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {skill.description}
                  </p>
                </div>
              </ScrollSection>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Work Section */}
      <section className="py-32 px-6 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <ScrollSection animation="fadeUp" className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              精选作品
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              这些是我最引以为傲的项目，展示了我的技术能力和创造力
            </p>
          </ScrollSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "个人博客系统",
                description: "基于 React 和 GitHub Issues 的现代博客系统，支持 Markdown、代码高亮、流程图等",
                image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=500&fit=crop",
                tags: ["React", "TypeScript", "Tailwind CSS"],
              },
              {
                title: "在线协作工具",
                description: "实时协作的项目管理工具，支持任务看板、文档编辑、团队沟通等功能",
                image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=500&fit=crop",
                tags: ["Vue 3", "Node.js", "WebSocket"],
              },
            ].map((project, index) => (
              <ScrollSection
                key={project.title}
                animation={index % 2 === 0 ? "slideRight" : "slideLeft"}
              >
                <div className="group relative overflow-hidden rounded-3xl bg-card border hover:border-primary/50 transition-all duration-500 hover:shadow-2xl">
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 text-sm rounded-full bg-primary/10 text-primary"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </ScrollSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-apple-blue/20 to-purple-500/20 rounded-full blur-3xl" />
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <ScrollSection animation="scale">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              让我们一起
              <br />
              <span className="bg-gradient-to-r from-apple-blue to-purple-500 bg-clip-text text-transparent">
                创造精彩
              </span>
            </h2>
            <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
              无论是技术交流还是项目合作，我都期待与你的对话。
              让我们一起把想法变成现实。
            </p>
            <a href="mailto:coderfe@outlook.com">
              <Button size="xl" variant="apple" className="min-w-[200px]">
                联系我
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
          </ScrollSection>
        </div>
      </section>
    </div>
  )
}
