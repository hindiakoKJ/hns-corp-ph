import Link from 'next/link';
import SiteNav from '@/components/ui/SiteNav';
import SiteFooter from '@/components/ui/SiteFooter';

export default function AboutPage() {
  return (
    <>
      <SiteNav />
      <main>

        {/* Hero */}
        <section style={{ padding: '90px 32px 70px', position: 'relative', overflow: 'hidden', textAlign: 'center' }}>
          <div style={{ position: 'absolute', top: -160, left: '50%', transform: 'translateX(-50%)', width: 600, height: 400, background: 'radial-gradient(ellipse, rgba(43,196,222,.14) 0%, transparent 65%)', pointerEvents: 'none' }} />
          <div className="wrap" style={{ position: 'relative', zIndex: 1 }}>
            <div className="eyebrow" style={{ marginBottom: 20 }}>About HNScorpPH</div>
            <h1 style={{ fontSize: 'clamp(38px, 6vw, 70px)', lineHeight: 1.04, letterSpacing: '-.03em', maxWidth: 720, margin: '0 auto 24px' }}>
              One founder. A country&apos;s worth of software.
            </h1>
            <p style={{ fontSize: 18, color: '#94A2B6', maxWidth: 560, margin: '0 auto', lineHeight: 1.65 }}>
              HNScorpPH is a solo-founded Philippine software company building sovereign, BIR-compliant tools for Filipino businesses, families, and local governments.
            </p>
          </div>
        </section>

        {/* Story */}
        <section style={{ padding: '80px 0', background: '#0C111B', borderTop: '1px solid rgba(255,255,255,.07)' }}>
          <div className="wrap">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,320px),1fr))', gap: 48, alignItems: 'start' }}>
              <div>
                <div className="stab" style={{ marginBottom: 20 }}><span className="d" /><span>The story</span></div>
                <h2 style={{ fontSize: 'clamp(26px, 3.5vw, 40px)', lineHeight: 1.1, marginBottom: 20 }}>
                  Built because nothing else worked for Filipino MSMEs
                </h2>
                <p style={{ color: '#94A2B6', lineHeight: 1.75, marginBottom: 16 }}>
                  Every accounting tool available to Filipino businesses was either too expensive, USD-denominated, or required constant internet — unrealistic for a store in CamSur or a barangay hall in Bicol.
                </p>
                <p style={{ color: '#94A2B6', lineHeight: 1.75, marginBottom: 16 }}>
                  HNScorpPH started with Clerque — a BIR-compliant, offline-first business suite — and has grown into a nine-product ecosystem serving MSMEs, co-working spaces, LGUs, and families.
                </p>
                <p style={{ color: '#94A2B6', lineHeight: 1.75 }}>
                  All products are built, maintained, and shipped from the Philippines. All data stays in-country.
                </p>
              </div>
              <div>
                <div style={{ background: '#101724', border: '1px solid rgba(255,255,255,.08)', borderRadius: 18, padding: 32 }}>
                  <h3 style={{ fontFamily: 'var(--font-space-grotesk)', fontSize: 15, letterSpacing: '.12em', textTransform: 'uppercase', color: '#63718A', marginBottom: 20 }}>Company facts</h3>
                  {[
                    ['Founded', '2024'],
                    ['Headquarters', 'Camarines Sur, Philippines'],
                    ['Products', '9 (5 live, 4 in development)'],
                    ['PhilGEPS status', 'Red Member'],
                    ['AI partnership', 'Claude for Startups'],
                    ['Data residency', '100% Philippines'],
                  ].map(([k, v]) => (
                    <div key={k} style={{ display: 'flex', justifyContent: 'space-between', padding: '12px 0', borderBottom: '1px solid rgba(255,255,255,.06)' }}>
                      <span style={{ color: '#63718A', fontSize: 14 }}>{k}</span>
                      <span style={{ color: '#EAF1F9', fontSize: 14, fontWeight: 600 }}>{v}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Roadmap */}
        <section style={{ padding: '80px 0' }}>
          <div className="wrap">
            <div className="stab" style={{ marginBottom: 20 }}><span className="d" /><span>Roadmap</span></div>
            <div className="sec-head">
              <h2>What we&apos;re building</h2>
              <p>A five-year plan to serve every Filipino institution.</p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))', gap: 18 }}>
              {[
                { phase: 'Now', color: '#37D9A0', items: ['Clerque — live', 'TindaPOS — live', 'AltSpaceCW — live', 'Scatto — live', 'Everafter — live', 'Sangguni — live'] },
                { phase: 'Next', color: '#2BC4DE', items: ['Steady — epilepsy companion', 'LOCATR — rental matchmaking', 'KonekBarangay — barangay one-stop-shop', 'Clerque payroll module'] },
                { phase: 'Later', color: '#7C6BF0', items: ['National interoperability (PhilSys)', 'Multi-LGU federation', 'Healthcare records integration', 'Export-ready financial statements'] },
              ].map(({ phase, color, items }) => (
                <div key={phase} style={{ background: '#101724', border: '1px solid rgba(255,255,255,.07)', borderRadius: 16, padding: 28 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20 }}>
                    <div style={{ width: 10, height: 10, borderRadius: '50%', background: color, boxShadow: `0 0 10px ${color}` }} />
                    <span style={{ fontFamily: 'var(--font-space-grotesk)', fontWeight: 700, fontSize: 15, color: '#EAF1F9' }}>{phase}</span>
                  </div>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    {items.map((item) => (
                      <li key={item} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '7px 0', borderBottom: '1px solid rgba(255,255,255,.05)', color: '#94A2B6', fontSize: 14 }}>
                        <span style={{ width: 5, height: 5, borderRadius: '50%', background: color, opacity: .7, flexShrink: 0 }} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Credentials */}
        <section style={{ padding: '80px 0', background: '#0C111B', borderTop: '1px solid rgba(255,255,255,.07)' }}>
          <div className="wrap">
            <div className="stab" style={{ marginBottom: 20 }}><span className="d" /><span>Credentials</span></div>
            <div className="sec-head">
              <h2>Built with the best</h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,300px),1fr))', gap: 18 }}>
              {[
                { title: 'Claude for Startups', body: 'Selected for Anthropic\'s Claude for Startups program — access to frontier AI models to accelerate product development.', badge: 'AI' },
                { title: 'PhilGEPS Red Member', body: 'Registered government procurement participant. Products are procurement-eligible for LGUs and national agencies.', badge: 'GOV' },
              ].map(({ title, body, badge }) => (
                <div key={title} style={{ background: '#101724', border: '1px solid rgba(255,255,255,.08)', borderRadius: 16, padding: '32px 28px', display: 'flex', gap: 18 }}>
                  <div style={{ flexShrink: 0, width: 44, height: 44, borderRadius: 12, background: 'rgba(43,196,222,.12)', border: '1px solid rgba(43,196,222,.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-space-grotesk)', fontWeight: 700, fontSize: 11, color: '#2BC4DE' }}>{badge}</div>
                  <div>
                    <h3 style={{ fontFamily: 'var(--font-space-grotesk)', fontSize: 17, fontWeight: 700, marginBottom: 8, color: '#EAF1F9' }}>{title}</h3>
                    <p style={{ color: '#94A2B6', fontSize: 14, lineHeight: 1.65, margin: 0 }}>{body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section style={{ padding: '80px 0', textAlign: 'center' }}>
          <div className="wrap">
            <h2 style={{ fontSize: 'clamp(26px, 4vw, 44px)', marginBottom: 16 }}>Want to work together?</h2>
            <p style={{ color: '#94A2B6', marginBottom: 32, fontSize: 16 }}>Partnership, procurement, or press — we&apos;re easy to reach.</p>
            <Link href="/contact" className="btn btn-blue">Get in touch</Link>
          </div>
        </section>

      </main>
      <SiteFooter />
    </>
  );
}
