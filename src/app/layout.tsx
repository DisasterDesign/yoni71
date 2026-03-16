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

export const metadata: Metadata = {
  title: {
    default: 'YONI 71 — Burger & Bar | שווארמה והמבורגרים כשרים ברמת השרון',
    template: '%s | YONI 71',
  },
  description:
    'מסעדת שווארמה והמבורגרים כשרה ברמת השרון. 100% בשר טרי, שירות אירועים, משלוחים. להאכיל אנשים — זאת המצווה הכי גדולה.',
  openGraph: {
    type: 'website',
    locale: 'he_IL',
    siteName: 'YONI 71 — Burger & Bar',
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
    name: 'YONI 71 — Burger & Bar',
    description: 'מסעדת שווארמה והמבורגרים כשרה ברמת השרון',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'רמת השרון 72',
      addressLocality: 'רמת השרון',
      addressCountry: 'IL',
    },
    telephone: '*8694*',
    servesCuisine: ['Israeli', 'Middle Eastern', 'Shawarma', 'Burgers'],
    priceRange: '$$',
  };

  return (
    <html lang="he" dir="rtl" className={`${heebo.variable} ${montserrat.variable}`}>
      <head>
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
