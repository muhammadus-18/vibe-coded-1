import Image from 'next/image';

export default function CaseStudySections({ project }) {
  const responsibilities = project.caseStudy?.responsibilities ?? [];
  const metrics = project.caseStudy?.metrics ?? [];
  const screens = project.caseStudy?.screens ?? [];

  return (
    <div className="space-y-32">
      
      {/* 🛠️ Responsibilities Section */}
      <section data-reveal>
        <h3 className="text-xs font-bold text-gray-500 uppercase tracking-[0.4em] mb-12">Responsibilities</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/5 border border-white/5 rounded-3xl overflow-hidden">
          {responsibilities.map((r, i) => (
            <div key={i} className="bg-background p-8 md:p-10 flex items-start gap-4 hover:bg-white/[0.02] transition-colors">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-500 mt-2 shrink-0" />
              <span className="text-gray-300 font-medium leading-relaxed">{r}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 🚀 Impact Section */}
      <section data-reveal>
        <h3 className="text-xs font-bold text-gray-500 uppercase tracking-[0.4em] mb-12 text-center">Outcome & Impact</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {metrics.map((m, i) => (
            <div key={i} className="p-10 rounded-[2rem] bg-white/[0.03] border border-white/10 flex flex-col items-center text-center group hover:bg-accent-500/[0.03] hover:border-accent-500/20 transition-all duration-500">
              <div className="text-5xl font-black text-white mb-2 group-hover:scale-110 transition-transform">
                {m.value}
              </div>
              <div className="text-xs font-bold text-accent-500 uppercase tracking-widest">
                {m.label}
              </div>
              {m.note && (
                <p className="mt-4 text-xs text-gray-500 leading-relaxed max-w-[180px]">
                  {m.note}
                </p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* 📱 Screens Section (Staggered Gallery) */}
      <section data-reveal>
        <h3 className="text-xs font-bold text-gray-500 uppercase tracking-[0.4em] mb-12">Visual Breakdown</h3>
        <div className="grid grid-cols-1 gap-12">
          {screens.map((s, i) => (
            <figure 
              key={i} 
              className={`relative w-full rounded-[2rem] overflow-hidden border border-white/5 bg-white/[0.02] ${
                i % 2 === 0 ? 'md:pr-24' : 'md:pl-24'
              }`}
            >
              <div className="relative aspect-[16/10] overflow-hidden rounded-[1.5rem]">
                <Image
                  src={s.src}
                  alt={s.alt ?? 'Project Screen'}
                  fill
                  className="object-cover transition-transform duration-1000 hover:scale-105"
                />
              </div>
              {s.caption && (
                <figcaption className="p-8 text-center">
                  <span className="text-sm text-gray-400 italic">
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
