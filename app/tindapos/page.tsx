import Link from 'next/link';
import SiteNav from '@/components/ui/SiteNav';
import SiteFooter from '@/components/ui/SiteFooter';
import { FeatureIcon } from '@/components/brand/FeatureIcons';

const ACC = '#E8A24E';

const FEATURES = [
  { icon: 'cart' as const,    title: 'Mabilis na checkout', body: 'I-scan o i-type ang item, tanggapin ang bayad, mag-print ng resibo — tatlong hakbang.' },
  { icon: 'box' as const,     title: 'Inventory tracking', body: 'Real-time stock count. Low-stock alert bago pa maubusan.' },
  { icon: 'bars' as const,    title: 'Daily sales report', body: 'Awtomatikong buod ng benta bawat araw — cash, GCash, utang.' },
  { icon: 'list' as const,    title: 'Listahan ng utang', body: 'I-track ang mga suki. Abisuhan sila nang may balance.' },
  { icon: 'coin' as const,    title: 'GCash / cash payment', body: 'Tumatanggap ng cash, QR Ph, at GCash nang walang third-party fees.' },
  { icon: 'offline' as const, title: 'Walang internet kailangan', body: 'Gumagana kahit brownout o walang signal. Sine-sync pagka-online.' },
];

export default function TindaPOSPage() {
  return (
    <>
      <SiteNav />
      <main style={{ '--acc': ACC } as React.CSSProperties}>

        {/* Hero */}
        <section style={{ padding: '90px 32px 70px', position: 'relative', overflow: 'hidden', textAlign: 'center' }}>
          <div style={{ position: 'absolute', top: -120, left: '50%', transform: 'translateX(-50%)', width: 560, height: 360, background: `radial-gradient(ellipse, ${ACC}22 0%, transparent 65%)`, pointerEvents: 'none' }} />
          <div className="wrap" style={{ position: 'relative', zIndex: 1 }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 12, border: `1px solid ${ACC}40`, borderRadius: 12, padding: '10px 18px', background: `${ACC}0E`, marginBottom: 28 }}>
              <img src="/logos/tindapos-icon.svg" alt="" width={28} height={28} style={{ borderRadius: 7, display: 'block' }} />
              <span style={{ fontFamily: 'var(--font-space-grotesk)', fontWeight: 700, fontSize: 15, color: ACC }}>TindaPOS</span>
            </div>
            <h1 style={{ fontSize: 'clamp(38px, 6vw, 72px)', lineHeight: 1.04, letterSpacing: '-.03em', maxWidth: 720, margin: '0 auto 22px' }}>
              Ang POS ng bawat tindahan.
            </h1>
            <p style={{ fontSize: 18, color: '#94A2B6', maxWidth: 500, margin: '0 auto 36px', lineHeight: 1.65 }}>
              Simple, mabilis, at libre para sa sari-sari stores, carinderia, at maliliit na negosyo sa Pilipinas.
            </p>
            <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="https://tindapos.hnscorpph.com" className="btn" style={{ background: `linear-gradient(180deg, ${ACC}dd, ${ACC}bb)`, color: '#fff', boxShadow: `0 8px 24px -8px ${ACC}80`, border: 'none' }}>
                I-try ang TindaPOS
              </a>
              <Link href="/contact" className="btn btn-ghost">Makipag-ugnayan</Link>
            </div>
          </div>
        </section>

        {/* Features */}
        <section style={{ padding: '80px 0', background: '#0C111B', borderTop: '1px solid rgba(255,255,255,.07)' }}>
          <div className="wrap">
            <div className="stab" style={{ marginBottom: 20 }}><span className="d" /><span>Features</span></div>
            <div className="sec-head">
              <h2>Lahat ng kailangan ng tindahan mo</h2>
              <p>Hindi kailangang maging tech-savvy. Gamitin mo lang.</p>
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

        {/* CTA */}
        <section style={{ padding: '80px 0', textAlign: 'center' }}>
          <div className="wrap">
            <h2 style={{ fontSize: 'clamp(28px, 4vw, 46px)', marginBottom: 16 }}>I-digitize ang tindahan mo ngayon.</h2>
            <p style={{ color: '#94A2B6', marginBottom: 32, fontSize: 16 }}>Libre. Walang credit card. Gumagana offline.</p>
            <a href="https://tindapos.hnscorpph.com" className="btn btn-blue">Simulan na — libre ito</a>
          </div>
        </section>

      </main>
      <SiteFooter />
    </>
  );
}
