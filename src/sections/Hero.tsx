import React from 'react';
import { Github, Linkedin, Mail, ChevronDown } from 'lucide-react';


export const Hero: React.FC<HeroProps> = ({ onNavigate }) => (
  <section id="home" className="min-h-screen flex items-center justify-center px-6 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
    <div className="max-w-4xl text-center">
      <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
        Hi, I'm <span className="text-blue-400">Archan Patel</span>
      </h1>
      <p className="text-xl md:text-2xl text-gray-300 mb-8">
        Android Developer & Software Engineer
      </p>
      <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
        Specializing in building scalable Android applications with modern architectures, 
        clean code practices, and exceptional user experiences.
      </p>
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        <a
          href="https://github.com/ArchanPatel"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-colors flex items-center gap-2"
        >
          <Github size={20} />
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/archanpatel1/"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors flex items-center gap-2"
        >
          <Linkedin size={20} />
          LinkedIn
        </a>
        <a
          href="mailto:archanmehulpatel@gmail.com"
          className="px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-colors flex items-center gap-2"
        >
          <Mail size={20} />
          Contact
        </a>
      </div>
      <button
        onClick={() => onNavigate('about')}
        className="text-gray-400 hover:text-white transition-colors animate-bounce"
        aria-label="Scroll to about section"
      >
        <ChevronDown size={32} />
      </button>
    </div>
  </section>
);

interface HeroProps {
  onNavigate: (sectionId: string) => void;
}