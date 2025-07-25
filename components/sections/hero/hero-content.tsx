"use client"

import { useNavigation } from "@/hooks/useNavigation"
import { GradientText } from "@/components/ui/gradient-text"

export function HeroContent() {
  const { scrollToSection } = useNavigation()

  return (
    <div>
      {/* Label */}
      <div className="text-cyan-400 text-sm font-mono mb-4 tracking-wider">SOFTWARE ENGINEER & DATA SPECIALIST</div>

      {/* Main Heading */}
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
        <div>
          <GradientText variant="primary">Engineering Robust</GradientText>
        </div>
        <div>
          <GradientText variant="secondary">Web & Data Systems</GradientText>
        </div>
      </h1>

      {/* Subtitle */}
      <p className="text-lg text-white/80 mb-8 leading-relaxed max-w-xl">
        Software Engineer & Data Specialist with 5+ years of experience designing and delivering large-scale web
        systems, PWAs & data pipelines.
      </p>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-4">
        <button
          onClick={() => scrollToSection("contact")}
          className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-cyan-400 text-black font-semibold hover:from-cyan-400 hover:to-cyan-300 transition-all duration-300 font-mono shadow-lg shadow-cyan-400/30"
        >
          INITIATE CONTACT
        </button>
        <button
          onClick={() => scrollToSection("projects")}
          className="px-8 py-4 border-2 border-green-400 bg-transparent text-green-400 hover:bg-gradient-to-r hover:from-green-500/10 hover:to-green-400/10 hover:border-green-300 transition-all duration-300 font-mono shadow-lg shadow-green-400/20 hover:shadow-green-400/40"
        >
          VIEW PROJECTS
        </button>
      </div>
    </div>
  )
}
