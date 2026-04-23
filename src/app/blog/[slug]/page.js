import Link from 'next/link';
import Image from 'next/image';
import { getPostData, getTableOfContents } from '@/lib/posts';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeSanitize, { defaultSchema } from 'rehype-sanitize';
import rehypeSlug from 'rehype-slug';
import rehypeHighlight from 'rehype-highlight';
import BlogPostTocClient from './BlogPostTocClient';

export default async function BlogPost({ params }) {
  const { slug } = await params;
  const post = getPostData(slug);
  const headings = getTableOfContents(post.content);

  return (
    <div className="min-h-screen bg-background py-20">
      <div className="container-page">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            <article className="card p-8 md:p-10 blog-content" data-reveal>
              {/* Header */}
              <header className="mb-8">
                <Link
                  href="/blog"
                  className="inline-flex items-center text-gray-400 hover:text-gray-300 mb-4 transition-colors"
                >
                  <span className="mr-2">×</span> Back to Blog
                </Link>
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                  {post.title}
                </h1>
                <div className="flex items-center text-sm text-gray-400">
                  <time>
                    {new Date(post.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </time>
                  <span className="mx-2">·</span>
                  <span>5 min read</span>
                </div>
              </header>

              {/* Cover Image */}
              {post.coverImage && (
                <div className="mb-8">
                  <div className="relative w-full h-64 md:h-96">
                    <Image
                      src={post.coverImage}
                      alt={post.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 80vw"
                      className="object-cover rounded-xl"
                    />
                  </div>
                </div>
              )}

              {/* Content */}
              <div className="prose prose-lg max-w-none prose-invert custom-syntax-highlighting">
                <ReactMarkdown
                  remarkPlugins={[remarkGfm]}
                  rehypePlugins={[
                    rehypeSlug,
                    [
                      rehypeSanitize,
                      {
                        ...defaultSchema,
                        attributes: {
                          ...defaultSchema.attributes,
                          h1: [...(defaultSchema.attributes?.h1 || []), ['id']],
                          h2: [...(defaultSchema.attributes?.h2 || []), ['id']],
                          h3: [...(defaultSchema.attributes?.h3 || []), ['id']],
                          code: [
                            ...(defaultSchema.attributes?.code || []),
                            ['className'],
                          ],
                          pre: [
                            ...(defaultSchema.attributes?.pre || []),
                            ['className'],
                          ],
                        },
                      },
                    ],
                    rehypeHighlight,
                  ]}
                >
                  {post.content}
                </ReactMarkdown>
              </div>
            </article>
          </div>

          {/* Table of Contents */}
          <div className="lg:col-span-1" data-reveal data-reveal-from="right" data-reveal-delay="0.05">
            <BlogPostTocClient headings={headings} />
          </div>
        </div>
      </div>
    </div>
  );
}
