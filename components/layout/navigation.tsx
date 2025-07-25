"use client"

import { Menu, X } from "lucide-react"
import { NAVIGATION_ITEMS } from "@/constants/data"
import { useNavigation } from "@/hooks/useNavigation"

export function Navigation() {
  const { isMenuOpen, scrollToSection, toggleMenu } = useNavigation()

  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-black/20 border-b border-cyan-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="text-2xl font-bold bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
            MigeruDev
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {NAVIGATION_ITEMS.map((item) => (
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
          <button onClick={toggleMenu} className="lg:hidden text-white p-2">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden pb-4 border-t border-white/10">
            <div className="flex flex-col space-y-4 pt-4">
              {[...NAVIGATION_ITEMS, { name: "_CONTACT", id: "contact" }].map((item) => (
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
  )
}
