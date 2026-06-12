import Link from 'next/link';
import SiteNav from '@/components/ui/SiteNav';
import SiteFooter from '@/components/ui/SiteFooter';
import { FeatureIcon } from '@/components/brand/FeatureIcons';

const ACC = '#7C8DF5';

const FEATURES = [
  { icon: 'compliance' as const, title: 'BIR-ready reports', body: 'Auto-generate 2550Q, 1701Q, and 2551Q — formatted exactly as BIR expects.' },
  { icon: 'offline' as const,    title: 'Works offline', body: 'Full functionality without internet. Syncs automatically when back online.' },
  { icon: 'mobile' as const,     title: 'Mobile-first', body: 'Optimised for Android and iOS. Run the counter from your phone on the floor.' },
  { icon: 'wallet' as const,     title: 'Integrated ledger', body: 'Sales, expenses, and payables in one view. No manual double-entry.' },
  { icon: 'support' as const,    title: 'Philippine support', body: 'Filipino-speaking support team. No ticket queue — direct chat with the builder.' },
  { icon: 'bars' as const,       title: 'Real-time analytics', body: 'Live dashboards: daily revenue, top SKUs, margin per category.' },
];

const MODULES = [
  { name: 'Counter', color: ACC, desc: 'POS interface designed for speed. Barcode scan, touchscreen, keyboard shortcuts.' },
  { name: 'Ledger', color: '#5E9E7E', desc: 'Double-entry bookkeeping aligned to Philippine chart of accounts.' },
  { name: 'Sync', color: '#2BC4DE', desc: 'Multi-device, multi-branch sync. One master record, no conflicts.' },
];

const PRICING = [
  { tier: 'Tindahan', price: 'Free', desc: 'Single device, 500 SKUs, 3 months history', cta: 'Get started free', featured: false },
  { tier: 'Negosyo', price: '₱899', per: '/mo', desc: 'Unlimited SKUs, 3 branches, BIR reports, priority support', cta: 'Start free trial', featured: true },
  { tier: 'Enterprise', price: 'Custom', desc: 'Unlimited branches, API access, LGU integration, SLA', cta: 'Contact us', featured: false },
];

export default function ClequePage() {
  return (
    <>
      <SiteNav />
      <main style={{ '--acc': ACC } as React.CSSProperties}>

        {/* Hero */}
        <section style={{ padding: '90px 32px 70px', position: 'relative', overflow: 'hidden', textAlign: 'center' }}>
          <div style={{ position: 'absolute', top: -160, left: '50%', transform: 'translateX(-50%)', width: 600, height: 400, background: `radial-gradient(ellipse, ${ACC}28 0%, transparent 65%)`, pointerEvents: 'none' }} />
          <div className="wrap" style={{ position: 'relative', zIndex: 1 }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 12, border: `1px solid ${ACC}40`, borderRadius: 12, padding: '10px 18px', background: `${ACC}0E`, marginBottom: 28 }}>
              <img src="/logos/clerque-icon.png" alt="" width={28} height={28} style={{ borderRadius: 7, display: 'block' }} />
              <span style={{ fontFamily: 'var(--font-space-grotesk)', fontWeight: 700, fontSize: 15, color: ACC }}>Clerque</span>
            </div>
            <h1 style={{ fontSize: 'clamp(38px, 6vw, 72px)', lineHeight: 1.04, letterSpacing: '-.03em', maxWidth: 760, margin: '0 auto 22px' }}>
              The Filipino business suite that actually runs offline.
            </h1>
            <p style={{ fontSize: 18, color: '#94A2B6', maxWidth: 520, margin: '0 auto 36px', lineHeight: 1.65 }}>
              POS. Ledger. Sync. BIR compliance. All in one tool designed around how Philippine MSMEs actually work.
            </p>
            <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="https://clerque.hnscorpph.com/login" className="btn" style={{ background: `linear-gradient(180deg, ${ACC}dd, ${ACC}bb)`, color: '#fff', boxShadow: `0 8px 24px -8px ${ACC}80`, border: 'none' }}>
                Open Clerque
              </a>
              <Link href="/contact" className="btn btn-ghost">Request demo</Link>
            </div>

            {/* Dashboard preview */}
            <div style={{ marginTop: 56, maxWidth: 760, margin: '56px auto 0', background: '#101724', border: '1px solid rgba(255,255,255,.10)', borderRadius: 18, padding: '28px 24px', textAlign: 'left' }}>
              <div style={{ display: 'flex', gap: 12, marginBottom: 22, flexWrap: 'wrap' }}>
                {['Today', 'This week', 'This month'].map((t, i) => (
                  <button key={t} style={{ padding: '6px 14px', borderRadius: 8, border: `1px solid ${i === 0 ? ACC + '60' : 'rgba(255,255,255,.10)'}`, background: i === 0 ? ACC + '18' : 'transparent', color: i === 0 ? ACC : '#63718A', fontSize: 13, fontFamily: 'var(--font-space-grotesk)', fontWeight: 600, cursor: 'pointer' }}>{t}</button>
                ))}
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,minmax(0,1fr))', gap: 14, marginBottom: 22 }}>
                {[['Revenue', '₱24,810', '+12%'], ['Transactions', '148', '+8%'], ['Avg. ticket', '₱168', '+4%']].map(([l, v, d]) => (
                  <div key={l} style={{ background: '#141D2D', borderRadius: 12, padding: '18px 16px' }}>
                    <div style={{ fontSize: 12, color: '#63718A', marginBottom: 6 }}>{l}</div>
                    <div style={{ fontFamily: 'var(--font-space-grotesk)', fontWeight: 700, fontSize: 22, color: '#EAF1F9', marginBottom: 4 }}>{v}</div>
                    <div style={{ fontSize: 11, color: '#37D9A0' }}>{d} vs yesterday</div>
                  </div>
                ))}
              </div>
              {/* Simple bar chart */}
              <div style={{ display: 'flex', alignItems: 'flex-end', gap: 6, height: 72 }}>
                {[40, 60, 38, 75, 55, 88, 65, 90, 72, 80, 58, 95, 68, 84].map((h, i) => (
                  <div key={i} style={{ flex: 1, height: `${h}%`, borderRadius: '4px 4px 0 0', background: i === 13 ? ACC : 'rgba(124,141,245,.28)', transition: '.2s' }} />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Modules */}
        <section style={{ padding: '80px 0', background: '#0C111B', borderTop: '1px solid rgba(255,255,255,.07)' }}>
          <div className="wrap">
            <div className="stab" style={{ marginBottom: 20 }}><span className="d" /><span>Modules</span></div>
            <div className="sec-head">
              <h2>Three tools in one license</h2>
              <p>Counter, Ledger, and Sync — all included. No per-module upsells.</p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: 16 }}>
              {MODULES.map((m) => (
                <div key={m.name} style={{ background: '#101724', border: '1px solid rgba(255,255,255,.08)', borderRadius: 16, padding: 32 }}>
                  <div style={{ width: 42, height: 42, borderRadius: 11, background: `${m.color}20`, border: `1px solid ${m.color}35`, marginBottom: 18, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <div style={{ width: 16, height: 16, borderRadius: '50%', background: m.color }} />
                  </div>
                  <h3 style={{ fontFamily: 'var(--font-space-grotesk)', fontSize: 18, fontWeight: 700, marginBottom: 8, color: '#EAF1F9' }}>{m.name}</h3>
                  <p style={{ color: '#94A2B6', fontSize: 14.5, lineHeight: 1.65, margin: 0 }}>{m.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features */}
        <section style={{ padding: '80px 0' }}>
          <div className="wrap">
            <div className="stab" style={{ marginBottom: 20 }}><span className="d" /><span>Features</span></div>
            <div className="sec-head">
              <h2>Everything a Filipino business needs</h2>
              <p>Built around real pain points, not a feature checklist.</p>
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

        {/* Pricing */}
        <section style={{ padding: '80px 0', background: '#0C111B', borderTop: '1px solid rgba(255,255,255,.07)' }}>
          <div className="wrap">
            <div className="stab" style={{ marginBottom: 20 }}><span className="d" /><span>Pricing</span></div>
            <div className="sec-head">
              <h2>Simple, peso-denominated pricing</h2>
              <p>No USD surprises. No per-seat traps.</p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))', gap: 18, maxWidth: 900, margin: '0 auto' }}>
              {PRICING.map((tier) => (
                <div key={tier.tier} style={{ background: tier.featured ? '#141D2D' : '#101724', border: `1px solid ${tier.featured ? ACC + '60' : 'rgba(255,255,255,.08)'}`, borderRadius: 18, padding: '36px 28px', position: 'relative' }}>
                  {tier.featured && (
                    <div style={{ position: 'absolute', top: -13, left: '50%', transform: 'translateX(-50%)', background: `linear-gradient(90deg, ${ACC}, #5C9EE8)`, borderRadius: 999, padding: '4px 16px', fontSize: 11, fontWeight: 700, color: '#fff', fontFamily: 'var(--font-space-grotesk)', whiteSpace: 'nowrap' }}>Most popular</div>
                  )}
                  <h3 style={{ fontFamily: 'var(--font-space-grotesk)', fontSize: 13, letterSpacing: '.14em', textTransform: 'uppercase', color: '#63718A', marginBottom: 14 }}>{tier.tier}</h3>
                  <div style={{ fontFamily: 'var(--font-space-grotesk)', fontSize: 40, fontWeight: 700, color: '#EAF1F9', marginBottom: 4 }}>
                    {tier.price}
                    {tier.per && <span style={{ fontSize: 16, color: '#63718A' }}>{tier.per}</span>}
                  </div>
                  <p style={{ color: '#94A2B6', fontSize: 14, marginBottom: 28, lineHeight: 1.6 }}>{tier.desc}</p>
                  <a href="https://clerque.hnscorpph.com/login" className="btn" style={{ width: '100%', justifyContent: 'center', background: tier.featured ? `linear-gradient(180deg,${ACC}dd,${ACC}bb)` : 'rgba(255,255,255,.05)', color: tier.featured ? '#fff' : '#94A2B6', border: `1px solid ${tier.featured ? 'transparent' : 'rgba(255,255,255,.14)'}` }}>
                    {tier.cta}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>
      <SiteFooter />
    </>
  );
}
