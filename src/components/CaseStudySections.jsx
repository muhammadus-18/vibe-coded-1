import Image from 'next/image';

function Section({ title, children }) {
  return (
    <section className="card p-8 md:p-10">
      <h2 className="text-xl md:text-2xl font-semibold text-foreground">{title}</h2>
      <div className="mt-4">{children}</div>
    </section>
  );
}

function Pill({ children }) {
  return (
    <span className="px-3 py-1 bg-white/5 text-gray-300 border border-white/10 rounded-full text-xs">
      {children}
    </span>
  );
}

export default function CaseStudySections({ project }) {
  const role = project.caseStudy?.role;
  const timeline = project.caseStudy?.timeline;
  const responsibilities = project.caseStudy?.responsibilities ?? [];
  const stack = project.caseStudy?.stack ?? [];
  const metrics = project.caseStudy?.metrics ?? [];
  const screens = project.caseStudy?.screens ?? [];

  return (
    <div className="space-y-8">
      <Section title="Project at a glance">
        <dl className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <dt className="text-xs uppercase tracking-wide text-gray-400">Role</dt>
            <dd className="mt-2 text-gray-200">{role ?? 'Template role (edit in project data)'}</dd>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <dt className="text-xs uppercase tracking-wide text-gray-400">Timeline</dt>
            <dd className="mt-2 text-gray-200">{timeline ?? 'Template timeline (e.g. 4 weeks)'}</dd>
          </div>
        </dl>
      </Section>

      <Section title="Responsibilities">
        {responsibilities.length ? (
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-gray-400">
            {responsibilities.map((r) => (
              <li key={r} className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                {r}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-400">
            Add responsibilities in <code className="bg-white/5 border border-white/10 rounded px-2 py-1">project.caseStudy.responsibilities</code>.
          </p>
        )}
      </Section>

      <Section title="Stack">
        {stack.length ? (
          <div className="flex flex-wrap gap-2">
            {stack.map((s) => (
              <Pill key={s}>{s}</Pill>
            ))}
          </div>
        ) : (
          <p className="text-gray-400">
            Add stack items in <code className="bg-white/5 border border-white/10 rounded px-2 py-1">project.caseStudy.stack</code>.
          </p>
        )}
      </Section>

      <Section title="Impact / metrics">
        {metrics.length ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {metrics.map((m) => (
              <div key={m.label} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <div className="text-2xl font-semibold text-foreground">{m.value}</div>
                <div className="mt-1 text-sm text-gray-400">{m.label}</div>
                {m.note ? <div className="mt-2 text-xs text-gray-500">{m.note}</div> : null}
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-400">
            Add metrics in <code className="bg-white/5 border border-white/10 rounded px-2 py-1">project.caseStudy.metrics</code>.
          </p>
        )}
      </Section>

      <Section title="Screens">
        {screens.length ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {screens.map((s) => (
              <figure key={s.src} className="rounded-2xl overflow-hidden border border-white/10 bg-white/5">
                <div className="relative aspect-video">
                  <Image
                    src={s.src}
                    alt={s.alt ?? 'Case study screen'}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
                </div>
                {s.caption ? (
                  <figcaption className="p-4 text-sm text-gray-400">{s.caption}</figcaption>
                ) : null}
              </figure>
            ))}
          </div>
        ) : (
          <p className="text-gray-400">
            Add screen entries in <code className="bg-white/5 border border-white/10 rounded px-2 py-1">project.caseStudy.screens</code>.
          </p>
        )}
      </Section>
    </div>
  );
}

