import { motion } from 'framer-motion';
import { usePortfolio } from '../hooks/usePortfolio';
import ProjectCard from './ProjectCard';

export default function ProjectsSection() {
  const { highlightedProjects, otherProjects } = usePortfolio();
  const allProjects = [...highlightedProjects, ...otherProjects];

  return (
    <section id="projects" className="py-28 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
      {/* Section label */}
      <motion.p
        className="text-xs uppercase tracking-[0.2em] text-neutral-500 font-mono mb-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
      >
        Projects
      </motion.p>

      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
        <motion.h2
          className="hero-heading text-4xl md:text-5xl font-bold leading-tight"
          style={{ fontFamily: 'Kanit, sans-serif' }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Selected
          <br />
          work.
        </motion.h2>

        <motion.p
          className="text-neutral-500 text-sm max-w-xs leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          Personal projects, open-source tools, and production systems built outside of work.
        </motion.p>
      </div>

      {/* Sticky card stack */}
      <div>
        {allProjects.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}
