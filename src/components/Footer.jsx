import { site } from '@/lib/site';
import MagneticButton from '@/components/MagneticButton';

export default function Footer() {
  return (
    <footer className="border-t border-outline-variant/30 py-10 mt-auto">
      <div className="container-page">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-mono text-sm text-foreground uppercase tracking-wider">
              © {new Date().getFullYear()} {site.name}
            </p>
            <p className="font-sans text-xs text-on-surface-variant mt-1">
              Built with Next.js, Tailwind, and GSAP.
            </p>
          </div>
          <div className="flex items-center gap-4 text-sm">
            <MagneticButton
              className="font-mono text-on-surface hover:text-primary-container transition-colors uppercase tracking-widest text-[11px]"
              href={`mailto:${site.email}`}
              max={10}
            >
              {site.email}
            </MagneticButton>
            <span className="text-outline-variant/50">/</span>
            <MagneticButton
              className="font-mono text-on-surface hover:text-primary-container transition-colors uppercase tracking-widest text-[11px]"
              href={site.socials.github}
              max={10}
            >
              GitHub
            </MagneticButton>
            <span className="text-outline-variant/50">/</span>
            <MagneticButton
              className="font-mono text-on-surface hover:text-primary-container transition-colors uppercase tracking-widest text-[11px]"
              href={site.socials.linkedin}
              max={10}
            >
              LinkedIn
            </MagneticButton>
          </div>
        </div>
      </div>
    </footer>
  );
}
