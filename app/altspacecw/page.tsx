import Link from 'next/link';
import SiteNav from '@/components/ui/SiteNav';
import SiteFooter from '@/components/ui/SiteFooter';
import { FeatureIcon } from '@/components/brand/FeatureIcons';

const ACC = '#7B5BD1';

const FEATURES = [
  { icon: 'map' as const,         title: 'Space map', body: 'Visual floor plan. See which desks, pods, and rooms are available in real time.' },
  { icon: 'calendar' as const,    title: 'Booking calendar', body: 'Members book directly from their phone. No phone tag, no double-bookings.' },
  { icon: 'checkCircle' as const, title: 'Check-in / out', body: 'QR-code check-in at the door. Automatic billing on check-out.' },
  { icon: 'people' as const,      title: 'Member management', body: 'Member profiles, plan tiers, access levels, and payment history in one place.' },
  { icon: 'buildings' as const,   title: 'Multi-branch', body: 'Manage multiple locations under one dashboard. Branch-level and aggregate reports.' },
  { icon: 'wallet' as const,      title: 'Billing & invoicing', body: 'Automatic monthly invoices. GCash, bank transfer, and cash — all tracked.' },
];

export default function AltSpaceCWPage() {
  return (
    <>
      <SiteNav />
      <main style={{ '--acc': ACC } as React.CSSProperties}>

        <section style={{ padding: '90px 32px 70px', position: 'relative', overflow: 'hidden', textAlign: 'center' }}>
          <div style={{ position: 'absolute', top: -120, left: '50%', transform: 'translateX(-50%)', width: 560, height: 360, background: `radial-gradient(ellipse, ${ACC}22 0%, transparent 65%)`, pointerEvents: 'none' }} />
          <div className="wrap" style={{ position: 'relative', zIndex: 1 }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 12, border: `1px solid ${ACC}40`, borderRadius: 12, padding: '10px 18px', background: `${ACC}0E`, marginBottom: 28 }}>
              <img src="/logos/altspacecw-icon.svg" alt="" width={28} height={28} style={{ borderRadius: 7, display: 'block' }} />
              <span style={{ fontFamily: 'var(--font-space-grotesk)', fontWeight: 700, fontSize: 15, color: ACC }}>AltSpaceCW</span>
            </div>
            <h1 style={{ fontSize: 'clamp(38px, 6vw, 72px)', lineHeight: 1.04, letterSpacing: '-.03em', maxWidth: 720, margin: '0 auto 22px' }}>
              Co-working management, without the spreadsheets.
            </h1>
            <p style={{ fontSize: 18, color: '#94A2B6', maxWidth: 500, margin: '0 auto 36px', lineHeight: 1.65 }}>
              Booking, check-in, billing, and member management — purpose-built for Philippine co-working spaces.
            </p>
            <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="https://altspacecw.hnscorpph.com" className="btn" style={{ background: `linear-gradient(180deg, ${ACC}dd, ${ACC}bb)`, color: '#fff', boxShadow: `0 8px 24px -8px ${ACC}70`, border: 'none' }}>
                Try AltSpaceCW
              </a>
              <Link href="/contact" className="btn btn-ghost">Book a demo</Link>
            </div>
          </div>
        </section>

        <section style={{ padding: '80px 0', background: '#0C111B', borderTop: '1px solid rgba(255,255,255,.07)' }}>
          <div className="wrap">
            <div className="stab" style={{ marginBottom: 20 }}><span className="d" /><span>Features</span></div>
            <div className="sec-head">
              <h2>Everything your co-working space needs</h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(280px,1fr))', gap: 16 }}>
              {FEATURES.map((f) => (
                <div key={f.title} style={{ background: '#101724', border: '1px solid rgba(255,255,255,.07)', borderRadius: 14, padding: '26px 24px', display: 'flex', gap: 18 }}>
                  <div style={{ flexShrink: 0, width: 44, height: 44, background: `${ACC}18`, border: `1px solid ${ACC}28`, borderRadius: 11, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <FeatureIcon name={f.icon} size={22} color={ACC} />
                  </div>
                  <div>
                    <h4 style={{ fontFamily: 'var(--font-space-grotesk)', fontSize: 15, fontWeight: 700, marginBottom: 6, color: '#EAF1F9' }}>{f.title}</h4>
                    <p style={{ color: '#94A2B6', fontSize: 14, lineHeight: 1.6, margin: 0 }}>{f.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section style={{ padding: '80px 0', textAlign: 'center' }}>
          <div className="wrap">
            <h2 style={{ fontSize: 'clamp(28px, 4vw, 46px)', marginBottom: 16 }}>Ready to automate your space?</h2>
            <p style={{ color: '#94A2B6', marginBottom: 32, fontSize: 16 }}>Join co-working operators running on AltSpaceCW.</p>
            <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="https://altspacecw.hnscorpph.com" className="btn btn-blue">Get started</a>
              <Link href="/contact" className="btn btn-ghost">Talk to sales</Link>
            </div>
          </div>
        </section>

      </main>
      <SiteFooter />
    </>
  );
}
