import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <div 
        className="fixed inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/desktop_background.png')",
          filter: "blur(1px)",
        }}
      />
      <div className="fixed inset-0 bg-black/70" />
      
      <div className="relative z-10">
        <Navigation />
        <Hero />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}