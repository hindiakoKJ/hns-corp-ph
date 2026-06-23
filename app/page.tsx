import Link from 'next/link';
import SiteNav from '@/components/ui/SiteNav';
import SiteFooter from '@/components/ui/SiteFooter';
import { ECO_PRODUCTS, HNS_LOGO } from '@/components/brand/ecosystem.data';

// Gemini (the Twins) laid out as two parallel star-chains + a head bond + two
// outstretched arms. Coords are % of the .viz box; index-aligned to ECO_PRODUCTS:
// 0 Clerque 1 SariAssist 2 AltSpaceCW 3 Scatto 4 Everafter 5 CVAssist 6 Sangguni 7 KonekBarangay 8 Steady 9 LOCATR
const GEMINI_STARS = [
  { x: 30, y: 14 }, // 0 Clerque       — Castor (left head, top)
  { x: 64, y: 10 }, // 1 SariAssist    — Pollux (right head, top)
  { x: 22, y: 40 }, // 2 AltSpaceCW    — left chest
  { x: 74, y: 36 }, // 3 Scatto        — right chest
  { x: 28, y: 66 }, // 4 Everafter     — left waist
  { x: 70, y: 62 }, // 5 CVAssist      — right waist
  { x: 24, y: 90 }, // 6 Sangguni      — left foot
  { x: 76, y: 88 }, // 7 KonekBarangay — right foot
  { x:  8, y: 54 }, // 8 Steady        — left outstretched arm
  { x: 90, y: 54 }, // 9 LOCATR        — right outstretched arm
];

// stick-figure links: left chain 0-2-4-6, right chain 1-3-5-7, head bond 0-1, arms 2-8 & 3-9
const GEMINI_EDGES: [number, number][] = [
  [0, 2], [2, 4], [4, 6],
  [1, 3], [3, 5], [5, 7],
  [0, 1], [2, 8], [3, 9],
];

const PLATFORM = [
  {
    title: 'Sovereign by design',
    body: 'Your records live on infrastructure inside the Philippines, encrypted by default, yours to export on day one.',
    link: 'Why sovereign →',
    icon: <svg width="28" height="28" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round"><path d="M32 10l18 7v12c0 13-8 20-18 25-10-5-18-12-18-25V17z" /><path d="M25 31l5 5 9-11" /></svg>,
  },
  {
    title: 'BIR-compliant from day one',
    body: 'OR sequential numbering, immutable Z-Read & X-Read, and BIR forms — built to CAS spec, not bolted on.',
    link: 'See compliance →',
    icon: <svg width="28" height="28" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round"><rect x="15" y="10" width="34" height="44" rx="3" /><line x1="23" y1="22" x2="41" y2="22" /><line x1="23" y1="29" x2="41" y2="29" /><path d="M23 40 l4 4 9 -10" /></svg>,
  },
  {
    title: 'Built for government',
    body: 'A PhilGEPS Red Member — LGUs procure directly via Small Value Procurement, no public bidding required.',
    link: 'For LGUs →',
    icon: <svg width="28" height="28" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round"><path d="M14 31L32 17L50 31" /><line x1="12" y1="52" x2="52" y2="52" /><line x1="20" y1="31" x2="20" y2="52" /><line x1="32" y1="31" x2="32" y2="52" /><line x1="44" y1="31" x2="44" y2="52" /></svg>,
  },
  {
    title: 'Offline, always',
    body: 'Power cut? Dead router? Transactions write locally and sync the moment you reconnect. Nothing stops the sale.',
    link: 'How it works →',
    icon: <svg width="28" height="28" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 26a28 28 0 0 1 40 0" /><path d="M20 34a18 18 0 0 1 24 0" /><path d="M27 42a8 8 0 0 1 10 0" /><circle cx="32" cy="49" r="1.8" fill="currentColor" stroke="none" /><line x1="14" y1="13" x2="51" y2="50" /></svg>,
  },
];

export default function HomePage() {
  return (
    <>
      <SiteNav />

      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <section className="hero">
        <div className="hero-photo" />
        <div className="glow g1" /><div className="glow g2" /><div className="glow g3" />
        <div className="wrap hero-in">
          <div>
            <div className="nbadge">
              <span className="nt">NEW</span>
              <span className="ntx">PhilGEPS Red Member · Claude &amp; Google for Startups</span>
            </div>
            <h1 className="h1">
              Sovereign software,<br />
              <span className="grad">engineered for the Philippines.</span>
            </h1>
            <p className="sub">
              BIR-compliant, offline-capable, government-ready tools for Filipino businesses, families, and LGUs — one platform, ten products, your data in-country.
            </p>
            <div className="hero-acts">
              <Link href="/#products" className="btn btn-blue">Explore the platform <span className="arr">→</span></Link>
              <Link href="/contact" className="btn btn-ghost">Book a demo</Link>
            </div>
            <div className="hero-stats">
              <div className="hstat"><div className="v">10</div><div className="l">Products</div></div>
              <div className="hstat"><div className="v">100%</div><div className="l">PH residency</div></div>
              <div className="hstat"><div className="v">1</div><div className="l">Login, all apps</div></div>
            </div>
          </div>

          {/* Gemini constellation — the apps are the stars (positions in %, index-aligned to ECO_PRODUCTS) */}
          <div className="viz" aria-hidden="true">
            <div className="dotgrid" />
            <svg className="clines" viewBox="0 0 100 100" preserveAspectRatio="none">
              {GEMINI_EDGES.map(([a, b], i) => (
                <line
                  key={i}
                  x1={GEMINI_STARS[a].x} y1={GEMINI_STARS[a].y}
                  x2={GEMINI_STARS[b].x} y2={GEMINI_STARS[b].y}
                  stroke="rgba(125,210,235,0.16)" strokeWidth={1} vectorEffect="non-scaling-stroke"
                />
              ))}
            </svg>
            <div className="core"><img src={HNS_LOGO} alt="HNS PH Solutions" /></div>
            {ECO_PRODUCTS.map((p, i) => {
              const s = GEMINI_STARS[i];
              return (
                <div
                  key={p.key}
                  className="chip"
                  style={{ left: `${s.x}%`, top: `${s.y}%`, animationDelay: `${(i * 0.4).toFixed(2)}s` }}
                >
                  <img src={p.logo} alt={p.name} />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Platform / Solution ───────────────────────────────────────────── */}
      <section className="sol" id="solution">
        <div className="glow gs" />
        <div className="wrap">
          <div className="stab"><span className="d" /><span>The Platform</span></div>
          <div className="sol-head">
            <h2>One sovereign foundation under every product.</h2>
            <p>The things foreign software treats as add-ons, we built into the core — so every app inherits them.</p>
          </div>
          <div className="quad">
            {PLATFORM.map((c) => (
              <div className="cell" key={c.title}>
                <div className="ic">{c.icon}</div>
                <h3>{c.title}</h3>
                <p>{c.body}</p>
                <span className="lk">{c.link}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Products / Ecosystem ──────────────────────────────────────────── */}
      <section className="prod" id="products">
        <div className="wrap">
          <div className="stab"><span className="d" /><span>The Ecosystem</span></div>
          <div className="sol-head">
            <h2>Ten products. One login. Growing.</h2>
            <p>From the sari-sari counter to the barangay hall — each app, its own accent; all of them, by HNS PH Solutions.</p>
          </div>
          <div className="pgrid">
            {ECO_PRODUCTS.map((p) => (
              <Link key={p.key} className="pcard" href={p.href} style={{ ['--accent' as string]: p.accent }}>
                <div className="ptop">
                  <span className="pic"><img src={p.logo} alt={p.name} /></span>
                  {p.status === 'live'
                    ? <span className="badge-live">● Live</span>
                    : <span className="badge-soon">Soon</span>}
                </div>
                <h3>{p.name}{p.gov && <span className="gov">GOV</span>}</h3>
                <div className="pk">{p.kind}</div>
                <div className="pby">by <b>HNS PH Solutions</b></div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────────── */}
      <section className="cta">
        <div className="glow gc" />
        <div className="wrap cta-in">
          <div className="eyebrow" style={{ marginBottom: 18 }}>Build on a foundation you own</div>
          <h2>Ready to run on <span className="grad">sovereign software?</span></h2>
          <p>Browse the full ecosystem, or talk to us about rolling HNS PH Solutions across your business or LGU.</p>
          <div className="hero-acts" style={{ justifyContent: 'center' }}>
            <Link href="/#products" className="btn btn-blue">Explore products <span className="arr">→</span></Link>
            <Link href="/contact" className="btn btn-ghost">Talk to us</Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </>
  );
}
