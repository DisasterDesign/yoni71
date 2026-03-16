'use client';

import { motion } from 'framer-motion';
import { ABOUT_TEXT } from '@/lib/constants';

export default function AboutPage() {
  return (
    <section className="bg-primary min-h-screen">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center gap-12 md:flex-row"
        >
          {/* Placeholder Image */}
          <div className="aspect-[3/4] w-full max-w-md flex-shrink-0 overflow-hidden rounded-2xl bg-dark/50 md:w-1/2">
            <div className="flex h-full w-full items-center justify-center text-light/20">
              <svg className="h-24 w-24" fill="currentColor" viewBox="0 0 24 24">
                <path d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
          </div>

          {/* Text */}
          <div className="flex-1">
            <h1 className="mb-8 text-3xl font-black text-light sm:text-4xl">אודות</h1>
            <div className="space-y-4">
              {ABOUT_TEXT.map((line, index) => (
                <p
                  key={index}
                  className={`text-light/90 leading-relaxed ${
                    index <= 1 ? 'text-xl font-bold text-accent' : 'text-lg'
                  }`}
                >
                  {line}
                </p>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
