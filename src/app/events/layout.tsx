import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'אירועים פרטיים',
  description:
    'שירות אירועים עד בית הלקוח — דוכן שווארמה ודוכן המבורגר לאירועים. קייטרינג בשרי מקצועי מיוני71.',
};

export default function EventsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
