import { memo, useMemo } from "react"

interface AnimatedBackgroundProps {
  scrollProgress?: number
}

// 使用 CSS 动画替代 framer-motion，大幅提升首屏性能
export const AnimatedBackground = memo(function AnimatedBackground({ scrollProgress = 0 }: AnimatedBackgroundProps) {
  // 预计算粒子位置，避免每次渲染重新计算
  const particles = useMemo(() => 
    Array.from({ length: 8 }).map((_, i) => ({
      left: `${(i * 12.5) + Math.random() * 10}%`,
      top: `${(i * 12.5) + Math.random() * 10}%`,
      delay: `${i * 0.3}s`,
      duration: `${3 + (i % 3)}s`,
    })), []
  )

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {/* Gradient orbs - 使用 CSS 动画 */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-fade-in"
        style={{
          transform: `translate(-50%, -50%) scale(${1 - scrollProgress * 0.3})`,
        }}
      >
        <div className="relative w-[600px] h-[600px] md:w-[800px] md:h-[800px]">
          {/* Primary orb - CSS 旋转动画 */}
          <div className="absolute inset-0 animate-spin-slow">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-[300px] md:w-[400px] md:h-[400px] bg-gradient-to-br from-apple-blue/30 to-blue-400/20 rounded-full blur-3xl" />
          </div>

          {/* Secondary orb */}
          <div className="absolute inset-0 animate-spin-slow-reverse">
            <div className="absolute bottom-0 right-0 w-[250px] h-[250px] md:w-[350px] md:h-[350px] bg-gradient-to-br from-purple-500/25 to-pink-400/15 rounded-full blur-3xl" />
          </div>

          {/* Tertiary orb */}
          <div className="absolute inset-0 animate-spin-slower">
            <div className="absolute bottom-1/4 left-0 w-[200px] h-[200px] md:w-[300px] md:h-[300px] bg-gradient-to-br from-cyan-400/20 to-teal-400/15 rounded-full blur-3xl" />
          </div>
        </div>
      </div>

      {/* Floating particles - 减少数量，使用 CSS 动画 */}
      <div className="absolute inset-0">
        {particles.map((particle, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-apple-blue/40 rounded-full animate-float"
            style={{
              left: particle.left,
              top: particle.top,
              animationDelay: particle.delay,
              animationDuration: particle.duration,
            }}
          />
        ))}
      </div>

      {/* Animated rings - 使用 CSS 动画 */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        {[1, 2, 3].map((ring) => (
          <div
            key={ring}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-apple-blue/10 animate-pulse-ring"
            style={{
              width: `${200 + ring * 150}px`,
              height: `${200 + ring * 150}px`,
              animationDelay: `${ring * 0.5}s`,
              animationDuration: `${4 + ring}s`,
            }}
          />
        ))}
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0, 113, 227, 0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 113, 227, 0.5) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
      />
    </div>
  )
})
