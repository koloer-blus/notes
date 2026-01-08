import { useState, useEffect } from "react"
import { ResumeData } from "@/types"
import {
  ResumeHeader,
  ResumeSkills,
  ResumeExperience,
  ResumeEducation,
  ResumeProjects,
} from "@/components/resume"

export function ResumePage() {
  const [resume, setResume] = useState<ResumeData | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}resume.json`)
      .then((res) => res.json())
      .then((data) => {
        setResume(data)
        setLoading(false)
      })
      .catch((err) => {
        console.error("Failed to load resume:", err)
        setLoading(false)
      })
  }, [])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary" />
      </div>
    )
  }

  if (!resume) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-muted-foreground">加载简历失败</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <ResumeHeader
          name={resume.name}
          title={resume.title}
          avatar={resume.avatar}
          contact={resume.contact}
          summary={resume.summary}
        />

        <ResumeSkills skills={resume.skills} />

        <ResumeExperience experiences={resume.experience} />

        <ResumeEducation education={resume.education} />

        {resume.projects && <ResumeProjects projects={resume.projects} />}
      </div>
    </div>
  )
}
