import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'אודות',
  description:
    'הסיפור של יוני71 — מסעדת שווארמה והמבורגרים כשרה ברמת השרון. להאכיל אנשים זאת המצווה הכי גדולה.',
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
