'use client';

import { MENU_HIGHLIGHTS, MENU_BANNER } from '@/lib/constants';
import { useState } from 'react';
import WhatsAppModal from '@/components/WhatsAppModal';
import ScrollReveal from '@/components/animations/ScrollReveal';
import TextReveal from '@/components/animations/TextReveal';
import ParallaxImage from '@/components/animations/ParallaxImage';
import MagneticButton from '@/components/animations/MagneticButton';

export default function MenuPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      {/* Small Hero */}
      <section className="bg-primary py-16">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <TextReveal text="התפריט שלנו" className="text-4xl font-black text-light sm:text-5xl" delay={0.2} />
        </div>
      </section>

      {/* Menu Items */}
      {MENU_HIGHLIGHTS.map((item, index) => (
        <section
          key={item.id}
          className={index % 2 === 0 ? 'bg-light' : 'bg-muted'}
        >
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
            <div
              className={`flex flex-col items-center gap-10 md:flex-row ${
                index % 2 !== 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              <ScrollReveal direction={index % 2 === 0 ? 'left' : 'right'} className="w-full flex-1">
                <ParallaxImage
                  src={item.imageSrc}
                  alt={item.imageAlt}
                  speed={0.1}
                  className="relative aspect-[4/3] w-full flex-1 rounded-2xl"
                />
              </ScrollReveal>

              {/* Text */}
              <ScrollReveal direction={index % 2 === 0 ? 'right' : 'left'} className="flex-1">
                <h2 className="mb-2 text-2xl font-bold text-primary sm:text-3xl">
                  {item.name}
                </h2>
                <p className="mb-4 font-montserrat text-sm tracking-wider text-accent">
                  {item.nameEn}
                </p>
                <p className="mb-4 text-primary/80 leading-relaxed">{item.fullDesc}</p>
                <p className="mb-6 text-primary/80 leading-relaxed">{item.detailedDesc}</p>
                <MagneticButton>
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="rounded-full bg-accent px-8 py-3 font-bold text-primary transition-all hover:bg-accent/90 hover:shadow-lg"
                  >
                    להזמנה לחץ כאן
                  </button>
                </MagneticButton>
              </ScrollReveal>
            </div>
          </div>
        </section>
      ))}

      {/* Bottom Banner */}
      <ScrollReveal direction="up">
        <section className="bg-primary py-12">
          <div className="mx-auto max-w-4xl px-4 text-center">
            <p className="text-xl font-bold text-light sm:text-2xl">{MENU_BANNER}</p>
          </div>
        </section>
      </ScrollReveal>

      <WhatsAppModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
