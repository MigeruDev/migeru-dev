'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '#inicio', label: 'Inicio' },
    { href: '#sobre-mi', label: 'Sobre Mí' },
    { href: '#proyectos', label: 'Proyectos' },
    { href: '#contacto', label: 'Contacto' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'py-4' : 'py-6'
    }`}>
      <div className="container mx-auto px-6">
        <div className={`glass-strong rounded-2xl px-6 py-4 transition-all duration-300 ${
          isScrolled ? 'shadow-lg' : ''
        }`}>
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="#inicio" className="text-2xl font-bold text-white hover:text-[var(--accent-blue)] transition-colors">
              MM
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-white/80 hover:text-[var(--accent-blue)] transition-colors font-medium"
                >
                  {item.label}
                </Link>
              ))}
              <a
                href="/cv-miguel-macias.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary px-6 py-2 rounded-full font-medium"
              >
                Descargar CV
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              <div className="w-6 h-6 flex flex-col justify-center space-y-1">
                <span className={`block h-0.5 bg-current transition-all ${
                  isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''
                }`} />
                <span className={`block h-0.5 bg-current transition-all ${
                  isMobileMenuOpen ? 'opacity-0' : ''
                }`} />
                <span className={`block h-0.5 bg-current transition-all ${
                  isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
                }`} />
              </div>
            </button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden mt-4 pt-4 border-t border-white/10">
              <div className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-white/80 hover:text-[var(--accent-blue)] transition-colors font-medium"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
                <a
                  href="/cv-miguel-macias.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary px-6 py-2 rounded-full font-medium text-center"
                >
                  Descargar CV
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;