import MagneticButton from '@/components/MagneticButton';

export const metadata = {
  title: 'Contact',
  description: 'Get in touch.',
};

export default function Contact() {
  return (
    <div className="min-h-screen bg-background py-20">
      <div className="container-page">
        <header className="max-w-3xl" data-reveal>
          <h1 className="text-5xl md:text-7xl font-bold text-foreground">Contact</h1>
          <p className="text-lg md:text-2xl text-gray-400 mt-4">
            A clean, template-friendly contact page with a lightweight form. Wire it to your email provider later.
          </p>
        </header>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-7 card p-8 md:p-10" data-reveal>
            <form
              className="space-y-5"
              action="mailto:hello@example.com"
              method="post"
              encType="text/plain"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <label className="space-y-2">
                  <span className="text-sm text-gray-300">Name</span>
                  <input
                    name="name"
                    required
                    className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-foreground placeholder:text-gray-600"
                    placeholder="Jane Doe"
                  />
                </label>
                <label className="space-y-2">
                  <span className="text-sm text-gray-300">Email</span>
                  <input
                    name="email"
                    type="email"
                    required
                    className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-foreground placeholder:text-gray-600"
                    placeholder="jane@company.com"
                  />
                </label>
              </div>

              <label className="space-y-2 block">
                <span className="text-sm text-gray-300">Message</span>
                <textarea
                  name="message"
                  required
                  rows={6}
                  className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-foreground placeholder:text-gray-600"
                  placeholder="What are we building?"
                />
              </label>

              <div className="flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between pt-2">
                <MagneticButton as="button" type="submit" className="btn-primary" max={16}>
                  Send message
                </MagneticButton>
                <p className="text-sm text-gray-500">
                  Prefer email?{' '}
                  <MagneticButton className="text-gray-300 hover:text-foreground" href="mailto:hello@example.com" max={10}>
                    hello@example.com
                  </MagneticButton>
                </p>
              </div>
            </form>
          </div>

          <aside className="lg:col-span-5 space-y-6">
            <div className="card p-8" data-reveal data-reveal-from="right">
              <h2 className="text-xl font-semibold text-foreground">What to include</h2>
              <ul className="mt-3 space-y-2 text-gray-400">
                <li>• Timeline and scope</li>
                <li>• Target users and platforms</li>
                <li>• Examples you like (or dislike)</li>
                <li>• Success metrics</li>
              </ul>
            </div>
            <div className="card p-8" data-reveal data-reveal-from="right" data-reveal-delay="0.05">
              <h2 className="text-xl font-semibold text-foreground">Typical response time</h2>
              <p className="mt-3 text-gray-400">
                Within 1–2 business days. This is placeholder copy for your template—swap it to match your workflow.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}

