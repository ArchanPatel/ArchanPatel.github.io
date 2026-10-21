import { Github, Linkedin, Mail, Phone } from 'lucide-react';

export const Contact = () => (
  <section id="contact" className="py-24 md:py-32 px-6 bg-[#242724] text-[#f7f6f2]">
    <div className="max-w-5xl mx-auto grid md:grid-cols-[0.7fr_1.3fr] gap-12 md:gap-20">
      <div>
        <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#e8b49a] mb-4">05 / Contact</p>
        <h2 className="font-serif text-4xl md:text-5xl tracking-tight">Let's connect</h2>
      </div>
      <div>
        <p className="text-lg leading-7 text-white/75 mb-8">
          I'm always open to discussing new opportunities, projects, or ideas.
        </p>
        <div className="flex flex-wrap gap-x-8 gap-y-4 border-y border-white/20 py-5">
        <a
          href="mailto:archanmehulpatel@gmail.com"
          className="text-[#e8b49a] hover:text-white transition-colors flex items-center gap-2"
        >
          <Mail size={18} />
          Email me
        </a>
        <a
          href="tel:+16472271666"
          className="text-[#e8b49a] hover:text-white transition-colors flex items-center gap-2"
        >
          <Phone size={18} />
          Call me
        </a>
        <a
          href="https://github.com/ArchanPatel"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#e8b49a] hover:text-white transition-colors flex items-center gap-2"
        >
          <Github size={18} />
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/archanpatel1/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#e8b49a] hover:text-white transition-colors flex items-center gap-2"
        >
          <Linkedin size={18} />
          LinkedIn
        </a>
        </div>
      </div>
    </div>
  </section>
);