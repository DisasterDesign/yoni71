'use client';

import Image from 'next/image';
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
          <div className="relative aspect-[3/4] w-full max-w-md flex-shrink-0 overflow-hidden rounded-2xl md:w-1/2">
            <Image
              src="/images/15-yoni-avatar-photo.jpg"
              alt="יוני — הבעלים של יוני71"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
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
