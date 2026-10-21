import React from 'react';

export const ExperienceCard: React.FC<ExperienceCardProps> = ({ title, company, location, period, achievements }) => (
  <article className="py-7 md:py-8 border-b border-[#242724]/20">
    <div className="flex flex-col sm:flex-row sm:justify-between sm:gap-6 mb-4">
      <div>
        <h3 className="text-xl font-semibold tracking-tight text-[#242724]">{title}</h3>
        <p className="mt-1 text-[#b45d38] font-medium">{company}</p>
      </div>
      <p className="mt-1 sm:mt-1 text-sm text-[#656962] sm:text-right">{period}<br />{location}</p>
    </div>
    <ul className="space-y-2 text-sm leading-6 text-[#555b55]">
      {achievements.map((achievement, idx) => (
        <li key={idx} className="flex gap-3">
          <span className="text-[#b45d38] flex-shrink-0 leading-6">—</span>
          <span>{achievement}</span>
        </li>
      ))}
    </ul>
  </article>
);

interface ExperienceCardProps {
  title: string;
  company: string;
  location: string;
  period: string;
  achievements: string[];
}