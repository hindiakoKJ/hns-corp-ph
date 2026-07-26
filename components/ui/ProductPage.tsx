import Link from 'next/link';
import HomeNav from '@/components/ui/HomeNav';
import HomeFooter from '@/components/ui/HomeFooter';
import { FeatureIcon, type FeatureIconName } from '@/components/brand/FeatureIcons';

export interface ProductPageProps {
  name: string;
  logo: string;
  accent: string;
  url: string;
  h1: string;
  sub: string;
  primaryCta: string;
  secondaryCta?: { label: string; href: string };
  note?: string;
  /** path to an app screenshot, e.g. /shots/clerque.png — placeholder shown if omitted */
  shot?: string;
  /** an animated app simulation to show in the frame (takes priority over the placeholder, below a real shot) */
  sim?: React.ReactNode;
  featuresHeading: string;
  features: { icon: FeatureIconName; title: string; body: string }[];
  ctaHeading: string;
  ctaSub: string;
  ctaButton: string;
}

export default function ProductPage(p: ProductPageProps) {
  let host = p.url;
  try { host = new URL(p.url).host; } catch { /* keep raw */ }
  return (
    <div className="hs-root">
      <HomeNav />

      <section className="hs-phero">
        <div className="hs-wrap">
          <div className="hs-pbadge" style={{ borderColor: `${p.accent}55`, background: `${p.accent}12` }}>
            <img src={p.logo} alt="" />
            <span style={{ color: p.accent }}>{p.name}</span>
          </div>
          <h1>{p.h1}</h1>
          <p className="sub">{p.sub}</p>
          <div className="acts">
            <a href={p.url} className="hs-btn hs-btn-indigo" style={{ background: `linear-gradient(180deg, ${p.accent}, ${p.accent}cc)`, boxShadow: `0 10px 26px -10px ${p.accent}aa` }}>{p.primaryCta}</a>
            {p.secondaryCta && <Link href={p.secondaryCta.href} className="hs-btn hs-btn-ghost">{p.secondaryCta.label}</Link>}
          </div>
          {p.note && <p className="note">{p.note}</p>}

          {/* app screenshot frame (placeholder until a real shot is dropped in) */}
          <div className="hs-shot">
            <div className="hs-shot-bar">
              <div className="hs-shot-dots"><i /><i /><i /></div>
              <span className="hs-shot-url">{host}</span>
              <div className="hs-shot-sp" />
            </div>
            <div className="hs-shot-body">
              {p.shot ? (
                <img src={p.shot} alt={`${p.name} app screenshot`} />
              ) : p.sim ? (
                p.sim
              ) : (
                <>
                  <span className="hs-shot-plogo"><img src={p.logo} alt="" /></span>
                  <span className="hs-shot-pname">{p.name}</span>
                  <span className="hs-shot-plabel">App preview coming soon</span>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="hs-sec" style={{ paddingTop: 20 }}>
        <div className="hs-wrap">
          <div className="hs-eyebrow" style={{ marginBottom: 14 }}>Features</div>
          <h2 className="hs-sec-h">{p.featuresHeading}</h2>
          <div className="hs-fgrid">
            {p.features.map((f) => (
              <div className="hs-fcard" key={f.title}>
                <div className="ic" style={{ background: `${p.accent}18`, borderColor: `${p.accent}30`, color: p.accent }}>
                  <FeatureIcon name={f.icon} size={22} color={p.accent} />
                </div>
                <div>
                  <h4>{f.title}</h4>
                  <p>{f.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="hs-sec hs-cta">
        <div className="hs-wrap">
          <h2>{p.ctaHeading}</h2>
          <p>{p.ctaSub}</p>
          <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href={p.url} className="hs-btn hs-btn-indigo" style={{ background: `linear-gradient(180deg, ${p.accent}, ${p.accent}cc)`, boxShadow: `0 10px 26px -10px ${p.accent}aa` }}>{p.ctaButton}</a>
            <Link href="/contact" className="hs-btn hs-btn-ghost">Talk to us</Link>
          </div>
        </div>
      </section>

      <HomeFooter />
    </div>
  );
}
