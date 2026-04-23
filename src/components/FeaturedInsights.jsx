import Link from 'next/link';

export default function FeaturedInsights({ posts }) {
  if (!posts || posts.length === 0) return null;

  return (
    <section className="container-page py-24">
      <div className="flex items-end justify-between gap-6 mb-12" data-reveal>
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-5xl font-bold text-white uppercase tracking-tighter">
            Featured <br /> <span className="text-gray-600 font-serif lowercase italic">Insights</span>
          </h2>
          <p className="text-gray-400 mt-4 text-lg">
            Thoughts on design, engineering, and the future of the web.
          </p>
        </div>
        <Link href="/blog" className="text-sm font-bold text-accent-500 hover:text-white transition-colors uppercase tracking-widest border-b border-accent-500/30 pb-1">
          View all posts
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {posts.slice(0, 3).map((post, i) => (
          <Link 
            key={post.slug} 
            href={`/blog/${post.slug}`}
            className="group block"
            data-reveal
            data-reveal-delay={i * 0.1}
          >
            <div className="card p-8 h-full flex flex-col justify-between hover:border-accent-500/30 transition-all duration-500 bg-white/[0.02]">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-[10px] font-bold text-accent-500 uppercase tracking-[0.2em]">
                    {post.date || 'Recent'}
                  </span>
                  <div className="h-px flex-1 bg-white/5" />
                </div>
                <h3 className="text-2xl font-bold text-white leading-tight group-hover:text-accent-400 transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-400 mt-4 line-clamp-3 text-sm leading-relaxed">
                  {post.excerpt}
                </p>
              </div>
              
              <div className="mt-8 flex items-center gap-2 text-xs font-bold text-gray-500 uppercase tracking-widest group-hover:text-white transition-colors">
                Read Article
                <span className="transform translate-x-0 group-hover:translate-x-2 transition-transform duration-300">→</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
