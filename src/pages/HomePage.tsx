import { Code, Server, Rocket, LucideIcon } from "lucide-react"
import {
  HeroSection,
  ScrollSection,
  SkillCard,
  ProjectCard,
  CTASection,
} from "@/components/home"
import { useSiteConfig, useProjectsConfig } from "@/utils/config"

// 图标映射
const iconMap: Record<string, LucideIcon> = {
  Code,
  Server,
  Rocket,
}

export default function HomePage() {
  const { skills } = useSiteConfig()
  const projects = useProjectsConfig()

  return (
    <div className="relative overflow-hidden">
      {/* Hero Section - 像素风格打字机首屏 */}
      <HeroSection />

      {/* Skills Section */}
      <section className="py-32 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <ScrollSection animation="fadeUp" className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              {skills.title}
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {skills.description}
            </p>
          </ScrollSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {skills.items.map((skill, index) => (
              <SkillCard
                key={skill.title}
                title={skill.title}
                description={skill.description}
                icon={iconMap[skill.icon]}
                gradient={skill.gradient}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Work Section */}
      <section className="py-32 px-6 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <ScrollSection animation="fadeUp" className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              {projects.title}
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {projects.description}
            </p>
          </ScrollSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.items.map((project, index) => (
              <ProjectCard
                key={project.title}
                {...project}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />
    </div>
  )
}
