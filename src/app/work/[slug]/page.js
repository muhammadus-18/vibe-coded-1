import Link from 'next/link';
import Image from 'next/image';
import { getProject } from '@/lib/projects';
import CaseStudySections from '@/components/CaseStudySections';

export default async function WorkDetail({ params }) {
  const { slug } = await params;
  const project = getProject(slug);

  return (
    <div className="min-h-screen bg-background py-16">
      <div className="container-page">
        <div className="mb-8">
          <Link href="/work" className="text-sm text-gray-400 hover:text-foreground transition-colors">
            ← Back to work
          </Link>
        </div>

        <header className="mb-10" data-reveal>
          <h1 className="text-4xl md:text-6xl font-bold text-foreground text-balance">
            {project.title}
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-400 max-w-3xl">
            {project.description}
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {project.tags.map((t) => (
              <span key={t} className="px-3 py-1 bg-white/5 text-gray-300 border border-white/10 rounded-full text-sm">
                {t}
              </span>
            ))}
          </div>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            {project.links?.live && (
              <a className="btn-primary" href={project.links.live} target="_blank" rel="noreferrer">
                View live
              </a>
            )}
            {project.links?.repo && (
              <a className="btn-ghost" href={project.links.repo} target="_blank" rel="noreferrer">
                View code
              </a>
            )}
          </div>
        </header>

        <div className="card overflow-hidden" data-reveal>
          <div className="relative aspect-video">
            <Image
              src={project.image}
              alt={project.title}
              fill
              sizes="(max-width: 768px) 100vw, 80vw"
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
          </div>
          <div className="p-8 md:p-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="md:col-span-2">
                <h2 className="text-2xl font-semibold text-foreground mb-3">Overview</h2>
                <p className="text-gray-400 leading-relaxed">
                  This case study template is ready for real content. The next step is to replace the placeholder
                  narrative with your actual constraints, trade-offs, and measurable outcomes (performance, conversion,
                  accessibility, DX).
                </p>

                <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                    <h3 className="text-sm font-semibold text-gray-200 uppercase tracking-wide">Problem</h3>
                    <p className="mt-2 text-gray-400">
                      A clear problem statement belongs here. Keep it short and concrete.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                    <h3 className="text-sm font-semibold text-gray-200 uppercase tracking-wide">Approach</h3>
                    <p className="mt-2 text-gray-400">
                      Summarize the architecture + UX decisions and why they mattered.
                    </p>
                  </div>
                </div>
              </div>
              <aside className="md:col-span-1">
                <h3 className="text-sm font-semibold text-gray-200 uppercase tracking-wide mb-3">Highlights</h3>
                <ul className="space-y-2 text-sm text-gray-400">
                  {(project.outcomes?.length ? project.outcomes : [
                    'Fast, responsive UI',
                    'Motion with restraint',
                    'Accessible interactions',
                  ]).map((o) => (
                    <li key={o}>• {o}</li>
                  ))}
                </ul>
              </aside>
            </div>
          </div>
        </div>

        <div className="mt-10" data-reveal>
          <CaseStudySections project={project} />
        </div>
      </div>
    </div>
  );
}
