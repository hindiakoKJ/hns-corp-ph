import Link from 'next/link';
import '../home.css';
import HomeNav from '@/components/ui/HomeNav';
import HomeFooter from '@/components/ui/HomeFooter';

const FACTS: [string, string][] = [
  ['Founded', '2026'],
  ['Headquarters', 'Naga City, Camarines Sur'],
  ['Products', '10 (9 live, 1 in development)'],
  ['Registrations', 'SEC · BIR · Naga City LGU'],
  ['PhilGEPS status', 'Red Member'],
  ['Partnerships', 'Claude & Google for Startups'],
  ['Data residency', '100% Philippines'],
];

const ROADMAP = [
  { phase: 'Now', items: ['Clerque', 'SariAssist', 'AltSpaceCW', 'Scatto', 'Everafter', 'MyMoments', 'CVAssist', 'Magnet Moments', 'Sangguni', 'KonekBarangay', 'Steady'] },
  { phase: 'Next', items: ['LOCATR — rental matchmaking', 'Clerque payroll module'] },
  { phase: 'Later', items: ['National interoperability (PhilSys)', 'Multi-LGU federation', 'Healthcare records integration', 'Export-ready financial statements'] },
];

const CREDS = [
  { title: 'Claude for Startups', body: "Selected for Anthropic's Claude for Startups program — frontier AI to accelerate product development.", badge: 'AI' },
  { title: 'Google for Startups', body: 'Member of the Google for Startups Cloud Program — Google Cloud credits and infrastructure to scale.', badge: 'GCP' },
  { title: 'PhilGEPS Red Member', body: 'Registered government procurement participant. Products are procurement-eligible for LGUs and agencies.', badge: 'GOV' },
  { title: 'SEC · BIR · LGU registered', body: 'A registered Philippine one-person corporation — SEC-registered, BIR-registered, accredited with the LGU of Naga City.', badge: 'REG' },
];

export default function AboutPage() {
  return (
    <div className="hs-root">
      <HomeNav />

      <section className="hs-phero">
        <div className="hs-wrap">
          <div className="hs-eyebrow" style={{ marginBottom: 18 }}>About HNS PH Solutions</div>
          <h1>One founder. A country&apos;s worth of software.</h1>
          <p className="sub">
            HNS PH Solutions is a solo-founded Philippine software house building sovereign, BIR-compliant tools
            for Filipino businesses, families, and local governments.
          </p>
        </div>
      </section>

      {/* story + facts */}
      <section className="hs-band">
        <div className="hs-wrap hs-sec">
          <div className="hs-story">
            <div>
              <div className="hs-eyebrow" style={{ marginBottom: 16 }}>The story</div>
              <div className="big">Built because nothing else <span className="em">worked</span> for Filipino MSMEs.</div>
              <p className="hs-sec-p" style={{ marginTop: 20 }}>
                Every accounting tool available to Filipino businesses was too expensive, USD-denominated, or
                required constant internet — unrealistic for a store in CamSur or a barangay hall in Bicol.
                HNS PH Solutions started with Clerque and grew into a ten-product ecosystem. Everything is built,
                shipped, and hosted in the Philippines; every record stays in-country.
              </p>
            </div>
            <div className="hs-rows">
              {FACTS.map(([k, v]) => (
                <div className="hs-row" key={k}><span className="k">{k}</span><span className="v">{v}</span></div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* roadmap */}
      <section className="hs-sec">
        <div className="hs-wrap">
          <div className="hs-eyebrow" style={{ marginBottom: 14 }}>Roadmap</div>
          <h2 className="hs-sec-h">What we&apos;re building</h2>
          <div className="hs-pillars" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%,240px), 1fr))' }}>
            {ROADMAP.map((r) => (
              <div className="hs-pillar" key={r.phase}>
                <h3>{r.phase}</h3>
                <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
                  {r.items.map((i) => (
                    <li key={i} style={{ fontFamily: 'var(--font-hanken), sans-serif', color: 'var(--mut)', fontSize: 14.5, padding: '6px 0', borderBottom: '1px solid var(--line)' }}>{i}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* credentials */}
      <section className="hs-band">
        <div className="hs-wrap hs-sec">
          <div className="hs-eyebrow">Credentials</div>
          <h2 className="hs-sec-h" style={{ marginBottom: 40 }}>Built with the best, registered where it counts.</h2>
          <div className="hs-fgrid">
            {CREDS.map((c) => (
              <div className="hs-fcard" key={c.title}>
                <div className="ic" style={{ fontFamily: 'var(--font-hanken), sans-serif', fontWeight: 700, fontSize: 11 }}>{c.badge}</div>
                <div>
                  <h4>{c.title}</h4>
                  <p>{c.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="hs-sec hs-cta">
        <div className="hs-wrap">
          <h2>Want to work together?</h2>
          <p>Partnership, procurement, or press — we&apos;re easy to reach.</p>
          <Link href="/contact" className="hs-btn hs-btn-indigo">Get in touch</Link>
        </div>
      </section>

      <HomeFooter />
    </div>
  );
}
