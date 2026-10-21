import { useMemo } from 'react';
import { ExperienceCard } from '../components/ExperienceCard';

export const Experience = () => {
  const experiences = useMemo(() => [
    {
      title: 'Software Developer II – Android',
      company: 'Konrad Group',
      location: 'Toronto, ON',
      period: 'Aug 2026 – Present',
      achievements: [
        'Leading development of the Account Details, Transfer and Pay, and Personal Info flows for a Wealth Management app in a ground-up rewrite to Jetpack Compose and Clean Architecture, on a 9-developer (5 Android, 4 iOS) team.',
        'Core contributor from day one to a 2-month KMP monorepo migration unifying separate iOS/Android codebases; shaped the architectural decision to keep ViewModels native rather than shared, and instituted a mandatory unit-test CI/CD gate on pull requests to prevent regressions.',
        'Presented internally on Android modernization and KMP shared-domain architecture with SKIE for Swift interop; built an AI-assisted migration workflow adopted team-wide to accelerate domain/data-layer migration into KMP.'
      ]
    },
    {
      title: 'Software Developer – Android',
      company: 'Konrad Group',
      location: 'Toronto, ON',
      period: 'Aug 2025 – Aug 2026',
      achievements: [
        'Built the home page (watchlist, portfolio card, marketing tile) and Trade page (buy/sell, limit orders) end-to-end across UI, domain, and data layers for a Direct Investing app on a banking platform serving tens of millions of customers.',
        'Cut page load times ~75% (3–4s to under 1s) by designing a fallback caching layer to gracefully handle unstable 3rd-party API responses; proposed datasource-layer and Hilt DI upgrades adopted across the client codebase.',
        'Resolved recurring hotfix bugs caused by 3rd-party vendors changing API response structures, using Compose to build resilient, gracefully degrading reactive UI across a 5-developer feature team.'
      ]
    },
    {
      title: 'Associate Software Developer – Android',
      company: 'Konrad Group',
      location: 'Toronto, ON',
      period: 'Aug 2024 – Aug 2025',
      achievements: [
        'Owned end-to-end architecture (data, domain, presentation layers) for the MFA and Protection pillar flows of an insurance app, using Kotlin Flow, Coroutines, SSOT, and Clean Architecture within a 30-developer, 6-squad engineering org.',
        'Diagnosed and eliminated 2 redundant activity transitions in the post-authentication flow, cutting auth completion time ~58% (12s to 5s); built the biometric login and MFA UI as the app’s highest-traffic entry point.',
        'Designed the login screen’s inline validation, pop-ups, and need-help flow, and established a JUnit/MockK/Compose UI testing pipeline in GitHub Actions CI/CD that raised repository code coverage to 85%.'
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
    <section id="experience" className="py-24 md:py-32 px-6 bg-[#eeede8]">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-[0.7fr_1.3fr] gap-12 md:gap-20">
          <div>
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#b45d38] mb-4">02 / Career</p>
            <h2 className="font-serif text-4xl md:text-5xl tracking-tight text-[#242724]">Experience</h2>
            <p className="mt-5 text-sm leading-6 text-[#656962]">A selection of roles and work along the way.</p>
          </div>
          <div className="border-t border-[#242724]/20">
          {experiences.map((exp, idx) => (
            <ExperienceCard key={idx} {...exp} />
          ))}
          </div>
        </div>
      </div>
    </section>
  );
};