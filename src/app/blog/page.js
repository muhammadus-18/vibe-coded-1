import { getAllPosts } from '@/lib/posts';
import Link from 'next/link';
import Image from 'next/image';

export default function Blog() {
  const posts = getAllPosts();

  return (
    <div className="min-h-screen bg-background py-20">
      <div className="container-page">
        {/* Header */}
        <div className="text-center mb-16" data-reveal>
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6">
            Blog
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto">
            Thoughts, tutorials, and insights on web development and design.
          </p>
        </div>

        {/* Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group block card card-hover overflow-hidden backface-hidden"
              data-reveal
            >
              {/* Image Container */}
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={post.coverImage}
                  alt={post.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 backface-hidden group-hover:scale-[1.02]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-80 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white text-xl font-bold line-clamp-2">
                    {post.title}
                  </h3>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-gray-400 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <time className="text-sm text-gray-500">
                    {new Date(post.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </time>
                  <span className="text-accent-300 text-sm font-medium group-hover:text-accent-200 transition-colors">
                    Read more
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
