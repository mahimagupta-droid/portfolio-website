import { motion } from 'framer-motion';
import { Github, ArrowUpRight } from 'lucide-react';
import type { Project } from '../types/portfolio';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const num = String(index + 1).padStart(2, '0');
  const hasLiveUrl = Boolean(project.liveUrl?.trim());
  const hasGithubUrl = Boolean(project.githubUrl?.trim());
  const hasImage = Boolean(project.image?.trim());

  return (
    <motion.article
      className="relative lg:sticky top-24 bg-neutral-900/80 border border-neutral-800 rounded-2xl overflow-hidden backdrop-blur-sm"
      style={{ marginBottom: '1.5rem' }}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.55, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[340px]">
        {/* Image / Placeholder */}
        <div className="relative bg-neutral-950 min-h-[220px] lg:min-h-0">
          {hasImage ? (
            <img
              src={project.image}
              alt={project.title}
              className="absolute inset-0 w-full h-full object-cover"
            />
          ) : (
            /* Placeholder grid pattern */
            <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
              <div
                className="absolute inset-0 opacity-[0.04]"
                style={{
                  backgroundImage:
                    'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)',
                  backgroundSize: '40px 40px',
                }}
              />
              <div className="relative z-10 flex flex-col items-center gap-2">
                <div className="w-12 h-12 rounded-xl border border-neutral-800 flex items-center justify-center">
                  <span
                    className="hero-heading text-lg font-bold"
                    style={{ fontFamily: 'Kanit, sans-serif' }}
                  >
                    {project.title.charAt(0)}
                  </span>
                </div>
                <span className="text-neutral-700 text-xs font-mono">{project.year}</span>
              </div>
            </div>
          )}

          {/* Highlighted badge */}
          {project.highlights && (
            <div className="absolute top-4 left-4 z-10">
              <span className="text-[10px] uppercase tracking-widest font-mono text-white px-2.5 py-1 rounded"
                style={{ background: 'linear-gradient(90deg, #7C3AED, #DB2777, #EA580C)' }}>
                Featured
              </span>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-8 md:p-10 flex flex-col justify-between">
          <div>
            {/* Number + year */}
            <div className="flex items-center justify-between mb-6">
              <span className="text-neutral-700 text-sm font-mono">{num}</span>
              <span className="text-neutral-600 text-xs font-mono">{project.year}</span>
            </div>

            {/* Title & subtitle */}
            <h3
              className="text-white text-2xl md:text-3xl font-bold mb-1 leading-tight"
              style={{ fontFamily: 'Kanit, sans-serif' }}
            >
              {project.title}
            </h3>
            <p className="text-neutral-500 text-sm mb-5">{project.subtitle}</p>

            {/* Description */}
            <p className="text-neutral-400 text-sm leading-relaxed">{project.description}</p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-5">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[11px] text-neutral-500 bg-neutral-800/80 border border-neutral-700/60 rounded px-2.5 py-1 leading-none font-mono"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* CTA row */}
          <div className="flex items-center gap-3 mt-8 pt-6 border-t border-neutral-800">
            {/* LIVE PROJECT button — hidden if liveUrl is empty */}
            {hasLiveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-white rounded-lg px-5 py-2.5 transition-opacity duration-200 hover:opacity-90"
                style={{ background: 'linear-gradient(90deg, #7C3AED, #DB2777, #EA580C)' }}
                aria-label={`Live project: ${project.title}`}
              >
                <span>Live Project</span>
                <ArrowUpRight size={14} strokeWidth={2} />
              </a>
            )}

            {hasGithubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-neutral-400 hover:text-white transition-colors duration-200 border border-neutral-800 hover:border-neutral-600 rounded-lg px-4 py-2.5"
                aria-label={`GitHub: ${project.title}`}
              >
                <Github size={14} strokeWidth={1.5} />
                <span>Source</span>
              </a>
            )}

            {!hasLiveUrl && !hasGithubUrl && (
              <span className="text-xs text-neutral-700 font-mono">Private repository</span>
            )}
          </div>
        </div>
      </div>
    </motion.article>
  );
}
