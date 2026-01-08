import { useRef, useEffect, ReactNode } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

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

  useEffect(() => {
    const element = sectionRef.current
    if (!element) return

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

    const tween = gsap.to(element, {
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

    return () => {
      tween.kill()
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.vars.trigger === element) {
          trigger.kill()
        }
      })
    }
  }, [animation, delay, duration])

  return (
    <div ref={sectionRef} className={className}>
      {children}
    </div>
  )
}
