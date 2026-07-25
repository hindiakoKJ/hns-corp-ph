import type { Metadata } from 'next';
import { Space_Grotesk, Manrope, IBM_Plex_Mono, Fraunces, Anton, Hanken_Grotesk } from 'next/font/google';
import './globals.css';

// Poster/brutalist display for the look-a mockup.
const anton = Anton({ subsets: ['latin'], weight: ['400'], variable: '--font-anton', display: 'swap' });

// Clean body sans for the indigo homepage (pairs with Fraunces headlines).
const hanken = Hanken_Grotesk({ subsets: ['latin'], weight: ['400', '500', '600', '700'], variable: '--font-hanken', display: 'swap' });

// Editorial display serif for the studio-direction homepage.
const fraunces = Fraunces({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '900'],
  style: ['normal', 'italic'],
  variable: '--font-fraunces',
  display: 'swap',
});

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

// Monospace for the terminal-direction homepage.
const plexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-plex-mono',
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
    <html lang="en" className={`${spaceGrotesk.variable} ${manrope.variable} ${plexMono.variable} ${fraunces.variable} ${anton.variable} ${hanken.variable}`}>
      <body>{children}</body>
    </html>
  );
}
