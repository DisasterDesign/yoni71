'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { NAV_LINKS } from '@/lib/constants';

export default function Navbar({ onOrderClick }: { onOrderClick: () => void }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className="sticky top-0 z-50 bg-primary"
      role="navigation"
      aria-label="ניווט ראשי"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/images/01-logo.png"
              alt="לוגו יוני71 — Burger & Bar"
              width={50}
              height={56}
              priority
              className="h-12 w-auto"
            />
          </Link>

          {/* Desktop Links */}
          <div className="hidden items-center gap-6 md:flex">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-light transition-colors hover:text-accent"
              >
                {link.label}
              </Link>
            ))}
            <button
              onClick={onOrderClick}
              className="rounded-full bg-accent px-5 py-2 text-sm font-bold text-primary transition-colors hover:bg-accent/90"
            >
              להזמנה
            </button>
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
                className="rounded px-3 py-2 text-light transition-colors hover:bg-light/10"
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
