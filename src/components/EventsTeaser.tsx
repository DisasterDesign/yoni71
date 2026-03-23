'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { EVENTS_TEASER } from '@/lib/constants';

export default function EventsTeaser() {
  return (
    <section className="bg-primary py-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mx-auto max-w-3xl px-4 text-center"
      >
        <motion.span
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ type: 'spring', stiffness: 300, delay: 0.2 }}
          className="mb-6 inline-block rounded-full bg-accent px-6 py-2 text-lg font-black text-primary"
        >
          {EVENTS_TEASER.badge}
        </motion.span>
        <h2 className="mb-4 text-3xl font-bold text-light sm:text-4xl">
          {EVENTS_TEASER.title}
        </h2>
        <p className="mb-8 text-lg text-light/80">
          {EVENTS_TEASER.subtitle}
        </p>
        <Link
          href="/events"
          className="inline-block rounded-full bg-accent px-8 py-3 font-bold text-primary transition-all hover:bg-accent/90 hover:shadow-lg"
        >
          {EVENTS_TEASER.cta}
        </Link>
      </motion.div>
    </section>
  );
}
