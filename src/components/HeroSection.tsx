'use client';

import Link from 'next/link';
import { HERO } from '@/lib/constants';

export default function HeroSection({ onOrderClick }: { onOrderClick: () => void }) {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-primary">
      {/* Background placeholder with overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark/70 via-primary/80 to-primary" />

      {/* Placeholder image background */}
      <div className="absolute inset-0 bg-primary/30">
        <div className="h-full w-full bg-[url('/images/hero-placeholder.jpg')] bg-cover bg-center opacity-40" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
        <h1 className="mb-6 text-4xl font-black leading-tight text-light sm:text-5xl lg:text-6xl">
          {HERO.title}
        </h1>

        {/* Separator line */}
        <div className="mx-auto mb-6 h-16 w-px bg-accent" />

        <p className="mb-10 font-montserrat text-lg tracking-wider text-accent sm:text-xl">
          {HERO.subtitle}
        </p>

        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <button
            onClick={onOrderClick}
            className="rounded-full bg-accent px-8 py-3 font-bold text-primary transition-all hover:bg-accent/90 hover:shadow-lg"
          >
            {HERO.cta1}
          </button>
          <Link
            href="/menu"
            className="rounded-full border-2 border-light px-8 py-3 font-bold text-light transition-all hover:bg-light/10"
          >
            {HERO.cta2}
          </Link>
        </div>
      </div>
    </section>
  );
}
