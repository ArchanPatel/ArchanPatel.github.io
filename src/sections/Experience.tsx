import { useMemo } from 'react';
import { ExperienceCard } from '../components/ExperienceCard';

export const Experience = () => {
  const experiences = useMemo(() => [
    {
      title: 'Android Developer',
      company: 'Konrad Group',
      location: 'Toronto, ON',
      period: 'Aug 2024 – Present',
      achievements: [
        'Spearheaded development of scalable Android design system with Material Design 3 and Jetpack Compose',
        'Implemented asynchronous API layer with Kotlin Coroutines + Flow, improving app response times by 25%',
        'Refactored multi-factor authentication flow for major global financial institution',
        'Built biometric authentication and secure storage features using Android BiometricPrompt API',
        'Contributed to cross-platform development using React Native'
      ]
    },
    {
      title: 'Android Developer (Co-op)',
      company: 'STEER',
      location: 'Toronto, ON',
      period: 'May 2021 – Aug 2021',
      achievements: [
        'Architected production-ready Android app with Clean Architecture supporting 500+ concurrent users',
        'Developed real-time BLE GATT protocol data pipeline, improving transmission speed by 20%',
        'Implemented robust JSON serialization with 99.5% data integrity across device network',
        'Created responsive Material Design UI across various device sizes'
      ]
    },
    {
      title: 'Full Stack Developer (Co-op)',
      company: 'ASL Distribution',
      location: 'Oakville, ON',
      period: 'May 2023 – Aug 2023',
      achievements: [
        'Developed full-stack web application reducing quoting processing time from days to milliseconds',
        'Built secure REST API with Google Cloud authentication',
        'Implemented data persistence using Next.js, Python, and MongoDB'
      ]
    },
    {
      title: 'Software Engineer (Co-op)',
      company: 'AlertDriving',
      location: 'Toronto, ON',
      period: 'Jan 2022 – Apr 2022',
      achievements: [
        'Developed admin dashboard with license management using PHP, jQuery, and REST APIs',
        'Automated auditing workflows using LAMP stack, enhancing data security across 6 business processes'
      ]
    }
  ], []);

  return (
    <section id="experience" className="py-20 px-6 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">Experience</h2>
        <div className="space-y-6">
          {experiences.map((exp, idx) => (
            <ExperienceCard key={idx} {...exp} />
          ))}
        </div>
      </div>
    </section>
  );
};