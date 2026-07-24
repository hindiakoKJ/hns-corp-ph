import type { Metadata } from 'next';
import { Space_Grotesk, Manrope, Bricolage_Grotesque } from 'next/font/google';
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

// Display face for the rebranded homepage — editorial, characterful.
const bricolage = Bricolage_Grotesque({
  subsets: ['latin'],
  weight: ['500', '600', '700', '800'],
  variable: '--font-bricolage',
  display: 'swap',
});

export const metadata: Metadata = {
  verification: {
    google: 'ZJarAiHMvsVgLAnxDzp6b5hKwvhldz0CI-mMtAiRKq4',
  },
  title: 'HNS PH Solutions — Sovereign software, engineered for the Philippines',
  description:
    'BIR-compliant, offline-capable, government-ready tools for Filipino businesses, families, and LGUs — one platform, ten products, your data in-country.',
  keywords: [
    'HNS PH Solutions', 'Clerque', 'SariAssist', 'CVAssist', 'AI job application', 'POS Philippines',
    'MSME software Philippines', 'BIR accounting software',
    'Filipino business software', 'PhilGEPS', 'sovereign software',
  ],
  openGraph: {
    title: 'HNS PH Solutions — Sovereign software, engineered for the Philippines',
    description: 'BIR-compliant, offline-capable, government-ready tools for Filipino businesses, families, and LGUs.',
    url: 'https://hnscorpph.com',
    siteName: 'HNS PH Solutions',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${manrope.variable} ${bricolage.variable}`}>
      <body>{children}</body>
    </html>
  );
}
