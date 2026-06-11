import { motion } from 'framer-motion';
import { ArrowRight, ViewIcon } from 'lucide-react';
import { usePortfolio } from '../hooks/usePortfolio';
import SocialLinks from './SocialLinks';
import avatarImg from '../assets/avatar.png';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] as const },
});

export default function HeroSection() {
  const { profile } = usePortfolio();

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col overflow-x-hidden"
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Radial glow top-right */}
      <div
        className="absolute top-0 right-0 w-[600px] h-[600px] opacity-20 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at top right, #7C3AED 0%, transparent 65%)',
        }}
      />
      {/* Radial glow bottom-left */}
      <div
        className="absolute bottom-0 left-0 w-[400px] h-[400px] opacity-10 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at bottom left, #EA580C 0%, transparent 65%)',
        }}
      />

      {/* Content wrapper — sits below 64px navbar */}
      <div className="relative flex-1 flex items-center max-w-7xl mx-auto w-full px-6 lg:px-10 pt-24 pb-16">
        {/* <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-0 items-center w-full"> */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-0 items-center w-full">
          {/* ── Left: Text ─────────────────────── */}
          <div className="flex flex-col gap-6 lg:pr-10 z-10">
            {/* Role pill */}
            <motion.div {...fadeUp(0.1)}>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#2A2A2A] bg-[#141414] text-xs text-gray-400 font-medium tracking-widest uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                {profile.role} · Open to Opportunities
              </span>
            </motion.div>

            {/* Main heading */}
            <motion.h1
              {...fadeUp(0.2)}
              className="hero-heading font-black leading-none tracking-tight"
              style={{ fontSize: 'clamp(3rem, 7vw, 5.5rem)' }}
            >
              Hi, I'm
              <br />
              {profile.shortName}
            </motion.h1>

            {/* Tagline */}
            <motion.p
              {...fadeUp(0.3)}
              className="text-gray-400 font-light leading-relaxed max-w-lg"
              style={{ fontSize: 'clamp(0.95rem, 1.8vw, 1.15rem)' }}
            >
              {profile.tagline}
            </motion.p>

            {/* Spec row */}
            <motion.div
              {...fadeUp(0.35)}
              className="flex flex-wrap gap-3 text-xs text-gray-500 font-mono"
            >
              <span className="border border-[#222] px-3 py-1 rounded bg-[#111]">{profile.specialization}</span>
              <span className="border border-[#222] px-3 py-1 rounded bg-[#111]">{profile.yearsOfExperience}+ years</span>
              <span className="border border-[#222] px-3 py-1 rounded bg-[#111]">{profile.location}</span>
            </motion.div>

            {/* CTA buttons */}
            <motion.div {...fadeUp(0.45)} className="flex flex-wrap gap-3 mt-1">
              <a
                href="#projects"
                onClick={e => {
                  e.preventDefault();
                  document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="gradient-btn text-white font-semibold px-6 py-3 rounded-full text-sm flex items-center gap-2 shadow-lg shadow-purple-900/20"
              >
                View Work <ArrowRight size={15} />
              </a>
              <a
                href={profile.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-full text-sm font-semibold border border-[#2A2A2A] bg-[#141414] text-gray-200 hover:border-[#3A3A3A] hover:text-white transition-colors flex items-center gap-2"
              >
                <ViewIcon size={15} />View CV
              </a>
            </motion.div>

            {/* Social pills */}
            <motion.div {...fadeUp(0.55)}>
              <SocialLinks social={profile.social} variant="pills" />
            </motion.div>
          </div>

          {/* ── Right: Avatar ──────────────────── */}
          {/* ── Right: Avatar ──────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] as const }}
            className="relative flex items-end justify-center lg:absolute lg:right-0 lg:top-0 lg:bottom-0 lg:w-[50%] lg:h-full"
          >
            {/* Bottom fade only — no left fade bleeding into avatar */}
            <div
              className="absolute bottom-0 left-0 right-0 h-40 lg:h-64 pointer-events-none z-10"
              style={{
                background: 'linear-gradient(to top, #0C0C0C 10%, transparent 100%)',
              }}
            />

            {/* Subtle left fade — much narrower, only on desktop */}
            <div
              className="absolute top-0 left-0 bottom-0 w-24 pointer-events-none z-10 hidden lg:block"
              style={{
                background: 'linear-gradient(to right, #0C0C0C 0%, transparent 100%)',
              }}
            />

            <img
              src={avatarImg}
              alt={profile.name}
              className="relative z-0 h-auto object-contain object-bottom select-none
               w-[260px] sm:w-[320px] md:w-[380px] lg:w-full"
              style={{ maxHeight: '88vh' }}
              draggable={false}
            />
          </motion.div>
        </div>
      </div>

      {/* Bottom scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] tracking-widest uppercase text-gray-600 font-medium">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-[#3A3A3A] to-transparent" />
      </motion.div>
    </section>
  );
}
