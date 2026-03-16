'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { MENU_HIGHLIGHTS, MENU_BANNER } from '@/lib/constants';
import { useState } from 'react';
import WhatsAppModal from '@/components/WhatsAppModal';

export default function MenuPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      {/* Small Hero */}
      <section className="bg-primary py-16">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <h1 className="text-4xl font-black text-light sm:text-5xl">התפריט שלנו</h1>
        </div>
      </section>

      {/* Menu Items */}
      {MENU_HIGHLIGHTS.map((item, index) => (
        <motion.section
          key={item.id}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className={index % 2 === 0 ? 'bg-light' : 'bg-muted'}
        >
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
            <div
              className={`flex flex-col items-center gap-10 md:flex-row ${
                index % 2 !== 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              <div className="relative aspect-[4/3] w-full flex-1 overflow-hidden rounded-2xl">
                <Image
                  src={item.imageSrc}
                  alt={item.imageAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              {/* Text */}
              <div className="flex-1">
                <h2 className="mb-2 text-2xl font-bold text-primary sm:text-3xl">
                  {item.name}
                </h2>
                <p className="mb-4 font-montserrat text-sm tracking-wider text-accent">
                  {item.nameEn}
                </p>
                <p className="mb-4 text-primary/80 leading-relaxed">{item.fullDesc}</p>
                <p className="mb-6 text-primary/80 leading-relaxed">{item.detailedDesc}</p>
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="rounded-full bg-accent px-8 py-3 font-bold text-primary transition-all hover:bg-accent/90 hover:shadow-lg"
                >
                  להזמנה לחץ כאן
                </button>
              </div>
            </div>
          </div>
        </motion.section>
      ))}

      {/* Bottom Banner */}
      <section className="bg-primary py-12">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <p className="text-xl font-bold text-light sm:text-2xl">{MENU_BANNER}</p>
        </div>
      </section>

      <WhatsAppModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
