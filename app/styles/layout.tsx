import type { Metadata } from 'next';
import {
  Limelight, Josefin_Sans, Jost, Archivo_Black, Cormorant_Garamond, Bricolage_Grotesque, Caveat,
  Shippori_Mincho, Fredoka, Orbitron, Lilita_One, Cinzel_Decorative, IM_Fell_English, Quicksand,
  Unbounded, Sora, Outfit, Instrument_Serif, DM_Mono,
} from 'next/font/google';

// Fonts for the style lab only — loaded on /styles, never on the real site.
const limelight = Limelight({ subsets: ['latin'], weight: '400', variable: '--f-limelight', display: 'swap' });
const josefin = Josefin_Sans({ subsets: ['latin'], variable: '--f-josefin', display: 'swap' });
const jost = Jost({ subsets: ['latin'], variable: '--f-jost', display: 'swap' });
const archivoBlack = Archivo_Black({ subsets: ['latin'], weight: '400', variable: '--f-archivo', display: 'swap' });
const cormorant = Cormorant_Garamond({ subsets: ['latin'], weight: ['300', '400', '500', '600'], style: ['normal', 'italic'], variable: '--f-cormorant', display: 'swap' });
const bricolage = Bricolage_Grotesque({ subsets: ['latin'], variable: '--f-bricolage', display: 'swap' });
const caveat = Caveat({ subsets: ['latin'], variable: '--f-caveat', display: 'swap' });
const shippori = Shippori_Mincho({ subsets: ['latin'], weight: ['400', '700'], variable: '--f-shippori', display: 'swap' });
const fredoka = Fredoka({ subsets: ['latin'], variable: '--f-fredoka', display: 'swap' });
const orbitron = Orbitron({ subsets: ['latin'], variable: '--f-orbitron', display: 'swap' });
const lilita = Lilita_One({ subsets: ['latin'], weight: '400', variable: '--f-lilita', display: 'swap' });
const cinzelDeco = Cinzel_Decorative({ subsets: ['latin'], weight: ['400', '700'], variable: '--f-cinzel', display: 'swap' });
const imFell = IM_Fell_English({ subsets: ['latin'], weight: '400', style: ['normal', 'italic'], variable: '--f-imfell', display: 'swap' });
const quicksand = Quicksand({ subsets: ['latin'], variable: '--f-quicksand', display: 'swap' });
const unbounded = Unbounded({ subsets: ['latin'], variable: '--f-unbounded', display: 'swap' });
const sora = Sora({ subsets: ['latin'], variable: '--f-sora', display: 'swap' });
const outfit = Outfit({ subsets: ['latin'], variable: '--f-outfit', display: 'swap' });
const instrument = Instrument_Serif({ subsets: ['latin'], weight: '400', style: ['normal', 'italic'], variable: '--f-instrument', display: 'swap' });
const dmMono = DM_Mono({ subsets: ['latin'], weight: ['400', '500'], variable: '--f-dmmono', display: 'swap' });

const FONT_VARS = [
  limelight, josefin, jost, archivoBlack, cormorant, bricolage, caveat, shippori, fredoka, orbitron,
  lilita, cinzelDeco, imFell, quicksand, unbounded, sora, outfit, instrument, dmMono,
].map((f) => f.variable).join(' ');

export const metadata: Metadata = {
  title: 'HNS Style Lab',
  description: 'The HNS homepage and a social card rendered in 20 graphic design styles.',
  robots: { index: false, follow: false },
};

export default function StylesLayout({ children }: { children: React.ReactNode }) {
  return <div className={FONT_VARS}>{children}</div>;
}
