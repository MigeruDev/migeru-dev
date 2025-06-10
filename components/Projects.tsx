'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

const Projects = () => {
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

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Analytics Platform',
      description: 'Plataforma completa de análisis para e-commerce con dashboard en tiempo real, procesamiento de datos masivos y predicciones de ventas.',
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'Python', 'PostgreSQL', 'AWS', 'Docker'],
      category: 'Full Stack',
      impact: '40% mejora en decisiones de inventario',
      github: 'https://github.com/miguel-macias/ecommerce-analytics',
      demo: 'https://ecommerce-analytics-demo.com',
    },
    {
      id: 2,
      title: 'Real-Time Data Pipeline',
      description: 'Sistema de procesamiento de datos en tiempo real para análisis de comportamiento de usuarios con Apache Kafka y microservicios.',
      image: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Python', 'Apache Kafka', 'MongoDB', 'Docker', 'Kubernetes'],
      category: 'Data Engineering',
      impact: '99.9% uptime, procesamiento de 1M+ eventos/día',
      github: 'https://github.com/miguel-macias/realtime-pipeline',
      demo: null,
    },
    {
      id: 3,
      title: 'Task Management SaaS',
      description: 'Aplicación SaaS de gestión de tareas con colaboración en tiempo real, notificaciones push y integración con APIs externas.',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Next.js', 'TypeScript', 'Supabase', 'Tailwind CSS'],
      category: 'Frontend',
      impact: '500+ usuarios activos, 95% satisfacción',
      github: 'https://github.com/miguel-macias/task-saas',
      demo: 'https://task-management-demo.com',
    },
    {
      id: 4,
      title: 'Financial Dashboard',
      description: 'Dashboard financiero con visualizaciones interactivas, reportes automatizados y análisis predictivo para startups.',
      image: 'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Angular', 'Spring Boot', 'MySQL', 'Chart.js'],
      category: 'Full Stack',
      impact: '60% reducción en tiempo de reportes',
      github: 'https://github.com/miguel-macias/financial-dashboard',
      demo: 'https://financial-dashboard-demo.com',
    },
    {
      id: 5,
      title: 'IoT Monitoring System',
      description: 'Sistema de monitoreo IoT para agricultura inteligente con sensores, alertas automáticas y análisis de tendencias.',
      image: 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Python', 'React', 'InfluxDB', 'MQTT', 'Raspberry Pi'],
      category: 'IoT',
      impact: '30% mejora en eficiencia de cultivos',
      github: 'https://github.com/miguel-macias/iot-agriculture',
      demo: null,
    },
    {
      id: 6,
      title: 'AI Content Generator',
      description: 'Herramienta de generación de contenido con IA para marketing digital, optimización SEO y análisis de sentimientos.',
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Next.js', 'OpenAI API', 'PostgreSQL', 'Vercel'],
      category: 'AI/ML',
      impact: '80% reducción en tiempo de creación de contenido',
      github: 'https://github.com/miguel-macias/ai-content-generator',
      demo: 'https://ai-content-demo.com',
    },
  ];

  return (
    <section id="proyectos" ref={sectionRef} className="py-20 px-6">
      <div className="container mx-auto max-w-7xl">
        <div className={`transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Mis <span className="text-[var(--accent-blue)]">Proyectos</span>
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Una selección de proyectos que demuestran mi experiencia en desarrollo full-stack, 
              análisis de datos y soluciones innovadoras.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className={`glass-strong rounded-2xl overflow-hidden group hover:scale-105 transition-all duration-300 ${
                  isVisible ? 'animate-fade-in-up' : ''
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300" />
                  <div className="absolute top-4 left-4">
                    <span className="bg-[var(--accent-blue)] text-black px-3 py-1 rounded-full text-sm font-semibold">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[var(--accent-blue)] transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-white/70 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* Impact */}
                  <div className="mb-4">
                    <p className="text-[var(--accent-blue)] text-sm font-semibold">
                      📈 {project.impact}
                    </p>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-white/10 text-white/80 px-2 py-1 rounded text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-white/10 hover:bg-white/20 text-white text-center py-2 rounded-lg transition-colors text-sm font-medium"
                    >
                      Código
                    </a>
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 btn-primary text-center py-2 rounded-lg text-sm font-medium"
                      >
                        Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-16">
            <p className="text-white/70 mb-6">
              ¿Interesado en ver más proyectos o colaborar en algo nuevo?
            </p>
            <Link
              href="#contacto"
              className="btn-primary px-8 py-4 rounded-full font-semibold text-lg"
            >
              Hablemos
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;