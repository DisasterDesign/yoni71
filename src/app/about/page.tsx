'use client';

import { motion } from 'framer-motion';
import { ABOUT_TEXT } from '@/lib/constants';
import ScrollReveal from '@/components/animations/ScrollReveal';
import TextReveal from '@/components/animations/TextReveal';
import ParallaxImage from '@/components/animations/ParallaxImage';

export default function AboutPage() {
  return (
    <section className="bg-primary min-h-screen">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-6 md:gap-12 md:flex-row">
          <ScrollReveal direction="left" className="relative aspect-[3/4] w-full max-w-xs sm:max-w-md flex-shrink-0 md:w-1/2">
            <ParallaxImage
              src="/images/15-yoni-avatar-photo.jpg"
              alt="יוני — הבעלים של יוני71"
              speed={0.1}
              className="relative aspect-[3/4] w-full rounded-2xl"
            />
          </ScrollReveal>

          {/* Text */}
          <ScrollReveal direction="right" className="flex-1">
            <TextReveal text="אודות" className="mb-8 text-3xl font-black text-light sm:text-4xl" delay={0.2} />
            <div className="space-y-4">
              {ABOUT_TEXT.map((line, index) => (
                <motion.p
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className={`text-light/90 leading-relaxed ${
                    index <= 1 ? 'text-xl font-bold text-accent' : 'text-lg'
                  }`}
                >
                  {line}
                </motion.p>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
