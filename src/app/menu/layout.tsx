import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'תפריט שווארמה | שווארמה פרגית, עגל והודו',
  description:
    'תפריט מסעדת יוני 71 ברמת השרון — שווארמה פרגית, שווארמה עגל צעיר, שווארמה הודו נקבה. 100% בשר טרי ואיכותי. הזמנה מהירה דרך טביט.',
  keywords: ['תפריט שווארמה', 'שווארמה פרגית', 'שווארמה עגל', 'שווארמה הודו', 'מחירי שווארמה רמת השרון'],
  openGraph: {
    title: 'תפריט יוני 71 | שווארמה כשרה ברמת השרון',
    description: 'שווארמה פרגית, עגל צעיר והודו נקבה מ-100% בשר טרי. צפו בתפריט המלא.',
    url: '/menu',
    images: [{ url: '/images/shawarma-pargit-plate.jpg', alt: 'תפריט שווארמה יוני 71' }],
  },
  alternates: { canonical: '/menu' },
};

export default function MenuLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
