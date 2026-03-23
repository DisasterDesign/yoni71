'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { NAV_LINKS, TABIT_URL } from '@/lib/constants';
import MagneticButton from '@/components/animations/MagneticButton';

export default function Navbar() {
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
          ? 'backdrop-blur-md bg-[#004218]/95 shadow-lg'
          : 'bg-[#004218]'
      }`}
      role="navigation"
      aria-label="ניווט ראשי"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className={`flex items-center justify-between transition-all duration-300 ${
          scrolled ? 'h-14' : 'h-[4.5rem]'
        }`}>
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: 'spring', stiffness: 200, damping: 15 }}
            >
              <Image
                src="/images/logo-header.svg"
                alt="לוגו יוני71"
                width={274}
                height={172}
                priority
                className={`w-auto transition-all duration-300 ${scrolled ? 'h-10' : 'h-14'}`}
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
                <a
                  href={TABIT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="animate-pulse-glow rounded-full bg-accent px-5 py-2 text-sm font-bold text-primary transition-colors hover:bg-accent/90"
                >
                  להזמנה
                </a>
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
        <div className="border-t border-light/10 bg-[#004218] md:hidden">
          <div className="flex flex-col gap-2 px-4 py-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="nav-link-hover rounded px-3 py-3 text-light transition-colors hover:bg-light/10"
              >
                {link.label}
              </Link>
            ))}
            <a
              href={TABIT_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="mt-2 block rounded-full bg-accent px-5 py-2 text-center text-sm font-bold text-primary"
            >
              להזמנה
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
