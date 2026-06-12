// ecosystem.data.ts
// Single source of truth for the HNScorpPH product family.

import type { EcoIconName } from './EcosystemIcons';

export type ProductStatus = 'live' | 'soon';

export interface EcoProduct {
  key: EcoIconName;
  name: string;
  accent: string;
  kind: string;
  status: ProductStatus;
  href: string;
  gov?: boolean;
}

export const HNS_ACCENT = '#0B7080';

// Sorted live-first, then soon (preserve order within each group).
export const ECO_PRODUCTS: EcoProduct[] = [
  { key: 'Clerque',       name: 'Clerque',       accent: '#7C8DF5', kind: 'Business suite — POS · Ledger · Sync',    status: 'live', href: '/clerque' },
  { key: 'TindaPOS',      name: 'TindaPOS',      accent: '#E8A24E', kind: 'Offline POS for every sari-sari store',   status: 'live', href: '/tindapos' },
  { key: 'AltSpaceCW',    name: 'AltSpaceCW',    accent: '#7B5BD1', kind: 'Co-working space management',             status: 'live', href: '/altspacecw' },
  { key: 'Scatto',        name: 'Scatto',        accent: '#E0573B', kind: 'Disposable event camera',                 status: 'live', href: '/scatto' },
  { key: 'Everafter',     name: 'Everafter',     accent: '#5E9E7E', kind: 'Filipino wedding websites',               status: 'live', href: '/everafter' },
  { key: 'Sangguni',      name: 'Sangguni',      accent: '#5B8BF0', kind: 'Government · LGU',                        status: 'live', href: '#', gov: true },
  { key: 'KonekBarangay', name: 'KonekBarangay', accent: '#3D7BFF', kind: 'Government · Barangay level',             status: 'live', href: '#', gov: true },
  { key: 'Steady',        name: 'Steady',        accent: '#37D9A0', kind: 'Health companion — seizure logging',      status: 'soon', href: 'https://steady.hnscorpph.com' },
  { key: 'LOCATR',        name: 'LOCATR',        accent: '#2BC4DE', kind: 'Verified rental · Philippines',           status: 'soon', href: 'https://locatr.hnscorpph.com' },
];
