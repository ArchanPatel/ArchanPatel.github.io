import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export const ProjectCard: React.FC<ProjectCardProps> = ({ name, description, tech, githubUrl }) => (
  <article className="py-7 border-t border-[#242724]/20">
    <div className="flex items-start justify-between gap-4 mb-3">
      <h3 className="font-serif text-2xl text-[#242724]">{name}</h3>
      {githubUrl && (
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-1 text-[#656962] hover:text-[#b45d38] transition-colors"
          aria-label={`View ${name} on GitHub`}
        >
          <ArrowUpRight size={20} />
        </a>
      )}
    </div>
    <p className="text-sm leading-6 text-[#555b55] mb-4">{description}</p>
    <p className="text-xs leading-5 text-[#777c76]">{tech.join('  ·  ')}</p>
  </article>
);

interface ProjectCardProps {
  name: string;
  description: string;
  tech: string[];
  githubUrl?: string;
}