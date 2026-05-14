import Image from 'next/image';

export default function CaseStudySections({ project }) {
  const responsibilities = project.caseStudy?.responsibilities ?? [];
  const metrics = project.caseStudy?.metrics ?? [];
  const screens = project.caseStudy?.screens ?? [];

  return (
    <div className="space-y-40">
      
      {/* 🛠️ Responsibilities Section */}
      <section data-reveal>
        <h3 className="font-mono text-xs font-bold text-on-surface-variant uppercase tracking-widest mb-12">Responsibilities</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-surface-bright/20 border border-outline-variant/30 rounded-[12px] overflow-hidden">
          {responsibilities.map((r, i) => (
            <div key={i} className="bg-surface/80 p-8 md:p-10 flex items-start gap-4 hover:bg-surface-bright/40 transition-colors">
              <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
              <span className="font-sans text-on-surface-variant font-medium leading-relaxed">{r}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 🚀 Impact Section */}
      <section data-reveal>
        <h3 className="font-mono text-xs font-bold text-on-surface-variant uppercase tracking-widest mb-12 text-center">Outcome & Impact</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {metrics.map((m, i) => (
            <div key={i} className="p-10 rounded-[12px] bg-surface-bright/20 border border-outline-variant/30 flex flex-col items-center text-center group hover:bg-surface-bright/40 hover:border-primary/50 transition-all duration-500">
              <div className="font-display text-5xl md:text-6xl font-extrabold text-foreground mb-4 group-hover:scale-105 transition-transform tracking-tight">
                {m.value}
              </div>
              <div className="font-mono text-xs font-bold text-primary uppercase tracking-widest">
                {m.label}
              </div>
              {m.note && (
                <p className="mt-4 font-sans text-xs text-on-surface-variant/70 leading-relaxed max-w-[180px]">
                  {m.note}
                </p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* 📱 Screens Section (Staggered Gallery) */}
      <section data-reveal>
        <h3 className="font-mono text-xs font-bold text-on-surface-variant uppercase tracking-widest mb-12">Visual Breakdown</h3>
        <div className="grid grid-cols-1 gap-24">
          {screens.map((s, i) => (
            <figure 
              key={i} 
              className={`relative w-full rounded-[12px] overflow-hidden border border-outline-variant/20 bg-surface-bright/20 p-4 ${
                i % 2 === 0 ? 'md:pr-24 lg:w-10/12' : 'md:pl-24 lg:w-10/12 lg:ml-auto'
              }`}
            >
              <div className="relative aspect-[16/10] overflow-hidden rounded-[8px] bg-background">
                <Image
                  src={s.src}
                  alt={s.alt ?? 'Project Screen'}
                  fill
                  className="object-cover transition-transform duration-1000 hover:scale-105"
                />
              </div>
              {s.caption && (
                <figcaption className="p-6 text-center">
                  <span className="font-sans text-sm text-on-surface-variant italic">
                    — {s.caption}
                  </span>
                </figcaption>
              )}
            </figure>
          ))}
        </div>
      </section>

    </div>
  );
}
