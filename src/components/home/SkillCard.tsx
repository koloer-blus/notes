import { motion } from "framer-motion"
import { LucideIcon } from "lucide-react"
import { ScrollSection } from "./ScrollSection"

interface SkillCardProps {
  title: string
  description: string
  icon: LucideIcon
  gradient: string
  index: number
}

export function SkillCard({ title, description, icon: Icon, gradient, index }: SkillCardProps) {
  return (
    <ScrollSection animation="fadeUp" delay={index * 0.1}>
      <motion.div
        whileHover={{ y: -8, scale: 1.02 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="group relative p-8 rounded-3xl bg-card border hover:border-primary/50 transition-colors duration-300 overflow-hidden"
      >
        {/* 背景光效 */}
        <motion.div
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-5`}
        />
        
        {/* 悬浮光点效果 */}
        <motion.div
          className="absolute -top-20 -right-20 w-40 h-40 rounded-full blur-3xl opacity-0 group-hover:opacity-30 transition-opacity duration-500"
          style={{
            background: `linear-gradient(to bottom right, var(--tw-gradient-stops))`,
          }}
        />

        {/* 图标容器 */}
        <motion.div
          whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
          transition={{ duration: 0.5 }}
          className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${gradient} mb-6 relative z-10`}
        >
          <Icon className="h-8 w-8 text-white" />
        </motion.div>

        {/* 标题 */}
        <motion.h3
          className="text-2xl font-bold mb-4 relative z-10"
        >
          {title}
        </motion.h3>

        {/* 描述 */}
        <p className="text-muted-foreground leading-relaxed relative z-10">
          {description}
        </p>

        {/* 底部装饰线 */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileHover={{ scaleX: 1 }}
          transition={{ duration: 0.3 }}
          className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${gradient} origin-left`}
        />
      </motion.div>
    </ScrollSection>
  )
}
