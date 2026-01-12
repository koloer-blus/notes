import { motion } from "framer-motion"
import { ScrollSection } from "./ScrollSection"
import { siteConfig } from "@/config"

interface ProjectCardProps {
  title: string
  description: string
  image: string
  tags: string[]
  index: number
}

export function ProjectCard({ title, description, image, tags, index }: ProjectCardProps) {
  const { projects } = siteConfig

  return (
    <ScrollSection
      animation={index % 2 === 0 ? "slideRight" : "slideLeft"}
    >
      <motion.div
        whileHover={{ y: -8 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="group relative overflow-hidden rounded-3xl bg-card border hover:border-primary/50 transition-colors duration-300"
      >
        <div className="aspect-video overflow-hidden relative">
          <motion.img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.7 }}
          />
          <motion.div
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"
          />
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileHover={{ opacity: 1, y: 0 }}
            className="absolute bottom-4 left-4 right-4 flex justify-center"
          >
            <span className="px-4 py-2 bg-white/90 text-black rounded-full text-sm font-medium backdrop-blur-sm">
              {projects.viewDetail}
            </span>
          </motion.div>
        </div>

        <div className="p-8">
          <motion.h3
            className="text-2xl font-bold mb-3"
            initial={{ opacity: 0.8 }}
            whileHover={{ opacity: 1 }}
          >
            {title}
          </motion.h3>
          <p className="text-muted-foreground mb-4 leading-relaxed">
            {description}
          </p>
          
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, tagIndex) => (
              <motion.span
                key={tag}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: tagIndex * 0.1 }}
                whileHover={{ scale: 1.05, y: -2 }}
                className="px-3 py-1 text-sm rounded-full bg-primary/10 text-primary cursor-default"
              >
                {tag}
              </motion.span>
            ))}
          </div>
        </div>

        <motion.div
          className="absolute inset-0 rounded-3xl pointer-events-none"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          style={{
            background: "linear-gradient(135deg, rgba(0, 113, 227, 0.1) 0%, transparent 50%, rgba(147, 51, 234, 0.1) 100%)",
          }}
        />
      </motion.div>
    </ScrollSection>
  )
}
