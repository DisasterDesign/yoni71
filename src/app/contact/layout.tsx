import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'צור קשר',
  description:
    'צרו קשר עם מסעדת יוני71 — טלפון *8694*, כתובת רמת השרון 72. הזמנות בוואטסאפ, ניווט ב-Waze.',
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
