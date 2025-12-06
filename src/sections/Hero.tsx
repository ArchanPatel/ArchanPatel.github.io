import React from 'react';
import { Github, Linkedin, Mail, ChevronDown } from 'lucide-react';
import heroBg from '../assets/images/hero-bg.jpg';

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => (
  <section id="home" className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
    <div 
      className="absolute inset-0 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${heroBg})`,
        transform: 'scale(1.1)',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/95 via-blue-900/80 to-gray-900/95"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
    </div>

    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
    </div>

    <div className="relative z-10 max-w-4xl text-center">
      <div className="mb-6">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Archan Patel</span>
        </h1>
          <div className="h-1 w-32 bg-gradient-to-r from-blue-400 to-cyan-300 mx-auto mb-8 rounded-full"></div>
      </div>
      
      <p className="text-xl md:text-3xl text-gray-200 mb-6 font-light">
        Android Developer & Software Engineer
      </p>
      
      <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
        Specializing in building scalable Android applications with modern architectures, 
        clean code practices, and exceptional user experiences.
      </p>
      
      <div className="flex flex-wrap justify-center gap-4 mb-16">
        <a
          href="https://github.com/ArchanPatel"
          target="_blank"
          rel="noopener noreferrer"
          className="group px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-all duration-300 flex items-center gap-2 backdrop-blur-sm border border-white/20 hover:border-white/40 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20"
        >
          <Github size={20} className="group-hover:rotate-12 transition-transform" />
          GitHub
        </a>
        
        <a
          href="https://www.linkedin.com/in/archanpatel1/"
          target="_blank"
          rel="noopener noreferrer"
          className="group px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white rounded-lg transition-all duration-300 flex items-center gap-2 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/50"
        >
          <Linkedin size={20} className="group-hover:rotate-12 transition-transform" />
          LinkedIn
        </a>
        <a
          href="mailto:archanmehulpatel@gmail.com"
          className="group px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-all duration-300 flex items-center gap-2 backdrop-blur-sm border border-white/20 hover:border-white/40 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20"
        >
          <Mail size={20} className="group-hover:rotate-12 transition-transform" />
          Contact
        </a>
      </div>
      
      <button
        onClick={() => onNavigate('about')}
        className="text-gray-300 hover:text-white transition-all duration-300 animate-bounce hover:scale-110"
        aria-label="Scroll to about section"
      >
        <ChevronDown size={40} strokeWidth={1.5} />
      </button>
    </div>

  </section>
);

interface HeroProps {
  onNavigate: (sectionId: string) => void;
}