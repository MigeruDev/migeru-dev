import { CodeCard } from "./code-card"
import { HeroContent } from "./hero-content"

export function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <HeroContent />
        <CodeCard />
      </div>
    </section>
  )
}
