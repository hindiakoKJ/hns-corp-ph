import Link from 'next/link';
import '../home.css';
import HomeNav from '@/components/ui/HomeNav';
import HomeFooter from '@/components/ui/HomeFooter';

const CAS = [
  { title: 'Books of accounts', body: 'General journal, general ledger, and subsidiary ledgers generated automatically.' },
  { title: 'Sequential official receipts', body: 'OR numbers issued in unbroken sequence. Void receipts retained in the audit trail.' },
  { title: 'User access logs', body: 'Every action timestamped and user-attributed. An immutable audit log.' },
  { title: 'Data backup', body: 'Automatic cloud backup daily. Restore to any point in the last 90 days.' },
];

const FORMS = [
  { form: 'BIR Form 2550Q', title: 'Quarterly VAT Return', body: 'Auto-computes output and input VAT per quarter. Export as BIR-compatible XML or PDF.' },
  { form: 'BIR Form 1701Q', title: 'Quarterly Income Tax', body: 'P&L mapped to 1701Q line items. Supports graduated and 8% flat rate.' },
  { form: 'BIR Form 2551Q', title: 'Quarterly Percentage Tax', body: 'Gross receipts auto-tallied for percentage taxpayers. No manual computation.' },
];

const GEPS: [string, string][] = [
  ['Registration status', 'Active — Red Member'],
  ['Eligible agencies', 'All LGUs, national agencies, GOCCs'],
  ['Procurement mode', 'Negotiated, Shopping, Competitive Bidding'],
  ['COA compliance', 'Audit trail + OR generation built-in'],
];

const CREDS = ['SEC-registered', 'BIR-registered', 'Naga City LGU', 'PhilGEPS Red Member'];

export default function CompliancePage() {
  return (
    <div className="hs-root">
      <HomeNav />

      <section className="hs-phero">
        <div className="hs-wrap">
          <div className="hs-eyebrow" style={{ marginBottom: 18 }}>Compliance</div>
          <h1>BIR-compliant. PhilGEPS-registered. Built for Philippine law.</h1>
          <p className="sub">Every HNS PH Solutions product is designed around Philippine regulatory requirements — not retrofitted to them.</p>
          <div className="hs-creds" style={{ justifyContent: 'center' }}>
            {CREDS.map((c) => <span className="hs-cred" key={c}>{c}</span>)}
          </div>
        </div>
      </section>

      {/* CAS */}
      <section className="hs-band">
        <div className="hs-wrap hs-sec">
          <div className="hs-eyebrow">CAS compliance</div>
          <h2 className="hs-sec-h">Computerized Accounting System specifications</h2>
          <p className="hs-sec-p">Clerque is built to the BIR&apos;s CAS requirements under Revenue Memorandum Order No. 29-2002 — the audit trail, access logs, and data integrity standards required for CAS accreditation.</p>
          <div className="hs-fgrid">
            {CAS.map((c) => (
              <div className="hs-fcard" key={c.title} style={{ display: 'block' }}>
                <h4 style={{ marginBottom: 8 }}>{c.title}</h4>
                <p>{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BIR forms */}
      <section className="hs-sec">
        <div className="hs-wrap">
          <div className="hs-eyebrow">BIR forms</div>
          <h2 className="hs-sec-h">Automated BIR report generation</h2>
          <p className="hs-sec-p">Clerque auto-fills the returns your accountant files every quarter.</p>
          <div className="hs-fgrid">
            {FORMS.map((f) => (
              <div className="hs-fcard" key={f.form} style={{ display: 'block' }}>
                <div style={{ fontFamily: 'var(--font-hanken), sans-serif', fontWeight: 700, fontSize: 12.5, letterSpacing: '.06em', color: 'var(--lav)', marginBottom: 8 }}>{f.form}</div>
                <h4 style={{ marginBottom: 8 }}>{f.title}</h4>
                <p>{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PhilGEPS */}
      <section className="hs-band">
        <div className="hs-wrap hs-sec">
          <div className="hs-story">
            <div>
              <div className="hs-eyebrow" style={{ marginBottom: 16 }}>PhilGEPS</div>
              <div className="big">Government <span className="em">procurement-ready.</span></div>
              <p className="hs-sec-p" style={{ marginTop: 18 }}>
                HNS PH Solutions is a PhilGEPS Red Member — products can be procured by LGUs, national agencies,
                and GOCCs. Sangguni and KonekBarangay are purpose-built to meet RA 9184 requirements and COA audit standards.
              </p>
            </div>
            <div className="hs-rows">
              {GEPS.map(([k, v]) => (
                <div className="hs-row" key={k}><span className="k">{k}</span><span className="v">{v}</span></div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="hs-sec hs-cta">
        <div className="hs-wrap">
          <h2>Need compliance documentation?</h2>
          <p>We can provide audit-ready exports, CAS documentation, and PhilGEPS procurement packets.</p>
          <Link href="/contact" className="hs-btn hs-btn-indigo">Request compliance docs</Link>
        </div>
      </section>

      <HomeFooter />
    </div>
  );
}
