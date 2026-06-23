import Link from 'next/link';
import SiteNav from '@/components/ui/SiteNav';
import SiteFooter from '@/components/ui/SiteFooter';

const BIR_FORMS = [
  { form: 'BIR Form 2550Q', title: 'Quarterly VAT Return', desc: 'Clerque auto-computes output and input VAT per quarter. Export as a BIR-compatible XML or PDF.' },
  { form: 'BIR Form 1701Q', title: 'Quarterly Income Tax Return', desc: 'Profit-and-loss summary mapped to 1701Q line items. Supports both graduated and 8% flat rate.' },
  { form: 'BIR Form 2551Q', title: 'Quarterly Percentage Tax', desc: 'Gross receipts auto-tallied for percentage taxpayers. No manual computation needed.' },
];

const CAS_SPECS = [
  { spec: 'Books of accounts', detail: 'General journal, general ledger, and subsidiary ledgers generated automatically.' },
  { spec: 'Sequential official receipts', detail: 'OR numbers issued in unbroken sequence. Void receipts retained in audit trail.' },
  { spec: 'User access logs', detail: 'Every action timestamped and user-attributed. Immutable audit log.' },
  { spec: 'Data backup', detail: 'Automatic cloud backup daily. Restore to any point in the last 90 days.' },
];

export default function CompliancePage() {
  return (
    <>
      <SiteNav />
      <main>

        {/* Hero */}
        <section style={{ padding: '90px 32px 70px', position: 'relative', overflow: 'hidden', textAlign: 'center' }}>
          <div style={{ position: 'absolute', top: -120, left: '50%', transform: 'translateX(-50%)', width: 560, height: 360, background: 'radial-gradient(ellipse, rgba(61,123,255,.14) 0%, transparent 65%)', pointerEvents: 'none' }} />
          <div className="wrap" style={{ position: 'relative', zIndex: 1 }}>
            <div className="eyebrow" style={{ marginBottom: 20 }}>Compliance</div>
            <h1 style={{ fontSize: 'clamp(36px, 5.5vw, 64px)', lineHeight: 1.05, letterSpacing: '-.03em', maxWidth: 700, margin: '0 auto 22px' }}>
              BIR-compliant. PhilGEPS-registered. Built for Philippine law.
            </h1>
            <p style={{ fontSize: 17, color: '#94A2B6', maxWidth: 520, margin: '0 auto', lineHeight: 1.65 }}>
              Every HNS PH Solutions product is designed around Philippine regulatory requirements — not retrofitted to them.
            </p>
          </div>
        </section>

        {/* CAS Section */}
        <section style={{ padding: '80px 0', background: '#0C111B', borderTop: '1px solid rgba(255,255,255,.07)' }}>
          <div className="wrap">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,360px),1fr))', gap: 48, alignItems: 'start' }}>
              <div>
                <div className="stab" style={{ marginBottom: 20 }}><span className="d" /><span>CAS Compliance</span></div>
                <h2 style={{ fontSize: 'clamp(26px, 3.2vw, 38px)', lineHeight: 1.12, marginBottom: 20 }}>
                  Computerized Accounting System specifications
                </h2>
                <p style={{ color: '#94A2B6', lineHeight: 1.75, marginBottom: 28 }}>
                  Clerque is built to the BIR&apos;s CAS requirements under Revenue Memorandum Order No. 29-2002. The system maintains the audit trail, access logs, and data integrity standards required for CAS accreditation.
                </p>
                {CAS_SPECS.map((s) => (
                  <div key={s.spec} style={{ padding: '16px 0', borderBottom: '1px solid rgba(255,255,255,.06)' }}>
                    <div style={{ fontFamily: 'var(--font-space-grotesk)', fontWeight: 700, fontSize: 14.5, color: '#EAF1F9', marginBottom: 5 }}>{s.spec}</div>
                    <div style={{ color: '#94A2B6', fontSize: 14, lineHeight: 1.6 }}>{s.detail}</div>
                  </div>
                ))}
              </div>

              <div>
                <div style={{ background: '#101724', border: '1px solid rgba(255,255,255,.08)', borderRadius: 18, padding: 32, position: 'sticky', top: 90 }}>
                  <h3 style={{ fontFamily: 'var(--font-space-grotesk)', fontSize: 13, letterSpacing: '.14em', textTransform: 'uppercase', color: '#63718A', marginBottom: 22 }}>Accreditation status</h3>
                  {[
                    ['SEC / BIR registration', 100],
                    ['Naga City LGU permit', 100],
                    ['CAS Architecture', 100],
                    ['Audit trail', 100],
                    ['OR sequencing', 100],
                    ['PhilGEPS registration', 100],
                    ['CAS BIR submission', 70],
                  ].map(([label, pct]) => (
                    <div key={label as string} style={{ marginBottom: 18 }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 7 }}>
                        <span style={{ fontSize: 13.5, color: '#94A2B6' }}>{label as string}</span>
                        <span style={{ fontSize: 13, color: (pct as number) === 100 ? '#37D9A0' : '#E8A24E', fontWeight: 700 }}>{pct}%</span>
                      </div>
                      <div style={{ height: 5, background: 'rgba(255,255,255,.06)', borderRadius: 999, overflow: 'hidden' }}>
                        <div style={{ height: '100%', width: `${pct}%`, background: (pct as number) === 100 ? '#37D9A0' : '#E8A24E', borderRadius: 999 }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* BIR Forms */}
        <section style={{ padding: '80px 0' }}>
          <div className="wrap">
            <div className="stab" style={{ marginBottom: 20 }}><span className="d" /><span>BIR Forms</span></div>
            <div className="sec-head">
              <h2>Automated BIR report generation</h2>
              <p>Clerque auto-fills the returns your accountant files every quarter.</p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(min(100%,300px),1fr))', gap: 16 }}>
              {BIR_FORMS.map((f) => (
                <div key={f.form} style={{ background: '#101724', border: '1px solid rgba(255,255,255,.08)', borderRadius: 16, padding: '28px 24px' }}>
                  <div style={{ fontFamily: 'var(--font-space-grotesk)', fontWeight: 700, fontSize: 13, letterSpacing: '.06em', color: '#3D7BFF', marginBottom: 10 }}>{f.form}</div>
                  <h3 style={{ fontFamily: 'var(--font-space-grotesk)', fontSize: 18, fontWeight: 700, marginBottom: 10, color: '#EAF1F9' }}>{f.title}</h3>
                  <p style={{ color: '#94A2B6', fontSize: 14, lineHeight: 1.65, margin: 0 }}>{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PhilGEPS */}
        <section style={{ padding: '80px 0', background: '#0C111B', borderTop: '1px solid rgba(255,255,255,.07)' }}>
          <div className="wrap">
            <div className="stab" style={{ marginBottom: 20 }}><span className="d" /><span>PhilGEPS</span></div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,340px),1fr))', gap: 48 }}>
              <div>
                <h2 style={{ fontSize: 'clamp(24px, 3vw, 36px)', lineHeight: 1.12, marginBottom: 18 }}>Government procurement-ready</h2>
                <p style={{ color: '#94A2B6', lineHeight: 1.75, marginBottom: 16 }}>
                  HNS PH Solutions is a PhilGEPS Red Member — registered in the Philippine Government Electronic Procurement System. Products can be procured by LGUs, national agencies, and GOCCs through the standard government procurement process.
                </p>
                <p style={{ color: '#94A2B6', lineHeight: 1.75 }}>
                  Sangguni (digital ordinance management) and KonekBarangay (barangay one-stop-shop) are purpose-built for government procurement — designed to meet RA 9184 requirements and COA audit standards.
                </p>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                {[
                  ['Registration status', 'Active — Red Member'],
                  ['Eligible agencies', 'All LGUs, national agencies, GOCCs'],
                  ['Procurement mode', 'Negotiated, Shopping, Competitive Bidding'],
                  ['COA compliance', 'Audit trail + OR generation built-in'],
                ].map(([k, v]) => (
                  <div key={k} style={{ background: '#101724', border: '1px solid rgba(255,255,255,.07)', borderRadius: 12, padding: '16px 20px', display: 'flex', justifyContent: 'space-between', gap: 16 }}>
                    <span style={{ color: '#63718A', fontSize: 14 }}>{k}</span>
                    <span style={{ color: '#EAF1F9', fontSize: 14, fontWeight: 600, textAlign: 'right' }}>{v}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section style={{ padding: '80px 0', textAlign: 'center' }}>
          <div className="wrap">
            <h2 style={{ fontSize: 'clamp(26px, 4vw, 44px)', marginBottom: 16 }}>Need compliance documentation?</h2>
            <p style={{ color: '#94A2B6', marginBottom: 32, fontSize: 16 }}>We can provide audit-ready exports, CAS documentation, and PhilGEPS procurement packets.</p>
            <Link href="/contact" className="btn btn-blue">Request compliance docs</Link>
          </div>
        </section>

      </main>
      <SiteFooter />
    </>
  );
}
