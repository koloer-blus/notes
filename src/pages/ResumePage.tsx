import { useTranslation } from "react-i18next"
import { useResumeConfig } from "@/utils/config"
import {
  ResumeHeader,
  ResumeSkills,
  ResumeExperience,
  ResumeEducation,
  ResumeProjects,
} from "@/components/resume"

export default function ResumePage() {
  const { t } = useTranslation()
  const resume = useResumeConfig()

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
