import type { Metadata } from 'next';
import { Space_Grotesk, Manrope } from 'next/font/google';
import './globals.css';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-space-grotesk',
  display: 'swap',
});

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-manrope',
  display: 'swap',
});

export const metadata: Metadata = {
  verification: {
    google: 'ZJarAiHMvsVgLAnxDzp6b5hKwvhldz0CI-mMtAiRKq4',
  },
  title: 'HNScorpPH — Sovereign software, engineered for the Philippines',
  description:
    'BIR-compliant, offline-capable, government-ready tools for Filipino businesses, families, and LGUs — one platform, nine products, your data in-country.',
  keywords: [
    'HNScorpPH', 'Clerque', 'TindaPOS', 'POS Philippines',
    'MSME software Philippines', 'BIR accounting software',
    'Filipino business software', 'PhilGEPS', 'sovereign software',
  ],
  openGraph: {
    title: 'HNScorpPH — Sovereign software, engineered for the Philippines',
    description: 'BIR-compliant, offline-capable, government-ready tools for Filipino businesses, families, and LGUs.',
    url: 'https://hnscorpph.com',
    siteName: 'HNScorpPH',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${manrope.variable}`}>
      <body>{children}</body>
    </html>
  );
}
