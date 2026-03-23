import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'צור קשר | כתובת, טלפון והזמנות',
  description:
    'צרו קשר עם מסעדת יוני 71 ברמת השרון — טלפון 03-631-6161, כתובת רמת השרון 72. הזמנות דרך טביט, ניווט ב-Waze. בואו לבקר אותנו!',
  keywords: ['יוני 71 טלפון', 'שווארמה רמת השרון כתובת', 'יוני 71 הזמנות', 'מסעדת שווארמה רמת השרון טלפון'],
  openGraph: {
    title: 'צור קשר | יוני 71 — שווארמה ברמת השרון',
    description: 'טלפון 03-631-6161, כתובת רמת השרון 72. הזמנות, ניווט ויצירת קשר.',
    url: '/contact',
  },
  alternates: { canonical: '/contact' },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
