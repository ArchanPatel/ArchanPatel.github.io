import React from 'react';
import { ExternalLink, Code } from 'lucide-react';

export const ProjectCard: React.FC<ProjectCardProps> = ({ name, description, tech, githubUrl }) => (
  <div className="bg-gray-800 rounded-lg p-6 hover:shadow-xl transition-all hover:-translate-y-1 border border-gray-700">
    <div className="flex items-start justify-between mb-4">
      <div className="flex items-start gap-3">
        <Code className="text-blue-400 mt-1 flex-shrink-0" size={24} />
        <h3 className="text-xl font-bold text-white">{name}</h3>
      </div>
      {githubUrl && (
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white transition-colors"
          aria-label={`View ${name} on GitHub`}
        >
          <ExternalLink size={20} />
        </a>
      )}
    </div>
    <p className="text-gray-300 mb-4">{description}</p>
    <div className="flex flex-wrap gap-2">
      {tech.map((t) => (
        <span key={t} className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm">
          {t}
        </span>
      ))}
    </div>
  </div>
);

interface ProjectCardProps {
  name: string;
  description: string;
  tech: string[];
  githubUrl?: string;
}