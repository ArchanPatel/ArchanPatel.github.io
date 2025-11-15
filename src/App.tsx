import { useMemo } from 'react';
import { useScrollSpy } from './hooks/useScrollSpy';
import { useSmoothScroll } from './hooks/useSmoothScroll';
import { Header } from './components/Header';
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { Experience } from './sections/Experience';
import { Projects } from './sections/Project';
import { Education } from './sections/Education';
import { Contact } from './sections/Contact';
import { Footer } from './components/Footer';

function App() {
  const sectionIds = useMemo(() => ['home', 'about', 'experience', 'projects', 'education', 'contact'], []);
  const activeSection = useScrollSpy(sectionIds);
  const scrollToSection = useSmoothScroll();

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header activeSection={activeSection} onNavigate={scrollToSection} />
      <Hero onNavigate={scrollToSection} />
      <About />
      <Experience />
      <Projects />
      <Education />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
