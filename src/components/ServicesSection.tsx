// TODO: Move services data into portfolio.json once the data model is extended
// Expected shape: services: Array<{ id: string; title: string; description: string; icon?: string }>

import { motion } from 'framer-motion';
import { Server, Layout } from 'lucide-react';

interface Service {
  id: string;
  title: string;
  description: string;
  Icon: React.FC<{ size?: number; strokeWidth?: number; className?: string }>;
}

const SERVICES: Service[] = [
  {
    id: 'backend',
    title: 'Backend Engineering',
    description:
      'Distributed systems, API design, and high-throughput data pipelines. Built to survive real load, observable by default, and maintainable by the next engineer.',
    Icon: Server,
  },
  {
    id: 'frontend',
    title: 'Frontend Engineering',
    description:
      'Performant React applications with strong TypeScript foundations. Focused on developer experience and interfaces that feel fast even when the data isn\'t.',
    Icon: Layout,
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: [0.25, 0.1, 0.25, 1] as const },
  }),
};

export default function ServicesSection() {
  return (
    <section id="services" className="py-28 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
      {/* Section label */}
      <motion.p
        className="text-xs uppercase tracking-[0.2em] text-neutral-500 font-mono mb-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
      >
        Services
      </motion.p>

      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
        <motion.h2
          className="hero-heading text-4xl md:text-5xl font-bold leading-tight max-w-md"
          style={{ fontFamily: 'Kanit, sans-serif' }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          What I
          <br />
          build well.
        </motion.h2>

        <motion.p
          className="text-neutral-500 text-sm max-w-sm leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          Available for contract engagements, technical advisory, and full-time opportunities.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
        {SERVICES.map((service, i) => (
          <motion.div
            key={service.id}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            custom={i}
            variants={cardVariants}
            className="group relative bg-neutral-900/60 border border-neutral-800 rounded-2xl p-8 overflow-hidden transition-colors duration-300 hover:border-neutral-700"
          >
            {/* Subtle gradient bleed on hover */}
            <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
              style={{ background: 'radial-gradient(ellipse at 10% 10%, rgba(139,92,246,0.06) 0%, transparent 60%)' }}
            />

            <div className="relative z-10">
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-neutral-800 mb-6 group-hover:bg-neutral-700/80 transition-colors duration-300">
                <service.Icon size={18} strokeWidth={1.5} className="text-neutral-300" />
              </div>

              <h3
                className="text-white text-xl font-semibold mb-3"
                style={{ fontFamily: 'Kanit, sans-serif' }}
              >
                {service.title}
              </h3>

              <p className="text-neutral-500 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
