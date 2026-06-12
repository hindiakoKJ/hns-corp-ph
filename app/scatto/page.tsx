import Link from 'next/link';
import SiteNav from '@/components/ui/SiteNav';
import SiteFooter from '@/components/ui/SiteFooter';
import { FeatureIcon } from '@/components/brand/FeatureIcons';

const ACC = '#E0573B';

const FEATURES = [
  { icon: 'film' as const,     title: 'Disposable camera UX', body: 'Guests get a QR link — no app install. They shoot, photos land in your album.' },
  { icon: 'palette' as const,  title: 'Branded overlays', body: 'Add your event name, date, or logo as a frame on every guest photo.' },
  { icon: 'timer' as const,    title: 'Time-limited rolls', body: 'Each guest gets a capped roll. No 500-photo dumps from one person.' },
  { icon: 'qr' as const,       title: 'QR distribution', body: 'One QR code on the table. Everyone scans and starts shooting instantly.' },
  { icon: 'download' as const, title: 'Bulk download', body: 'Download all event photos as a zip at the end. Full resolution, one click.' },
  { icon: 'tag' as const,      title: 'Bundles with Everafter', body: 'Wedding guests get Scatto built into their Everafter wedding website.' },
];

export default function ScattoPage() {
  return (
    <>
      <SiteNav />
      <main style={{ '--acc': ACC } as React.CSSProperties}>

        <section style={{ padding: '90px 32px 70px', position: 'relative', overflow: 'hidden', textAlign: 'center' }}>
          <div style={{ position: 'absolute', top: -120, left: '50%', transform: 'translateX(-50%)', width: 560, height: 360, background: `radial-gradient(ellipse, ${ACC}20 0%, transparent 65%)`, pointerEvents: 'none' }} />
          <div className="wrap" style={{ position: 'relative', zIndex: 1 }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 12, border: `1px solid ${ACC}40`, borderRadius: 12, padding: '10px 18px', background: `${ACC}0E`, marginBottom: 28 }}>
              <img src="/logos/scatto-icon.svg" alt="" width={28} height={28} style={{ borderRadius: 7, display: 'block' }} />
              <span style={{ fontFamily: 'var(--font-space-grotesk)', fontWeight: 700, fontSize: 15, color: ACC }}>Scatto</span>
            </div>
            <h1 style={{ fontSize: 'clamp(38px, 6vw, 72px)', lineHeight: 1.04, letterSpacing: '-.03em', maxWidth: 720, margin: '0 auto 22px' }}>
              A disposable camera for every event. No app required.
            </h1>
            <p style={{ fontSize: 18, color: '#94A2B6', maxWidth: 500, margin: '0 auto 36px', lineHeight: 1.65 }}>
              Guests scan a QR code and shoot. You get all the candid photos in one shared album.
            </p>
            <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="https://scatto.hnscorpph.com" className="btn" style={{ background: `linear-gradient(180deg, ${ACC}dd, ${ACC}bb)`, color: '#fff', boxShadow: `0 8px 24px -8px ${ACC}70`, border: 'none' }}>
                Try Scatto
              </a>
              <Link href="/everafter" className="btn btn-ghost">See Everafter bundle</Link>
            </div>
          </div>
        </section>

        <section style={{ padding: '80px 0', background: '#0C111B', borderTop: '1px solid rgba(255,255,255,.07)' }}>
          <div className="wrap">
            <div className="stab" style={{ marginBottom: 20 }}><span className="d" /><span>Features</span></div>
            <div className="sec-head">
              <h2>How Scatto works</h2>
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
            <h2 style={{ fontSize: 'clamp(28px, 4vw, 46px)', marginBottom: 16 }}>Set up in 2 minutes.</h2>
            <p style={{ color: '#94A2B6', marginBottom: 32, fontSize: 16 }}>Create your event, print the QR, let guests do the rest.</p>
            <a href="https://scatto.hnscorpph.com" className="btn btn-blue">Create an event</a>
          </div>
        </section>

      </main>
      <SiteFooter />
    </>
  );
}
