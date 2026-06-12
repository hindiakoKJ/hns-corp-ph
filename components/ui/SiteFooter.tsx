import Link from 'next/link';
import { HNScorpPHIcon } from '@/components/brand/EcosystemIcons';

export default function SiteFooter() {
  return (
    <footer className="foot">
      <div className="foot-in">
        <div className="foot-col">
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
            <HNScorpPHIcon size={28} color="#2BC4DE" />
            <span style={{ fontFamily: 'var(--font-space-grotesk)', fontWeight: 700, fontSize: '1rem', color: 'var(--txt)' }}>HNScorpPH</span>
          </div>
          <p style={{ fontSize: '0.875rem', color: 'var(--muted)', lineHeight: 1.7, maxWidth: '220px' }}>
            Sovereign software, engineered for the Philippines.
          </p>
          <p style={{ fontSize: '0.8rem', color: 'var(--dim)', marginTop: '14px' }}>
            PhilGEPS Red Member · Claude for Startups
          </p>
        </div>

        <div className="foot-col">
          <h4>Products</h4>
          <Link href="/clerque">Clerque</Link>
          <Link href="/tindapos">TindaPOS</Link>
          <Link href="/altspacecw">AltSpaceCW</Link>
          <Link href="/scatto">Scatto</Link>
          <Link href="/everafter">Everafter</Link>
        </div>

        <div className="foot-col">
          <h4>Platform</h4>
          <Link href="/about">About</Link>
          <Link href="/compliance">Compliance</Link>
          <Link href="/contact">Contact</Link>
        </div>

        <div className="foot-col">
          <h4>Government</h4>
          <Link href="#">Sangguni</Link>
          <Link href="#">KonekBarangay</Link>
          <Link href="/compliance">PhilGEPS</Link>
          <Link href="/compliance">BIR Compliance</Link>
        </div>
      </div>

      <div className="foot-bot">
        <span>© {new Date().getFullYear()} HNS Corp PH. All rights reserved.</span>
        <span style={{ color: 'var(--dim)' }}>Made in the Philippines 🇵🇭</span>
      </div>
    </footer>
  );
}
