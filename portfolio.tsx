"use client"

import { useState, useEffect } from "react"
import { Menu, X, Mail, Linkedin, Code, Briefcase, FolderOpen } from "lucide-react"
import DynamicBackground from "./components/dynamic-background"

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMenuOpen(false)
    }
  }

  return (
    <div className="min-h-screen relative">
      {/* Dynamic Background */}
      <DynamicBackground />

      {/* Content Overlay */}
      <div className="relative z-10">
        {/* Navigation */}
        <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-black/20 border-b border-cyan-500/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-4">
              {/* Logo */}
              <div className="text-2xl font-bold bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
                MigeruDev
              </div>

              {/* Desktop Navigation */}
              <div className="hidden lg:flex items-center space-x-8">
                {[
                  { name: "_HOME", id: "home" },
                  { name: "_ABOUT", id: "about" },
                  { name: "_SERVICES", id: "services" },
                  { name: "_PROJECTS", id: "projects" },
                  { name: "_FAQ", id: "faq" },
                  { name: "_TESTIMONIALS", id: "testimonials" },
                ].map((item) => (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.id)}
                    className="text-white/80 hover:bg-gradient-to-r hover:from-cyan-400 hover:to-green-400 hover:bg-clip-text hover:text-transparent transition-all duration-300 text-sm font-mono relative group"
                  >
                    {item.name}
                  </button>
                ))}
                <button
                  onClick={() => scrollToSection("contact")}
                  className="px-4 py-2 border-2 border-cyan-400 bg-transparent text-cyan-400 hover:bg-gradient-to-r hover:from-cyan-500/10 hover:to-cyan-400/10 hover:border-cyan-300 transition-all duration-300 text-sm font-mono shadow-lg shadow-cyan-400/20 hover:shadow-cyan-400/40"
                >
                  _CONTACT
                </button>
              </div>

              {/* Mobile Menu Button */}
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden text-white p-2">
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>

            {/* Mobile Navigation */}
            {isMenuOpen && (
              <div className="lg:hidden pb-4 border-t border-white/10">
                <div className="flex flex-col space-y-4 pt-4">
                  {[
                    { name: "_HOME", id: "home" },
                    { name: "_ABOUT", id: "about" },
                    { name: "_SERVICES", id: "services" },
                    { name: "_PROJECTS", id: "projects" },
                    { name: "_FAQ", id: "faq" },
                    { name: "_TESTIMONIALS", id: "testimonials" },
                    { name: "_CONTACT", id: "contact" },
                  ].map((item) => (
                    <button
                      key={item.name}
                      onClick={() => scrollToSection(item.id)}
                      className="text-white/80 hover:bg-gradient-to-r hover:from-cyan-400 hover:to-green-400 hover:bg-clip-text hover:text-transparent transition-all duration-300 text-left font-mono"
                    >
                      {item.name}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </nav>

        {/* Hero Section */}
        <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
            <div>
              {/* Label */}
              <div className="text-cyan-400 text-sm font-mono mb-4 tracking-wider">
                SOFTWARE ENGINEER & DATA SPECIALIST
              </div>

              {/* Main Heading */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                <div className="bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">
                  Engineering Robust
                </div>
                <div className="bg-gradient-to-r from-cyan-400 via-green-400 to-green-300 bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(6,182,212,0.8)] filter drop-shadow-[0_0_15px_rgba(34,197,94,0.6)]">
                  Web & Data Systems
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

            {/* Code Card */}
            <div className="relative">
              <div className="backdrop-blur-md bg-black/40 border border-cyan-400 rounded-lg p-6 shadow-2xl">
                {/* Code Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="text-cyan-400 text-xs font-mono">portfolio.tsx</div>
                </div>

                {/* Code Content */}
                <div className="font-mono text-sm space-y-2 mb-6">
                  <div className="text-gray-500">// Software Engineer Profile</div>
                  <div className="text-white">
                    <span className="text-purple-400">const</span> <span className="text-cyan-400">developer</span> ={" "}
                    {"{"}
                  </div>
                  <div className="text-white ml-4">
                    <span className="text-green-400">name</span>:{" "}
                    <span className="text-yellow-300">"Miguel Macías"</span>,
                  </div>
                  <div className="text-white ml-4">
                    <span className="text-green-400">role</span>:{" "}
                    <span className="text-yellow-300">"Software Engineer"</span>,
                  </div>
                  <div className="text-white ml-4">
                    <span className="text-green-400">experience</span>: <span className="text-orange-400">5</span>,
                  </div>
                  <div className="text-white ml-4">
                    <span className="text-green-400">location</span>: <span className="text-yellow-300">"Ecuador"</span>
                  </div>
                  <div className="text-white">{"}"}</div>
                </div>

                {/* Avatar and Info */}
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-green-400 rounded-full mx-auto mb-3 flex items-center justify-center">
                    <span className="text-black text-xl font-bold">MM</span>
                  </div>
                  <div className="text-cyan-400 font-semibold">MIGUEL MACÍAS</div>
                  <div className="text-white/60 text-sm">Software Engineer & Data Specialist</div>
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 justify-center">
                  <span className="text-cyan-400 text-xs font-mono">React</span>
                  <span className="text-white/40">|</span>
                  <span className="text-green-400 text-xs font-mono">Node.js</span>
                  <span className="text-white/40">|</span>
                  <span className="text-purple-400 text-xs font-mono">Python</span>
                  <span className="text-white/40">|</span>
                  <span className="text-yellow-400 text-xs font-mono">Angular</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <div className="mb-16">
              <div className="text-cyan-400 font-mono text-sm mb-4">//ABOUT</div>
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
                <span className="bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">
                  The Mind Behind
                </span>{" "}
                <span className="bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(6,182,212,0.8)] filter drop-shadow-[0_0_15px_rgba(34,197,94,0.6)]">
                  The Code
                </span>
              </h2>
              <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 to-green-400 shadow-lg shadow-cyan-400/50"></div>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Side - Developer Illustration */}
              <div className="relative">
                <div className="relative backdrop-blur-lg bg-gradient-to-br from-white/3 via-cyan-500/3 to-green-500/6 border border-white/15 rounded-2xl p-8 hover:border-cyan-400/40 hover:from-white/5 hover:via-cyan-500/5 hover:to-green-500/8 transition-all duration-500 shadow-2xl shadow-black/20 hover:shadow-cyan-400/20 group overflow-hidden">
                  {/* Glass reflection effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent opacity-30 rounded-2xl"></div>

                  {/* Animated border glow */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-400/10 via-green-400/10 to-purple-400/10 opacity-0 group-hover:opacity-60 transition-opacity duration-500 blur-sm"></div>

                  <div className="relative z-10">
                    <div className="text-center mb-6">
                      <div className="inline-block border border-cyan-400 px-4 py-2 mb-6">
                        <span className="text-cyan-400 font-mono text-sm">WEB DEVELOPER</span>
                      </div>
                    </div>

                    {/* Developer Illustration Placeholder */}
                    <div className="w-full h-64 bg-gradient-to-br from-cyan-500/10 to-green-500/10 rounded-lg border border-cyan-400/30 flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-cyan-400/30 to-green-400/30 rounded-full flex items-center justify-center border border-cyan-400/50">
                          <Code className="text-cyan-400" size={32} />
                        </div>
                        <p className="text-cyan-400/60 text-sm font-mono">Developer Illustration</p>
                      </div>
                    </div>
                  </div>

                  {/* Bottom gradient accent */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400/50 via-green-400/50 to-purple-400/50 opacity-60 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>

              {/* Right Side - Experience Card */}
              <div className="relative">
                <div className="relative backdrop-blur-lg bg-gradient-to-br from-white/3 via-cyan-500/3 to-green-500/6 border border-white/15 rounded-2xl p-8 hover:border-cyan-400/40 hover:from-white/5 hover:via-cyan-500/5 hover:to-green-500/8 transition-all duration-500 shadow-2xl shadow-black/20 hover:shadow-cyan-400/20 group overflow-hidden">
                  {/* Glass reflection effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent opacity-30 rounded-2xl"></div>

                  {/* Animated border glow */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-400/10 via-green-400/10 to-purple-400/10 opacity-0 group-hover:opacity-60 transition-opacity duration-500 blur-sm"></div>

                  <div className="relative z-10">
                    <div className="mb-6">
                      <div className="text-4xl font-bold text-white mb-2">
                        <span className="bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">
                          5+
                        </span>
                        <span className="text-white"> Years Experience</span>
                      </div>
                      <div className="bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent font-semibold">
                        Software Engineer & Data Specialist
                      </div>
                    </div>

                    <p className="text-white/80 mb-8 leading-relaxed">
                      Experienced in designing and delivering large-scale web systems, Progressive Web Apps, and
                      data-driven pipelines. Skilled in Angular, React, Next.js, Spring Boot, Python, and modern DevOps
                      practices with a focus on scalable solutions.
                    </p>

                    {/* Skills Badges */}
                    <div className="space-y-4">
                      <div className="flex flex-wrap gap-3">
                        <span className="px-4 py-2 bg-gradient-to-r from-cyan-400 to-cyan-300 text-black font-semibold rounded-full text-sm font-mono shadow-lg shadow-cyan-400/30">
                          Angular
                        </span>
                        <span className="px-4 py-2 bg-gradient-to-r from-blue-400 to-blue-300 text-black font-semibold rounded-full text-sm font-mono shadow-lg shadow-blue-400/30">
                          React
                        </span>
                        <span className="px-4 py-2 bg-gradient-to-r from-green-400 to-green-300 text-black font-semibold rounded-full text-sm font-mono shadow-lg shadow-green-400/30">
                          Python
                        </span>
                        <span className="px-4 py-2 bg-gradient-to-r from-purple-400 to-purple-300 text-black font-semibold rounded-full text-sm font-mono shadow-lg shadow-purple-400/30">
                          Next.js
                        </span>
                        <span className="px-4 py-2 bg-gradient-to-r from-yellow-400 to-yellow-300 text-black font-semibold rounded-full text-sm font-mono shadow-lg shadow-yellow-400/30">
                          Spring Boot
                        </span>
                        <span className="px-4 py-2 bg-gradient-to-r from-pink-400 to-pink-300 text-black font-semibold rounded-full text-sm font-mono shadow-lg shadow-pink-400/30">
                          Git
                        </span>
                        <span className="px-4 py-2 bg-gradient-to-r from-indigo-400 to-indigo-300 text-black font-semibold rounded-full text-sm font-mono shadow-lg shadow-indigo-400/30">
                          Docker
                        </span>
                        <span className="px-4 py-2 bg-gradient-to-r from-red-400 to-red-300 text-black font-semibold rounded-full text-sm font-mono shadow-lg shadow-red-400/30">
                          Node.js
                        </span>
                      </div>

                      <div className="mt-6">
                        <span className="px-6 py-3 border-2 border-cyan-400 bg-transparent text-cyan-400 hover:bg-gradient-to-r hover:from-cyan-500/10 hover:to-cyan-400/10 hover:border-cyan-300 transition-all duration-300 rounded-full text-sm font-mono cursor-pointer inline-block shadow-lg shadow-cyan-400/20 hover:shadow-cyan-400/40">
                          More information about my skills and training here...
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Bottom gradient accent */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400/50 via-green-400/50 to-purple-400/50 opacity-60 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="text-cyan-400 font-mono text-sm mb-4">//SERVICES</div>
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
                <span className="bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">
                  What I
                </span>{" "}
                <span className="bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(6,182,212,0.8)] filter drop-shadow-[0_0_15px_rgba(34,197,94,0.6)]">
                  Deliver
                </span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
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
              ].map((service, index) => (
                <div
                  key={index}
                  className="relative backdrop-blur-lg bg-gradient-to-br from-white/3 via-cyan-500/3 to-green-500/6 border border-white/15 rounded-2xl p-8 hover:border-cyan-400/40 hover:from-white/5 hover:via-cyan-500/5 hover:to-green-500/8 transition-all duration-500 shadow-2xl shadow-black/20 hover:shadow-cyan-400/20 group overflow-hidden"
                >
                  {/* Glass reflection effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent opacity-30 rounded-2xl"></div>

                  {/* Animated border glow */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-400/10 via-green-400/10 to-purple-400/10 opacity-0 group-hover:opacity-60 transition-opacity duration-500 blur-sm"></div>

                  <div className="relative z-10">
                    <div className="mb-6">{service.icon}</div>
                    <h3 className="text-xl font-bold text-white mb-4 bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
                      {service.title}
                    </h3>
                    <p className="text-white/80 leading-relaxed">{service.description}</p>
                  </div>

                  {/* Bottom gradient accent */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400/50 via-green-400/50 to-purple-400/50 opacity-60 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="text-cyan-400 font-mono text-sm mb-4">//PROJECTS</div>
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
                <span className="bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">
                  Featured
                </span>{" "}
                <span className="bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(6,182,212,0.8)] filter drop-shadow-[0_0_15px_rgba(34,197,94,0.6)]">
                  Work
                </span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="relative">
                <div className="relative backdrop-blur-lg bg-gradient-to-br from-white/3 via-cyan-500/3 to-green-500/6 border border-white/15 rounded-2xl p-6 hover:border-cyan-400/40 hover:from-white/5 hover:via-cyan-500/5 hover:to-green-500/8 transition-all duration-500 shadow-2xl shadow-black/20 hover:shadow-cyan-400/20 group overflow-hidden">
                  {/* Glass reflection effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent opacity-30 rounded-2xl"></div>

                  {/* Animated border glow */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-400/10 via-green-400/10 to-purple-400/10 opacity-0 group-hover:opacity-60 transition-opacity duration-500 blur-sm"></div>

                  <div className="relative z-10">
                    <h3 className="text-xl font-bold text-white mb-3">UDECIDE Blockchain Voting</h3>
                    <p className="text-white/70 mb-4">
                      PWA development for blockchain-based voting system serving 8,000+ participants
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded text-sm font-mono">Angular</span>
                      <span className="px-3 py-1 bg-green-500/20 text-green-300 rounded text-sm font-mono">Ionic</span>
                      <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded text-sm font-mono">
                        Blockchain
                      </span>
                    </div>
                  </div>

                  {/* Bottom gradient accent */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400/50 via-green-400/50 to-purple-400/50 opacity-60 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>

              <div className="relative">
                <div className="relative backdrop-blur-lg bg-gradient-to-br from-white/3 via-cyan-500/3 to-green-500/6 border border-white/15 rounded-2xl p-6 hover:border-cyan-400/40 hover:from-white/5 hover:via-cyan-500/5 hover:to-green-500/8 transition-all duration-500 shadow-2xl shadow-black/20 hover:shadow-cyan-400/20 group overflow-hidden">
                  {/* Glass reflection effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent opacity-30 rounded-2xl"></div>

                  {/* Animated border glow */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-400/10 via-green-400/10 to-purple-400/10 opacity-0 group-hover:opacity-60 transition-opacity duration-500 blur-sm"></div>

                  <div className="relative z-10">
                    <h3 className="text-xl font-bold text-white mb-3">Teacher Evaluation System</h3>
                    <p className="text-white/70 mb-4">
                      Led architecture serving 15,000+ students and 1,200+ teachers with ETL pipelines
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded text-sm font-mono">Python</span>
                      <span className="px-3 py-1 bg-green-500/20 text-green-300 rounded text-sm font-mono">
                        Power BI
                      </span>
                      <span className="px-3 py-1 bg-yellow-500/20 text-yellow-300 rounded text-sm font-mono">ETL</span>
                    </div>
                  </div>

                  {/* Bottom gradient accent */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400/50 via-green-400/50 to-purple-400/50 opacity-60 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <div className="text-cyan-400 font-mono text-sm mb-4">//FAQ</div>
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
                <span className="bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">
                  Frequently Asked
                </span>{" "}
                <span className="bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(6,182,212,0.8)] filter drop-shadow-[0_0_15px_rgba(34,197,94,0.6)]">
                  Questions
                </span>
              </h2>
            </div>

            <div className="space-y-6">
              {[
                {
                  question: "What technologies do you specialize in?",
                  answer:
                    "I specialize in Angular, React, Next.js, Spring Boot, Python, and modern data pipeline technologies.",
                },
                {
                  question: "How long have you been developing software?",
                  answer: "I have 5+ years of professional experience in software engineering and data systems.",
                },
                {
                  question: "Do you work with international clients?",
                  answer: "Yes, I work with clients globally and am fluent in both Spanish and English (C2 level).",
                },
              ].map((faq, index) => (
                <div key={index} className="relative">
                  <div className="relative backdrop-blur-lg bg-gradient-to-br from-white/3 via-cyan-500/3 to-green-500/6 border border-white/15 rounded-2xl p-6 hover:border-cyan-400/40 hover:from-white/5 hover:via-cyan-500/5 hover:to-green-500/8 transition-all duration-500 shadow-2xl shadow-black/20 hover:shadow-cyan-400/20 group overflow-hidden">
                    {/* Glass reflection effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent opacity-30 rounded-2xl"></div>

                    {/* Animated border glow */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-400/10 via-green-400/10 to-purple-400/10 opacity-0 group-hover:opacity-60 transition-opacity duration-500 blur-sm"></div>

                    <div className="relative z-10">
                      <h3 className="text-lg font-bold text-white mb-3">{faq.question}</h3>
                      <p className="text-white/70">{faq.answer}</p>
                    </div>

                    {/* Bottom gradient accent */}
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400/50 via-green-400/50 to-purple-400/50 opacity-60 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="text-cyan-400 font-mono text-sm mb-4">//TESTIMONIALS</div>
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
                <span className="bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">
                  Client
                </span>{" "}
                <span className="bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(6,182,212,0.8)] filter drop-shadow-[0_0_15px_rgba(34,197,94,0.6)]">
                  Feedback
                </span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="relative">
                <div className="relative backdrop-blur-lg bg-gradient-to-br from-white/3 via-cyan-500/3 to-green-500/6 border border-white/15 rounded-2xl p-6 hover:border-cyan-400/40 hover:from-white/5 hover:via-cyan-500/5 hover:to-green-500/8 transition-all duration-500 shadow-2xl shadow-black/20 hover:shadow-cyan-400/20 group overflow-hidden">
                  {/* Glass reflection effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent opacity-30 rounded-2xl"></div>

                  {/* Animated border glow */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-400/10 via-green-400/10 to-purple-400/10 opacity-0 group-hover:opacity-60 transition-opacity duration-500 blur-sm"></div>

                  <div className="relative z-10">
                    <p className="text-white/80 mb-4 italic">
                      "Miguel's expertise in data systems and web development helped us transform our analytics
                      platform. His technical skills and professional approach exceeded our expectations."
                    </p>
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-green-400 rounded-full flex items-center justify-center mr-4">
                        <span className="text-black font-bold">JD</span>
                      </div>
                      <div>
                        <div className="text-white font-semibold">John Doe</div>
                        <div className="text-white/60 text-sm">Project Manager, CEDIA</div>
                      </div>
                    </div>
                  </div>

                  {/* Bottom gradient accent */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400/50 via-green-400/50 to-purple-400/50 opacity-60 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>

              <div className="relative">
                <div className="relative backdrop-blur-lg bg-gradient-to-br from-white/3 via-cyan-500/3 to-green-500/6 border border-white/15 rounded-2xl p-6 hover:border-cyan-400/40 hover:from-white/5 hover:via-cyan-500/5 hover:to-green-500/8 transition-all duration-500 shadow-2xl shadow-black/20 hover:shadow-cyan-400/20 group overflow-hidden">
                  {/* Glass reflection effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent opacity-30 rounded-2xl"></div>

                  {/* Animated border glow */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-400/10 via-green-400/10 to-purple-400/10 opacity-0 group-hover:opacity-60 transition-opacity duration-500 blur-sm"></div>

                  <div className="relative z-10">
                    <p className="text-white/80 mb-4 italic">
                      "Working with Miguel on our teacher evaluation system was exceptional. He delivered scalable
                      solutions that improved our reporting efficiency by 70%."
                    </p>
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-cyan-400 rounded-full flex items-center justify-center mr-4">
                        <span className="text-black font-bold">MS</span>
                      </div>
                      <div>
                        <div className="text-white font-semibold">Maria Silva</div>
                        <div className="text-white/60 text-sm">Director, Universidad de Cuenca</div>
                      </div>
                    </div>
                  </div>

                  {/* Bottom gradient accent */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400/50 via-green-400/50 to-purple-400/50 opacity-60 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="text-cyan-400 font-mono text-sm mb-4">//CONTACT</div>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8">
              <span className="bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">
                Let's Build Something
              </span>{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(6,182,212,0.8)] filter drop-shadow-[0_0_15px_rgba(34,197,94,0.6)]">
                Amazing
              </span>
            </h2>

            <div className="relative">
              <div className="relative backdrop-blur-lg bg-gradient-to-br from-white/3 via-cyan-500/3 to-green-500/6 border border-white/15 rounded-2xl p-8 hover:border-cyan-400/40 hover:from-white/5 hover:via-cyan-500/5 hover:to-green-500/8 transition-all duration-500 shadow-2xl shadow-black/20 hover:shadow-cyan-400/20 group overflow-hidden">
                {/* Glass reflection effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent opacity-30 rounded-2xl"></div>

                {/* Animated border glow */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-400/10 via-green-400/10 to-purple-400/10 opacity-0 group-hover:opacity-60 transition-opacity duration-500 blur-sm"></div>

                <div className="relative z-10">
                  <p className="text-xl text-white/90 mb-8">
                    Ready to transform your ideas into robust, scalable solutions? Let's discuss your next project.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                    <a
                      href="mailto:migeru.dev@gmail.com"
                      className="flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-cyan-400 text-black font-semibold hover:from-cyan-400 hover:to-cyan-300 transition-all duration-300 font-mono"
                    >
                      <Mail className="mr-2" size={20} />
                      SEND MESSAGE
                    </a>
                    <a
                      href="https://www.linkedin.com/in/migerudev"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center px-8 py-4 border-2 border-green-400 bg-transparent text-green-400 hover:bg-gradient-to-r hover:from-green-500/10 hover:to-green-400/10 hover:border-green-300 transition-all duration-300 font-mono shadow-lg shadow-green-400/20 hover:shadow-green-400/40"
                    >
                      <Linkedin className="mr-2" size={20} />
                      LINKEDIN
                    </a>
                  </div>
                </div>

                {/* Bottom gradient accent */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400/50 via-green-400/50 to-purple-400/50 opacity-60 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-white/10">
          <div className="max-w-7xl mx-auto text-center">
            <p className="text-white/60 font-mono">© 2025 MigeruDev. Engineered with precision in Ecuador.</p>
          </div>
        </footer>
      </div>
    </div>
  )
}
