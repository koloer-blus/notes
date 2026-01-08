import { motion } from "framer-motion"
import { GraduationCap } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Education } from "@/types"

interface ResumeEducationProps {
  education: Education[]
}

export function ResumeEducation({ education }: ResumeEducationProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="mb-12"
    >
      <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
        <GraduationCap className="text-primary" />
        教育背景
      </h2>
      <div className="space-y-6">
        {education.map((edu, index) => (
          <Card key={index}>
            <CardHeader>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                <div>
                  <CardTitle className="text-xl">{edu.school}</CardTitle>
                  <p className="text-primary font-medium">
                    {edu.degree} · {edu.field}
                  </p>
                </div>
                <Badge variant="outline" className="w-fit">
                  {edu.startDate} - {edu.endDate}
                </Badge>
              </div>
            </CardHeader>
            {edu.description && (
              <CardContent>
                <p className="text-muted-foreground">{edu.description}</p>
              </CardContent>
            )}
          </Card>
        ))}
      </div>
    </motion.div>
  )
}
