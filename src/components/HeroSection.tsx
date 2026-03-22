'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { HERO } from '@/lib/constants';
import TextReveal from '@/components/animations/TextReveal';
import MagneticButton from '@/components/animations/MagneticButton';

export default function HeroSection({ onOrderClick }: { onOrderClick: () => void }) {
  const prefersReducedMotion = useReducedMotion();
  const { scrollY } = useScroll();
  const backgroundY = useTransform(scrollY, [0, 500], [0, 150]);

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-primary">
      {/* Background image with Ken Burns */}
      <motion.div
        className="absolute inset-0 animate-ken-burns"
        style={{ y: prefersReducedMotion ? 0 : backgroundY }}
      >
        <Image
          src="/images/06-salad-fresh.jpg"
          alt="3 גלגלי שווארמה במסעדה — יוני71"
          fill
          priority
          quality={85}
          className="object-cover"
        />
      </motion.div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark/70 via-primary/80 to-primary" />

      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
        <blockquote>
          <TextReveal
            text={HERO.title}
            className="mb-4 text-3xl font-black leading-tight text-light sm:text-5xl lg:text-6xl"
            delay={0.3}
          />
          <motion.cite
            className="block text-lg font-light not-italic text-accent sm:text-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0 }}
          >
            — יוני לוי
          </motion.cite>
        </blockquote>

        <div className="mb-6 sm:mb-10" />

        <div className="flex flex-col items-stretch gap-4 px-4 sm:flex-row sm:items-center sm:justify-center sm:px-0">
          <MagneticButton className="sm:w-auto">
            <button
              onClick={onOrderClick}
              className="w-full rounded-full bg-accent px-6 py-3 font-bold text-primary transition-all hover:bg-accent/90 hover:shadow-lg sm:w-auto sm:px-8"
            >
              {HERO.cta1}
            </button>
          </MagneticButton>
          <MagneticButton className="sm:w-auto">
            <Link
              href="/menu"
              className="block w-full rounded-full border-2 border-light px-6 py-3 text-center font-bold text-light transition-all hover:bg-light/10 sm:w-auto sm:px-8"
            >
              {HERO.cta2}
            </Link>
          </MagneticButton>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <svg
          className="h-8 w-8 text-light/60"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </motion.div>
    </section>
  );
}
