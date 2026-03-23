import type { Metadata } from 'next';
import { Heebo, Montserrat } from 'next/font/google';
import './globals.css';
import './accessibility-widget.css';
import ClientLayout from '@/components/ClientLayout';

const heebo = Heebo({
  subsets: ['hebrew', 'latin'],
  variable: '--font-heebo',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
});

const SITE_URL = 'https://yoni71.pages.dev';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'יוני 71 | שווארמה כשרה ברמת השרון | YONI 71',
    template: '%s | יוני 71 — שווארמה כשרה ברמת השרון',
  },
  description:
    'מסעדת יוני 71 — שווארמה כשרה ברמת השרון. שווארמה פרגית, עגל צעיר והודו נקבה מ-100% בשר טרי ואיכותי. שירות אירועים, דוכן שווארמה והמבורגר עד בית הלקוח. הזמנות: 03-631-6161',
  keywords: [
    'שווארמה רמת השרון',
    'שווארמה כשרה',
    'מסעדת שווארמה',
    'יוני 71',
    'יוני71',
    'YONI 71',
    'שווארמה פרגית',
    'שווארמה עגל',
    'שווארמה הודו',
    'שירות אירועים שווארמה',
    'דוכן שווארמה לאירועים',
    'קייטרינג בשרי',
    'קייטרינג רמת השרון',
    'אוכל כשר רמת השרון',
    'משלוח שווארמה',
    'שווארמה ישראלית',
  ],
  icons: {
    icon: '/images/logo.png',
    apple: '/images/logo.png',
  },
  openGraph: {
    type: 'website',
    locale: 'he_IL',
    url: SITE_URL,
    siteName: 'יוני 71 — YONI 71',
    title: 'יוני 71 | שווארמה כשרה ברמת השרון',
    description:
      'מסעדת שווארמה כשרה ברמת השרון. שווארמה פרגית, עגל והודו מ-100% בשר טרי. שירות אירועים וקייטרינג עד הבית.',
    images: [
      {
        url: '/images/hero-shawarma.jpg',
        width: 1200,
        height: 630,
        alt: 'יוני 71 — שווארמה כשרה ברמת השרון',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'יוני 71 | שווארמה כשרה ברמת השרון',
    description:
      'מסעדת שווארמה כשרה ברמת השרון. 100% בשר טרי. שירות אירועים עד הבית.',
    images: ['/images/hero-shawarma.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: SITE_URL,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Restaurant',
    name: 'יוני 71 — YONI 71',
    description:
      'מסעדת שווארמה כשרה ברמת השרון. שווארמה פרגית, עגל צעיר והודו נקבה מ-100% בשר טרי ואיכותי. שירות אירועים וקייטרינג עד בית הלקוח.',
    url: SITE_URL,
    image: `${SITE_URL}/images/hero-shawarma.jpg`,
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'רמת השרון 72',
      addressLocality: 'רמת השרון',
      addressRegion: 'מחוז תל אביב',
      addressCountry: 'IL',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 32.1461,
      longitude: 34.8394,
    },
    telephone: '03-631-6161',
    servesCuisine: ['Israeli', 'Middle Eastern', 'Shawarma', 'שווארמה', 'אוכל ישראלי'],
    priceRange: '$$',
    menu: `${SITE_URL}/menu`,
    acceptsReservations: true,
    sameAs: [
      'https://www.facebook.com/profile.php?id=100083393986241',
      'https://www.instagram.com/yoni__71',
    ],
  };

  return (
    <html lang="he" dir="rtl" className={`${heebo.variable} ${montserrat.variable}`}>
      <head>
        <noscript>
          <style dangerouslySetInnerHTML={{ __html: '[style*="opacity: 0"],[style*="opacity:0"]{opacity:1!important;transform:none!important}' }} />
        </noscript>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-heebo antialiased">
        <a href="#main-content" className="skip-to-content">
          דלג לתוכן הראשי
        </a>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
