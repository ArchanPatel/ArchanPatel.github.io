import React from 'react';
import { Briefcase } from 'lucide-react';

export const ExperienceCard: React.FC<ExperienceCardProps> = ({ title, company, location, period, achievements }) => (
  <div className="bg-gray-800 rounded-lg p-6 hover:shadow-xl transition-shadow border border-gray-700">
    <div className="flex items-start gap-3 mb-4">
      <Briefcase className="text-blue-400 mt-1 flex-shrink-0" size={24} />
      <div className="flex-1">
        <h3 className="text-xl font-bold text-white">{title}</h3>
        <p className="text-blue-400 font-semibold">{company}</p>
        <p className="text-gray-400 text-sm">{location} | {period}</p>
      </div>
    </div>
    <ul className="space-y-2 text-gray-300">
      {achievements.map((achievement, idx) => (
        <li key={idx} className="flex gap-2">
          <span className="text-blue-400 flex-shrink-0 leading-relaxed">•</span>
          <span>{achievement}</span>
        </li>
      ))}
    </ul>
  </div>
);

interface ExperienceCardProps {
  title: string;
  company: string;
  location: string;
  period: string;
  achievements: string[];
}