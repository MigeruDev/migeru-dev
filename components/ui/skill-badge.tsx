import type { SkillBadge as SkillBadgeType } from "@/types"

interface SkillBadgeProps {
  skill: SkillBadgeType
}

export function SkillBadge({ skill }: SkillBadgeProps) {
  return (
    <span
      className={`px-4 py-2 bg-gradient-to-r ${skill.color} text-black font-semibold rounded-full text-sm font-mono shadow-lg shadow-${skill.color.split("-")[1]}-400/30`}
    >
      {skill.name}
    </span>
  )
}
