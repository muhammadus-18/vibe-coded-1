import HorizontalScroll from '@/components/HorizontalScroll';
import { projects } from '@/lib/projects';
import Link from 'next/link';
import MagneticButton from '@/components/MagneticButton';
import ProjectGrid from '@/components/ProjectGrid';

export const metadata = {
  title: 'Work',
  description: 'A curated set of builds with a focus on performance, motion, and clean UX.',
};

export default function Work() {
  return (
    <div className="bg-background">
      {/* Header Section */}
      <div className="min-h-[70vh] flex items-center justify-center">
        <div className="text-center container-page py-20">
          <h1 className="font-display text-5xl md:text-7xl font-extrabold text-foreground mb-8 tracking-tighter uppercase" data-reveal>
            Featured Work
          </h1>
          <p className="font-sans text-xl md:text-2xl text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
            A curated set of builds with a focus on performance, motion, and clean UX.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center" data-reveal>
            <MagneticButton className="btn-primary font-mono uppercase tracking-wider text-xs" href="/contact" max={14}>
              Start a project
            </MagneticButton>
            <MagneticButton className="btn-ghost font-mono uppercase tracking-wider text-xs" href="/services" max={12}>
              View services
            </MagneticButton>
          </div>
        </div>
      </div>

      {/* Horizontal Scroll Section */}
      <HorizontalScroll projects={projects} />

      {/* What these case studies include */}
      <section className="container-page py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-5" data-reveal>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground headline tracking-tight">What you’ll see</h2>
            <p className="font-sans text-on-surface-variant mt-3 leading-relaxed">
              Each case study in this template uses a consistent structure so it’s easy to skim and compare.
            </p>
          </div>
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              { t: 'Role + timeline', d: 'Context up front—who did what, and how long it took.' },
              { t: 'Responsibilities', d: 'Concrete scope so the work is credible and legible.' },
              { t: 'Stack', d: 'Tools and patterns that shaped the build.' },
              { t: 'Impact', d: 'Metrics and outcomes (template placeholders you can replace).' },
            ].map((x) => (
              <div key={x.t} className="card p-6" data-reveal>
                <div className="font-display text-lg font-bold text-foreground tracking-tight">{x.t}</div>
                <p className="font-sans text-on-surface-variant mt-2 leading-relaxed">{x.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* More work (grid) */}
      <section className="container-page pb-20">
        <div className="flex items-end justify-between gap-6 mb-8" data-reveal>
          <div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground headline tracking-tight">Browse projects</h2>
            <p className="font-sans text-on-surface-variant mt-2 leading-relaxed">A clean grid layout (nice for accessibility and future SEO).</p>
          </div>
        </div>
        <ProjectGrid projects={projects} />
      </section>
    </div>
  );
}
