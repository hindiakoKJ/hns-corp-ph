import Link from 'next/link';
import './home.css';
import HomeFinder from '@/components/ui/HomeFinder';
import HomeNav from '@/components/ui/HomeNav';
import HomeFooter from '@/components/ui/HomeFooter';
import { FeatureIcon, type FeatureIconName } from '@/components/brand/FeatureIcons';

const APP_LOGIN = 'https://clerque.cc/';

const PILLARS = [
  { h: 'Sovereign by design', p: 'Records live on Philippine infrastructure, encrypted, yours to export on day one.' },
  { h: 'BIR-compliant', p: 'OR sequencing, immutable Z-read & X-read, quarterly forms — built to CAS spec.' },
  { h: 'Built for government', p: 'A PhilGEPS Red Member. LGUs procure directly via Small Value Procurement.' },
  { h: 'Offline, always', p: 'Writes locally and syncs on reconnect. A brownout never stops the sale.' },
];

const CREDS = ['SEC-registered', 'BIR-registered', 'Naga City LGU', 'PhilGEPS Red Member', 'Claude for Startups', 'Google for Startups'];

const CUSTOM: { icon: FeatureIconName; title: string; body: string }[] = [
  { icon: 'calendar', title: 'Booking systems', body: 'Courts, rooms, appointments — reservations that hold up on a busy day.' },
  { icon: 'report', title: 'Internal tools', body: 'The dashboard or workflow your team keeps rebuilding in spreadsheets.' },
  { icon: 'mobile', title: 'Client web apps', body: 'Public sites and apps, shipped under your name — not ours.' },
];

export default function HomePage() {
  return (
    <div className="hs-root">
      {/* nav */}
      <HomeNav />

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

      {/* commissioned / custom builds */}
      <section className="hs-sec" id="custom">
        <div className="hs-wrap">
          <div className="hs-eyebrow" style={{ marginBottom: 14 }}>Commissioned builds</div>
          <h2 className="hs-sec-h">The same hands build yours.</h2>
          <p className="hs-sec-p">
            Ten products carry our name. Commission a build and it&apos;s the same founder, the same code,
            PH-hosted — no agency layers between your idea and the person who ships it.
          </p>

          <div className="hs-fgrid">
            {CUSTOM.map((c) => (
              <div className="hs-fcard" key={c.title}>
                <div className="ic"><FeatureIcon name={c.icon} size={22} /></div>
                <div><h4>{c.title}</h4><p>{c.body}</p></div>
              </div>
            ))}
          </div>

          <div className="hs-proof">
            <p>
              <strong>PicklePop</strong> (<a href="https://picklepop.cc" target="_blank" rel="noopener noreferrer">picklepop.cc</a>) is one we shipped —
              a court-booking app we built for a Philippine pickleball club, live and taking reservations today.
            </p>
            <div className="acts">
              <Link href="/contact?topic=custom" className="hs-btn hs-btn-indigo">Start a build</Link>
              <a href="https://picklepop.cc" target="_blank" rel="noopener noreferrer" className="hs-btn hs-btn-ghost">See PicklePop ↗</a>
            </div>
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

      <HomeFooter />
    </div>
  );
}
