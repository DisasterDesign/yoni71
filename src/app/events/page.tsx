'use client';

import { EVENTS_PAGE } from '@/lib/constants';
import { useState } from 'react';
import WhatsAppModal from '@/components/WhatsAppModal';
import ScrollReveal from '@/components/animations/ScrollReveal';
import TextReveal from '@/components/animations/TextReveal';
import ParallaxImage from '@/components/animations/ParallaxImage';
import MagneticButton from '@/components/animations/MagneticButton';
import StaggerContainer from '@/components/animations/StaggerContainer';
import StaggerItem from '@/components/animations/StaggerItem';

export default function EventsPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      {/* Hero */}
      <section className="relative bg-dark py-24">
        <div className="absolute inset-0 bg-gradient-to-b from-dark via-primary to-dark opacity-80" />
        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
          <span className="mb-4 block font-montserrat text-2xl font-bold text-accent">
            Y-71
          </span>
          <TextReveal text={EVENTS_PAGE.heroTitle} className="text-3xl font-black text-light sm:text-5xl" delay={0.2} />
        </div>
      </section>

      {/* Intro Section */}
      <section className="bg-accent py-16">
        <ScrollReveal direction="up" className="mx-auto max-w-4xl px-4">
          <p className="mb-6 text-lg font-bold text-primary">{EVENTS_PAGE.intro}</p>
          <p className="mb-8 text-primary/90 leading-relaxed">{EVENTS_PAGE.mainText}</p>
          <h3 className="mb-4 text-2xl font-bold text-primary">
            {EVENTS_PAGE.whyUs.title}
          </h3>
          <p className="text-primary/90 leading-relaxed">{EVENTS_PAGE.whyUs.text}</p>
        </ScrollReveal>
      </section>

      {/* Shawarma Stand */}
      <section className="bg-light py-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="flex flex-col items-center gap-10 md:flex-row">
            <ScrollReveal direction="left" className="w-full flex-1">
              <ParallaxImage
                src="/images/08-shawarma-machine.jpg"
                alt="שיפודי שווארמה במכונה — יוני71"
                speed={0.1}
                className="relative aspect-[4/3] w-full rounded-2xl"
              />
            </ScrollReveal>
            <ScrollReveal direction="right" className="flex-1">
              <h2 className="mb-4 text-2xl font-bold text-primary sm:text-3xl">
                {EVENTS_PAGE.shawarmaStand.title}
              </h2>
              <p className="text-primary/80 leading-relaxed">
                {EVENTS_PAGE.shawarmaStand.text}
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Service Includes */}
      <section className="bg-muted py-16">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="mb-8 text-center text-2xl font-bold text-primary sm:text-3xl">
            מה השירות כולל?
          </h2>
          <StaggerContainer className="space-y-4">
            {EVENTS_PAGE.serviceIncludes.map((item, index) => (
              <StaggerItem
                key={index}
                className="flex items-start gap-3 rounded-xl bg-white p-4 shadow-sm"
              >
                <span className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-green-500 text-sm text-white">
                  ✓
                </span>
                <span className="text-primary/90">{item}</span>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Burger Stand */}
      <section className="bg-light py-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="flex flex-col items-center gap-10 md:flex-row-reverse">
            <ScrollReveal direction="right" className="w-full flex-1">
              <ParallaxImage
                src="/images/11-laffa-wrap-2.jpg"
                alt="לאפה עם שווארמה — יוני71"
                speed={0.1}
                className="relative aspect-[4/3] w-full rounded-2xl"
              />
            </ScrollReveal>
            <ScrollReveal direction="left" className="flex-1">
              <h2 className="mb-4 text-2xl font-bold text-primary sm:text-3xl">
                {EVENTS_PAGE.burgerStand.title}
              </h2>
              <p className="text-primary/80 leading-relaxed">
                {EVENTS_PAGE.burgerStand.text}
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Video Placeholders */}
      <section className="bg-primary py-16">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="mb-8 text-center text-2xl font-bold text-light">
            סרטונים מאירועים
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {[1, 2].map((i) => (
              <div
                key={i}
                className="aspect-video rounded-2xl bg-dark/50 flex items-center justify-center"
              >
                <div className="text-center text-light/30">
                  <svg className="mx-auto h-16 w-16 mb-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                  <p className="text-sm">סרטון {i}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-accent py-16">
        <div className="mx-auto max-w-2xl px-4 text-center">
          <h2 className="mb-6 text-2xl font-bold text-primary sm:text-3xl">
            {EVENTS_PAGE.cta}
          </h2>
          <MagneticButton>
            <button
              onClick={() => setIsModalOpen(true)}
              className="animate-pulse-glow rounded-full bg-primary px-8 py-3 font-bold text-light transition-all hover:bg-dark hover:shadow-lg"
            >
              להזמנת אירוע
            </button>
          </MagneticButton>
        </div>
      </section>

      <WhatsAppModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
