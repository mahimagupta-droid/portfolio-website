// import { motion } from 'framer-motion';
// import { usePortfolio } from '../hooks/usePortfolio';
// import type { Testimonial } from '../types/portfolio';

// function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
//   const initials = testimonial.name
//     .split(' ')
//     .map((n) => n[0])
//     .join('')
//     .toUpperCase()
//     .slice(0, 2);

//   return (
//     <article
//       className="flex-none w-[340px] md:w-[420px] bg-neutral-900/80 border border-neutral-800 rounded-2xl p-7 mx-3 select-none"
//       aria-label={`Testimonial from ${testimonial.name}`}
//     >
//       {/* Quote mark */}
//       <div
//         className="text-5xl leading-none mb-4 font-serif"
//         style={{ color: 'rgba(139,92,246,0.35)', fontFamily: 'Georgia, serif' }}
//         aria-hidden="true"
//       >
//         "
//       </div>

//       {/* Quote */}
//       <blockquote className="text-neutral-300 text-sm md:text-base leading-relaxed italic mb-6">
//         {testimonial.quote}
//       </blockquote>

//       {/* Attribution */}
//       <footer className="flex items-center gap-3 pt-5 border-t border-neutral-800">
//         {/* Avatar circle */}
//         <div
//           className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-semibold text-white shrink-0"
//           style={{ background: 'linear-gradient(135deg, #7C3AED, #DB2777)' }}
//           aria-hidden="true"
//         >
//           {initials}
//         </div>

//         <div>
//           <p className="text-white text-sm font-medium leading-tight">{testimonial.name}</p>
//           <p className="text-neutral-500 text-xs mt-0.5">
//             {testimonial.role} · {testimonial.company}
//           </p>
//         </div>
//       </footer>
//     </article>
//   );
// }

// export default function TestimonialsSection() {
//   const { testimonials } = usePortfolio();

//   // Duplicate list for seamless loop
//   const doubled = [...testimonials, ...testimonials];

//   return (
//     <section id="testimonials" className="py-28 overflow-hidden">
//       {/* Section header */}
//       <div className="px-6 md:px-12 lg:px-24 max-w-7xl mx-auto mb-16">
//         <motion.p
//           className="text-xs uppercase tracking-[0.2em] text-neutral-500 font-mono mb-6"
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.4 }}
//         >
//           Testimonials
//         </motion.p>

//         <motion.h2
//           className="hero-heading text-4xl md:text-5xl font-bold leading-tight"
//           style={{ fontFamily: 'Kanit, sans-serif' }}
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.5 }}
//         >
//           What teammates
//           <br />
//           say.
//         </motion.h2>
//       </div>

//       {/*
//         Marquee track — CSS-only animation.
//         Pauses on hover and respects prefers-reduced-motion.
//         Falls back to scroll-snap for users with reduced motion.
//       */}
//       <div
//         className="marquee-outer"
//         role="region"
//         aria-label="Testimonials carousel"
//       >
//         <div className="marquee-track" aria-hidden="false">
//           {doubled.map((t, i) => (
//             <TestimonialCard
//               key={`${t.id}-${i}`}
//               testimonial={t}
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
