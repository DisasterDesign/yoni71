import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'אודות יוני 71 | הסיפור שלנו',
  description:
    'הסיפור של יוני 71 — מסעדת שווארמה כשרה ברמת השרון. להאכיל אנשים זאת המצווה הכי גדולה. 100% בשר, 100% אהבה.',
  keywords: ['יוני 71', 'מסעדת שווארמה רמת השרון', 'שווארמה כשרה', 'יוני לוי'],
  openGraph: {
    title: 'אודות יוני 71 | שווארמה כשרה ברמת השרון',
    description: 'הסיפור של יוני — להאכיל אנשים זאת המצווה הכי גדולה. 100% בשר, 100% אהבה.',
    url: '/about',
  },
  alternates: { canonical: '/about' },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
