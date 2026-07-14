import { motion } from 'framer-motion';
import { usePortfolio } from '../hooks/usePortfolio';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08, ease: [0.25, 0.1, 0.25, 1] as const },
  }),
};

export default function ExperienceSection() {
  const { experience } = usePortfolio();

  return (
    <section id="experience" className="py-28 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
      <motion.p
        className="text-xs uppercase tracking-[0.2em] text-neutral-500 font-mono mb-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
      >
        Experience
      </motion.p>
      <motion.h2
        className="hero-heading text-4xl md:text-5xl font-bold mb-16 leading-tight"
        style={{ fontFamily: 'Kanit, sans-serif' }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Where I've worked.
      </motion.h2>
      <div className="space-y-0">
        {experience.map((job, i) => {
          const num = String(i + 1).padStart(2, '0');
          return (
            <motion.div
              key={job.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              custom={i}
              variants={fadeUp}
            >
              <div className="h-px bg-neutral-800 w-full" />
              <div className="grid grid-cols-1 lg:grid-cols-[80px_1fr_auto] gap-6 lg:gap-10 py-10 group">
                <div className="pt-1">
                  <span
                    className="text-neutral-700 text-sm font-mono group-hover:text-neutral-500 transition-colors duration-300"
                  >
                    {num}
                  </span>
                </div>
                <div className="space-y-4">
                  <div className="flex flex-wrap items-center gap-3">
                    <h3
                      className="text-white text-xl md:text-2xl font-semibold"
                      style={{ fontFamily: 'Kanit, sans-serif' }}
                    >
                      {job.company}
                    </h3>
                    <span className="text-neutral-600">—</span>
                    <span className="text-neutral-400 text-base">{job.role}</span>
                  </div>
                  <p className="text-neutral-400 text-sm md:text-base leading-relaxed max-w-2xl">
                    {job.summary}
                  </p>
                  <ul className="space-y-2 pt-1">
                    {job.highlights.slice(0, 3).map((highlight, hi) => (
                      <li key={hi} className="flex gap-3 text-sm text-neutral-500 leading-relaxed">
                        <span className="text-neutral-700 mt-[3px] shrink-0">↳</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="lg:text-right pt-1">
                  <span className="inline-block text-xs font-mono text-neutral-500 bg-neutral-900 border border-neutral-800 rounded px-3 py-1.5 whitespace-nowrap">
                    {job.period}
                  </span>
                </div>
              </div>
            </motion.div>
          );
        })}
        <div className="h-px bg-neutral-800 w-full" />
      </div>
    </section>
  );
}
