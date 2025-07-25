import { GradientText } from "./gradient-text"

interface SectionHeaderProps {
  label: string
  title: string
  subtitle: string
  centered?: boolean
}

export function SectionHeader({ label, title, subtitle, centered = false }: SectionHeaderProps) {
  return (
    <div className={`mb-16 ${centered ? "text-center" : ""}`}>
      <div className="text-cyan-400 font-mono text-sm mb-4">{label}</div>
      <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
        <GradientText variant="primary">{title}</GradientText>{" "}
        <GradientText variant="secondary">{subtitle}</GradientText>
      </h2>
      {!centered && (
        <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 to-green-400 shadow-lg shadow-cyan-400/50" />
      )}
    </div>
  )
}
