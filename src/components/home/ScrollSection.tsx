import { useRef, useEffect, ReactNode, useState } from "react"

interface ScrollSectionProps {
  children: ReactNode
  className?: string
  animation?: "fadeUp" | "fadeIn" | "slideLeft" | "slideRight" | "scale"
  delay?: number
  duration?: number
}

export function ScrollSection({
  children,
  className = "",
  animation = "fadeUp",
  delay = 0,
  duration = 1,
}: ScrollSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  // GSAP 延迟加载
  useEffect(() => {
    const element = sectionRef.current
    if (!element) return

    let tween: { kill: () => void } | null = null
    let triggers: { kill: () => void }[] = []

    const loadGsap = async () => {
      const [{ gsap }, { ScrollTrigger }] = await Promise.all([
        import("gsap"),
        import("gsap/ScrollTrigger"),
      ])

      gsap.registerPlugin(ScrollTrigger)

      let fromVars: gsap.TweenVars = {}
      let toVars: gsap.TweenVars = {}

      switch (animation) {
        case "fadeUp":
          fromVars = { opacity: 0, y: 60 }
          toVars = { opacity: 1, y: 0 }
          break
        case "fadeIn":
          fromVars = { opacity: 0 }
          toVars = { opacity: 1 }
          break
        case "slideLeft":
          fromVars = { opacity: 0, x: 100 }
          toVars = { opacity: 1, x: 0 }
          break
        case "slideRight":
          fromVars = { opacity: 0, x: -100 }
          toVars = { opacity: 1, x: 0 }
          break
        case "scale":
          fromVars = { opacity: 0, scale: 0.8 }
          toVars = { opacity: 1, scale: 1 }
          break
      }

      gsap.set(element, fromVars)
      setIsVisible(true)

      tween = gsap.to(element, {
        ...toVars,
        duration,
        delay,
        ease: "power3.out",
        scrollTrigger: {
          trigger: element,
          start: "top 85%",
          end: "top 20%",
          toggleActions: "play none none reverse",
        },
      })

      triggers = ScrollTrigger.getAll().filter(
        (trigger) => trigger.vars.trigger === element
      )
    }

    // 延迟加载 GSAP
    if ("requestIdleCallback" in window) {
      requestIdleCallback(() => loadGsap())
    } else {
      setTimeout(loadGsap, 100)
    }

    return () => {
      if (tween) tween.kill()
      triggers.forEach((trigger) => trigger.kill())
    }
  }, [animation, delay, duration])

  return (
    <div 
      ref={sectionRef} 
      className={className}
      style={{ opacity: isVisible ? undefined : 0 }}
    >
      {children}
    </div>
  )
}
