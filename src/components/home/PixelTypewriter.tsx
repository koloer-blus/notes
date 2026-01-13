import { useEffect, useRef, useState, memo } from "react"

interface PixelTypewriterProps {
  strings?: string[]
  onComplete?: () => void
  className?: string
}

export const PixelTypewriter = memo(function PixelTypewriter({
  strings = ["HELLO!"],
  onComplete,
  className = "",
}: PixelTypewriterProps) {
  const typedRef = useRef<HTMLSpanElement>(null)
  const [showCursor, setShowCursor] = useState(true)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    if (!typedRef.current) return

    let typedInstance: { destroy: () => void } | null = null

    // 延迟加载 typed.js
    const loadTyped = async () => {
      const { default: Typed } = await import("typed.js")
      
      if (!typedRef.current) return
      
      setIsLoaded(true)
      
      typedInstance = new Typed(typedRef.current, {
        strings,
        typeSpeed: 150,
        backSpeed: 0,
        showCursor: false,
        loop: false,
        onComplete: () => {
          let blinkCount = 0
          const blinkInterval = setInterval(() => {
            setShowCursor((prev) => !prev)
            blinkCount++
            if (blinkCount >= 6) {
              clearInterval(blinkInterval)
              setShowCursor(false)
              onComplete?.()
            }
          }, 300)
        },
      })
    }

    // 使用 requestIdleCallback 或立即加载
    if ("requestIdleCallback" in window) {
      requestIdleCallback(() => loadTyped(), { timeout: 100 })
    } else {
      loadTyped()
    }

    return () => {
      typedInstance?.destroy()
    }
  }, [strings, onComplete])

  return (
    <div className={`pixel-typewriter ${className}`}>
      <div className="relative inline-flex items-center">
        {/* 扫描线效果 */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-lg">
          <div className="scanline-effect" />
        </div>

        {/* 主文字 */}
        <div className={`relative transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
          <span
            ref={typedRef}
            className="pixel-text text-6xl md:text-8xl lg:text-[10rem] font-bold tracking-wider"
            style={{
              fontFamily: '"Press Start 2P", "Courier New", monospace',
              textShadow: `
                0 0 10px rgba(0, 255, 255, 0.8),
                0 0 20px rgba(0, 255, 255, 0.6),
                0 0 30px rgba(0, 255, 255, 0.4),
                0 0 40px rgba(0, 255, 255, 0.2),
                4px 4px 0 rgba(0, 0, 0, 0.3)
              `,
              color: "#00ffff",
              WebkitTextStroke: "1px rgba(255, 255, 255, 0.3)",
            }}
          />
          {/* 像素光标 */}
          {showCursor && (
            <span
              className="inline-block ml-2 w-4 md:w-6 lg:w-8 h-12 md:h-16 lg:h-24 bg-cyan-400 align-middle animate-pulse"
              style={{
                boxShadow: "0 0 10px rgba(0, 255, 255, 0.8)",
              }}
            />
          )}
        </div>
      </div>

      {/* 像素装饰元素 */}
      <div className="absolute inset-0 pointer-events-none">
        <PixelCorner position="top-left" />
        <PixelCorner position="top-right" />
        <PixelCorner position="bottom-left" />
        <PixelCorner position="bottom-right" />
      </div>

      <style>{`
        .scanline-effect {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(
            transparent 50%,
            rgba(0, 255, 255, 0.03) 50%
          );
          background-size: 100% 4px;
          animation: scanline 0.1s linear infinite;
        }

        @keyframes scanline {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(4px);
          }
        }

        .pixel-text {
          image-rendering: pixelated;
          -webkit-font-smoothing: none;
          -moz-osx-font-smoothing: grayscale;
        }
      `}</style>
    </div>
  )
})

// 像素角落装饰组件 - 使用 CSS 动画
function PixelCorner({
  position,
}: {
  position: "top-left" | "top-right" | "bottom-left" | "bottom-right"
}) {
  const positionClasses = {
    "top-left": "top-0 left-0",
    "top-right": "top-0 right-0 rotate-90",
    "bottom-left": "bottom-0 left-0 -rotate-90",
    "bottom-right": "bottom-0 right-0 rotate-180",
  }

  return (
    <div
      className={`absolute ${positionClasses[position]} w-8 h-8 md:w-12 md:h-12 animate-fade-in`}
      style={{ animationDelay: "0.5s", animationFillMode: "both" }}
    >
      <div className="w-full h-1 bg-cyan-400/60" />
      <div className="w-1 h-full bg-cyan-400/60" />
    </div>
  )
}
