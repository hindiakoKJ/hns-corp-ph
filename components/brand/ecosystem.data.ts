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
  logo: string;
  gov?: boolean;
}

export const HNS_ACCENT = '#0B7080';
export const HNS_LOGO = '/logos/hns-icon.png';

// Sorted live-first, then soon (preserve order within each group). logo = real brand mark.
export const ECO_PRODUCTS: EcoProduct[] = [
  { key: 'Clerque',       name: 'Clerque',       accent: '#7C8DF5', kind: 'Business suite — POS · Ledger · Sync',    status: 'live', href: '/clerque',                          logo: '/logos/clerque-icon.png' },
  { key: 'SariAssist',    name: 'SariAssist',    accent: '#E8A24E', kind: 'Offline POS for every sari-sari store',   status: 'live', href: '/sariassist',                       logo: '/logos/sariassist-icon.svg' },
  { key: 'AltSpaceCW',    name: 'AltSpaceCW',    accent: '#7B5BD1', kind: 'Co-working space management',             status: 'live', href: '/altspacecw',                       logo: '/logos/altspacecw-icon.svg' },
  { key: 'Scatto',        name: 'Scatto',        accent: '#E0573B', kind: 'Disposable event camera',                 status: 'live', href: '/scatto',                           logo: '/logos/scatto-icon.svg' },
  { key: 'Everafter',     name: 'Everafter',     accent: '#5E9E7E', kind: 'Filipino wedding websites',               status: 'live', href: '/everafter',                        logo: '/logos/everafter-icon.svg' },
  { key: 'CVAssist',      name: 'CVAssist',      accent: '#4F46E5', kind: 'AI job-application co-pilot',              status: 'live', href: '/cvassist',                         logo: '/logos/cvassist-icon.svg' },
  { key: 'Sangguni',      name: 'Sangguni',      accent: '#5B8BF0', kind: 'Government · LGU',                        status: 'live', href: '#', gov: true,                       logo: '/logos/sangguni-icon.svg' },
  { key: 'KonekBarangay', name: 'KonekBarangay', accent: '#3D7BFF', kind: 'Government · Barangay level',             status: 'live', href: '#', gov: true,                       logo: '/logos/konekbarangay-icon.svg' },
  { key: 'Steady',        name: 'Steady',        accent: '#37D9A0', kind: 'Health companion — seizure logging',      status: 'live', href: 'https://steady.hnscorpph.com',      logo: '/logos/steady-icon.png' },
  { key: 'LOCATR',        name: 'LOCATR',        accent: '#2BC4DE', kind: 'Verified rental · Philippines',           status: 'soon', href: 'https://locatr.hnscorpph.com',      logo: '/logos/locatr-icon.svg' },
];
