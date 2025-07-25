import { GlassCard } from "@/components/ui/glass-card"
import { SectionHeader } from "@/components/ui/section-header"
import { PROJECTS } from "@/constants/data"

export function ProjectsSection() {
  const getTechColor = (tech: string) => {
    const colors: Record<string, string> = {
      Angular: "bg-cyan-500/20 text-cyan-300",
      Ionic: "bg-green-500/20 text-green-300",
      Blockchain: "bg-purple-500/20 text-purple-300",
      Python: "bg-cyan-500/20 text-cyan-300",
      "Power BI": "bg-green-500/20 text-green-300",
      ETL: "bg-yellow-500/20 text-yellow-300",
    }
    return colors[tech] || "bg-gray-500/20 text-gray-300"
  }

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <SectionHeader label="//PROJECTS" title="Featured" subtitle="Work" centered />

        <div className="grid md:grid-cols-2 gap-8">
          {PROJECTS.map((project, index) => (
            <GlassCard key={index} variant="compact">
              <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
              <p className="text-white/70 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span key={tech} className={`px-3 py-1 rounded text-sm font-mono ${getTechColor(tech)}`}>
                    {tech}
                  </span>
                ))}
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  )
}
