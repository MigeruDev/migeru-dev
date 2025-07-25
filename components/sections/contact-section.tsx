import { Mail, Linkedin } from "lucide-react"
import { GlassCard } from "@/components/ui/glass-card"
import { SectionHeader } from "@/components/ui/section-header"
import { DEVELOPER_INFO } from "@/constants/data"

export function ContactSection() {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <SectionHeader label="//CONTACT" title="Let's Build Something" subtitle="Amazing" centered />

        <GlassCard>
          <p className="text-xl text-white/90 mb-8">
            Ready to transform your ideas into robust, scalable solutions? Let's discuss your next project.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a
              href={`mailto:${DEVELOPER_INFO.email}`}
              className="flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-cyan-400 text-black font-semibold hover:from-cyan-400 hover:to-cyan-300 transition-all duration-300 font-mono"
            >
              <Mail className="mr-2" size={20} />
              SEND MESSAGE
            </a>
            <a
              href={DEVELOPER_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-8 py-4 border-2 border-green-400 bg-transparent text-green-400 hover:bg-gradient-to-r hover:from-green-500/10 hover:to-green-400/10 hover:border-green-300 transition-all duration-300 font-mono shadow-lg shadow-green-400/20 hover:shadow-green-400/40"
            >
              <Linkedin className="mr-2" size={20} />
              LINKEDIN
            </a>
          </div>
        </GlassCard>
      </div>
    </section>
  )
}
