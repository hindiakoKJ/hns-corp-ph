// FeatureIcons.tsx
// Monoline feature-icon library for HNScorpPH product pages.
// 64px grid · 2.8px stroke · round caps · currentColor. Server-safe.

import type { SVGProps } from 'react';

export interface FeatureIconProps extends Omit<SVGProps<SVGSVGElement>, 'color'> {
  size?: number;
  color?: string;
}

const s = (color: string, sw = 2.8) => ({
  stroke: color, strokeWidth: sw, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const, fill: 'none',
});

function F({ size = 32, children, ...rest }: FeatureIconProps & { children: React.ReactNode }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" {...rest}>
      {children}
    </svg>
  );
}

export const FiCompliance = ({ color = 'currentColor', ...p }: FeatureIconProps) => <F {...p}><rect x="15" y="10" width="34" height="44" rx="3" {...s(color)} /><line x1="23" y1="22" x2="41" y2="22" {...s(color)} /><line x1="23" y1="29" x2="41" y2="29" {...s(color)} /><path d="M23 40 l4 4 9 -10" {...s(color)} /></F>;
export const FiOffline    = ({ color = 'currentColor', ...p }: FeatureIconProps) => <F {...p}><path d="M12 26a28 28 0 0 1 40 0" {...s(color)} /><path d="M20 34a18 18 0 0 1 24 0" {...s(color)} /><path d="M27 42a8 8 0 0 1 10 0" {...s(color)} /><circle cx="32" cy="49" r="1.8" fill={color} /><line x1="14" y1="13" x2="51" y2="50" {...s(color)} /></F>;
export const FiMobile     = ({ color = 'currentColor', ...p }: FeatureIconProps) => <F {...p}><rect x="21" y="10" width="22" height="44" rx="4" {...s(color)} /><line x1="28" y1="16" x2="36" y2="16" {...s(color)} /><circle cx="32" cy="47" r="1.8" fill={color} /></F>;
export const FiWallet     = ({ color = 'currentColor', ...p }: FeatureIconProps) => <F {...p}><rect x="12" y="18" width="40" height="28" rx="5" {...s(color)} /><path d="M12 26 H48" {...s(color)} /><circle cx="42" cy="33" r="2.4" fill={color} /></F>;
export const FiSupport    = ({ color = 'currentColor', ...p }: FeatureIconProps) => <F {...p}><path d="M16 38v-4a16 16 0 0 1 32 0v4" {...s(color)} /><rect x="11" y="34" width="9" height="15" rx="3.5" {...s(color)} /><rect x="44" y="34" width="9" height="15" rx="3.5" {...s(color)} /><path d="M44 49a8 7 0 0 1-8 6h-4" {...s(color)} /></F>;
export const FiLog        = ({ color = 'currentColor', ...p }: FeatureIconProps) => <F {...p}><rect x="15" y="13" width="34" height="41" rx="3" {...s(color)} /><rect x="25" y="9" width="14" height="8" rx="2.5" {...s(color)} /><path d="M21 38q5-10 8 0t8 0" {...s(color)} /></F>;
export const FiBeacon     = ({ color = 'currentColor', ...p }: FeatureIconProps) => <F {...p}><path d="M19 46h26" {...s(color)} /><path d="M24 46v-7a8 8 0 0 1 16 0v7" {...s(color)} /><line x1="32" y1="24" x2="32" y2="16" {...s(color)} /><line x1="46" y1="29" x2="51" y2="24" {...s(color)} /><line x1="18" y1="29" x2="13" y2="24" {...s(color)} /></F>;
export const FiReport     = ({ color = 'currentColor', ...p }: FeatureIconProps) => <F {...p}><rect x="15" y="10" width="34" height="44" rx="3" {...s(color)} /><line x1="23" y1="20" x2="37" y2="20" {...s(color)} /><rect x="23" y="34" width="4.5" height="10" fill={color} /><rect x="30" y="29" width="4.5" height="15" fill={color} /><rect x="37" y="24" width="4.5" height="20" fill={color} /></F>;
export const FiShield     = ({ color = 'currentColor', ...p }: FeatureIconProps) => <F {...p}><path d="M32 10l18 7v12c0 13-8 20-18 25-10-5-18-12-18-25V17z" {...s(color)} /><path d="M25 31l5 5 9-11" {...s(color)} /></F>;
export const FiCart       = ({ color = 'currentColor', ...p }: FeatureIconProps) => <F {...p}><path d="M13 15h6l4 25h24" {...s(color)} /><path d="M21 22h30l-4 14H23" {...s(color)} /><circle cx="27" cy="49" r="2.6" fill={color} /><circle cx="44" cy="49" r="2.6" fill={color} /></F>;
export const FiBox        = ({ color = 'currentColor', ...p }: FeatureIconProps) => <F {...p}><path d="M32 12l20 10v20L32 52 12 42V22z" {...s(color)} /><path d="M12 22l20 10 20-10" {...s(color)} /><line x1="32" y1="32" x2="32" y2="52" {...s(color)} /></F>;
export const FiBars       = ({ color = 'currentColor', ...p }: FeatureIconProps) => <F {...p}><line x1="14" y1="50" x2="50" y2="50" {...s(color)} /><rect x="18" y="33" width="7" height="17" fill={color} /><rect x="29" y="25" width="7" height="25" fill={color} /><rect x="40" y="38" width="7" height="12" fill={color} /></F>;
export const FiList       = ({ color = 'currentColor', ...p }: FeatureIconProps) => <F {...p}><line x1="25" y1="20" x2="48" y2="20" {...s(color)} /><line x1="25" y1="32" x2="48" y2="32" {...s(color)} /><line x1="25" y1="44" x2="48" y2="44" {...s(color)} /><circle cx="17" cy="20" r="2.4" fill={color} /><circle cx="17" cy="32" r="2.4" fill={color} /><circle cx="17" cy="44" r="2.4" fill={color} /></F>;
export const FiCoin       = ({ color = 'currentColor', ...p }: FeatureIconProps) => <F {...p}><circle cx="32" cy="32" r="18" {...s(color)} /><path d="M28 23v18" {...s(color)} /><path d="M28 24h6a5 5 0 0 1 0 10h-6" {...s(color)} /><line x1="24" y1="29" x2="38" y2="29" {...s(color)} /><line x1="24" y1="34" x2="38" y2="34" {...s(color)} /></F>;
export const FiExpense    = ({ color = 'currentColor', ...p }: FeatureIconProps) => <F {...p}><path d="M20 12h24v40l-4-3-4 3-4-3-4 3-4-3-4 3z" {...s(color)} /><line x1="26" y1="23" x2="38" y2="23" {...s(color)} /><line x1="26" y1="31" x2="38" y2="31" {...s(color)} /></F>;
export const FiMap        = ({ color = 'currentColor', ...p }: FeatureIconProps) => <F {...p}><path d="M12 18l14-4 12 4 14-4v32l-14 4-12-4-14 4z" {...s(color)} /><line x1="26" y1="14" x2="26" y2="46" {...s(color)} /><line x1="38" y1="18" x2="38" y2="50" {...s(color)} /></F>;
export const FiCalendar   = ({ color = 'currentColor', ...p }: FeatureIconProps) => <F {...p}><rect x="13" y="16" width="38" height="36" rx="3" {...s(color)} /><line x1="13" y1="26" x2="51" y2="26" {...s(color)} /><line x1="23" y1="12" x2="23" y2="20" {...s(color)} /><line x1="41" y1="12" x2="41" y2="20" {...s(color)} /><circle cx="32" cy="39" r="3" fill={color} /></F>;
export const FiCheckCircle= ({ color = 'currentColor', ...p }: FeatureIconProps) => <F {...p}><circle cx="32" cy="32" r="19" {...s(color)} /><path d="M24 32l6 6 11-13" {...s(color)} /></F>;
export const FiPeople     = ({ color = 'currentColor', ...p }: FeatureIconProps) => <F {...p}><circle cx="24" cy="26" r="7" {...s(color)} /><circle cx="42" cy="27" r="6" {...s(color)} /><path d="M12 48a12 12 0 0 1 24 0" {...s(color)} /><path d="M35 47a11 10 0 0 1 17-1" {...s(color)} /></F>;
export const FiBuildings  = ({ color = 'currentColor', ...p }: FeatureIconProps) => <F {...p}><rect x="14" y="22" width="18" height="30" {...s(color)} /><rect x="32" y="14" width="18" height="38" {...s(color)} /><line x1="19" y1="30" x2="27" y2="30" {...s(color)} /><line x1="19" y1="40" x2="27" y2="40" {...s(color)} /><line x1="37" y1="24" x2="45" y2="24" {...s(color)} /><line x1="37" y1="34" x2="45" y2="34" {...s(color)} /><line x1="37" y1="44" x2="45" y2="44" {...s(color)} /></F>;
export const FiFilm       = ({ color = 'currentColor', ...p }: FeatureIconProps) => <F {...p}><circle cx="32" cy="32" r="18" {...s(color)} /><circle cx="32" cy="32" r="6" {...s(color)} /><circle cx="32" cy="18" r="2" fill={color} /><circle cx="32" cy="46" r="2" fill={color} /><circle cx="18" cy="32" r="2" fill={color} /><circle cx="46" cy="32" r="2" fill={color} /></F>;
export const FiPalette    = ({ color = 'currentColor', ...p }: FeatureIconProps) => <F {...p}><path d="M32 12a20 20 0 1 0 5 39 3 3 0 0 0 1-6 4 4 0 0 1 3-7h3a16 16 0 0 0-15-20z" {...s(color)} /><circle cx="24" cy="25" r="2.3" fill={color} /><circle cx="33" cy="21" r="2.3" fill={color} /><circle cx="42" cy="26" r="2.3" fill={color} /></F>;
export const FiTimer      = ({ color = 'currentColor', ...p }: FeatureIconProps) => <F {...p}><circle cx="32" cy="35" r="17" {...s(color)} /><line x1="32" y1="35" x2="32" y2="25" {...s(color)} /><line x1="32" y1="35" x2="39" y2="35" {...s(color)} /><line x1="26" y1="12" x2="38" y2="12" {...s(color)} /><line x1="32" y1="12" x2="32" y2="18" {...s(color)} /></F>;
export const FiQR         = ({ color = 'currentColor', ...p }: FeatureIconProps) => <F {...p}><rect x="14" y="14" width="14" height="14" {...s(color)} /><rect x="36" y="14" width="14" height="14" {...s(color)} /><rect x="14" y="36" width="14" height="14" {...s(color)} /><rect x="19" y="19" width="4" height="4" fill={color} /><rect x="41" y="19" width="4" height="4" fill={color} /><rect x="19" y="41" width="4" height="4" fill={color} /><rect x="36" y="36" width="6" height="6" fill={color} /><rect x="45" y="45" width="5" height="5" fill={color} /><rect x="36" y="46" width="5" height="4" fill={color} /></F>;
export const FiDownload   = ({ color = 'currentColor', ...p }: FeatureIconProps) => <F {...p}><path d="M32 13v23" {...s(color)} /><path d="M23 29l9 9 9-9" {...s(color)} /><path d="M16 43v5a2 2 0 0 0 2 2h28a2 2 0 0 0 2-2v-5" {...s(color)} /></F>;
export const FiTag        = ({ color = 'currentColor', ...p }: FeatureIconProps) => <F {...p}><path d="M14 31L31 14h19v19L33 50z" {...s(color)} /><circle cx="42" cy="22" r="3" {...s(color)} /></F>;
export const FiPhotos     = ({ color = 'currentColor', ...p }: FeatureIconProps) => <F {...p}><rect x="13" y="13" width="17" height="17" rx="2.5" {...s(color)} /><rect x="34" y="13" width="17" height="17" rx="2.5" {...s(color)} /><rect x="13" y="34" width="17" height="17" rx="2.5" {...s(color)} /><rect x="34" y="34" width="17" height="17" rx="2.5" {...s(color)} /><path d="M13 27l4-4 4 3" {...s(color)} /><circle cx="25" cy="18" r="1.6" fill={color} /></F>;
export const FiVenue      = ({ color = 'currentColor', ...p }: FeatureIconProps) => <F {...p}><path d="M22 41c-6-7-9-11-9-16a9 9 0 0 1 18 0c0 5-3 9-9 16z" {...s(color)} /><circle cx="22" cy="25" r="3" {...s(color)} /><path d="M44 50c-5-6-8-10-8-14a8 8 0 0 1 16 0c0 4-3 8-8 14z" {...s(color)} /><circle cx="44" cy="36" r="2.6" {...s(color)} /></F>;
export const FiEnvelope   = ({ color = 'currentColor', ...p }: FeatureIconProps) => <F {...p}><rect x="12" y="18" width="40" height="28" rx="3" {...s(color)} /><path d="M13 21l19 14 19-14" {...s(color)} /></F>;
export const FiMove       = ({ color = 'currentColor', ...p }: FeatureIconProps) => <F {...p}><line x1="32" y1="14" x2="32" y2="50" {...s(color)} /><line x1="14" y1="32" x2="50" y2="32" {...s(color)} /><path d="M27 19l5-5 5 5" {...s(color)} /><path d="M27 45l5 5 5-5" {...s(color)} /><path d="M19 27l-5 5 5 5" {...s(color)} /><path d="M45 27l5 5-5 5" {...s(color)} /></F>;
export const FiHomeCheck  = ({ color = 'currentColor', ...p }: FeatureIconProps) => <F {...p}><path d="M14 30L32 15l18 15" {...s(color)} /><path d="M19 28v20h26V28" {...s(color)} /><path d="M27 39l4 4 8-9" {...s(color)} /></F>;
export const FiConnect    = ({ color = 'currentColor', ...p }: FeatureIconProps) => <F {...p}><circle cx="20" cy="23" r="7" {...s(color)} /><circle cx="44" cy="23" r="7" {...s(color)} /><path d="M13 47a7 8 0 0 1 14 0" {...s(color)} /><path d="M37 47a7 8 0 0 1 14 0" {...s(color)} /><line x1="27" y1="30" x2="37" y2="30" {...s(color)} strokeDasharray="1 4" /></F>;
export const FiSwipe      = ({ color = 'currentColor', ...p }: FeatureIconProps) => <F {...p}><rect x="22" y="16" width="22" height="30" rx="3" {...s(color)} transform="rotate(8 33 31)" /><rect x="20" y="16" width="22" height="30" rx="3" {...s(color)} fill="#fff" /><path d="M31 40c-5-4-8-7-8-11a4.5 4.5 0 0 1 9-1.6 4.5 4.5 0 0 1 9 1.6c0 4-3 7-8 11z" {...s(color)} /></F>;
export const FiLock       = ({ color = 'currentColor', ...p }: FeatureIconProps) => <F {...p}><rect x="18" y="28" width="28" height="22" rx="4" {...s(color)} /><path d="M24 28v-5a8 8 0 0 1 16 0v5" {...s(color)} /><circle cx="32" cy="37" r="2.6" fill={color} /><line x1="32" y1="38" x2="32" y2="44" {...s(color)} /></F>;

export const FEATURE_ICONS = {
  compliance: FiCompliance, offline: FiOffline, mobile: FiMobile, wallet: FiWallet, support: FiSupport,
  log: FiLog, beacon: FiBeacon, report: FiReport, shield: FiShield,
  cart: FiCart, box: FiBox, bars: FiBars, list: FiList, coin: FiCoin, expense: FiExpense,
  map: FiMap, calendar: FiCalendar, checkCircle: FiCheckCircle, people: FiPeople, buildings: FiBuildings,
  film: FiFilm, palette: FiPalette, timer: FiTimer, qr: FiQR, download: FiDownload, tag: FiTag,
  photos: FiPhotos, venue: FiVenue, envelope: FiEnvelope, move: FiMove,
  homeCheck: FiHomeCheck, connect: FiConnect, swipe: FiSwipe, lock: FiLock,
} as const;

export type FeatureIconName = keyof typeof FEATURE_ICONS;

export function FeatureIcon({ name, ...rest }: FeatureIconProps & { name: FeatureIconName }) {
  const Cmp = FEATURE_ICONS[name];
  return <Cmp {...rest} />;
}
