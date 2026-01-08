import { motion } from "framer-motion"

interface AnimatedBackgroundProps {
  scrollProgress?: number
}

export function AnimatedBackground({ scrollProgress = 0 }: AnimatedBackgroundProps) {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {/* Gradient orbs */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        style={{
          transform: `translate(-50%, -50%) scale(${1 - scrollProgress * 0.3})`,
        }}
      >
        {/* Main gradient orb */}
        <div className="relative w-[600px] h-[600px] md:w-[800px] md:h-[800px]">
          {/* Primary orb */}
          <motion.div
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute inset-0"
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-[300px] md:w-[400px] md:h-[400px] bg-gradient-to-br from-apple-blue/30 to-blue-400/20 rounded-full blur-3xl" />
          </motion.div>

          {/* Secondary orb */}
          <motion.div
            animate={{
              rotate: -360,
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute inset-0"
          >
            <div className="absolute bottom-0 right-0 w-[250px] h-[250px] md:w-[350px] md:h-[350px] bg-gradient-to-br from-purple-500/25 to-pink-400/15 rounded-full blur-3xl" />
          </motion.div>

          {/* Tertiary orb */}
          <motion.div
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute inset-0"
          >
            <div className="absolute bottom-1/4 left-0 w-[200px] h-[200px] md:w-[300px] md:h-[300px] bg-gradient-to-br from-cyan-400/20 to-teal-400/15 rounded-full blur-3xl" />
          </motion.div>
        </div>
      </motion.div>

      {/* Floating particles */}
      <div className="absolute inset-0">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-apple-blue/40 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Animated rings */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        {[1, 2, 3].map((ring) => (
          <motion.div
            key={ring}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-apple-blue/10"
            style={{
              width: `${200 + ring * 150}px`,
              height: `${200 + ring * 150}px`,
            }}
            animate={{
              scale: [1, 1.05, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 4 + ring,
              repeat: Infinity,
              delay: ring * 0.5,
              ease: "easeInOut",
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
}
