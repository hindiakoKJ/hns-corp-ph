import './styles.css';
import { ECO_PRODUCTS } from '@/components/brand/ecosystem.data';
import {
  PaperLayers, InkMountains, Enso, LowPoly, LowPolyScene, Guilloche, Sprig, IsarogLine,
  Watercolor, OilPainting, Palm, GeoComposition, OrnamentPattern, MemphisPattern, torn,
} from './art';

/* ─────────────────────────────────────────────────────────────────────────
   /styles — HNS Style Lab
   The same HNS homepage (nav · hero · stats · three products) and one social
   card, rendered in each of the 20 styles from .claude/skills/design-styles.
   Throwaway exploration route, noindex. Not linked from the live site.
   ───────────────────────────────────────────────────────────────────────── */

type Card = { name: string; kind: string; url: string };

const byKey = (k: string): Card => {
  if (k === 'HNS') return { name: 'HNS PH', kind: 'Sovereign software · Naga City', url: 'hnscorpph.com' };
  const p = ECO_PRODUCTS.find((x) => x.key === k)!;
  const slug = p.href.startsWith('/') ? p.href : '';
  return { name: p.name, kind: p.kind, url: `hnscorpph.com${slug}` };
};

const STYLES = [
  { id: 'deco', name: 'Art Deco', mood: 'Premium, heritage', fonts: 'Limelight + Josefin Sans', sw: ['#0B0B0B', '#0F3D3E', '#C9A227', '#EFE6D2'], card: 'Everafter', tag: 'Your love story, beautifully hosted.' },
  { id: 'bauhaus', name: 'Bauhaus', mood: 'Clear, rational', fonts: 'Jost', sw: ['#D72F27', '#1F4E9C', '#F2C230', '#111111', '#F1EBDD'], card: 'Clerque', tag: 'Form follows the receipt.' },
  { id: 'brutal', name: 'Brutalism', mood: 'Bold, raw', fonts: 'Archivo Black + IBM Plex Mono', sw: ['#8A8A85', '#2B2B2B', '#EDEDE8', '#C8102E'], card: 'Sangguni', tag: 'Records the city owns. Hosted in-country.' },
  { id: 'line', name: 'Minimal Line Art', mood: 'Calm, focused', fonts: 'Cormorant Garamond', sw: ['#1A1A1A', '#F3EDE0', '#C46A4A'], card: 'CVAssist', tag: 'Apply with a steady hand.' },
  { id: 'paper', name: 'Paper Cutout', mood: 'Warm, handmade', fonts: 'Fraunces', sw: ['#F2E3D0', '#E2B58E', '#C5522E', '#8C2F1B', '#2A2321'], card: 'SariAssist', tag: 'Every tindahan, counted.' },
  { id: 'riso', name: 'Risograph', mood: 'Bold, handmade', fonts: 'Bricolage Grotesque', sw: ['#FF48B0', '#0078BF', '#F4EEE1'], card: 'Scatto', tag: 'Every guest is a photographer.' },
  { id: 'water', name: 'Watercolor', mood: 'Warm, editorial', fonts: 'Cormorant + Caveat', sw: ['#4FC3E8', '#F06BA8', '#F7B54A', '#9B7FD4', '#FBF8F3'], card: 'MyMoments', tag: "You're invited." },
  { id: 'oil', name: 'Oil Painting', mood: 'Rich, classical', fonts: 'DM Serif Display', sw: ['#F2711C', '#1E3FA8', '#B3202A', '#D9A441', '#0E5E6F'], card: 'MagnetMoments', tag: 'Keep the sunset on your fridge.' },
  { id: 'ink', name: 'Japanese Ink', mood: 'Calm, mindful', fonts: 'Shippori Mincho', sw: ['#111111', '#999999', '#F2ECE2', '#B7282E'], card: 'HNS', tag: 'Built in Naga City, under Mt. Isarog.' },
  { id: 'poly', name: 'Low-poly 3D', mood: 'Playful, game-like', fonts: 'Fredoka', sw: ['#7BC043', '#3AB7E0', '#8E7CC3', '#A0522D', '#FFB347'], card: 'LOCATR', tag: "Find a place that's really there." },
  { id: 'vapor', name: 'Vaporwave', mood: 'Retro-futurist', fonts: 'Orbitron + IBM Plex Mono', sw: ['#FF2E97', '#00E5FF', '#7B2FF7', '#120458', '#FF8A3D'], card: 'AltSpaceCW', tag: 'Open late. Book a desk.' },
  { id: 'memphis', name: 'Memphis Design', mood: 'Playful, loud', fonts: 'Lilita One', sw: ['#FF5FA2', '#21C1C1', '#FFD93D', '#7B61FF', '#111111'], card: 'MyMoments', tag: 'The party starts at the link.' },
  { id: 'orn', name: 'Ornamental', mood: 'Luxury, decorative', fonts: 'Cinzel Decorative + Cormorant', sw: ['#14213D', '#D4A64A', '#E07A5F', '#7FB7A4', '#F4E1C1'], card: 'MagnetMoments', tag: 'Keepsakes, cut to the millimetre.' },
  { id: 'bot', name: 'Botanical', mood: 'Gentle, natural', fonts: 'Fraunces', sw: ['#3F6B4F', '#F6EBD3', '#6B4A8E', '#C9A04E', '#8FB3B0'], card: 'Steady', tag: 'Gentle tracking, every season.' },
  { id: 'engr', name: 'Vintage Engraving', mood: 'Heritage, official', fonts: 'IM Fell English', sw: ['#3B2F23', '#E8DCC2', '#8B6F4E', '#6E1E1E'], card: 'KonekBarangay', tag: 'Certified, stamped, and on record.' },
  { id: 'dream', name: 'Dreamy Pastel', mood: 'Soft, romantic', fonts: 'Quicksand', sw: ['#C8B6FF', '#FFC8DD', '#BDE0FE', '#FFD6A5', '#334155'], card: 'Everafter', tag: 'Begin your forever here.' },
  { id: 'chrome', name: 'Metallic Chrome', mood: 'Sleek, futuristic', fonts: 'Unbounded', sw: ['#E6E8EB', '#8A9099', '#2C2F33', '#CFE3F5'], card: 'Clerque', tag: 'The ledger, polished.' },
  { id: 'holo', name: 'Holographic', mood: 'Futuristic, AI', fonts: 'Sora', sw: ['#FF6EC7', '#7DF9FF', '#B388FF', '#FFF59D', '#0B0B1A'], card: 'CVAssist', tag: 'Every application, tailored.' },
  { id: 'geo', name: 'Geometric Abstract', mood: 'Modern, product', fonts: 'Outfit', sw: ['#1A9E9A', '#F25C54', '#E83F6F', '#F28C28', '#0E1A2B', '#C9A24A'], card: 'HNS', tag: 'Twelve products. One foundation.' },
  { id: 'collage', name: 'Photorealistic Collage', mood: 'Editorial, story', fonts: 'Instrument Serif + DM Mono', sw: ['#EDE3D1', '#B5563A', '#2F5D7C', '#BFB6A8'], card: 'Scatto', tag: 'Every guest is a photographer.' },
] as const;

type StyleId = (typeof STYLES)[number]['id'];

const HOME_CARDS = ['Clerque', 'SariAssist', 'Steady'].map(byKey);
const H1 = 'Software the Philippines owns.';

/* ─── per-style art layers ──────────────────────────────────────────────── */

function SiteArt({ id }: { id: StyleId }) {
  switch (id) {
    case 'deco': return <><i className="deco-rays" /><i className="deco-arch" /></>;
    case 'bauhaus': return <><i className="bh-circle" /><i className="bh-bar" /><i className="bh-quarter" /><i className="bh-rect" /></>;
    case 'brutal': return <i className="br-slab" />;
    case 'line': return <IsarogLine className="ln-draw" />;
    case 'paper': return <div className="pp-wrap"><PaperLayers id="pps" colors={['#E9C9A6', '#E2B58E', '#C5522E', '#8C2F1B', '#2A2321']} seed={4} /></div>;
    case 'riso': return <><i className="rs-block" /><i className="rs-sun" /><i className="rs-dots" /><i className="grain" /></>;
    case 'water': return <div className="wc-wrap"><Watercolor id="wcs" blobs={[
      { x: 560, y: 160, r: 120, c: '#4FC3E8' }, { x: 680, y: 260, r: 110, c: '#F06BA8' },
      { x: 520, y: 330, r: 100, c: '#F7B54A' }, { x: 720, y: 120, r: 80, c: '#9B7FD4' }, { x: 420, y: 220, r: 60, c: '#4FC3E8' },
    ]} /></div>;
    case 'oil': return <><OilPainting id="oils" /><i className="oil-scrim" /></>;
    case 'ink': return <><InkMountains id="inks" /><i className="ink-seal">HNS</i><i className="ink-vert">NAGA CITY · CAMARINES SUR</i></>;
    case 'poly': return <><LowPoly stops={['#4433A3', '#7E45B0', '#C2508E', '#E07A5A']} seed={9} /><LowPolyScene /></>;
    case 'vapor': return <><i className="vp-sun" /><i className="vp-grid" /><Palm className="vp-palm l" /><Palm className="vp-palm r" /></>;
    case 'memphis': return <><MemphisPattern id="mps" /><i className="mp-tri" /><i className="mp-dot" /><i className="mp-zig" /><i className="mp-stripe" /></>;
    case 'orn': return <OrnamentPattern id="orns" ground="#14213D" a="#D4A64A" b="#7FB7A4" c="#E07A5F" />;
    case 'bot': return <><Sprig className="bt-sprig a" seed={2} /><Sprig className="bt-sprig b" seed={5} flower="#8FB3B0" /><Sprig className="bt-sprig c" seed={8} /></>;
    case 'engr': return <><i className="en-hatch" /><Guilloche className="en-seal" /></>;
    case 'dream': return <><i className="dr-mesh" /><i className="dr-moon" /><i className="dr-cloud a" /><i className="dr-cloud b" /><i className="dr-cloud c" /></>;
    case 'chrome': return <><i className="cr-sphere a" /><i className="cr-sphere b" /><i className="cr-ring" /></>;
    case 'holo': return <><i className="hl-stars" /><i className="hl-blob a" /><i className="hl-blob b" /><i className="hl-ribbon a" /><i className="hl-ribbon b" /></>;
    case 'geo': return <div className="geo-wrap"><GeoComposition id="geos" /></div>;
    case 'collage': return (
      <div className="cl-wrap">
        <i className="cl-frag photo earth" style={{ clipPath: torn(3) }} />
        <i className="cl-frag photo kit" style={{ clipPath: torn(8) }} />
        <i className="cl-frag paper" style={{ clipPath: torn(12, 5) }} />
        <i className="cl-frag sea" style={{ clipPath: torn(21, 4) }} />
        <i className="cl-tape a" /><i className="cl-tape b" />
      </div>
    );
  }
}

function PosterArt({ id }: { id: StyleId }) {
  switch (id) {
    case 'deco': return <><i className="deco-rays" /><i className="deco-arch" /><i className="deco-steps" /></>;
    case 'bauhaus': return <><i className="bh-bar" /><i className="bh-circle" /><i className="bh-floor" /><i className="bh-rect" /><span className="bh-year">2026</span></>;
    case 'brutal': return <><i className="br-slab" /><i className="br-block" /></>;
    case 'line': return <IsarogLine className="ln-draw" />;
    case 'paper': return <><i className="pp-sun" /><PaperLayers id="ppp" colors={['#E2B58E', '#C5522E', '#8C2F1B', '#5A2418', '#2A2321']} seed={14} flip /></>;
    case 'riso': return <><i className="rs-block" /><i className="rs-sun" /><i className="rs-dots" /><i className="grain" /></>;
    case 'water': return <Watercolor id="wcp" blobs={[
      { x: 260, y: 120, r: 150, c: '#F06BA8' }, { x: 560, y: 160, r: 160, c: '#4FC3E8' },
      { x: 400, y: 330, r: 170, c: '#F7B54A' }, { x: 660, y: 380, r: 120, c: '#9B7FD4' },
    ]} />;
    case 'oil': return <><OilPainting id="oilp" /><i className="oil-frame" /></>;
    case 'ink': return <><InkMountains id="inkp" seed={23} /><Enso id="ensop" /><i className="ink-seal">HNS</i></>;
    case 'poly': return <><LowPoly stops={['#3AB7E0', '#9FE3F5', '#7BC043', '#3F8F2A']} seed={4} cols={8} rows={10} /><i className="poly-pin" /></>;
    case 'vapor': return <><i className="vp-sun" /><i className="vp-grid" /><Palm className="vp-palm l" /><Palm className="vp-palm r" /></>;
    case 'memphis': return <><MemphisPattern id="mpp" /><i className="mp-tri" /><i className="mp-dot" /><i className="mp-zig" /><i className="mp-stripe" /><i className="mp-arch" /></>;
    case 'orn': return <><OrnamentPattern id="ornp" ground="#0F3B3A" a="#D4A64A" b="#E07A5F" c="#F4E1C1" /><i className="orn-panel" /><Guilloche /></>;
    case 'bot': return <><Sprig className="bt-sprig a" seed={3} /><Sprig className="bt-sprig b" seed={6} flower="#F6EBD3" bud="#6B4A8E" /></>;
    case 'engr': return <><i className="en-hatch" /><i className="en-frame" /><Guilloche className="en-seal" /></>;
    case 'dream': return <><i className="dr-mesh" /><i className="dr-moon" /><i className="dr-cloud a" /><i className="dr-cloud b" /><i className="dr-cloud c" /><i className="dr-arch" /></>;
    case 'chrome': return <><i className="cr-sphere a" /><i className="cr-sphere b" /><i className="cr-sphere c" /><i className="cr-ring" /></>;
    case 'holo': return <><i className="hl-stars" /><i className="hl-blob a" /><i className="hl-blob b" /><i className="hl-ribbon a" /><i className="hl-ribbon b" /></>;
    case 'geo': return <GeoComposition id="geop" />;
    case 'collage': return (
      <>
        <i className="cl-frag photo earth" style={{ clipPath: torn(5) }} />
        <i className="cl-frag photo kit" style={{ clipPath: torn(9) }} />
        <i className="cl-frag paper" style={{ clipPath: torn(14, 5) }} />
        <i className="cl-frag sea" style={{ clipPath: torn(30, 4) }} />
        <i className="cl-tape a" /><i className="cl-tape b" />
      </>
    );
  }
}

/* ─── page ──────────────────────────────────────────────────────────────── */

export default function StyleLab() {
  return (
    <div className="sl">
      <header className="sl-top" id="top">
        <div className="sl-wrap">
          <div className="sl-kicker">HNS PH · Internal</div>
          <h1 className="sl-title">Style Lab</h1>
          <p className="sl-intro">
            The same HNS homepage and one social card, rendered in each of the 20 styles from the
            design-styles skill. Real copy and real products, so the styles compare like for like.
          </p>
        </div>
        <nav className="sl-index" aria-label="Styles">
          <div className="sl-index-row">
            {STYLES.map((s, i) => (
              <a key={s.id} href={`#${s.id}`}><b>{String(i + 1).padStart(2, '0')}</b> {s.name}</a>
            ))}
          </div>
        </nav>
      </header>

      {STYLES.map((s, i) => {
        const card = byKey(s.card);
        return (
          <section key={s.id} id={s.id} className={`sl-sec x-${s.id}`}>
            <div className="sl-wrap">
              <div className="sl-label">
                <span className="sl-n">{String(i + 1).padStart(2, '0')}</span>
                <div className="sl-meta">
                  <h2>{s.name}</h2>
                  <p>{s.mood} · <span className="sl-font">{s.fonts}</span></p>
                </div>
                <div className="sl-sw" aria-label="Palette">
                  {s.sw.map((c) => <span key={c} style={{ background: c }} title={c} />)}
                </div>
              </div>

              <div className="sl-stage">
                <div className="sl-frame">
                  <div className="sl-cap">Website · homepage hero</div>
                  <div className="site">
                    <div className="s-art" aria-hidden="true"><SiteArt id={s.id} /></div>
                    <nav className="s-nav">
                      <span className="s-brand">HNS PH</span>
                      <span className="s-links"><span>Products</span><span>Government</span><span>Company</span></span>
                      <span className="s-cta">Talk to us</span>
                    </nav>
                    <div className="s-hero">
                      <div className="s-eye">SEC · BIR · PhilGEPS Red Member</div>
                      <h3 className="s-h1" data-text={H1}>Software the Philippines <em>owns.</em></h3>
                      <p className="s-sub">Twelve sovereign products for businesses, families and LGUs. BIR-compliant, offline-ready, hosted in-country.</p>
                      <div className="s-actions">
                        <span className="s-btn pri">Browse products</span>
                        <span className="s-btn sec">Talk to us</span>
                      </div>
                    </div>
                    <div className="s-stats">
                      <span><b>12</b> shipped</span><span><b>100%</b> PH-hosted</span><span><b>6</b> backers</span>
                    </div>
                    <div className="s-cards">
                      {HOME_CARDS.map((c) => (
                        <div className="s-card" key={c.name}>
                          <span className="s-card-st">Live</span>
                          <span className="s-card-n">{c.name}</span>
                          <span className="s-card-k">{c.kind}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="sl-frame sl-frame-poster">
                  <div className="sl-cap">Social card · 4:5</div>
                  <div className="poster">
                    <div className="p-art" aria-hidden="true"><PosterArt id={s.id} /></div>
                    <div className="p-copy">
                      <div className="p-eye">{card.kind}</div>
                      <div className="p-title" data-text={card.name}>{card.name}</div>
                      <p className="p-sub">{s.tag}</p>
                    </div>
                    <div className="p-foot"><span>{card.url}</span><span>HNS PH</span></div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
      })}

      <footer className="sl-foot">
        <div className="sl-wrap">
          Reference: <code>.claude/skills/design-styles/SKILL.md</code> · Exploration only, not linked from the live site. <a href="#top">Back to top</a>
        </div>
      </footer>
    </div>
  );
}
