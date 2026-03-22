'use client';

import Image from 'next/image';
import StaggerContainer from '@/components/animations/StaggerContainer';
import StaggerItem from '@/components/animations/StaggerItem';

const GALLERY_ITEMS = [
  { id: 1, src: '/images/shawarma-pargit-plate.jpg', alt: 'שווארמה פרגית בצלחת עם אורז' },
  { id: 2, src: '/images/shawarma-veal-plate.jpg', alt: 'שווארמה עגל בצלחת עם אורז' },
  { id: 3, src: '/images/pita-veal.jpg', alt: 'עגל בפיתה על קרש עץ' },
  { id: 4, src: '/images/baguette-shawarma.jpg', alt: 'שווארמה בבאגט עם ירקות' },
  { id: 5, src: '/images/lafa-veal-wrap.jpg', alt: 'לאפה עגל בנייר יוני71' },
  { id: 6, src: '/images/falafel-plate.jpg', alt: 'פלאפל עם טחינה' },
  { id: 7, src: '/images/skewers-plate.jpg', alt: 'שיפודים עם סלט טרי' },
  { id: 8, src: '/images/schnitzel.jpg', alt: 'שניצל קריספי' },
  { id: 9, src: '/images/kebab-entrecote.jpg', alt: 'כבש ואנטרקוט בפיתה' },
];

export default function Gallery() {
  return (
    <section className="bg-gradient-to-b from-accent to-accent/80 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-10 text-center text-3xl font-bold text-primary">
          הגלריה שלנו
        </h2>
        <StaggerContainer staggerDelay={0.08} className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3">
          {GALLERY_ITEMS.map((item) => (
            <StaggerItem key={item.id} className="group relative aspect-square overflow-hidden rounded-xl">
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-primary/0 transition-colors group-hover:bg-primary/20" />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
