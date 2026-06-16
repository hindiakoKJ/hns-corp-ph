// EcosystemIcons.tsx
// Unified monoline product glyphs for the HNScorpPH ecosystem.
// 64px grid · 3px stroke · round caps · currentColor.
// Server-safe. Each accepts { size, color, className }.

import type { SVGProps } from 'react';

export interface IconProps extends Omit<SVGProps<SVGSVGElement>, 'color'> {
  size?: number;
  color?: string;
}

const stroke = (color: string) => ({
  stroke: color,
  strokeWidth: 3,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  fill: 'none',
});

function Svg({ size = 40, children, ...rest }: IconProps & { children: React.ReactNode }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" {...rest}>
      {children}
    </svg>
  );
}

export function HNScorpPHIcon({ color = 'currentColor', ...p }: IconProps) {
  return (
    <Svg {...p}>
      <circle cx="32" cy="32" r="22" stroke={color} strokeWidth="2.4" opacity="0.35" fill="none" />
      <path d="M32 10a22 22 0 0 1 22 22" {...stroke(color)} />
      <path d="M32 22a10 10 0 0 1 10 10" {...stroke(color)} />
      <circle cx="32" cy="32" r="3" fill={color} />
    </Svg>
  );
}

export function ClerqueIcon({ color = 'currentColor', ...p }: IconProps) {
  return (
    <Svg {...p}>
      <rect x="13" y="16" width="30" height="8" rx="2.5" fill={color} />
      <rect x="13" y="28" width="38" height="8" rx="2.5" fill={color} opacity="0.7" />
      <rect x="13" y="40" width="30" height="8" rx="2.5" fill={color} opacity="0.45" />
    </Svg>
  );
}

export function SteadyIcon({ color = 'currentColor', ...p }: IconProps) {
  return (
    <Svg {...p}>
      <path d="M8 32 Q 18 18, 28 32 T 48 32 T 56 32" {...stroke(color)} strokeWidth={3.2} />
    </Svg>
  );
}

export function TindaPOSIcon({ color = 'currentColor', ...p }: IconProps) {
  return (
    <Svg {...p}>
      <path d="M14 28 V50 H50 V28" {...stroke(color)} />
      <path d="M11 28 L15 17 H49 L53 28 Z" {...stroke(color)} />
      <path d="M24 50 V38 H32 V50" {...stroke(color)} />
      <line x1="38" y1="36" x2="46" y2="36" {...stroke(color)} />
      <line x1="38" y1="42" x2="46" y2="42" {...stroke(color)} />
    </Svg>
  );
}

export function SangguniIcon({ color = 'currentColor', ...p }: IconProps) {
  return (
    <Svg {...p}>
      <path d="M14 31 L32 17 L50 31" {...stroke(color)} />
      <line x1="11" y1="31" x2="53" y2="31" {...stroke(color)} />
      <line x1="12" y1="52" x2="52" y2="52" {...stroke(color)} />
      <line x1="19" y1="31" x2="19" y2="52" {...stroke(color)} />
      <line x1="27" y1="31" x2="27" y2="52" {...stroke(color)} />
      <line x1="37" y1="31" x2="37" y2="52" {...stroke(color)} />
      <line x1="45" y1="31" x2="45" y2="52" {...stroke(color)} />
    </Svg>
  );
}

export function AltSpaceCWIcon({ color = 'currentColor', ...p }: IconProps) {
  return (
    <Svg {...p}>
      <rect x="12" y="14" width="40" height="36" rx="3" {...stroke(color)} />
      <line x1="12" y1="32" x2="52" y2="32" {...stroke(color)} />
      <line x1="32" y1="14" x2="32" y2="50" {...stroke(color)} />
      <rect x="17" y="19" width="9" height="8" rx="1.5" fill={color} />
      <circle cx="42" cy="41" r="2.2" fill={color} />
    </Svg>
  );
}

export function ScattoIcon({ color = 'currentColor', ...p }: IconProps) {
  return (
    <Svg {...p}>
      <rect x="10" y="21" width="44" height="29" rx="5" {...stroke(color)} />
      <path d="M23 21 L26 15 H38 L41 21" {...stroke(color)} />
      <circle cx="32" cy="36" r="8" {...stroke(color)} />
      <circle cx="32" cy="36" r="2.6" fill={color} />
      <circle cx="46" cy="28" r="1.7" fill={color} />
    </Svg>
  );
}

export function EverafterIcon({ color = 'currentColor', ...p }: IconProps) {
  return (
    <Svg {...p}>
      <circle cx="26" cy="38" r="12" {...stroke(color)} />
      <circle cx="41" cy="38" r="12" {...stroke(color)} />
      <path d="M41 16 L45 21 L41 26 L37 21 Z" {...stroke(color)} />
    </Svg>
  );
}

export function LocatrIcon({ color = 'currentColor', ...p }: IconProps) {
  return (
    <Svg {...p}>
      <path d="M32 53 C 22 41 17 33 17 26 A15 15 0 0 1 47 26 C 47 33 42 41 32 53 Z" {...stroke(color)} />
      <path d="M25.5 26 L30 30.5 L39 21.5" {...stroke(color)} />
    </Svg>
  );
}

export function KonekBarangayIcon({ color = 'currentColor', ...p }: IconProps) {
  return (
    <Svg {...p}>
      <path d="M13 34 L21 27 L29 34 V47 H13 Z" {...stroke(color)} />
      <path d="M35 34 L43 27 L51 34 V47 H35 Z" {...stroke(color)} />
      <path d="M21 27 Q32 18 43 27" {...stroke(color)} strokeDasharray="1 5" />
      <circle cx="32" cy="21.5" r="2.6" fill={color} />
    </Svg>
  );
}

export function CVAssistIcon({ color = 'currentColor', ...p }: IconProps) {
  return (
    <Svg {...p}>
      <path d="M45 23 A14 14 0 1 0 45 41" {...stroke(color)} />
      <path d="M32 41 L32 25 M25.5 31.5 L32 25 L38.5 31.5" {...stroke(color)} />
    </Svg>
  );
}

export const ECO_ICONS = {
  HNScorpPH:     HNScorpPHIcon,
  Clerque:       ClerqueIcon,
  Steady:        SteadyIcon,
  TindaPOS:      TindaPOSIcon,
  Sangguni:      SangguniIcon,
  AltSpaceCW:    AltSpaceCWIcon,
  Scatto:        ScattoIcon,
  Everafter:     EverafterIcon,
  CVAssist:      CVAssistIcon,
  LOCATR:        LocatrIcon,
  KonekBarangay: KonekBarangayIcon,
} as const;

export type EcoIconName = keyof typeof ECO_ICONS;

export function EcoIcon({ name, ...rest }: IconProps & { name: EcoIconName }) {
  const Cmp = ECO_ICONS[name];
  return <Cmp {...rest} />;
}
