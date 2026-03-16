'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const GALLERY_ITEMS = [
  { id: 1, src: '/images/06-salad-fresh.jpg', alt: 'סלט טרי — יוני71' },
  { id: 2, src: '/images/07-shawarma-plate.jpg', alt: 'שווארמה בצלחת עם אורז ותוספות — יוני71' },
  { id: 3, src: '/images/08-shawarma-machine.jpg', alt: 'שיפודי שווארמה במכונה — יוני71' },
  { id: 4, src: '/images/09-vitrina-salads.jpg', alt: 'ויטרינת סלטים — יוני71' },
  { id: 5, src: '/images/10-laffa-wrap.jpg', alt: 'לאפה עם שווארמה — יוני71' },
  { id: 6, src: '/images/11-laffa-wrap-2.jpg', alt: 'לאפה עם שווארמה — יוני71' },
  { id: 7, src: '/images/12-pita-olives.jpg', alt: 'פיתה עם זיתים על קרש — יוני71' },
  { id: 8, src: '/images/13-hummus.jpg', alt: 'חומוס — יוני71' },
  { id: 9, src: '/images/14-yoni-kisses-father.jpg', alt: 'יוני מנשק את אביו — יוני71' },
];

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
              className="group relative aspect-square overflow-hidden rounded-xl"
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-primary/0 transition-colors group-hover:bg-primary/20" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
