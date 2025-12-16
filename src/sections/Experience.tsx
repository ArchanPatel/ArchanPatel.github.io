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
        'Architected and shipped 2 fintech Android apps serving 5M+ users with 99.9% crash-free rate using Jetpack Compose, MVVM, Kotlin Coroutines/Flow, and Hilt dependency injection',
        'Reduced app cold start time by 38% and ANR rate by 42% through performance profiling, background threading optimization, and implementation of Baseline Profiles',
        'Built secure authentication with BiometricPrompt, Android Keystore encryption, MFA, and OAuth 2.0, achieving PCI DSS compliance and reducing auth failures by 28%',
        'Created scalable Material 3 design system with 40+ reusable Compose components, reducing UI code duplication by 45% and accelerating feature development by 30%',
        'Established comprehensive testing strategy (85% coverage) with JUnit, Mockito, Espresso, and Compose UI tests integrated into CI/CD pipeline with GitHub Actions'
      ]
    },
    {
      title: 'Android Developer (Co-op)',
      company: 'STEER',
      location: 'Toronto, ON',
      period: 'May 2021 – Aug 2021',
      achievements: [
        'Built TraceSCAN Connect Android app from ground up with Clean Architecture, MVVM, Room persistence, and Kotlin Flow, supporting 500+ concurrent users across 26+ user flows',
        'Engineered Bluetooth Low Energy (BLE) sync pipeline with WorkManager achieving 95% sync success rate for IoT device-to-app data transfer',
        'Implemented offline-first architecture with Retrofit, Moshi, Room caching, and automatic retry mechanisms, achieving 99.5% data integrity',
        'Optimized UI performance and ensured WCAG 2.1 Level AA accessibility compliance with ViewBinding, TalkBack support, and proper content descriptions'
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