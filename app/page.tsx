import Link from 'next/link';
import './rebrand.css';
import CountUp from '@/components/ui/CountUp';
import HNSFootmark from '@/components/brand/HNSFootmark';
import { ECO_PRODUCTS } from '@/components/brand/ecosystem.data';

const APP_LOGIN = 'https://clerque.hnscorpph.com/login';

// 8-ray Philippine sun — asset-free hero motif, drawn in gold line-art.
function PhilSun() {
  const rays = Array.from({ length: 8 }, (_, i) => i * 45);
  return (
    <svg className="ph-sun" viewBox="0 0 200 200" fill="none" aria-hidden="true">
      {/* outer ray burst */}
      {rays.map((deg) => (
        <g key={deg} transform={`rotate(${deg} 100 100)`}>
          <path d="M100 8 L108 40 L100 34 L92 40 Z" fill="#FCD116" />
          {/* thin secondary rays between the main 8 */}
          <line x1="100" y1="30" x2="100" y2="46" transform="rotate(22.5 100 100)" stroke="#E0A500" strokeWidth="2" strokeLinecap="round" opacity="0.7" />
        </g>
      ))}
      <circle cx="100" cy="100" r="52" stroke="#FCD116" strokeWidth="2" opacity="0.55" />
      <circle cx="100" cy="100" r="40" fill="#0E1730" stroke="#4D78D6" strokeWidth="1.5" opacity="0.9" />
      {/* HNS ligature mark at the core */}
      <g transform="translate(76 76) scale(1.0)" stroke="#FCD116" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 10V38" /><path d="M18 10V38" /><path d="M6 24H18" />
        <path d="M18 10L30 38" /><path d="M30 10V38" />
        <path d="M43.5 14 C42.5 10 34 9 32.5 13.5 C31 18 33 21 38 24 C43 27 44.5 30 43.5 34.5 C42 39 33.5 38 32.5 33.5" transform="translate(-6 0) scale(0.62) translate(6 8)" />
      </g>
    </svg>
  );
}

const PILLARS = [
  { n: '01', t: 'Sovereign by design', p: 'Your records live on infrastructure inside the Philippines, encrypted by default, yours to export on day one.' },
  { n: '02', t: 'BIR-compliant from day one', p: 'OR sequencing, immutable Z-Read & X-Read, and the quarterly forms — built to CAS spec, not bolted on.' },
  { n: '03', t: 'Built for government', p: 'A PhilGEPS Red Member. LGUs procure directly via Small Value Procurement — no public bidding required.' },
  { n: '04', t: 'Offline, always', p: 'Power cut? Dead router? Transactions write locally and sync the moment you reconnect. Nothing stops the sale.' },
];

export default function HomePage() {
  return (
    <div className="ph-root">
      {/* NAV */}
      <header className="ph-nav">
        <div className="ph-wrap ph-nav-in">
          <Link href="/" className="ph-brand">
            <span className="ph-mk">
              <svg viewBox="0 0 48 48" fill="none" width="30" height="30" aria-hidden="true">
                <g stroke="currentColor" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6 10V38" /><path d="M18 10V38" /><path d="M6 24H18" />
                  <path d="M18 10L30 38" /><path d="M30 10V38" />
                  <path d="M43.5 14 C42.5 10 34 9 32.5 13.5 C31 18 33 21 38 24 C43 27 44.5 30 43.5 34.5 C42 39 33.5 38 32.5 33.5" />
                </g>
              </svg>
            </span>
            <span>HNS PH Solutions</span>
          </Link>
          <nav className="ph-nlinks">
            <a href="#platform">Platform</a>
            <a href="#products">Products</a>
            <Link href="/compliance">Compliance</Link>
            <Link href="/about">Company</Link>
          </nav>
          <a href={APP_LOGIN} className="ph-btn ph-btn-gold" style={{ padding: '10px 18px', marginLeft: '20px' }}>Get started</a>
        </div>
      </header>

      {/* HERO */}
      <section className="ph-hero">
        <div className="ph-weave" />
        <div className="ph-hero-glow" />
        <div className="ph-wrap ph-hero-in">
          <div>
            <div className="ph-badge"><span className="ph-dot" /> SEC · BIR · Naga City LGU registered · PhilGEPS Red Member</div>
            <h1 className="ph-h1 ph-display">
              Software the<br />
              Philippines <span className="ph-uline">owns.</span>
            </h1>
            <p className="ph-sub">
              Sovereign, BIR-compliant, offline-ready tools for Filipino businesses, families, and local governments. Ten products. One login. Your data stays in-country.
            </p>
            <div className="ph-acts">
              <a href={APP_LOGIN} className="ph-btn ph-btn-gold">
                Get started
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </a>
              <Link href="/about" className="ph-btn ph-btn-ghost">Our story</Link>
            </div>
            <div className="ph-stats">
              <div className="ph-stat"><div className="ph-v"><CountUp to={10} /></div><div className="ph-l">Products</div></div>
              <div className="ph-stat"><div className="ph-v"><CountUp to={100} suffix="%" /></div><div className="ph-l">PH data residency</div></div>
              <div className="ph-stat"><div className="ph-v"><CountUp to={1} /></div><div className="ph-l">Login, all apps</div></div>
            </div>
          </div>
          <div className="ph-sun-wrap"><PhilSun /></div>
        </div>
      </section>

      {/* PLATFORM / manifesto */}
      <section className="ph-sec alt" id="platform">
        <div className="ph-weave" />
        <div className="ph-wrap" style={{ position: 'relative', zIndex: 2 }}>
          <div className="ph-sec-tag"><span className="ph-bar" /><span>The platform</span></div>
          <h2 className="ph-sec-h ph-display">One sovereign foundation under every product.</h2>
          <p className="ph-sec-p">The things foreign software treats as add-ons, we built into the core — so every app inherits them.</p>
          <div className="ph-quad">
            {PILLARS.map((c) => (
              <div className="ph-cell" key={c.n}>
                <div className="ph-num">{c.n}</div>
                <h3>{c.t}</h3>
                <p>{c.p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCTS — editorial numbered index */}
      <section className="ph-sec" id="products">
        <div className="ph-wrap">
          <div className="ph-sec-tag"><span className="ph-bar" /><span>The ecosystem</span></div>
          <h2 className="ph-sec-h ph-display">Ten products. One login. Growing.</h2>
          <p className="ph-sec-p">From the sari-sari counter to the barangay hall — each app its own, all of them sovereign.</p>
          <div className="ph-index">
            {ECO_PRODUCTS.map((p, i) => (
              <Link key={p.key} href={p.href} className="ph-row">
                <span className="ph-idx">{String(i + 1).padStart(2, '0')}</span>
                <span className="ph-logo"><img src={p.logo} alt={p.name} /></span>
                <span className="ph-name">
                  {p.name}
                  {p.gov && <span className="ph-gov">GOV</span>}
                </span>
                <span className="ph-kind">{p.kind}</span>
                <span className={`ph-tag ${p.status}`}>{p.status === 'live' ? 'Live' : 'Soon'}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="ph-cta">
        <div className="ph-weave" />
        <div className="ph-wrap" style={{ position: 'relative', zIndex: 2 }}>
          <div className="ph-eyebrow" style={{ marginBottom: 18, color: '#FCD116' }}>Own your tools · Own your future</div>
          <h2 className="ph-display">Ready to run on software you own?</h2>
          <p>Start with Clerque — the all-in-one Filipino business suite. Free tier, no card required.</p>
          <div className="ph-acts" style={{ justifyContent: 'center' }}>
            <a href={APP_LOGIN} className="ph-btn ph-btn-gold">Get started free</a>
            <Link href="/contact" className="ph-btn ph-btn-ghost" style={{ borderColor: 'rgba(255,255,255,.45)', color: '#fff' }}>Talk to us</Link>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="ph-foot">
        <div className="ph-wrap ph-foot-in">
          <div>
            <Link href="/" className="ph-brand">
              <span className="ph-mk">
                <svg viewBox="0 0 48 48" fill="none" width="28" height="28" aria-hidden="true">
                  <g stroke="currentColor" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M6 10V38" /><path d="M18 10V38" /><path d="M6 24H18" />
                    <path d="M18 10L30 38" /><path d="M30 10V38" />
                    <path d="M43.5 14 C42.5 10 34 9 32.5 13.5 C31 18 33 21 38 24 C43 27 44.5 30 43.5 34.5 C42 39 33.5 38 32.5 33.5" />
                  </g>
                </svg>
              </span>
              <span>HNS PH Solutions</span>
            </Link>
            <p className="fd">Sovereign digital infrastructure for Filipino businesses, families, and government. An SEC-, BIR-, and Naga City LGU-registered OPC.</p>
          </div>
          <div className="ph-foot-col">
            <h4>Products</h4>
            <Link href="/clerque">Clerque</Link>
            <Link href="/sariassist">SariAssist</Link>
            <Link href="/cvassist">CVAssist</Link>
            <Link href="/scatto">Scatto</Link>
          </div>
          <div className="ph-foot-col">
            <h4>Platform</h4>
            <a href="#platform">Why sovereign</a>
            <Link href="/compliance">Compliance</Link>
            <Link href="/about">About</Link>
          </div>
          <div className="ph-foot-col">
            <h4>Company</h4>
            <Link href="/about">Our story</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/contact">For LGUs</Link>
          </div>
        </div>
        <div className="ph-wrap ph-foot-bot">
          <a href="https://hnscorpph.com" target="_blank" rel="noopener noreferrer" aria-label="Powered by HNS PH Solutions" className="ph-footmark">
            <span className="ph-fm-label">Powered by</span>
            <HNSFootmark size={22} />
          </a>
          <span>© {new Date().getFullYear()} HNS PH Solutions OPC — Naga City, Philippines</span>
        </div>
      </footer>
    </div>
  );
}
