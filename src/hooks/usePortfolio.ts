import { useMemo } from 'react';
import portfolioData from '../data/portfolio.json';
import type { PortfolioData, Project } from '../types/portfolio';
import { brainloop, finsight, dayframe } from '../assets/projects/index';

const projectImages: Record<string, string> = {
  'proj-1': brainloop,
  'proj-2': finsight,
  'proj-3': dayframe,
};

const data = portfolioData as PortfolioData;

// export function usePortfolio(): PortfolioData & {
//   highlightedProjects: Project[];
//   otherProjects: Project[];
// } {
//   const highlightedProjects = useMemo(
//     () => data.projects.filter((p) => p.highlights),
//     []
//   );

//   const otherProjects = useMemo(
//     () => data.projects.filter((p) => !p.highlights),
//     []
//   );
//   const projects = data.projects.map(p => ({
//     ...p,
//     image: projectImages[p.id] ?? p.image,
//   }));
//   return {
//     ...data,
//     highlightedProjects,
//     otherProjects,
//     projects
//   };
// }
export function usePortfolio(): PortfolioData & {
  highlightedProjects: Project[];
  otherProjects: Project[];
} {
  // ✅ Inject images FIRST
  const projects = useMemo(
    () => data.projects.map(p => ({
      ...p,
      image: projectImages[p.id] ?? p.image,
    })),
    []
  );

  // ✅ Now derive from the image-injected list
  const highlightedProjects = useMemo(
    () => projects.filter((p) => p.highlights),
    [projects]
  );

  const otherProjects = useMemo(
    () => projects.filter((p) => !p.highlights),
    [projects]
  );

  return {
    ...data,
    projects,
    highlightedProjects,
    otherProjects,
  };
}