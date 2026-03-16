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
          src="/images/07-shawarma-plate.jpg"
          alt="שווארמה בצלחת עם אורז ותוספות — יוני71"
          fill
          priority
          quality={85}
          className="object-cover"
        />
      </motion.div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark/70 via-primary/80 to-primary" />

      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
        <TextReveal
          text={HERO.title}
          className="mb-6 text-4xl font-black leading-tight text-light sm:text-5xl lg:text-6xl"
          delay={0.3}
        />

        {/* Separator line */}
        <motion.div
          className="mx-auto mb-6 h-16 w-px bg-accent"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          style={{ originX: 0.5 }}
        />

        <motion.p
          className="mb-10 font-montserrat text-lg tracking-wider text-accent sm:text-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0 }}
        >
          {HERO.subtitle}
        </motion.p>

        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <MagneticButton>
            <button
              onClick={onOrderClick}
              className="rounded-full bg-accent px-8 py-3 font-bold text-primary transition-all hover:bg-accent/90 hover:shadow-lg"
            >
              {HERO.cta1}
            </button>
          </MagneticButton>
          <MagneticButton>
            <Link
              href="/menu"
              className="rounded-full border-2 border-light px-8 py-3 font-bold text-light transition-all hover:bg-light/10"
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
