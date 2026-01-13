import { motion } from "framer-motion"
import { useTranslation } from "react-i18next"
import { Github, Globe } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Project } from "@/types"

interface ResumeProjectsProps {
  projects: Project[]
}

export function ResumeProjects({ projects }: ResumeProjectsProps) {
  const { t } = useTranslation('resume')

  if (!projects || projects.length === 0) {
    return null
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.5 }}
    >
      <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
        <span className="text-3xl">🚀</span>
        {t('projectsTitle')}
      </h2>
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="text-lg">{project.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <Badge key={tech} variant="secondary" className="text-xs">
                    {tech}
                  </Badge>
                ))}
              </div>
              <div className="flex gap-4">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-primary hover:underline flex items-center gap-1"
                  >
                    <Github size={14} />
                    {t('sourceCode')}
                  </a>
                )}
                {project.url && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-primary hover:underline flex items-center gap-1"
                  >
                    <Globe size={14} />
                    {t('visit')}
                  </a>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </motion.div>
  )
}
