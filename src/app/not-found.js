import Link from 'next/link';
import MagneticButton from '@/components/MagneticButton';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] bg-background flex items-center">
      <div className="container-page py-20">
        <div className="max-w-2xl card p-10" data-reveal>
          <p className="text-sm text-gray-400">404</p>
          <h1 className="text-3xl md:text-5xl font-bold text-foreground mt-2">
            This page doesn’t exist.
          </h1>
          <p className="text-gray-400 mt-4">
            This template includes a custom not-found screen. Swap this copy, add an illustration, or link to your best work.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <MagneticButton href="/" className="btn-primary" max={14}>
              Back home
            </MagneticButton>
            <MagneticButton href="/work" className="btn-ghost" max={12}>
              Explore work
            </MagneticButton>
          </div>
        </div>
      </div>
    </div>
  );
}

