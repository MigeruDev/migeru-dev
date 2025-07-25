import { GlassCard } from "@/components/ui/glass-card"
import { SectionHeader } from "@/components/ui/section-header"
import { GradientText } from "@/components/ui/gradient-text"
import { SERVICES } from "@/constants/data"

export function ServicesSection() {
  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <SectionHeader label="//SERVICES" title="What I" subtitle="Deliver" centered />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <GlassCard key={index}>
              <div className="mb-6">{service.icon}</div>
              <h3 className="text-xl font-bold text-white mb-4">
                <GradientText variant="primary">{service.title}</GradientText>
              </h3>
              <p className="text-white/80 leading-relaxed">{service.description}</p>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  )
}
