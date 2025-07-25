import { Code, Briefcase, FolderOpen } from "lucide-react"
import type { NavigationItem, Service, Project, Testimonial, SkillBadge, ScientificPaper } from "@/types"

// Update NAVIGATION_ITEMS to replace FAQ with Papers
export const NAVIGATION_ITEMS: NavigationItem[] = [
  { name: "_HOME", id: "home" },
  { name: "_ABOUT", id: "about" },
  { name: "_SERVICES", id: "services" },
  { name: "_PROJECTS", id: "projects" },
  { name: "_PAPERS", id: "papers" },
  { name: "_TESTIMONIALS", id: "testimonials" },
]

export const SERVICES: Service[] = [
  {
    title: "Web Development",
    description: "Full-stack web applications using React, Angular, Next.js, and Spring Boot",
    icon: <Code className="text-cyan-400" size={32} />,
  },
  {
    title: "Data Pipelines",
    description: "ETL processes, analytics dashboards, and data-driven decision systems",
    icon: <Briefcase className="text-green-400" size={32} />,
  },
  {
    title: "System Architecture",
    description: "Scalable microservices, PWAs, and enterprise-level system design",
    icon: <FolderOpen className="text-purple-400" size={32} />,
  },
]

export const PROJECTS: Project[] = [
  {
    title: "UDECIDE Blockchain Voting",
    description: "PWA development for blockchain-based voting system serving 8,000+ participants",
    technologies: ["Angular", "Ionic", "Blockchain"],
  },
  {
    title: "Teacher Evaluation System",
    description: "Led architecture serving 15,000+ students and 1,200+ teachers with ETL pipelines",
    technologies: ["Python", "Power BI", "ETL"],
  },
]

export const SCIENTIFIC_PAPERS: ScientificPaper[] = [
  {
    title: "Understanding Learners' Behavior in Massive Open Online Courses",
    journal: "IEEE",
    date: "Jun 28, 2021",
    url: "https://ieeexplore.ieee.org/document/9458355",
    description:
      "Analyzed 38,838 learner interactions using process-mining techniques to characterize study sessions and identify success pathways in MOOCs. This research provides insights into learning patterns and optimization strategies for online education platforms.",
    keywords: ["Process Mining", "MOOCs", "Learning Analytics", "Educational Data Mining"],
    type: "IEEE",
  },
  {
    title: "Proposal for the Design and Implementation of a XBlock in Open edX to Support Learning Analytics",
    journal: "IEEE",
    date: "Mar 8, 2022",
    url: "https://ieeexplore.ieee.org/document/9725187",
    description:
      "Developed a comprehensive dashboard integrating student-success indicators to enhance teaching and learning processes. The XBlock provides real-time analytics and visualization tools for educators in Open edX environments.",
    keywords: ["Open edX", "Learning Analytics", "XBlock", "Educational Technology"],
    type: "IEEE",
  },
  {
    title: "Development of a XBlock in Open edX to Support Monitoring and Follow-Up in a SPOC",
    journal: "RTE",
    date: "Nov 30, 2022",
    url: "https://rte.espol.edu.ec/index.php/tecnologica/article/view/957/651",
    description:
      "Designed and implemented an interactive XBlock for student and teacher learning analytics in a Small Private Online Course (SPOC) environment. The solution enables comprehensive monitoring and follow-up capabilities for enhanced educational outcomes.",
    keywords: ["SPOC", "Open edX", "XBlock", "Educational Monitoring", "Learning Analytics"],
    type: "RTE",
  },
]

export const TESTIMONIALS: Testimonial[] = [
  {
    content:
      "Miguel's expertise in data systems and web development helped us transform our analytics platform. His technical skills and professional approach exceeded our expectations.",
    author: {
      name: "John Doe",
      role: "Project Manager",
      company: "CEDIA",
      initials: "JD",
    },
  },
  {
    content:
      "Working with Miguel on our teacher evaluation system was exceptional. He delivered scalable solutions that improved our reporting efficiency by 70%.",
    author: {
      name: "Maria Silva",
      role: "Director",
      company: "Universidad de Cuenca",
      initials: "MS",
    },
  },
]

export const SKILL_BADGES: SkillBadge[] = [
  { name: "Angular", color: "from-cyan-400 to-cyan-300" },
  { name: "React", color: "from-blue-400 to-blue-300" },
  { name: "Python", color: "from-green-400 to-green-300" },
  { name: "Next.js", color: "from-purple-400 to-purple-300" },
  { name: "Spring Boot", color: "from-yellow-400 to-yellow-300" },
  { name: "Git", color: "from-pink-400 to-pink-300" },
  { name: "Docker", color: "from-indigo-400 to-indigo-300" },
  { name: "Node.js", color: "from-red-400 to-red-300" },
]

export const DEVELOPER_INFO = {
  name: "Miguel Macías",
  role: "Software Engineer",
  experience: 5,
  location: "Ecuador",
  email: "migeru.dev@gmail.com",
  linkedin: "https://www.linkedin.com/in/migerudev",
  techStack: ["React", "Node.js", "Python", "Angular"],
}