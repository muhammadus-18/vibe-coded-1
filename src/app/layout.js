import { Plus_Jakarta_Sans, Hanken_Grotesk, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import GSAPProvider from '@/components/GSAPProvider';
import MotionProvider from '@/components/MotionProvider';
import SmoothScroll from '@/components/SmoothScroll';
import CommandMenu from '@/components/CommandMenu';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { getAllPosts } from '@/lib/posts';
import { projects } from '@/lib/projects';

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
});

const hankenGrotesk = Hanken_Grotesk({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata = {
  title: 'Ava Chen Portfolio',
  description: 'Editorial Portfolio for Ava Chen',
};

export default function RootLayout({ children }) {
  const allPosts = getAllPosts();
  const posts = allPosts.map(p => ({ title: p.title, slug: p.slug }));
  const minimalProjects = projects.map(p => ({ title: p.title, id: p.id }));

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${hankenGrotesk.variable} ${plusJakartaSans.variable} ${jetbrainsMono.variable} antialiased`}
        suppressHydrationWarning
      >
        <GSAPProvider>
          <MotionProvider />
          <SmoothScroll>
            <a
              href="#main"
              className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 bg-background border border-white/10 text-foreground px-4 py-2 rounded-xl"
            >
              Skip to content
            </a>
            <Navbar />
            <main id="main">{children}</main>
            <Footer />
            <CommandMenu dynamicPosts={posts} dynamicProjects={minimalProjects} />
            <Analytics />
            <SpeedInsights />
          </SmoothScroll>
        </GSAPProvider>
      </body>
    </html>
  );
}
