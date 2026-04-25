import GithubSlugger from 'github-slugger';
import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';

const POSTS_DIR = path.join(process.cwd(), 'posts');

let cachedPosts = null;

function readPostFile(slug) {
  const filePath = path.join(POSTS_DIR, `${slug}.mdx`);
  const raw = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(raw);

  return {
    slug,
    title: data.title ?? slug,
    date: data.date ?? null,
    excerpt: data.excerpt ?? '',
    coverImage: data.coverImage ?? null,
    content,
  };
}

export function getAllPosts() {
  if (cachedPosts) return cachedPosts;

  const files = fs.existsSync(POSTS_DIR) ? fs.readdirSync(POSTS_DIR) : [];
  const slugs = files
    .filter((f) => f.endsWith('.mdx'))
    .map((f) => f.replace(/\.mdx$/, ''));

  const posts = slugs.map((slug) => readPostFile(slug));
  cachedPosts = posts.sort((a, b) => String(b.date).localeCompare(String(a.date)));
  return cachedPosts;
}

export function getPostData(slug) {
  return readPostFile(slug);
}

export function getTableOfContents(content) {
  const headingRegex = /^(#{1,3})\s+(.+)$/gm;
  const headings = [];
  let match;
  const slugger = new GithubSlugger();

  while ((match = headingRegex.exec(content)) !== null) {
    const level = match[1].length;
    const text = match[2].trim();
    const id = slugger.slug(text);
    
    headings.push({
      level,
      text,
      id,
    });
  }

  return headings;
}
