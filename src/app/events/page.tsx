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

const WhatsAppIcon = () => (
  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

function WhatsAppCTA({ onClick, text = 'דברו איתנו בוואטסאפ' }: { onClick: () => void; text?: string }) {
  return (
    <div className="mt-8 text-center">
      <MagneticButton>
        <button
          onClick={onClick}
          className="inline-flex items-center gap-2 rounded-full bg-green-600 px-6 py-3 font-bold text-white transition-all hover:bg-green-700 hover:shadow-lg"
        >
          <WhatsAppIcon />
          {text}
        </button>
      </MagneticButton>
    </div>
  );
}

export default function EventsPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);

  return (
    <>
      {/* Hero */}
      <section className="relative bg-dark py-16 sm:py-24">
        <div className="absolute inset-0 bg-gradient-to-b from-dark via-primary to-dark opacity-80" />
        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
          <span className="mb-4 block font-montserrat text-2xl font-bold text-accent">
            Y-71
          </span>
          <TextReveal text={EVENTS_PAGE.heroTitle} className="text-3xl font-black text-light sm:text-5xl" delay={0.2} />
          <WhatsAppCTA onClick={openModal} text="קבלו הצעת מחיר" />
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
          <WhatsAppCTA onClick={openModal} text="מעוניינים? דברו איתנו" />
        </ScrollReveal>
      </section>

      {/* Shawarma Stand */}
      <section className="bg-light py-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="flex flex-col items-center gap-6 md:gap-10 md:flex-row">
            <ScrollReveal direction="left" className="w-full flex-1">
              <ParallaxImage
                src="/images/06-salad-fresh.jpg"
                alt="גלגלי שווארמה במסעדה"
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
              <WhatsAppCTA onClick={openModal} text="רוצים דוכן שווארמה? דברו איתנו" />
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
          <WhatsAppCTA onClick={openModal} text="מתאים לכם? בואו נדבר" />
        </div>
      </section>

      {/* Burger Stand */}
      <section className="bg-light py-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="flex flex-col items-center gap-6 md:gap-10 md:flex-row-reverse">
            <ScrollReveal direction="right" className="w-full flex-1">
              <ParallaxImage
                src="/images/11-laffa-wrap-2.jpg"
                alt="לאפה עם בשר וירקות טריים"
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
              <WhatsAppCTA onClick={openModal} text="רוצים גם המבורגר? דברו איתנו" />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-primary py-20">
        <ScrollReveal direction="up" className="mx-auto max-w-2xl px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold text-light sm:text-4xl">
            {EVENTS_PAGE.cta}
          </h2>
          <p className="mb-8 text-lg text-light/80">
            נשמח לשמוע על האירוע שלכם ולהתאים לכם חבילה מושלמת
          </p>
          <MagneticButton>
            <button
              onClick={openModal}
              className="animate-pulse-glow inline-flex items-center gap-3 rounded-full bg-green-600 px-10 py-4 text-lg font-bold text-white transition-all hover:bg-green-700 hover:shadow-lg"
            >
              <WhatsAppIcon />
              שלחו לנו הודעה בוואטסאפ
            </button>
          </MagneticButton>
        </ScrollReveal>
      </section>

      <WhatsAppModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
