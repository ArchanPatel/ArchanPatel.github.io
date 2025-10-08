import { useEffect, useState } from 'react';
import { Project } from '../../types';
import projectsJson from '../../assets/projects.json';

export function useProjects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      try {
        setProjects((projectsJson as Project[]) || []);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  const findById = (id: string) => projects.find((p) => p.id === id);

  return { projects, loading, findById, setProjects };
}
