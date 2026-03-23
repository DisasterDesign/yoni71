'use client';

import { ADDRESS_FULL, PHONE_1, WHATSAPP_URL } from '@/lib/constants';
import { useState } from 'react';
import ScrollReveal from '@/components/animations/ScrollReveal';
import TextReveal from '@/components/animations/TextReveal';
import MagneticButton from '@/components/animations/MagneticButton';
import StaggerContainer from '@/components/animations/StaggerContainer';
import StaggerItem from '@/components/animations/StaggerItem';

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, this would send to an API
    setSubmitted(true);
  };

  return (
    <>
      {/* Hero */}
      <section className="bg-primary py-16">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <TextReveal text="צור קשר" className="text-4xl font-black text-light sm:text-5xl" delay={0.2} />
        </div>
      </section>

      <section className="bg-light py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 md:gap-12 md:grid-cols-2">
            {/* Map & Info */}
            <ScrollReveal direction="left">
              {/* Google Maps */}
              <div className="mb-8 aspect-[4/3] sm:aspect-video overflow-hidden rounded-2xl bg-muted">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3378.5!2d34.8!3d32.15!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzLCsDA5JzAwLjAiTiAzNMKwNDgnMDAuMCJF!5e0!3m2!1siw!2sil!4v1234567890"
                  className="h-full w-full"
                  style={{ border: 0 }}
                  title="מפת המסעדה"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>

              {/* Contact Details */}
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <svg className="mt-1 h-5 w-5 flex-shrink-0 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <p className="text-primary">{ADDRESS_FULL}</p>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="mt-1 h-5 w-5 flex-shrink-0 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <p className="text-primary">
                    {PHONE_1}
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <StaggerContainer className="mt-6 flex flex-wrap gap-3">
                <StaggerItem>
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-full bg-green-600 px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-green-700"
                  >
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    וואטסאפ
                  </a>
                </StaggerItem>
                <StaggerItem>
                  <a
                    href={`tel:${PHONE_1.replace(/\*/g, '')}`}
                    className="flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-bold text-light transition-colors hover:bg-dark"
                  >
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    התקשר
                  </a>
                </StaggerItem>
                <StaggerItem>
                  <a
                    href="https://waze.com/ul?q=רמת+השרון+72"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-bold text-primary transition-colors hover:bg-accent/90"
                  >
                    Waze
                  </a>
                </StaggerItem>
              </StaggerContainer>
            </ScrollReveal>

            {/* Contact Form */}
            <ScrollReveal direction="right">
              <h2 className="mb-6 text-2xl font-bold text-primary">שלחו לנו הודעה</h2>
              {submitted ? (
                <div className="rounded-2xl bg-green-50 p-8 text-center">
                  <p className="text-lg font-bold text-green-700">ההודעה נשלחה בהצלחה!</p>
                  <p className="mt-2 text-green-600">נחזור אליך בהקדם</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="contact-name" className="mb-1 block text-sm font-medium text-primary">
                      שם
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full rounded-lg border border-primary/20 px-4 py-3 text-primary focus:border-accent focus:ring-1 focus:ring-accent"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-phone" className="mb-1 block text-sm font-medium text-primary">
                      טלפון
                    </label>
                    <input
                      id="contact-phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full rounded-lg border border-primary/20 px-4 py-3 text-primary focus:border-accent focus:ring-1 focus:ring-accent"
                      dir="ltr"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-message" className="mb-1 block text-sm font-medium text-primary">
                      הודעה
                    </label>
                    <textarea
                      id="contact-message"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full rounded-lg border border-primary/20 px-4 py-3 text-primary focus:border-accent focus:ring-1 focus:ring-accent"
                    />
                  </div>
                  <MagneticButton>
                    <button
                      type="submit"
                      className="w-full rounded-full bg-accent px-6 py-3 font-bold text-primary transition-colors hover:bg-accent/90"
                    >
                      שלח הודעה
                    </button>
                  </MagneticButton>
                </form>
              )}
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}
