import React from 'react';
import { Github, Linkedin, Mail, ChevronDown } from 'lucide-react';
import profilePicture from '../assets/images/profile.jpg';

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => (
  <section id="home" className="flex min-h-screen items-center bg-[#f7f6f2] px-6 py-24 md:py-28">
    <div className="mx-auto grid w-full max-w-5xl items-center gap-12 md:grid-cols-[1fr_0.72fr] md:gap-16">
      <div className="max-w-4xl">
        <p className="mb-6 text-xs font-semibold uppercase tracking-[0.2em] text-[#b45d38]">
          Portfolio / Introduction
        </p>
        <h1 className="mb-6 font-serif text-5xl leading-[1.05] tracking-tight text-[#242724] md:text-7xl lg:text-8xl">
          Hi, I'm <span className="text-[#b45d38]">Archan Patel</span>
        </h1>
        <p className="mb-5 text-xl font-medium text-[#242724] md:text-2xl">
          Android Developer &amp; Software Engineer
        </p>
        <p className="max-w-2xl text-base leading-7 text-[#656962] md:text-lg md:leading-8">
          Specializing in building scalable Android applications with modern architectures,
          clean code practices, and exceptional user experiences.
        </p>

        <div className="mt-10 flex flex-wrap gap-x-8 gap-y-4">
          <a
            href="https://github.com/ArchanPatel"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border-b border-[#242724]/20 pb-2 text-sm font-medium text-[#242724] transition-colors hover:border-[#b45d38] hover:text-[#b45d38]"
          >
            <Github size={18} />
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/archanpatel1/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border-b border-[#242724]/20 pb-2 text-sm font-medium text-[#242724] transition-colors hover:border-[#b45d38] hover:text-[#b45d38]"
          >
            <Linkedin size={18} />
            LinkedIn
          </a>
          <a
            href="mailto:archanmehulpatel@gmail.com"
            className="inline-flex items-center gap-2 border-b border-[#242724]/20 pb-2 text-sm font-medium text-[#242724] transition-colors hover:border-[#b45d38] hover:text-[#b45d38]"
          >
            <Mail size={18} />
            Contact
          </a>
        </div>

        <button
          onClick={() => onNavigate('about')}
          className="mt-10 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.16em] text-[#656962] transition-colors hover:text-[#b45d38] md:mt-16"
          aria-label="Scroll to about section"
        >
          Explore
          <ChevronDown size={18} strokeWidth={1.5} />
        </button>
      </div>
      <div className="flex justify-center md:justify-end">
        <img
          src={profilePicture}
          alt="Archan Patel"
          className="aspect-square w-40 rounded-full object-cover shadow-xl shadow-[#242724]/10 ring-4 ring-[#b45d38]/20 ring-offset-8 ring-offset-[#f7f6f2] sm:w-48 md:w-64 lg:w-80"
        />
      </div>
    </div>
  </section>
);

interface HeroProps {
  onNavigate: (sectionId: string) => void;
}