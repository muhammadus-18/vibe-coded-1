import Link from 'next/link';
import Image from 'next/image';
import { getProject, getNextProject } from '@/lib/projects';
import CaseStudySections from '@/components/CaseStudySections';

export default async function WorkDetail({ params }) {
  const { slug } = await params;
  const project = getProject(slug);
  const nextProject = getNextProject(slug);

  return (
    <div className="min-h-screen bg-background">
      {/* 🎬 Immersive Project Hero */}
      <section className="relative h-[80vh] w-full overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover scale-105"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
        
        <div className="absolute inset-0 flex flex-col justify-end">
          <div className="container-page pb-16">
            <Link 
              href="/work" 
              className="inline-flex items-center gap-2 font-mono text-xs text-on-surface-variant uppercase tracking-widest mb-8 hover:text-primary-container transition-colors group"
            >
              <span className="transform group-hover:-translate-x-1 transition-transform">←</span>
              Back to work
            </Link>
            <div className="max-w-4xl">
              <h1 
                className="font-display text-6xl md:text-[8vw] font-extrabold text-foreground leading-[0.85] tracking-tighter uppercase mb-6"
                data-reveal-text
              >
                {project.title}
              </h1>
              <div className="flex flex-wrap gap-3" data-reveal>
                {project.tags.map((t) => (
                  <span key={t} className="font-mono px-4 py-1.5 bg-surface-bright/20 backdrop-blur-md text-on-surface border border-outline-variant/30 rounded-xl text-xs uppercase tracking-widest">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container-page py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* 📝 Main Content column */}
          <div className="lg:col-span-8 space-y-24">
            
            {/* Overview Section */}
            <section data-reveal>
              <h2 className="font-mono text-xs text-on-surface-variant uppercase tracking-widest mb-10">Overview</h2>
              <p className="font-display text-2xl md:text-4xl font-bold text-foreground leading-tight tracking-tight mb-12">
                {project.description}
              </p>
              <div className="prose prose-invert prose-lg max-w-none text-on-surface-variant font-sans">
                <p>
                This project was a deep dive into {project.tags[0]} and {project.tags[1]}.
                We focused on creating a system that didn't just meet the technical requirements,
                but set a new standard for how users interact with {project.title}.
                </p>
              </div>
            </section>

            {/* Injected Case Study Sections (Story, Problems, Approach) */}
            <CaseStudySections project={project} />

          </div>

          {/* 📊 Sticky Project Sidebar */}
          <aside className="lg:col-span-4 lg:sticky lg:top-32 h-fit space-y-12">
            
            <div className="space-y-6" data-reveal>
              <h3 className="font-mono text-[10px] text-on-surface-variant uppercase tracking-widest">The Spec</h3>
              <div className="space-y-4">
                <div className="p-6 bg-surface-bright/20 border border-outline-variant/20 rounded-[12px]">
                  <span className="font-mono text-[10px] text-on-surface-variant uppercase block mb-1 tracking-widest">Role</span>
                  <span className="font-display text-foreground font-bold">{project.caseStudy?.role || 'Lead Engineering'}</span>
                </div>
                <div className="p-6 bg-surface-bright/20 border border-outline-variant/20 rounded-[12px]">
                  <span className="font-mono text-[10px] text-on-surface-variant uppercase block mb-1 tracking-widest">Timeline</span>
                  <span className="font-display text-foreground font-bold">{project.caseStudy?.timeline || '4 Weeks'}</span>
                </div>
              </div>
            </div>

            <div className="space-y-6" data-reveal data-reveal-delay="0.1">
              <h3 className="font-mono text-[10px] text-on-surface-variant uppercase tracking-widest">Stack</h3>
              <div className="flex flex-wrap gap-2">
                {(project.caseStudy?.stack || project.tags).map(s => (
                  <span key={s} className="font-mono px-3 py-1 bg-surface-bright/20 border border-outline-variant/30 rounded-xl text-xs text-on-surface uppercase tracking-widest">{s}</span>
                ))}
              </div>
            </div>

            <div className="pt-8 space-y-4" data-reveal data-reveal-delay="0.2">
              {project.links?.live && (
                <a 
                  href={project.links.live} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full btn-primary justify-center py-4"
                >
                  Visit Live Site
                </a>
              )}
              {project.links?.repo && (
                <a 
                  href={project.links.repo} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full btn-ghost justify-center py-4"
                >
                  View Repository
                </a>
              )}
            </div>
          </aside>
        </div>
      </div>

      {/* ⏭️ Next Project Teaser */}
      <Link 
        href={`/work/${nextProject.id}`}
        className="block relative h-[50vh] w-full overflow-hidden group border-t border-white/5"
      >
        <Image
          src={nextProject.image}
          alt={nextProject.title}
          fill
          className="object-cover opacity-20 grayscale group-hover:opacity-40 group-hover:scale-105 transition-all duration-1000"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <span className="font-mono text-xs font-bold text-primary-container uppercase tracking-widest mb-6 block transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all">
            Next Project
          </span>
          <h2 className="font-display text-5xl md:text-8xl font-extrabold text-foreground uppercase tracking-tighter">
            {nextProject.title}
          </h2>
          <div className="mt-8 flex items-center gap-2 font-mono text-foreground font-bold uppercase tracking-widest text-sm transform -translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all delay-75">
            View Case Study <span>→</span>
          </div>
        </div>
      </Link>
    </div>
  );
}
