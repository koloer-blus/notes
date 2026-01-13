import { useRef, useEffect, useState, memo } from "react"
import { Link } from "react-router-dom"
import { ArrowDown, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { AnimatedBackground } from "./AnimatedBackground"
import { PixelTypewriter } from "./PixelTypewriter"
import { useScrollProgress } from "@/hooks/useScrollProgress"
import { useSiteConfig } from "@/utils/config"

export const HeroSection = memo(function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const scrollProgress = useScrollProgress()
  const [typewriterComplete, setTypewriterComplete] = useState(false)
  const [showContent, setShowContent] = useState(false)

  const { hero } = useSiteConfig()

  // GSAP 延迟加载 - 不阻塞首屏渲染
  useEffect(() => {
    let ctx: { revert: () => void } | null = null

    const loadGsap = async () => {
      const [{ gsap }, { ScrollTrigger }] = await Promise.all([
        import("gsap"),
        import("gsap/ScrollTrigger"),
      ])

      gsap.registerPlugin(ScrollTrigger)

      ctx = gsap.context(() => {
        if (contentRef.current) {
          gsap.to(contentRef.current, {
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
    }

    if ("requestIdleCallback" in window) {
      requestIdleCallback(() => loadGsap())
    } else {
      setTimeout(loadGsap, 200)
    }

    return () => {
      if (ctx) ctx.revert()
    }
  }, [])

  const handleTypewriterComplete = () => {
    setTypewriterComplete(true)
    setTimeout(() => setShowContent(true), 300)
  }

  return (
    <section
      ref={heroRef}
      className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden"
    >
      <AnimatedBackground scrollProgress={scrollProgress} />

      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-background to-transparent pointer-events-none" />

      <div ref={contentRef} className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {!typewriterComplete ? (
          <div
            className="relative min-h-[200px] flex items-center justify-center animate-fade-in"
          >
            <PixelTypewriter
              strings={hero.typewriterText}
              onComplete={handleTypewriterComplete}
            />
          </div>
        ) : (
          <div className={`transition-all duration-700 ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6">
              <span
                className={`block text-foreground transition-all duration-500 ${showContent ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-5'}`}
                style={{ transitionDelay: '0.1s' }}
              >
                {hero.greeting}
              </span>
              <span
                className={`block bg-gradient-to-r from-apple-blue to-blue-400 bg-clip-text text-transparent transition-all duration-600 ${showContent ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
                style={{ transitionDelay: '0.3s' }}
              >
                {hero.name}
              </span>
            </h1>

            <p
              className={`text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed transition-all duration-700 ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
              style={{ transitionDelay: '0.5s' }}
            >
              {hero.description}
              <br className="hidden md:block" />
              {hero.subDescription}
            </p>

            <div
              className={`flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-700 ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
              style={{ transitionDelay: '0.7s' }}
            >
              <Link to="/resume">
                <Button size="lg" variant="apple" className="min-w-[160px] group hover:scale-105 active:scale-95 transition-transform">
                  {hero.buttons.resume}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link to="/blog">
                <Button size="lg" variant="outline" className="min-w-[160px] hover:scale-105 active:scale-95 transition-transform">
                  {hero.buttons.blog}
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>

      <div
        className={`absolute bottom-10 left-1/2 -translate-x-1/2 transition-opacity duration-500 ${showContent ? 'opacity-100' : 'opacity-0'}`}
        style={{ transitionDelay: '1.2s' }}
      >
        <div className="flex flex-col items-center gap-2 text-muted-foreground animate-bounce">
          <span className="text-sm font-medium">{hero.scrollHint}</span>
          <ArrowDown className="h-5 w-5" />
        </div>
      </div>
    </section>
  )
})
