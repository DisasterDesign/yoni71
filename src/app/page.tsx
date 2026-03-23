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
        </div>
      </section>

      {/* Gallery */}
      <Gallery />

      {/* Events Teaser */}
      <EventsTeaser />

      {/* WhatsApp Section */}
      <ScrollReveal direction="up">
        <section className="bg-light py-20">
          <div className="mx-auto max-w-2xl px-4 text-center">
            <h2 className="mb-6 text-3xl font-bold text-primary">להזמנה מהירה</h2>
            <p className="mb-8 text-primary/70">
              רוצים להזמין? שלחו לנו הודעה בוואטסאפ ונחזור אליכם מיד
            </p>
            <MagneticButton>
              <a
                href={TABIT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="animate-shimmer inline-flex items-center gap-3 rounded-full bg-accent px-6 py-3 text-base font-bold text-primary transition-all hover:bg-accent/90 hover:shadow-lg sm:px-8 sm:py-4 sm:text-lg"
              >
                הזמן עכשיו
              </a>
            </MagneticButton>
          </div>
        </section>
      </ScrollReveal>

    </>
  );
}
