'use client';

import { motion } from 'framer-motion';

const GALLERY_ITEMS = Array.from({ length: 9 }, (_, i) => ({
  id: i + 1,
  alt: `תמונה ${i + 1} מיוני71`,
}));

export default function Gallery() {
  return (
    <section className="bg-gradient-to-b from-accent to-accent/80 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-10 text-center text-3xl font-bold text-primary">
          הגלריה שלנו
        </h2>
        <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3">
          {GALLERY_ITEMS.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="group relative aspect-square overflow-hidden rounded-xl bg-primary/20"
            >
              {/* Placeholder */}
              <div className="flex h-full w-full items-center justify-center text-light/30">
                <svg className="h-12 w-12" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-primary/0 transition-colors group-hover:bg-primary/20" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
