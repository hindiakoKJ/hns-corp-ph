'use client';

import Link from 'next/link';
import { useState } from 'react';

function Mark({ size = 26 }: { size?: number }) {
  return (
    <svg viewBox="0 0 48 48" width={size} height={size} fill="none" aria-hidden="true">
      <g stroke="currentColor" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 10V38" /><path d="M18 10V38" /><path d="M6 24H18" />
        <path d="M18 10L30 38" /><path d="M30 10V38" />
        <path d="M43.5 14 C42.5 10 34 9 32.5 13.5 C31 18 33 21 38 24 C43 27 44.5 30 43.5 34.5 C42 39 33.5 38 32.5 33.5" />
      </g>
    </svg>
  );
}

export default function HomeNav() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="hs-nav">
      <div className="hs-wrap hs-nav-in">
        <Link href="/" className="hs-brand" onClick={close}>
          <span className="mk"><Mark size={26} /></span><span className="wm">HNS PH Solutions<span className="opc">OPC</span></span>
        </Link>

        <nav className="hs-nlinks">
          <a href="/#products">Products</a>
          <a href="/#sovereign">Why sovereign</a>
          <Link href="/compliance">Compliance</Link>
          <Link href="/about">Company</Link>
        </nav>

        <Link href="/contact" className="hs-btn hs-btn-ghost hs-nav-cta" style={{ padding: '9px 18px' }}>Talk to us</Link>

        <button className="hs-burger" aria-label="Menu" aria-expanded={open} onClick={() => setOpen((v) => !v)}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
            {open ? <><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></>
                  : <><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" /></>}
          </svg>
        </button>
      </div>

      {open && (
        <div className="hs-mmenu">
          <a href="/#products" onClick={close}>Products</a>
          <a href="/#sovereign" onClick={close}>Why sovereign</a>
          <Link href="/compliance" onClick={close}>Compliance</Link>
          <Link href="/about" onClick={close}>Company</Link>
          <Link href="/contact" className="hs-btn hs-btn-indigo" onClick={close} style={{ marginTop: 8, justifyContent: 'center' }}>Talk to us</Link>
        </div>
      )}
    </header>
  );
}
