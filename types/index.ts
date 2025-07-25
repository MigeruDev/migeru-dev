import type React from "react"
export interface NavigationItem {
  name: string
  id: string
}

export interface Service {
  title: string
  description: string
  icon: React.ReactNode
}

export interface Project {
  title: string
  description: string
  technologies: string[]
}

export interface FAQ {
  question: string
  answer: string
}

export interface Testimonial {
  content: string
  author: {
    name: string
    role: string
    company: string
    initials: string
  }
}

export interface SkillBadge {
  name: string
  color: string
}

export interface ScientificPaper {
  title: string
  journal: string
  date: string
  url: string
  description: string
  keywords: string[]
  type: "IEEE" | "RTE" | "Other"
}