'use client';

import Link from 'next/link';
import { useState } from 'react';
import { ECO_PRODUCTS } from '@/components/brand/ecosystem.data';

type Cat = 'all' | 'business' | 'government' | 'life';

const CATEGORY: Record<string, Exclude<Cat, 'all'>> = {
  Clerque: 'business', SariAssist: 'business', AltSpaceCW: 'business',
  Sangguni: 'government', KonekBarangay: 'government',
  Everafter: 'life', Scatto: 'life', CVAssist: 'life', LOCATR: 'life', Steady: 'life', MagnetMoments: 'life',
};

const DOORS: { id: Cat; k: string; d: string }[] = [
  { id: 'all',        k: 'Everything', d: 'All eleven products' },
  { id: 'business',   k: 'For business', d: 'POS · ledger · co-working · sari-sari stores' },
  { id: 'government', k: 'For government', d: 'LGU ordinances · barangay services' },
  { id: 'life',       k: 'For life', d: 'Weddings · events · jobs · rentals · health' },
];

export default function HomeFinder() {
  const [cat, setCat] = useState<Cat>('all');
  const shown = ECO_PRODUCTS.filter((p) => cat === 'all' || CATEGORY[p.key] === cat);

  return (
    <>
      <div className="hs-doors" role="tablist" aria-label="Find your product">
        {DOORS.map((d) => (
          <button key={d.id} role="tab" aria-selected={cat === d.id}
            className={`hs-door ${cat === d.id ? 'active' : ''}`} onClick={() => setCat(d.id)}>
            <span className="k">{d.k}</span>
            <span className="d">{d.d}</span>
          </button>
        ))}
      </div>

      <div className="hs-grid">
        {shown.map((p) => (
          <Link key={p.key} href={p.href} className="hs-card" style={{ ['--accent' as string]: p.accent }}>
            <div className="top">
              <span className="logo"><img src={p.logo} alt={p.name} /></span>
              <span className={`st ${p.isNew ? 'new' : p.status}`}>{p.isNew ? 'New' : p.status === 'live' ? 'Live' : 'Soon'}</span>
            </div>
            <h3>{p.name}{p.gov && <span className="gov">GOV</span>}</h3>
            <p className="kind">{p.kind}</p>
            <span className="go">{p.status === 'live' ? 'Explore' : 'Preview'}
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </span>
          </Link>
        ))}
      </div>
    </>
  );
}
