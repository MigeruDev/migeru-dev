'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function NotFound() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <main className="min-h-screen flex items-center justify-center px-6">
      <div 
        className="fixed inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/desktop_background.png')",
          filter: "blur(1px)",
        }}
      />
      <div className="fixed inset-0 bg-black/70" />
      
      <div className="relative z-10 text-center">
        <div className={`transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          {/* 404 Animation */}
          <div className="mb-8">
            <h1 className="text-8xl md:text-9xl font-bold text-[var(--accent-blue)] mb-4 animate-float">
              404
            </h1>
            <div className="w-32 h-1 bg-gradient-to-r from-transparent via-[var(--accent-blue)] to-transparent mx-auto"></div>
          </div>

          {/* Error Message */}
          <div className="glass-strong rounded-2xl p-8 max-w-md mx-auto mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Página no encontrada
            </h2>
            <p className="text-white/70 mb-6">
              Lo siento, la página que buscas no existe o ha sido movida. 
              Pero no te preocupes, puedes volver al inicio y explorar mi portafolio.
            </p>
            
            {/* Navigation Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/"
                className="btn-primary px-6 py-3 rounded-full font-semibold text-center"
              >
                Volver al Inicio
              </Link>
              <Link
                href="/#proyectos"
                className="btn-secondary px-6 py-3 rounded-full font-semibold text-center"
              >
                Ver Proyectos
              </Link>
            </div>
          </div>

          {/* Fun Fact */}
          <div className="text-white/60 text-sm">
            <p>💡 Dato curioso: El error 404 se originó en el CERN en 1992</p>
          </div>
        </div>
      </div>
    </main>
  );
}