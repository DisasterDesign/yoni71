'use client';

import HeroSection from '@/components/HeroSection';
import MenuCard from '@/components/MenuCard';
import Gallery from '@/components/Gallery';
import EventsTeaser from '@/components/EventsTeaser';
import { MENU_HIGHLIGHTS, TABIT_URL } from '@/lib/constants';
import ScrollReveal from '@/components/animations/ScrollReveal';
import StaggerContainer from '@/components/animations/StaggerContainer';
import StaggerItem from '@/components/animations/StaggerItem';
import MagneticButton from '@/components/animations/MagneticButton';

export default function Home() {
  return (
    <>
      {/* Hero */}
      <HeroSection />

      {/* Menu Highlights */}
      <section className="bg-light py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up">
            <h2 className="mb-12 text-center text-3xl font-bold text-primary sm:text-4xl">
              המנות שלנו
            </h2>
          </ScrollReveal>
          <StaggerContainer staggerDelay={0.15} className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {MENU_HIGHLIGHTS.map((item) => (
              <StaggerItem key={item.id}>
                <MenuCard
                  name={item.name}
                  description={item.shortDesc}
                  imageSrc={item.imageSrc}
                  imageAlt={item.imageAlt}
                />
              </StaggerItem>
            ))}
          </StaggerContainer>
          <ScrollReveal direction="up">
            <div className="mt-14 flex flex-col items-center gap-6 text-center">
              <p className="text-xl font-semibold text-primary">
                לתפריט המלא ולהזמנה לחצו כאן
              </p>
              <MagneticButton>
                <a
                  href={TABIT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-10 py-4 text-lg font-bold text-light transition-all hover:bg-primary/90 hover:shadow-lg"
                >
                  לתפריט ולהזמנה
                  <svg className="h-5 w-5 rtl:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </a>
              </MagneticButton>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Gallery */}
      <Gallery />

      {/* Events Teaser */}
      <EventsTeaser />

      {/* Quick Order Section */}
      <ScrollReveal direction="up">
        <section className="bg-[#1E1E1E] py-20">
          <div className="mx-auto flex max-w-2xl flex-col items-center gap-8 px-4 text-center">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">רוצים להזמין? זה הרגע!</h2>
            <p className="text-lg text-white/70">
              הזמינו עכשיו דרך המערכת שלנו בלחיצה אחת
            </p>
            <MagneticButton>
              <a
                href={TABIT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 rounded-full bg-white px-10 py-4 text-lg font-bold text-[#1E1E1E] transition-all hover:bg-white/90 hover:shadow-xl"
              >
                הזמן עכשיו
                <svg className="h-5 w-5 rtl:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </a>
            </MagneticButton>
          </div>
        </section>
      </ScrollReveal>

    </>
  );
}
