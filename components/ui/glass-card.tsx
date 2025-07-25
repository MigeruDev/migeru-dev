import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

interface GlassCardProps {
  children: ReactNode
  className?: string
  variant?: "default" | "compact"
}

export function GlassCard({ children, className, variant = "default" }: GlassCardProps) {
  const padding = variant === "compact" ? "p-6" : "p-8"

  return (
    <div className={cn("relative", className)}>
      <div
        className={cn(
          "relative backdrop-blur-lg bg-gradient-to-br from-white/3 via-cyan-500/3 to-green-500/6 border border-white/15 rounded-2xl hover:border-cyan-400/40 hover:from-white/5 hover:via-cyan-500/5 hover:to-green-500/8 transition-all duration-500 shadow-2xl shadow-black/20 hover:shadow-cyan-400/20 group overflow-hidden",
          padding,
        )}
      >
        {/* Glass reflection effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent opacity-30 rounded-2xl" />

        {/* Animated border glow */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-400/10 via-green-400/10 to-purple-400/10 opacity-0 group-hover:opacity-60 transition-opacity duration-500 blur-sm" />

        {/* Content */}
        <div className="relative z-10">{children}</div>

        {/* Bottom gradient accent */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400/50 via-green-400/50 to-purple-400/50 opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
    </div>
  )
}
