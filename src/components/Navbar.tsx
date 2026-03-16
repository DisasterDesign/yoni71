'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { NAV_LINKS } from '@/lib/constants';
import MagneticButton from '@/components/animations/MagneticButton';

export default function Navbar({ onOrderClick }: { onOrderClick: () => void }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'backdrop-blur-md bg-primary/95 shadow-lg'
          : 'bg-primary'
      }`}
      role="navigation"
      aria-label="ניווט ראשי"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className={`flex items-center justify-between transition-all duration-300 ${
          scrolled ? 'h-14' : 'h-16'
        }`}>
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: 'spring', stiffness: 200, damping: 15 }}
            >
              <Image
                src="/images/01-logo.png"
                alt="לוגו יוני71 — Burger & Bar"
                width={50}
                height={56}
                priority
                className="h-12 w-auto"
              />
            </motion.div>
          </Link>

          {/* Desktop Links */}
          <div className="hidden items-center gap-6 md:flex">
            {NAV_LINKS.map((link, index) => (
              <motion.div
                key={link.href}
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.05, duration: 0.3 }}
              >
                <Link
                  href={link.href}
                  className="nav-link-hover text-sm text-light transition-colors hover:text-accent"
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: NAV_LINKS.length * 0.05, duration: 0.3 }}
            >
              <MagneticButton>
                <button
                  onClick={onOrderClick}
                  className="animate-pulse-glow rounded-full bg-accent px-5 py-2 text-sm font-bold text-primary transition-colors hover:bg-accent/90"
                >
                  להזמנה
                </button>
              </MagneticButton>
            </motion.div>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-light p-2"
            aria-label={isOpen ? 'סגור תפריט' : 'פתח תפריט'}
            aria-expanded={isOpen}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="border-t border-light/10 bg-primary md:hidden">
          <div className="flex flex-col gap-2 px-4 py-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="nav-link-hover rounded px-3 py-2 text-light transition-colors hover:bg-light/10"
              >
                {link.label}
              </Link>
            ))}
            <button
              onClick={() => {
                setIsOpen(false);
                onOrderClick();
              }}
              className="mt-2 rounded-full bg-accent px-5 py-2 text-sm font-bold text-primary"
            >
              להזמנה
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
