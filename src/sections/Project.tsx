import { useMemo } from 'react';
import { ProjectCard } from '../components/ProjectsCard';

export const Projects = () => {
  const projects = useMemo(() => [
    {
      name: 'Hirely',
      description: 'AI-powered job application platform streamlining the hiring process with intelligent matching and automation.',
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
      description: 'Modern news aggregation app with real-time updates and customizable content feeds.',
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
  ], []);

  return (
    <section id="projects" className="py-20 px-6 bg-gray-800">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">Projects</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.name} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};