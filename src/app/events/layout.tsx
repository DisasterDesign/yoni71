import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'שירות אירועים | דוכן שווארמה והמבורגר לאירועים',
  description:
    'שירות אירועים עד בית הלקוח מיוני 71 — דוכן שווארמה ודוכן המבורגר לאירועים פרטיים, ימי הולדת, בר מצווה ואירועי חברה. קייטרינג בשרי מקצועי ברמת השרון והסביבה.',
  keywords: ['דוכן שווארמה לאירועים', 'קייטרינג בשרי', 'שירות אירועים שווארמה', 'קייטרינג רמת השרון', 'דוכן המבורגר לאירועים', 'אירועים פרטיים'],
  openGraph: {
    title: 'שירות אירועים | יוני 71 — שווארמה עד הבית',
    description: 'דוכן שווארמה והמבורגר לאירועים פרטיים. קייטרינג בשרי מקצועי עד בית הלקוח.',
    url: '/events',
    images: [{ url: '/images/hero-shawarma.jpg', alt: 'שירות אירועים יוני 71' }],
  },
  alternates: { canonical: '/events' },
};

export default function EventsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
