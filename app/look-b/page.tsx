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

export default function LookB() {
  return (
    <div className="look-b">
      <Switch on="b" />
      <div className="lk-wrap">
        <nav className="b-nav">
          <span className="b-brand">HNS PH Solutions</span>
          <span className="lks"><a href="#">Products</a><a href="#">Sovereignty</a><a href="#">Company</a><a href="#">Contact</a></span>
        </nav>

        <header className="b-hero">
          <div className="b-ey"><span className="dot" /> A Filipino software house — Naga City</div>
          <h1 className="b-h1">Sovereign software for Filipino business, government, and life.</h1>
          <div className="b-grid">
            <p className="b-sub">
              A one-founder software house building BIR-compliant, offline-ready tools. Ten products,
              one login, and every record kept in-country — not in someone else&apos;s cloud.
            </p>
            <div className="b-meta">
              <div><b>10</b><span>Products</span></div>
              <div><b>100%</b><span>PH residency</span></div>
              <div><b>6</b><span>Registrations</span></div>
              <div><b>1</b><span>Login</span></div>
            </div>
          </div>
        </header>

        <section style={{ paddingBottom: 100 }}>
          <div className="b-index">
            {ECO_PRODUCTS.map((p, i) => (
              <div className="b-r" key={p.key}>
                <span className="n">{String(i + 1).padStart(2, '0')}</span>
                <span className="nm">{p.name}<em>{p.kind}</em></span>
                <span className={`st ${p.status}`}>{p.status === 'live' ? 'Live' : 'Soon'}</span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
