import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'התפריט שלנו',
  description:
    'תפריט מסעדת יוני71 — שווארמה פרגית, שווארמה עגל צעיר, שווארמה הודו נקבה. 100% בשר טרי ואיכותי.',
};

export default function MenuLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
