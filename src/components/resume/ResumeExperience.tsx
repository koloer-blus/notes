import { motion } from "framer-motion"
import { Briefcase } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { WorkExperience } from "@/types"

interface ResumeExperienceProps {
  experiences: WorkExperience[]
}

export function ResumeExperience({ experiences }: ResumeExperienceProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="mb-12"
    >
      <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
        <Briefcase className="text-primary" />
        工作经历
      </h2>
      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <Card key={index}>
            <CardHeader>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                <div>
                  <CardTitle className="text-xl">{exp.position}</CardTitle>
                  <p className="text-primary font-medium">{exp.company}</p>
                </div>
                <Badge variant="outline" className="w-fit">
                  {exp.startDate} - {exp.endDate}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">{exp.description}</p>
              <ul className="space-y-2">
                {exp.highlights.map((highlight, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-primary mt-1.5">•</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </motion.div>
  )
}
