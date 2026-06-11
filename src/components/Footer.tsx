import { useState } from 'react';
import { Copy, Check, Github, Linkedin, Twitter, MapPin } from 'lucide-react';
import { usePortfolio } from '../hooks/usePortfolio';

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Testimonials', href: '#testimonials' },
];

const SOCIAL_ICONS: Record<string, React.FC<{ size?: number; strokeWidth?: number; className?: string }>> = {
  github: Github,
  linkedin: Linkedin,
  twitter: Twitter,
};

export default function Footer() {
  const { profile } = usePortfolio();
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // fallback: select text
    }
  };

  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-neutral-800 bg-neutral-950/60">
      {/* Three-column content */}
      <div className="px-6 md:px-12 lg:px-24 max-w-7xl mx-auto py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">

          {/* Col 1 — Brand */}
          <div className="space-y-4">
            <h2
              className="hero-heading text-3xl md:text-4xl font-bold leading-tight"
              style={{ fontFamily: 'Kanit, sans-serif' }}
            >
              {profile.name}
            </h2>
            <p className="text-neutral-500 text-sm leading-relaxed">{profile.specialization}</p>
            <div className="flex items-center gap-2 text-neutral-600 text-xs">
              <MapPin size={12} strokeWidth={1.5} />
              <span>{profile.location}</span>
            </div>
          </div>

          {/* Col 2 — Navigate */}
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-neutral-600 font-mono mb-5">
              Navigate
            </p>
            <nav aria-label="Footer navigation">
              <ul className="space-y-3">
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-neutral-400 text-sm hover:text-white transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Col 3 — Reach Out */}
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-neutral-600 font-mono mb-5">
              Reach Out
            </p>

            {/* Email + copy */}
            <div className="flex items-center gap-2 mb-3">
              <a
                href={`mailto:${profile.email}`}
                className="text-neutral-300 text-sm hover:text-white transition-colors duration-200"
              >
                {profile.email}
              </a>
              <button
                onClick={copyEmail}
                className="p-1.5 rounded text-neutral-600 hover:text-neutral-300 transition-colors duration-200"
                aria-label={copied ? 'Email copied' : 'Copy email address'}
              >
                {copied ? (
                  <Check size={13} strokeWidth={2} className="text-emerald-400" />
                ) : (
                  <Copy size={13} strokeWidth={1.5} />
                )}
              </button>
            </div>

            {/* Phone */}
            {profile.phone && (
              <a
                href={`tel:${profile.phone.replace(/\s/g, '')}`}
                className="block text-neutral-500 text-sm hover:text-neutral-300 transition-colors duration-200 mb-6"
              >
                {profile.phone}
              </a>
            )}

            {/* Social links */}
            <div className="flex items-center gap-4 mt-2">
              {Object.entries(profile.social)
                .filter(([key, val]) => key !== 'email' && val)
                .map(([platform, url]) => {
                  const Icon = SOCIAL_ICONS[platform];
                  if (!Icon) return null;
                  return (
                    <a
                      key={platform}
                      href={url as string}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-neutral-600 hover:text-white transition-colors duration-200"
                      aria-label={platform.charAt(0).toUpperCase() + platform.slice(1)}
                    >
                      <Icon size={16} strokeWidth={1.5} />
                    </a>
                  );
                })}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom strip */}
      <div className="border-t border-neutral-900 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto py-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p className="text-neutral-700 text-xs">
            © {year} {profile.name}. All rights reserved.
          </p>
          <p className="text-neutral-700 text-xs">
            Designed & built by{' '}
            <span className="text-neutral-500">{profile.shortName}</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
