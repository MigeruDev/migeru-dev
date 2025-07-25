import { GlassCard } from "@/components/ui/glass-card"
import { SectionHeader } from "@/components/ui/section-header"
import { TESTIMONIALS } from "@/constants/data"

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <SectionHeader label="//TESTIMONIALS" title="Client" subtitle="Feedback" centered />

        <div className="grid md:grid-cols-2 gap-8">
          {TESTIMONIALS.map((testimonial, index) => (
            <GlassCard key={index} variant="compact">
              <p className="text-white/80 mb-4 italic">"{testimonial.content}"</p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-green-400 rounded-full flex items-center justify-center mr-4">
                  <span className="text-black font-bold">{testimonial.author.initials}</span>
                </div>
                <div>
                  <div className="text-white font-semibold">{testimonial.author.name}</div>
                  <div className="text-white/60 text-sm">
                    {testimonial.author.role}, {testimonial.author.company}
                  </div>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  )
}
