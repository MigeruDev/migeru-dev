import { Code } from "lucide-react"
import { GlassCard } from "@/components/ui/glass-card"
import { SectionHeader } from "@/components/ui/section-header"
import { SkillBadge } from "@/components/ui/skill-badge"
import { SKILL_BADGES } from "@/constants/data"

export function AboutSection() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <SectionHeader label="//ABOUT" title="The Mind Behind" subtitle="The Code" />

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Developer Illustration */}
          <GlassCard>
            <div className="text-center mb-6">
              <div className="inline-block border border-cyan-400 px-4 py-2 mb-6">
                <span className="text-cyan-400 font-mono text-sm">WEB DEVELOPER</span>
              </div>
            </div>

            <div className="w-full h-64 bg-gradient-to-br from-cyan-500/10 to-green-500/10 rounded-lg border border-cyan-400/30 flex items-center justify-center">
              <div className="text-center">
                <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-cyan-400/30 to-green-400/30 rounded-full flex items-center justify-center border border-cyan-400/50">
                  <Code className="text-cyan-400" size={32} />
                </div>
                <p className="text-cyan-400/60 text-sm font-mono">Developer Illustration</p>
              </div>
            </div>
          </GlassCard>

          {/* Right Side - Experience Card */}
          <GlassCard>
            <div className="mb-6">
              <div className="text-4xl font-bold text-white mb-2">
                <span className="bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">5+</span>
                <span className="text-white"> Years Experience</span>
              </div>
              <div className="bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent font-semibold">
                Software Engineer & Data Specialist
              </div>
            </div>

            <p className="text-white/80 mb-8 leading-relaxed">
              Experienced in designing and delivering large-scale web systems, Progressive Web Apps, and data-driven
              pipelines. Skilled in Angular, React, Next.js, Spring Boot, Python, and modern DevOps practices with a
              focus on scalable solutions.
            </p>

            <div className="space-y-4">
              <div className="flex flex-wrap gap-3">
                {SKILL_BADGES.map((skill) => (
                  <SkillBadge key={skill.name} skill={skill} />
                ))}
              </div>

              <div className="mt-6">
                <span className="px-6 py-3 border-2 border-cyan-400 bg-transparent text-cyan-400 hover:bg-gradient-to-r hover:from-cyan-500/10 hover:to-cyan-400/10 hover:border-cyan-300 transition-all duration-300 rounded-full text-sm font-mono cursor-pointer inline-block shadow-lg shadow-cyan-400/20 hover:shadow-cyan-400/40">
                  More information about my skills and training here...
                </span>
              </div>
            </div>
          </GlassCard>
        </div>
      </div>
    </section>
  )
}
