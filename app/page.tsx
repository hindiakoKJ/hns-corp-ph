import Link from 'next/link';
import './home.css';
import HNSFootmark from '@/components/brand/HNSFootmark';
import HomeFinder from '@/components/ui/HomeFinder';

const APP_LOGIN = 'https://clerque.hnscorpph.com/login';

const PILLARS = [
  { h: 'Sovereign by design', p: 'Records live on Philippine infrastructure, encrypted, yours to export on day one.' },
  { h: 'BIR-compliant', p: 'OR sequencing, immutable Z-read & X-read, quarterly forms — built to CAS spec.' },
  { h: 'Built for government', p: 'A PhilGEPS Red Member. LGUs procure directly via Small Value Procurement.' },
  { h: 'Offline, always', p: 'Writes locally and syncs on reconnect. A brownout never stops the sale.' },
];

const CREDS = ['SEC-registered', 'BIR-registered', 'Naga City LGU', 'PhilGEPS Red Member', 'Claude for Startups', 'Google for Startups'];

function Mark({ size = 27 }: { size?: number }) {
  return (
    <svg viewBox="0 0 48 48" width={size} height={size} fill="none" aria-hidden="true">
      <g stroke="currentColor" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 10V38" /><path d="M18 10V38" /><path d="M6 24H18" />
        <path d="M18 10L30 38" /><path d="M30 10V38" />
        <path d="M43.5 14 C42.5 10 34 9 32.5 13.5 C31 18 33 21 38 24 C43 27 44.5 30 43.5 34.5 C42 39 33.5 38 32.5 33.5" />
      </g>
    </svg>
  );
}

export default function HomePage() {
  return (
    <div className="hs-root">
      {/* nav */}
      <header className="hs-nav">
        <div className="hs-wrap hs-nav-in">
          <Link href="/" className="hs-brand"><span className="mk"><Mark size={27} /></span>HNS PH Solutions<span className="opc">OPC</span></Link>
          <nav className="hs-nlinks">
            <a href="#products">Products</a>
            <a href="#sovereign">Why sovereign</a>
            <Link href="/compliance">Compliance</Link>
            <Link href="/about">Company</Link>
          </nav>
          <Link href="/contact" className="hs-btn hs-btn-ghost" style={{ padding: '9px 18px' }}>Talk to us</Link>
        </div>
      </header>

      {/* hero */}
      <section className="hs-hero">
        <div className="hs-hero-bg" aria-hidden="true" />
        <div className="hs-hero-glow" aria-hidden="true" />
        <div className="hs-wrap">
          <div className="hs-hero-in">
            <div className="hs-badge"><span className="d" /> SEC · BIR · Naga City LGU · PhilGEPS Red Member</div>
            <h1 className="hs-h1">Software the Philippines <span className="em">owns.</span></h1>
            <p className="hs-sub">
              A one-founder software house in Naga City, building sovereign, BIR-compliant, offline-ready tools
              for Filipino business, government, and life. Ten products, one login — and your data never leaves the country.
            </p>
            <div className="hs-acts">
              <a href="#find" className="hs-btn hs-btn-indigo">Find your product ↓</a>
              <Link href="/about" className="hs-btn hs-btn-ghost">Our story</Link>
            </div>
            <div className="hs-stats">
              <div className="hs-stat"><b>10</b><span>Products shipped</span></div>
              <div className="hs-stat"><b>100%</b><span>PH data residency</span></div>
              <div className="hs-stat"><b>6</b><span>Registrations &amp; backers</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* finder + products */}
      <section className="hs-sec" id="find">
        <div className="hs-wrap" id="products">
          <div className="hs-eyebrow" style={{ marginBottom: 14 }}>The ecosystem</div>
          <h2 className="hs-sec-h">What are you here for?</h2>
          <p className="hs-sec-p">Ten products across three worlds. Tell us yours, and we&apos;ll show the ones that fit.</p>
          <HomeFinder />
        </div>
      </section>

      {/* sovereignty + credibility band */}
      <section className="hs-band" id="sovereign">
        <div className="hs-wrap hs-sec">
          <div className="hs-eyebrow">Why sovereign</div>
          <h2 className="hs-sec-h">Foreign software treats sovereignty as an add-on. We built it into the foundation.</h2>
          <p className="hs-sec-p">Every product inherits the same core — so a sari-sari store and a city hall get the same guarantees.</p>
          <div className="hs-pillars">
            {PILLARS.map((c) => (
              <div className="hs-pillar" key={c.h}><h3>{c.h}</h3><p>{c.p}</p></div>
            ))}
          </div>
          <div style={{ marginTop: 64 }}>
            <div className="hs-eyebrow">Registered where it counts</div>
            <div className="hs-creds">{CREDS.map((c) => <span className="hs-cred" key={c}>{c}</span>)}</div>
          </div>
        </div>
      </section>

      {/* story */}
      <section className="hs-sec">
        <div className="hs-wrap hs-story">
          <div>
            <div className="hs-eyebrow" style={{ marginBottom: 16 }}>The studio</div>
            <div className="big">
              Built by <span className="em">one founder</span>, in Naga City — because the tools Filipino businesses,
              families, and LGUs actually needed were too expensive, dollar-priced, or offline-hostile.
            </div>
          </div>
          <div>
            <p className="hs-sec-p" style={{ maxWidth: 'none', margin: 0 }}>
              HNS PH Solutions started with one accounting tool and grew into a ten-product ecosystem — from the
              sari-sari counter to the barangay hall. Everything is built, shipped, and hosted in the Philippines.
              Every record stays in-country.
            </p>
            <div style={{ marginTop: 26 }}>
              <Link href="/about" className="hs-btn hs-btn-ghost">The full story</Link>
            </div>
          </div>
        </div>
      </section>

      {/* contact CTA */}
      <section className="hs-sec hs-cta">
        <div className="hs-wrap">
          <h2>Procuring for an LGU? Building a partnership? Press?</h2>
          <p>We work with governments, businesses, and partners across the Philippines. Tell us what you&apos;re building.</p>
          <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/contact" className="hs-btn hs-btn-indigo">Talk to us</Link>
            <a href="#products" className="hs-btn hs-btn-ghost">Browse products</a>
          </div>
        </div>
      </section>

      {/* footer */}
      <footer className="hs-foot">
        <div className="hs-wrap hs-foot-in">
          <div>
            <Link href="/" className="hs-brand"><span className="mk"><Mark size={24} /></span>HNS PH Solutions<span className="opc">OPC</span></Link>
            <p className="fd">Sovereign digital infrastructure for Filipino businesses, families, and government. An SEC-, BIR-, and Naga City LGU-registered OPC.</p>
          </div>
          <div className="hs-foot-col">
            <h4>Products</h4>
            <Link href="/clerque">Clerque</Link>
            <Link href="/sariassist">SariAssist</Link>
            <Link href="/cvassist">CVAssist</Link>
            <Link href="/scatto">Scatto</Link>
          </div>
          <div className="hs-foot-col">
            <h4>Platform</h4>
            <a href="#sovereign">Why sovereign</a>
            <Link href="/compliance">Compliance</Link>
            <Link href="/about">About</Link>
          </div>
          <div className="hs-foot-col">
            <h4>Company</h4>
            <Link href="/about">Our story</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/contact">For LGUs</Link>
          </div>
        </div>
        <div className="hs-wrap hs-foot-bot">
          <a href="https://hnscorpph.com" target="_blank" rel="noopener noreferrer" aria-label="Powered by HNS PH Solutions" className="hs-footmark">
            <span className="lbl">Powered by</span>
            <HNSFootmark size={20} />
          </a>
          <span>© {new Date().getFullYear()} HNS PH Solutions OPC · Naga City, Philippines</span>
        </div>
      </footer>
    </div>
  );
}
