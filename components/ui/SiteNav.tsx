'use client';

import Link from 'next/link';
import { useState } from 'react';
import { HNScorpPHIcon } from '@/components/brand/EcosystemIcons';

export default function SiteNav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="nav">
      <div className="nav-in">
        <Link href="/" className="brand" onClick={() => setOpen(false)}>
          <HNScorpPHIcon size={26} color="#2BC4DE" />
          <span>HNScorpPH</span>
        </Link>

        <div className="nlinks">
          <Link href="/#solution">Platform</Link>
          <Link href="/#products">Products</Link>
          <Link href="/compliance">Compliance</Link>
          <Link href="/about">Company</Link>
        </div>

        <button
          className="burger"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
              <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
              <line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          )}
        </button>
      </div>

      {open && (
        <div className="mmenu open">
          <Link href="/#solution"  onClick={() => setOpen(false)}>Platform</Link>
          <Link href="/#products"  onClick={() => setOpen(false)}>Products</Link>
          <Link href="/compliance" onClick={() => setOpen(false)}>Compliance</Link>
          <Link href="/about"      onClick={() => setOpen(false)}>Company</Link>
        </div>
      )}
    </nav>
  );
}
