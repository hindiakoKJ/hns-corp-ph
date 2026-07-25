import Link from 'next/link';
import '../looks.css';
import { ECO_PRODUCTS } from '@/components/brand/ecosystem.data';

function Switch({ on }: { on: string }) {
  return (
    <div className="lk-switch">
      <Link href="/look-a" className={on === 'a' ? 'on' : ''}>A · brutalist</Link>
      <Link href="/look-b" className={on === 'b' ? 'on' : ''}>B · swiss</Link>
      <Link href="/look-c" className={on === 'c' ? 'on' : ''}>C · vibrant</Link>
    </div>
  );
}

export default function LookC() {
  return (
    <div className="look-c">
      <Switch on="c" />
      <div className="lk-wrap">
        <nav className="c-nav">
          <span className="c-brand">HNS PH Solutions</span>
          <span className="lks"><a href="#">Products</a><a href="#">Sovereignty</a><a href="#">Company</a></span>
          <span className="cta">Talk to us</span>
        </nav>

        <header className="c-hero">
          <span className="c-ey">🇵🇭 Built in Naga City</span>
          <h1 className="c-h1 c-disp">Software the Philippines <span className="u">owns.</span></h1>
          <p className="c-sub">Ten sovereign, BIR-compliant, offline-ready products for Filipino business, government, and everyday life. One login. Data that never leaves the country.</p>
          <div className="c-acts">
            <span className="c-btn">Find your product</span>
            <span className="c-btn g">Our story</span>
          </div>
        </header>

        <h2 className="c-h2 c-disp">Ten products, one ecosystem.</h2>
        <section className="c-grid" style={{ paddingBottom: 90 }}>
          {ECO_PRODUCTS.map((p) => (
            <div className="c-card" key={p.key} style={{ background: p.accent }}>
              <span className="cl"><img src={p.logo} alt={p.name} /></span>
              <h3>{p.name}</h3>
              <p>{p.kind}</p>
              <span className="stt">{p.status === 'live' ? '● Live' : '○ Soon'}</span>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}
