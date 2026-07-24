import Link from 'next/link';
import './terminal.css';
import HNSFootmark from '@/components/brand/HNSFootmark';
import { ECO_PRODUCTS } from '@/components/brand/ecosystem.data';

const APP_LOGIN = 'https://clerque.hnscorpph.com/login';

const PLATFORM = [
  { h: 'sovereign by design', p: 'Your data on PH infrastructure, encrypted, exportable on day one.' },
  { h: 'BIR-compliant', p: 'OR sequencing, immutable Z-read & X-read, quarterly forms — CAS spec.' },
  { h: 'built for government', p: 'PhilGEPS Red Member. LGUs procure via Small Value Procurement.' },
  { h: 'offline, always', p: 'Writes locally, syncs on reconnect. Brownouts never stop the sale.' },
];

const VERIFIED = ['SEC', 'BIR', 'Naga City LGU', 'PhilGEPS Red Member', 'Claude for Startups', 'Google for Startups'];

// terminal-style: lowercase package-like names
const slug = (k: string) => k.toLowerCase();

function Mark({ size = 22 }: { size?: number }) {
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
    <div className="term-root">
      <div className="t-scan" aria-hidden="true" />

      {/* top bar */}
      <header className="t-topbar">
        <div className="t-wrap t-topbar-in">
          <Link href="/" className="t-brand">
            <span className="t-mk"><Mark size={22} /></span>
            hns-ph-solutions
          </Link>
          <nav className="t-nav">
            <a href="#platform">platform</a>
            <a href="#products">products</a>
            <Link href="/compliance">compliance</Link>
            <Link href="/about">company</Link>
          </nav>
          <a href={APP_LOGIN} className="t-topcta">get started</a>
        </div>
      </header>

      {/* hero — terminal window */}
      <section className="t-hero">
        <div className="t-wrap">
          <div className="t-win">
            <div className="t-winbar">
              <span className="t-dot r" /><span className="t-dot y" /><span className="t-dot g" />
              <span className="t-wintitle">visitor@hnsph: ~/sovereign-software</span>
            </div>
            <div className="t-winbody">
              <div className="t-line"><span className="t-ps">$</span><span className="t-cmd">whoami</span></div>
              <div className="t-line"><span className="t-ps t-dim">&gt;</span><span className="t-out">HNS PH Solutions OPC — Naga City, Philippines · SEC · BIR · LGU · PhilGEPS Red Member</span></div>

              <div className="t-line" style={{ marginTop: 20 }}><span className="t-ps">$</span><span className="t-cmd">./manifesto</span></div>
              <h1 className="t-h1">
                Software the<br />
                Philippines <span className="hl">owns.</span><span className="t-cur" aria-hidden="true" />
              </h1>

              <p className="t-sub">
                Sovereign, BIR-compliant, offline-ready tools for Filipino businesses, families, and local
                governments. Ten products, one login, and your data never leaves the country —{' '}
                <span className="path">/var/ph</span>, not someone else&apos;s cloud.
              </p>

              <div className="t-acts">
                <a href={APP_LOGIN} className="t-btn t-btn-primary">get started</a>
                <Link href="/about" className="t-btn">read the story</Link>
              </div>

              <div className="t-stats">
                <span><b>10</b> products</span>
                <span><b>100%</b> PH data residency</span>
                <span><b>1</b> login, all apps</span>
                <span><b>0</b> foreign cloud</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* products */}
      <section className="t-sec" id="products">
        <div className="t-wrap">
          <div className="t-sec-cmd t-line">
            <span className="t-ps">$</span><span className="t-cmd">hns products <span className="t-out">--list</span></span>
          </div>
          <div className="t-list">
            <div className="t-list-head">
              <span>name</span><span>status</span><span>description</span><span />
            </div>
            {ECO_PRODUCTS.map((p) => (
              <Link key={p.key} href={p.href} className="t-prod">
                <span className="name">{slug(p.key)}{p.gov && <span className="gov">[gov]</span>}</span>
                <span className={`st ${p.status}`}><span className="d" />{p.status}</span>
                <span className="desc">{p.kind}</span>
                <span className="arr">→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* platform */}
      <section className="t-sec" id="platform">
        <div className="t-wrap">
          <div className="t-sec-cmd t-line">
            <span className="t-ps">$</span><span className="t-cmd">hns platform <span className="t-out">--why</span></span>
          </div>
          <div className="t-checks">
            {PLATFORM.map((c) => (
              <div className="t-check" key={c.h}>
                <div className="h">{c.h}</div>
                <p>{c.p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* verify */}
      <section className="t-sec">
        <div className="t-wrap">
          <div className="t-sec-cmd t-line">
            <span className="t-ps">$</span><span className="t-cmd">hns <span className="t-out">--verify</span></span>
          </div>
          <div className="t-verify">
            {VERIFIED.map((v) => <span key={v}>{v}</span>)}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="t-cta">
        <div className="t-wrap">
          <div className="t-cta-box">
            <div className="t-line"><span className="t-ps">$</span><span className="t-cmd">hns start</span></div>
            <h2>Ready to run on software you own?</h2>
            <div className="t-acts">
              <a href={APP_LOGIN} className="t-btn t-btn-primary">get started free</a>
              <Link href="/contact" className="t-btn">talk to us</Link>
            </div>
          </div>
        </div>
      </section>

      {/* footer */}
      <footer className="t-foot">
        <div className="t-wrap t-foot-in">
          <div>
            <Link href="/" className="t-brand"><span className="t-mk"><Mark size={22} /></span>hns-ph-solutions</Link>
            <p className="fd">Sovereign digital infrastructure for Filipino businesses, families, and government. An SEC-, BIR-, and Naga City LGU-registered OPC.</p>
          </div>
          <div className="t-foot-col">
            <h4>products</h4>
            <Link href="/clerque">clerque</Link>
            <Link href="/sariassist">sariassist</Link>
            <Link href="/cvassist">cvassist</Link>
            <Link href="/scatto">scatto</Link>
          </div>
          <div className="t-foot-col">
            <h4>platform</h4>
            <a href="#platform">why sovereign</a>
            <Link href="/compliance">compliance</Link>
            <Link href="/about">about</Link>
          </div>
          <div className="t-foot-col">
            <h4>company</h4>
            <Link href="/about">our story</Link>
            <Link href="/contact">contact</Link>
            <Link href="/contact">for lgus</Link>
          </div>
        </div>
        <div className="t-wrap t-foot-bot">
          <a href="https://hnscorpph.com" target="_blank" rel="noopener noreferrer" aria-label="Powered by HNS PH Solutions" className="t-footmark">
            <span className="lbl">powered by</span>
            <HNSFootmark size={20} />
          </a>
          <span># © {new Date().getFullYear()} HNS PH Solutions OPC · Naga City, Philippines</span>
        </div>
      </footer>
    </div>
  );
}
