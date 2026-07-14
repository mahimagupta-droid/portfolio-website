import { motion } from 'framer-motion';
import { usePortfolio } from '../hooks/usePortfolio';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.1, ease: [0.25, 0.1, 0.25, 1] as const },
  }),
};

export default function AboutSection() {
  const { profile, skills } = usePortfolio();

  return (
    <section id="about" className="py-28 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
      <motion.p
        className="text-xs uppercase tracking-[0.2em] text-neutral-500 font-mono mb-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
      >
        About
      </motion.p>
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.15fr] gap-16 lg:gap-24 items-start">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0}
          variants={fadeUp}
        >
          <h2 className="hero-heading text-4xl md:text-5xl xl:text-6xl font-bold leading-[1.1] tracking-tight" style={{ fontFamily: 'Kanit, sans-serif' }}>
            Engineering
            <br />
            at the layer
            <br />
            that matters.
          </h2>
          <div id="skills" className="mt-12 space-y-6">
            {skills.categories.map((cat, i) => (
              <motion.div
                key={cat.name}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i + 1}
                variants={fadeUp}
              >
                <p className="text-[10px] uppercase tracking-[0.18em] text-neutral-600 font-mono mb-2">
                  {cat.name}
                </p>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs text-neutral-300 bg-neutral-900 border border-neutral-800 rounded px-3 py-1.5 leading-none"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={1}
          variants={fadeUp}
          className="space-y-6"
        >
          {profile.bio.map((paragraph, i) => (
            <motion.p
              key={i}
              className="text-neutral-300 text-base md:text-lg leading-relaxed"
              style={{ wordBreak: 'keep-all', overflowWrap: 'break-word' }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i + 2}
              variants={fadeUp}
            >
              {paragraph}
            </motion.p>
          ))}
          <motion.div
            className="flex items-center gap-2 mt-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={5}
            variants={fadeUp}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block" />
            <span className="text-sm text-neutral-500">{profile.location}</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
