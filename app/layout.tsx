import type { Metadata } from 'next';
import { Inter_Tight } from 'next/font/google';
import './globals.css';

const interTight = Inter_Tight({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-inter-tight',
  display: 'swap',
});

export const metadata: Metadata = {
  verification: {
    google: 'ZJarAiHMvsVgLAnxDzp6b5hKwvhldz0CI-mMtAiRKq4',
  },
  title: 'HNScorpPH — Software Built for the Philippines',
  description:
    'HNScorpPH builds software for Filipino businesses and families. Clerque: POS, BIR-compliant accounting, and AP/AR for MSMEs. Steady: free epilepsy companion app.',
  keywords: [
    'HNScorpPH',
    'Clerque',
    'POS Philippines',
    'MSME software Philippines',
    'BIR accounting software',
    'Filipino business software',
    'Steady epilepsy app',
  ],
  openGraph: {
    title: 'HNScorpPH — Software Built for the Philippines',
    description: 'Clerque for Filipino MSMEs. Steady for families living with epilepsy. Built in the Philippines.',
    url: 'https://hnscorpph.com',
    siteName: 'HNScorpPH',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={interTight.variable}>
      <body>{children}</body>
    </html>
  );
}
