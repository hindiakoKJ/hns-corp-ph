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

export default function LookA() {
  return (
    <div className="look-a">
      <Switch on="a" />
      <nav className="a-nav">
        <span className="a-brand">HNS PH</span>
        <span className="lks"><span>Products</span><span>Government</span><span>Company</span></span>
        <span className="cta">Talk to us</span>
      </nav>

      <header className="a-hero">
        <div className="lk-wrap">
          <div className="a-tag">A Filipino software house · Naga City</div>
          <h1 className="a-h1">Software the<br />Philippines <span className="b">owns.</span></h1>
          <div className="a-row">
            <div>
              <p className="a-sub">Ten sovereign, BIR-compliant, offline-ready products. One login. Your data never leaves the country.</p>
              <a href="#" className="a-btn">Browse the stack →</a>
            </div>
            <div className="a-big">10<small>PRODUCTS SHIPPED</small></div>
          </div>
        </div>
      </header>

      <section className="a-list">
        {ECO_PRODUCTS.map((p, i) => (
          <div className="a-item" key={p.key}>
            <span className="n">{String(i + 1).padStart(2, '0')}</span>
            <span className="nm">{p.name}</span>
            <span className="st">{p.status === 'live' ? 'LIVE' : 'SOON'}</span>
            <span>→</span>
          </div>
        ))}
      </section>
    </div>
  );
}
