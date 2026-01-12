import { useEffect, useRef, useState } from "react"
import Typed from "typed.js"
import { motion } from "framer-motion"

interface PixelTypewriterProps {
  strings?: string[]
  onComplete?: () => void
  className?: string
}

export function PixelTypewriter({
  strings = ["HELLO!"],
  onComplete,
  className = "",
}: PixelTypewriterProps) {
  const typedRef = useRef<HTMLSpanElement>(null)
  const typedInstance = useRef<Typed | null>(null)
  const [showCursor, setShowCursor] = useState(true)

  useEffect(() => {
    if (!typedRef.current) return

    typedInstance.current = new Typed(typedRef.current, {
      strings,
      typeSpeed: 150,
      backSpeed: 0,
      showCursor: false,
      loop: false,
      onComplete: () => {
        // 打字完成后闪烁光标几次然后隐藏
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

    return () => {
      typedInstance.current?.destroy()
    }
  }, [strings, onComplete])

  return (
    <div className={`pixel-typewriter ${className}`}>
      {/* 像素风格文字容器 */}
      <div className="relative inline-flex items-center">
        {/* 扫描线效果 */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-lg">
          <div className="scanline-effect" />
        </div>

        {/* 主文字 */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="relative"
        >
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
            <motion.span
              initial={{ opacity: 1 }}
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 0.8, repeat: Infinity }}
              className="inline-block ml-2 w-4 md:w-6 lg:w-8 h-12 md:h-16 lg:h-24 bg-cyan-400 align-middle"
              style={{
                boxShadow: "0 0 10px rgba(0, 255, 255, 0.8)",
              }}
            />
          )}
        </motion.div>
      </div>

      {/* 像素装饰元素 */}
      <div className="absolute inset-0 pointer-events-none">
        {/* 角落装饰 */}
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
}

// 像素角落装饰组件
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
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      className={`absolute ${positionClasses[position]} w-8 h-8 md:w-12 md:h-12`}
    >
      <div className="w-full h-1 bg-cyan-400/60" />
      <div className="w-1 h-full bg-cyan-400/60" />
    </motion.div>
  )
}
