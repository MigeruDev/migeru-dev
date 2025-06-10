'use client';

import { useEffect, useRef, useState } from 'react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const skills = [
    { category: 'Frontend', items: ['React', 'Angular', 'Next.js', 'TypeScript', 'Tailwind CSS'] },
    { category: 'Backend', items: ['Python', 'Spring Boot', 'Node.js', 'REST APIs', 'GraphQL'] },
    { category: 'Datos', items: ['SQL', 'PostgreSQL', 'MongoDB', 'ETL Pipelines', 'Data Analysis'] },
    { category: 'DevOps', items: ['Docker', 'AWS', 'CI/CD', 'Git', 'Linux'] },
  ];

  const timeline = [
    {
      year: '2024',
      title: 'Senior Software Engineer',
      company: 'TechCorp Ecuador',
      description: 'Liderazgo técnico en proyectos de gran escala, arquitectura de microservicios y mentoring de desarrolladores junior.'
    },
    {
      year: '2022',
      title: 'Full Stack Developer',
      company: 'DataSolutions Inc.',
      description: 'Desarrollo de aplicaciones web complejas y pipelines de datos para análisis en tiempo real.'
    },
    {
      year: '2021',
      title: 'Frontend Developer',
      company: 'StartupTech',
      description: 'Creación de interfaces de usuario modernas y responsivas con React y Angular.'
    },
    {
      year: '2020',
      title: 'Inicio Profesional',
      company: 'Freelance',
      description: 'Primeros proyectos profesionales en desarrollo web y análisis de datos.'
    },
  ];

  return (
    <section id="sobre-mi" ref={sectionRef} className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className={`transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Sobre <span className="text-[var(--accent-blue)]">Mí</span>
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Apasionado por crear soluciones tecnológicas que impacten positivamente en las personas y organizaciones.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Bio */}
            <div className="glass-strong rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Mi Historia</h3>
              <div className="space-y-4 text-white/80 leading-relaxed">
                <p>
                  Soy un ingeniero de software ecuatoriano con más de 4 años de experiencia 
                  construyendo aplicaciones web escalables y sistemas de datos robustos.
                </p>
                <p>
                  Mi pasión por la tecnología comenzó durante mis estudios universitarios, 
                  donde descubrí el poder de combinar el desarrollo frontend con el análisis 
                  de datos para crear experiencias digitales excepcionales.
                </p>
                <p>
                  Actualmente me especializo en arquitecturas modernas utilizando React, 
                  Angular, Python y tecnologías cloud, siempre buscando las mejores 
                  prácticas y soluciones innovadoras.
                </p>
              </div>
            </div>

            {/* Skills */}
            <div className="glass-strong rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Tecnologías</h3>
              <div className="grid grid-cols-2 gap-6">
                {skills.map((skillGroup, index) => (
                  <div key={index}>
                    <h4 className="text-[var(--accent-blue)] font-semibold mb-3">
                      {skillGroup.category}
                    </h4>
                    <ul className="space-y-2">
                      {skillGroup.items.map((skill, skillIndex) => (
                        <li key={skillIndex} className="text-white/70 text-sm">
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Timeline */}
          <div className="glass-strong rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-8 text-center">
              Trayectoria Profesional
            </h3>
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <div key={index} className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-20 flex-shrink-0">
                    <span className="inline-block bg-[var(--accent-blue)] text-black font-bold px-3 py-1 rounded-full text-sm">
                      {item.year}
                    </span>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-semibold text-white mb-1">
                      {item.title}
                    </h4>
                    <p className="text-[var(--accent-blue)] font-medium mb-2">
                      {item.company}
                    </p>
                    <p className="text-white/70">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;