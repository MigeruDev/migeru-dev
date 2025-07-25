import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

interface GradientTextProps {
  children: ReactNode
  variant?: "primary" | "secondary" | "accent"
  className?: string
}

export function GradientText({ children, variant = "primary", className }: GradientTextProps) {
  const gradientClasses = {
    primary:
      "bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]",
    secondary:
      "bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(6,182,212,0.8)] filter drop-shadow-[0_0_15px_rgba(34,197,94,0.6)]",
    accent: "bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent",
  }

  return <span className={cn(gradientClasses[variant], className)}>{children}</span>
}
