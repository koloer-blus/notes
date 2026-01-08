import { motion } from "framer-motion"
import { Mail, MapPin, Github, Globe } from "lucide-react"
import { ContactInfo } from "@/types"

interface ResumeHeaderProps {
  name: string
  title: string
  avatar?: string
  contact: ContactInfo
  summary: string
}

export function ResumeHeader({ name, title, avatar, contact, summary }: ResumeHeaderProps) {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        {avatar && (
          <img
            src={avatar}
            alt={name}
            className="w-32 h-32 rounded-full mx-auto mb-6 object-cover border-4 border-background shadow-xl"
          />
        )}
        <h1 className="text-4xl md:text-5xl font-bold mb-2">{name}</h1>
        <p className="text-xl text-primary font-medium mb-6">{title}</p>

        <div className="flex flex-wrap items-center justify-center gap-4 text-muted-foreground">
          {contact.email && (
            <a
              href={`mailto:${contact.email}`}
              className="flex items-center gap-2 hover:text-primary transition-colors"
            >
              <Mail size={18} />
              {contact.email}
            </a>
          )}
          {contact.location && (
            <span className="flex items-center gap-2">
              <MapPin size={18} />
              {contact.location}
            </span>
          )}
          {contact.github && (
            <a
              href={contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-primary transition-colors"
            >
              <Github size={18} />
              GitHub
            </a>
          )}
          {contact.website && (
            <a
              href={contact.website}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-primary transition-colors"
            >
              <Globe size={18} />
              网站
            </a>
          )}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="mb-12"
      >
        <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
          <div className="pt-6 p-6">
            <p className="text-lg leading-relaxed text-muted-foreground">
              {summary}
            </p>
          </div>
        </div>
      </motion.div>
    </>
  )
}
