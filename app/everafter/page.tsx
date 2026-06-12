import Link from 'next/link';
import SiteNav from '@/components/ui/SiteNav';
import SiteFooter from '@/components/ui/SiteFooter';
import { FeatureIcon } from '@/components/brand/FeatureIcons';

const ACC = '#5E9E7E';

const FEATURES = [
  { icon: 'photos' as const,   title: 'Photo gallery', body: 'Beautiful gallery pages. Organize by ceremony, reception, and prenup.' },
  { icon: 'venue' as const,    title: 'Venue & schedule', body: 'Directions, ceremony time, reception details, dress code — all in one page.' },
  { icon: 'envelope' as const, title: 'RSVP management', body: 'Smart RSVP form with meal preference, plus-one tracking, and dietary notes.' },
  { icon: 'film' as const,     title: 'Scatto integration', body: 'Built-in Scatto camera roll for guests. Candid shots land in the wedding album.' },
  { icon: 'move' as const,     title: 'Custom domain', body: 'mae-and-rein.com — use your own domain or a free *.everafter.hnscorpph.com subdomain.' },
  { icon: 'mobile' as const,   title: 'Mobile-perfect', body: 'Designed first for phones. 90% of guests visit from mobile — it shows.' },
];

export default function EverafterPage() {
  return (
    <>
      <SiteNav />
      <main style={{ '--acc': ACC } as React.CSSProperties}>

        <section style={{ padding: '90px 32px 70px', position: 'relative', overflow: 'hidden', textAlign: 'center' }}>
          <div style={{ position: 'absolute', top: -120, left: '50%', transform: 'translateX(-50%)', width: 560, height: 360, background: `radial-gradient(ellipse, ${ACC}22 0%, transparent 65%)`, pointerEvents: 'none' }} />
          <div className="wrap" style={{ position: 'relative', zIndex: 1 }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 12, border: `1px solid ${ACC}40`, borderRadius: 12, padding: '10px 18px', background: `${ACC}0E`, marginBottom: 28 }}>
              <img src="/logos/everafter-icon.svg" alt="" width={28} height={28} style={{ borderRadius: 7, display: 'block' }} />
              <span style={{ fontFamily: 'var(--font-space-grotesk)', fontWeight: 700, fontSize: 15, color: ACC }}>Everafter</span>
            </div>
            <h1 style={{ fontSize: 'clamp(38px, 6vw, 72px)', lineHeight: 1.04, letterSpacing: '-.03em', maxWidth: 720, margin: '0 auto 22px' }}>
              Beautiful Filipino wedding websites. Built in minutes.
            </h1>
            <p style={{ fontSize: 18, color: '#94A2B6', maxWidth: 500, margin: '0 auto 36px', lineHeight: 1.65 }}>
              RSVP, gallery, venue, schedule, and Scatto camera — everything guests need, on one elegant page.
            </p>
            <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="https://everafter.hnscorpph.com" className="btn" style={{ background: `linear-gradient(180deg, ${ACC}dd, ${ACC}bb)`, color: '#fff', boxShadow: `0 8px 24px -8px ${ACC}70`, border: 'none' }}>
                Create your site
              </a>
              <Link href="/scatto" className="btn btn-ghost">Learn about Scatto</Link>
            </div>
          </div>
        </section>

        <section style={{ padding: '80px 0', background: '#0C111B', borderTop: '1px solid rgba(255,255,255,.07)' }}>
          <div className="wrap">
            <div className="stab" style={{ marginBottom: 20 }}><span className="d" /><span>Features</span></div>
            <div className="sec-head">
              <h2>Everything your guests need on one page</h2>
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
            <h2 style={{ fontSize: 'clamp(28px, 4vw, 46px)', marginBottom: 16 }}>Your love story deserves a great page.</h2>
            <p style={{ color: '#94A2B6', marginBottom: 32, fontSize: 16 }}>Live in 10 minutes. Free for your first wedding.</p>
            <a href="https://everafter.hnscorpph.com" className="btn btn-blue">Start your wedding site</a>
          </div>
        </section>

      </main>
      <SiteFooter />
    </>
  );
}
