import { useMemo } from 'react';
import { ProjectCard } from '../components/ProjectsCard';

export const Projects = () => {
  const projects = useMemo(() => [
    {
      name: 'Hirely',
      description: 'Developed recruitment management app with transactional Room operations, reducing sync errors by 50% during offline-to-online transitions.',
      tech: ['Kotlin', 'MVVM', 'REST APIs','Jetpack Compose', 'Retrofit', 'Hilt'],
      githubUrl: 'https://github.com/ArchanPatel/Hirely'
    },
    {
      name: 'Pokédex Android App',
      description: 'Feature-rich Android app with Clean Architecture, offline-first approach using Room database, reducing API calls by 60%.',
      tech: ['Kotlin', 'MVVM', 'Jetpack Compose', 'Room', 'Retrofit', 'Hilt'],
      githubUrl: 'https://github.com/ArchanPatel?tab=repositories'
    },
    {
      name: 'Film Catalog App',
      description: 'Comprehensive movie database application with search, ratings, and personalized recommendations.',
      tech: ['Android', 'Kotlin', 'REST APIs'],
      githubUrl: 'https://github.com/ArchanPatel/FilmCatalogApp'
    },
    {
      name: 'News Reader App',
      description: 'Built news aggregation app with offline-first architecture using Room persistence, Retrofit API integration, and Kotlin Flow for reactive data streams.',
      tech: ['Android', 'Kotlin', 'News API'],
      githubUrl: 'https://github.com/ArchanPatel/NewsReaderApp'
    },
    {
      name: 'Pokemon Tournament',
      description: 'Interactive tournament management system with battle mechanics and player statistics.',
      tech: ['Java', 'Android', 'Game Logic'],
      githubUrl: 'https://github.com/ArchanPatel?tab=repositories'
    },
    {
      name: 'Game AI',
      description: 'Intelligent game-playing AI using machine learning algorithms and strategic decision-making.',
      tech: ['Python', 'Machine Learning', 'AI Algorithms'],
      githubUrl: 'https://github.com/ArchanPatel?tab=repositories'
    },
    {
      name: 'SubwAI Inventory System',
      description: 'Real-time inventory tracking system for Subway franchises using computer vision and secure cloud authentication.',
      tech: ['Python', 'Next.js', 'MongoDB', 'Google Cloud', 'Computer Vision'],
      githubUrl: 'https://github.com/ArchanPatel/subwai'
    },
    {
      name: 'Personal Website',
      description: 'Portfolio website showcasing projects, experience, and skills with a modern design and responsive layout.',
      tech: ['React', 'TypeScript', 'Tailwind CSS'],
      githubUrl: 'https://archanpatel.github.io'
    },
    {
      name: 'Vouch – Mobile Social Travel Application',
      description: 'Jan 2026 – Present. Architecting a cross-platform travel social media platform using a KMP monorepo for shared domain and data layers, with native Jetpack Compose and SwiftUI interfaces. Engineered an offline-first itinerary sync engine utilizing Kotlin Flow and multiplatform data caching.',
      tech: ['KMP', 'Jetpack Compose', 'SwiftUI', 'Coroutines']
    },
  ], []);

  return (
    <section id="projects" className="py-24 md:py-32 px-6 bg-[#f7f6f2]">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-5 mb-12">
          <div>
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#b45d38] mb-4">03 / Selected work</p>
            <h2 className="font-serif text-4xl md:text-5xl tracking-tight text-[#242724]">Projects</h2>
          </div>
          <p className="max-w-sm text-sm leading-6 text-[#656962]">A mix of Android, full-stack, and personal projects.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-x-12">
          {projects.map((project) => (
            <ProjectCard key={project.name} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};