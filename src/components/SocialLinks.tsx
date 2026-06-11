import { Github, Linkedin, Twitter, Globe, Mail } from 'lucide-react';
import type { SocialLinks as SocialLinksType } from '../types/portfolio';

interface Props {
  social: SocialLinksType;
  variant?: 'pills' | 'icons';
  className?: string;
}

const ICONS = {
  github:   { Icon: Github,   label: 'GitHub' },
  linkedin: { Icon: Linkedin, label: 'LinkedIn' },
  twitter:  { Icon: Twitter,  label: 'Twitter' },
  website:  { Icon: Globe,    label: 'Website' },
  email:    { Icon: Mail,     label: 'Email' },
};

export default function SocialLinks({ social, variant = 'pills', className = '' }: Props) {
  const entries = (Object.entries(ICONS) as [keyof typeof ICONS, (typeof ICONS)[keyof typeof ICONS]][])
    .filter(([key]) => {
      const val = social[key as keyof SocialLinksType];
      return val && val.trim() !== '';
    });

  if (entries.length === 0) return null;

  if (variant === 'icons') {
    return (
      <div className={`flex items-center gap-3 ${className}`}>
        {entries.map(([key, { Icon, label }]) => {
          const href = key === 'email'
            ? `mailto:${social.email}`
            : social[key as keyof SocialLinksType] as string;
          return (
            <a
              key={key}
              href={href}
              target={key !== 'email' ? '_blank' : undefined}
              rel="noopener noreferrer"
              aria-label={label}
              className="w-9 h-9 rounded-full border border-[#2A2A2A] flex items-center justify-center text-gray-400 hover:text-white hover:border-[#444] transition-colors"
            >
              <Icon size={15} />
            </a>
          );
        })}
      </div>
    );
  }

  return (
    <div className={`flex flex-wrap items-center gap-2 ${className}`}>
      {entries.map(([key, { Icon, label }]) => {
        const href = key === 'email'
          ? `mailto:${social.email}`
          : social[key as keyof SocialLinksType] as string;
        return (
          <a
            key={key}
            href={href}
            target={key !== 'email' ? '_blank' : undefined}
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-[#2A2A2A] bg-[#141414] text-gray-400 hover:text-white hover:border-[#3A3A3A] transition-colors text-xs font-medium tracking-wide"
          >
            <Icon size={12} />
            {label}
          </a>
        );
      })}
    </div>
  );
}
