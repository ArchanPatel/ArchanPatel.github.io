import { Github, Linkedin, Mail, Phone } from 'lucide-react';

export const Contact = () => (
  <section id="contact" className="py-20 px-6 bg-gray-800">
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="text-4xl font-bold text-white mb-6">Let's Connect</h2>
      <p className="text-xl text-gray-300 mb-12">
        I'm always open to discussing new opportunities, projects, or ideas.
      </p>
      <div className="flex flex-wrap justify-center gap-6">
        <a
          href="mailto:archanmehulpatel@gmail.com"
          className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors flex items-center gap-2 text-lg"
        >
          <Mail size={24} />
          Email Me
        </a>
        <a
          href="tel:+16472271666"
          className="px-8 py-4 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors flex items-center gap-2 text-lg"
        >
          <Phone size={24} />
          Call Me
        </a>
      </div>
      <div className="mt-12 flex justify-center gap-6">
        <a
          href="https://github.com/ArchanPatel"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white transition-colors"
          aria-label="GitHub profile"
        >
          <Github size={32} />
        </a>
        <a
          href="https://www.linkedin.com/in/archanpatel1/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white transition-colors"
          aria-label="LinkedIn profile"
        >
          <Linkedin size={32} />
        </a>
      </div>
    </div>
  </section>
);