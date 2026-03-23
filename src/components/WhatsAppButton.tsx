'use client';

import { useState, useEffect } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { TABIT_URL } from '@/lib/constants';

export default function WhatsAppButton() {
  const prefersReducedMotion = useReducedMotion();
  const [hasEntered, setHasEntered] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setHasEntered(true), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.a
      href={TABIT_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`fixed bottom-6 left-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-accent text-primary shadow-lg transition-colors hover:bg-accent/90 ${
        hasEntered ? 'animate-pulse-glow' : ''
      }`}
      aria-label="להזמנה בטביט"
      initial={prefersReducedMotion ? false : { scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 300, delay: 2 }}
      whileHover={{ scale: 1.15 }}
    >
      <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z" />
      </svg>
    </motion.a>
  );
}
