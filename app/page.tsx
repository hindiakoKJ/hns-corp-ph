import Link from 'next/link';
import SiteNav from '@/components/ui/SiteNav';
import SiteFooter from '@/components/ui/SiteFooter';
import { EcoIcon } from '@/components/brand/EcosystemIcons';
import { ECO_PRODUCTS } from '@/components/brand/ecosystem.data';

export default function HomePage() {
  return (
    <>
      <SiteNav />

      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <section
        style={{
          position: 'relative',
          minHeight: '92vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          padding: '100px 32px 80px',
          overflow: 'hidden',
        }}
      >
        {/* Glows */}
        <div className="glow" style={{ width: 600, height: 600, top: -200, left: '50%', transform: 'translateX(-50%)', background: 'radial-gradient(circle, rgba(43,196,222,.18) 0%, transparent 70%)' }} />
        <div className="glow" style={{ width: 400, height: 400, bottom: 0, left: '15%', background: 'radial-gradient(circle, rgba(61,123,255,.12) 0%, transparent 70%)' }} />
        <div className="glow" style={{ width: 320, height: 320, bottom: 60, right: '12%', background: 'radial-gradient(circle, rgba(124,107,240,.1) 0%, transparent 70%)' }} />

        {/* Dot grid */}
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,.06) 1px, transparent 1px)', backgroundSize: '28px 28px', zIndex: 0 }} />

        {/* Orbit rings */}
        <div style={{ position: 'absolute', width: 480, height: 480, borderRadius: '50%', border: '1px solid rgba(43,196,222,.12)', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: 0 }} />
        <div style={{ position: 'absolute', width: 700, height: 700, borderRadius: '50%', border: '1px solid rgba(255,255,255,.05)', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: 0 }} />

        {/* Content */}
        <div style={{ position: 'relative', zIndex: 1, maxWidth: '820px' }}>
          {/* Badge */}
          <div className="chip" style={{ marginBottom: '32px' }}>
            <span className="cdot" />
            PhilGEPS Red Member · Claude for Startups
          </div>

          <h1
            style={{
              fontSize: 'clamp(42px, 7vw, 82px)',
              lineHeight: 1.03,
              letterSpacing: '-.03em',
              marginBottom: '24px',
              fontFamily: 'var(--font-space-grotesk)',
            }}
          >
            <span className="grad">Sovereign software,</span>
            <br />
            engineered for the Philippines.
          </h1>

          <p style={{ fontSize: 'clamp(16px, 2vw, 19px)', color: '#94A2B6', maxWidth: '560px', margin: '0 auto 40px', lineHeight: 1.6 }}>
            BIR-compliant, offline-capable, government-ready tools for Filipino businesses, families, and LGUs. One login. Nine products. Your data in-country.
          </p>

          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '56px' }}>
            <Link href="/clerque" className="btn btn-blue">
              Explore Clerque
              <svg className="arr" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
            </Link>
            <Link href="/about" className="btn btn-ghost">Our story</Link>
          </div>

          {/* Stats */}
          <div style={{ display: 'flex', gap: '48px', justifyContent: 'center', flexWrap: 'wrap' }}>
            {[['9', 'Products'], ['100%', 'PH residency'], ['1', 'Login, all apps']].map(([num, label]) => (
              <div key={label} style={{ textAlign: 'center' }}>
                <div style={{ fontFamily: 'var(--font-space-grotesk)', fontWeight: 700, fontSize: 'clamp(28px, 4vw, 40px)', color: '#fff' }}>{num}</div>
                <div style={{ fontSize: '13px', color: '#63718A', marginTop: '4px' }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Solution quad ─────────────────────────────────────────────────── */}
      <section style={{ padding: '90px 0', background: '#0C111B', borderTop: '1px solid rgba(255,255,255,.07)' }}>
        <div className="wrap">
          <div className="stab" style={{ marginBottom: '20px' }}>
            <span className="d" />
            <span>Why HNScorpPH</span>
          </div>
          <div className="sec-head">
            <h2>Built for how the Philippines actually works</h2>
            <p>From sari-sari stores to city halls, our tools are designed around PH realities — not ported from abroad.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '18px' }}>
            {[
              { title: 'Sovereign by design', body: 'All data resides in Philippine servers. No foreign-cloud lock-in, no vendor dependency for sensitive records.', icon: '🛡️' },
              { title: 'BIR-compliant', body: 'Accounting reports map directly to BIR Form 2550Q, 1701Q, and 2551Q. CAS-accredited architecture.', icon: '📋' },
              { title: 'Built for government', body: 'PhilGEPS Red Member. Procurement-ready. Designed for LGU workflows with multi-tenant isolation.', icon: '🏛️' },
              { title: 'Offline always', body: 'Products work without internet. Sync automatically when connectivity returns — no data lost in brownouts.', icon: '📶' },
            ].map(({ title, body, icon }) => (
              <div
                key={title}
                style={{ background: '#101724', border: '1px solid rgba(255,255,255,.08)', borderRadius: '16px', padding: '32px' }}
              >
                <div style={{ fontSize: '28px', marginBottom: '16px' }}>{icon}</div>
                <h3 style={{ fontSize: '18px', fontFamily: 'var(--font-space-grotesk)', fontWeight: 700, marginBottom: '10px', color: '#EAF1F9' }}>{title}</h3>
                <p style={{ color: '#94A2B6', fontSize: '14.5px', lineHeight: 1.65, margin: 0 }}>{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Products grid ─────────────────────────────────────────────────── */}
      <section style={{ padding: '90px 0' }}>
        <div className="wrap">
          <div className="stab" style={{ marginBottom: '20px' }}>
            <span className="d" />
            <span>Ecosystem</span>
          </div>
          <div className="sec-head">
            <h2>Nine products. One platform.</h2>
            <p>From POS to LGU records to wedding websites — built sovereign, built Filipino.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '14px' }}>
            {ECO_PRODUCTS.map((p) => (
              <Link
                key={p.key}
                href={p.href}
                style={{
                  display: 'block',
                  background: '#101724',
                  border: '1px solid rgba(255,255,255,.08)',
                  borderRadius: '16px',
                  padding: '28px',
                  textDecoration: 'none',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                <div style={{ position: 'absolute', top: 0, right: 0, width: 120, height: 120, borderRadius: '50%', background: p.accent, opacity: 0.06, filter: 'blur(40px)', pointerEvents: 'none' }} />

                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '20px' }}>
                  <div style={{ width: 48, height: 48, background: `${p.accent}18`, border: `1px solid ${p.accent}30`, borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <EcoIcon name={p.key} size={26} color={p.accent} />
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '4px' }}>
                    <span className={`pill ${p.status}`}>
                      <span style={{ width: 5, height: 5, borderRadius: '50%', background: p.status === 'live' ? '#37D9A0' : '#63718A', display: 'inline-block', marginRight: '4px' }} />
                      {p.status === 'live' ? 'Live' : 'Soon'}
                    </span>
                    {p.gov && <span className="gov-tag">GOV</span>}
                  </div>
                </div>

                <h3 style={{ fontSize: '17px', fontFamily: 'var(--font-space-grotesk)', fontWeight: 700, color: '#EAF1F9', marginBottom: '6px' }}>{p.name}</h3>
                <p style={{ fontSize: '13.5px', color: '#63718A', margin: 0 }}>{p.kind}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────────── */}
      <section style={{ background: '#0C111B', borderTop: '1px solid rgba(255,255,255,.07)', padding: '100px 0', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div className="glow" style={{ width: 500, height: 500, top: '50%', left: '50%', transform: 'translate(-50%,-50%)', background: 'radial-gradient(circle, rgba(43,196,222,.12) 0%, transparent 70%)' }} />
        <div className="wrap" style={{ position: 'relative', zIndex: 1 }}>
          <div className="eyebrow" style={{ marginBottom: '20px' }}>Ready to switch?</div>
          <h2 style={{ fontSize: 'clamp(30px, 4.5vw, 52px)', lineHeight: 1.06, maxWidth: '640px', margin: '0 auto 20px' }}>
            Ready to run on <span className="grad">sovereign software?</span>
          </h2>
          <p style={{ color: '#94A2B6', maxWidth: '440px', margin: '0 auto 40px', fontSize: '16px' }}>
            Start with Clerque — the all-in-one Filipino business suite. Free tier available.
          </p>
          <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/clerque" className="btn btn-blue">
              Start for free
              <svg className="arr" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
            </Link>
            <Link href="/contact" className="btn btn-ghost">Contact sales</Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </>
  );
}
