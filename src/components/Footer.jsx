import { site } from '@/lib/site';
import MagneticButton from '@/components/MagneticButton';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-10">
      <div className="container-page">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm text-gray-300">
              © {new Date().getFullYear()} {site.name}
            </p>
            <p className="text-xs text-gray-500 mt-1">
              Built with Next.js, Tailwind, and GSAP.
            </p>
          </div>
          <div className="flex items-center gap-4 text-sm">
            <MagneticButton
              className="text-gray-400 hover:text-foreground transition-colors"
              href={`mailto:${site.email}`}
              max={10}
            >
              {site.email}
            </MagneticButton>
            <span className="text-gray-700">/</span>
            <MagneticButton
              className="text-gray-400 hover:text-foreground transition-colors"
              href={site.socials.github}
              max={10}
            >
              GitHub
            </MagneticButton>
            <span className="text-gray-700">/</span>
            <MagneticButton
              className="text-gray-400 hover:text-foreground transition-colors"
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
