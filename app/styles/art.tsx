// Procedural SVG art for the style lab. Deterministic (seeded) so server and
// client render identical markup. No image assets except the collage photos.

function rng(seed: number) {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const r1 = (n: number) => Math.round(n * 10) / 10;

function hexToRgb(h: string) {
  const n = parseInt(h.slice(1), 16);
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
}
function mix(a: string, b: string, t: number, shade = 0) {
  const A = hexToRgb(a), B = hexToRgb(b);
  const c = A.map((v, i) => Math.max(0, Math.min(255, Math.round(v + (B[i] - v) * t + shade))));
  return `rgb(${c[0]},${c[1]},${c[2]})`;
}
function ramp(stops: string[], t: number, shade = 0) {
  const x = Math.max(0, Math.min(0.9999, t)) * (stops.length - 1);
  const i = Math.floor(x);
  return mix(stops[i], stops[i + 1], x - i, shade);
}

/** Ridge line across a width — used for paper layers and ink mountains. */
function ridge(seed: number, w: number, h: number, base: number, amp: number, steps: number, smooth: boolean) {
  const rand = rng(seed);
  const pts: [number, number][] = [];
  for (let i = 0; i <= steps; i++) pts.push([(w / steps) * i, base - rand() * amp]);
  let d = `M0,${h} L${pts[0][0]},${r1(pts[0][1])}`;
  if (smooth) {
    for (let i = 1; i < pts.length; i++) {
      const [x0, y0] = pts[i - 1], [x1, y1] = pts[i];
      const mx = (x0 + x1) / 2;
      d += ` C${r1(mx)},${r1(y0)} ${r1(mx)},${r1(y1)} ${r1(x1)},${r1(y1)}`;
    }
  } else {
    for (let i = 1; i < pts.length; i++) d += ` L${r1(pts[i][0])},${r1(pts[i][1])}`;
  }
  return `${d} L${w},${h} Z`;
}

/* ─── 05 Paper cutout ─────────────────────────────────────────────────────── */
export function PaperLayers({ id, colors, seed = 3, flip = false }: { id: string; colors: string[]; seed?: number; flip?: boolean }) {
  const W = 800, H = 500;
  return (
    <svg viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="none" className="art-fill" style={flip ? { transform: 'scaleX(-1)' } : undefined}>
      <defs>
        <filter id={`${id}-lift`} x="-5%" y="-20%" width="110%" height="140%">
          <feDropShadow dx="0" dy="-5" stdDeviation="5" floodColor="#2A2321" floodOpacity="0.35" />
        </filter>
      </defs>
      {colors.map((c, i) => (
        <path key={i} d={ridge(seed + i * 7, W, H, 150 + i * 70, 90, 5, true)} fill={c} filter={`url(#${id}-lift)`} />
      ))}
    </svg>
  );
}

/* ─── 09 Japanese ink ─────────────────────────────────────────────────────── */
export function InkMountains({ id, seed = 11 }: { id: string; seed?: number }) {
  const W = 800, H = 500;
  return (
    <svg viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="xMidYMax slice" className="art-fill">
      <defs>
        <filter id={`${id}-ink`} x="-10%" y="-10%" width="120%" height="120%">
          <feTurbulence type="fractalNoise" baseFrequency="0.035" numOctaves="4" seed="7" />
          <feDisplacementMap in="SourceGraphic" scale="18" />
          <feGaussianBlur stdDeviation="1.2" />
        </filter>
        <linearGradient id={`${id}-mist`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#111" stopOpacity="1" />
          <stop offset="1" stopColor="#111" stopOpacity="0" />
        </linearGradient>
      </defs>
      <g filter={`url(#${id}-ink)`}>
        <path d={ridge(seed, W, H, 250, 170, 9, false)} fill={`url(#${id}-mist)`} opacity="0.22" />
        <path d={ridge(seed + 5, W, H, 330, 150, 7, false)} fill={`url(#${id}-mist)`} opacity="0.45" />
        <path d={ridge(seed + 9, W, H, 430, 120, 6, false)} fill={`url(#${id}-mist)`} opacity="0.85" />
      </g>
    </svg>
  );
}

export function Enso({ id }: { id: string }) {
  return (
    <svg viewBox="0 0 200 200" className="enso">
      <defs>
        <filter id={`${id}-brush`}>
          <feTurbulence type="fractalNoise" baseFrequency="0.08" numOctaves="3" seed="3" />
          <feDisplacementMap in="SourceGraphic" scale="9" />
        </filter>
      </defs>
      <circle cx="100" cy="100" r="72" fill="none" stroke="currentColor" strokeWidth="15"
        strokeLinecap="round" strokeDasharray="400 60" transform="rotate(-70 100 100)" filter={`url(#${id}-brush)`} />
    </svg>
  );
}

/* ─── 10 Low-poly 3D ──────────────────────────────────────────────────────── */
export function LowPoly({ stops, seed = 5, cols = 12, rows = 9, className = 'art-fill' }: {
  stops: string[]; seed?: number; cols?: number; rows?: number; className?: string;
}) {
  const W = 800, H = 500;
  const rand = rng(seed);
  const pts: [number, number][][] = [];
  for (let y = 0; y <= rows; y++) {
    const row: [number, number][] = [];
    for (let x = 0; x <= cols; x++) {
      const edgeX = x === 0 || x === cols, edgeY = y === 0 || y === rows;
      row.push([
        (W / cols) * x + (edgeX ? 0 : (rand() - 0.5) * (W / cols) * 0.8),
        (H / rows) * y + (edgeY ? 0 : (rand() - 0.5) * (H / rows) * 0.8),
      ]);
    }
    pts.push(row);
  }
  const tris: { d: string; fill: string }[] = [];
  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      const a = pts[y][x], b = pts[y][x + 1], c = pts[y + 1][x], d = pts[y + 1][x + 1];
      for (const t of [[a, b, d], [a, d, c]] as [number, number][][]) {
        const cy = (t[0][1] + t[1][1] + t[2][1]) / 3;
        tris.push({
          d: `M${t.map((p) => `${r1(p[0])},${r1(p[1])}`).join(' L')} Z`,
          fill: ramp(stops, cy / H, (rand() - 0.5) * 26),
        });
      }
    }
  }
  return (
    <svg viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="none" className={className}>
      {tris.map((t, i) => <path key={i} d={t.d} fill={t.fill} stroke={t.fill} strokeWidth="0.6" />)}
    </svg>
  );
}

/** Faceted mountain + pine trees, drawn on top of a LowPoly sky. */
export function LowPolyScene() {
  const tree = (x: number, y: number, s: number) => (
    <g key={`${x}-${y}`} transform={`translate(${x} ${y}) scale(${s})`}>
      <path d="M0,-60 L-22,0 L0,-8 Z" fill="#2F7D46" />
      <path d="M0,-60 L22,0 L0,-8 Z" fill="#1F5E34" />
      <rect x="-4" y="-2" width="8" height="14" fill="#7A4A2A" />
    </g>
  );
  return (
    <svg viewBox="0 0 800 500" preserveAspectRatio="xMidYMax slice" className="art-fill">
      <path d="M380,500 L560,150 L640,300 L740,500 Z" fill="#8E7CC3" />
      <path d="M560,150 L640,300 L600,500 L470,500 Z" fill="#6E5AA8" />
      <path d="M560,150 L590,210 L560,205 L535,215 Z" fill="#F4F1FF" />
      <path d="M560,500 L700,230 L800,380 L800,500 Z" fill="#7C69B8" />
      <path d="M700,230 L800,380 L800,500 L720,500 Z" fill="#5C4A98" />
      <path d="M0,430 L200,380 L420,420 L800,400 L800,500 L0,500 Z" fill="#7BC043" />
      <path d="M0,460 L260,430 L520,470 L800,445 L800,500 L0,500 Z" fill="#5FA52F" />
      {[[470, 440, 1], [520, 455, 1.2], [610, 430, 0.9], [680, 450, 1.3], [745, 438, 1]].map(([x, y, s]) => tree(x, y, s))}
    </svg>
  );
}

/* ─── 15 Vintage engraving ────────────────────────────────────────────────── */
export function Guilloche({ className = 'guilloche' }: { className?: string }) {
  const curve = (R: number, r: number, d: number, steps: number) => {
    let s = '';
    const turns = r / gcd(R, r);
    for (let i = 0; i <= steps; i++) {
      const t = (i / steps) * Math.PI * 2 * turns;
      const x = (R - r) * Math.cos(t) + d * Math.cos(((R - r) / r) * t);
      const y = (R - r) * Math.sin(t) - d * Math.sin(((R - r) / r) * t);
      s += `${i ? 'L' : 'M'}${r1(x)},${r1(y)} `;
    }
    return s;
  };
  return (
    <svg viewBox="-110 -110 220 220" className={className}>
      <g fill="none" stroke="currentColor">
        <path d={curve(96, 21, 62, 900)} strokeWidth="0.35" />
        <path d={curve(70, 13, 36, 700)} strokeWidth="0.35" />
        <circle r="104" strokeWidth="0.8" />
        <circle r="99" strokeWidth="0.3" />
        <circle r="30" strokeWidth="0.5" />
      </g>
    </svg>
  );
}
function gcd(a: number, b: number): number { return b ? gcd(b, a % b) : a; }

/* ─── 14 Botanical ────────────────────────────────────────────────────────── */
export function Sprig({ className, leaf = '#3F6B4F', flower = '#6B4A8E', bud = '#F6EBD3', seed = 1 }: {
  className?: string; leaf?: string; flower?: string; bud?: string; seed?: number;
}) {
  const rand = rng(seed);
  const leaves = Array.from({ length: 7 }, (_, i) => {
    const y = 360 - i * 46, side = i % 2 ? 1 : -1;
    return { y, side, s: 0.8 + rand() * 0.5, rot: side * (35 + rand() * 20) };
  });
  const petal = 'M0,0 C14,-18 14,-48 0,-70 C-14,-48 -14,-18 0,0 Z';
  return (
    <svg viewBox="-120 -80 240 460" className={className}>
      <path d="M0,380 C6,280 -8,160 0,10" stroke={leaf} strokeWidth="4" fill="none" />
      {leaves.map((l, i) => (
        <g key={i} transform={`translate(0 ${l.y}) rotate(${l.rot}) scale(${l.s})`}>
          <path d="M0,0 C10,-26 40,-44 74,-40 C52,-12 26,4 0,0 Z" fill={leaf} />
          <path d="M0,0 C24,-14 48,-28 70,-38" stroke="rgba(255,255,255,.45)" strokeWidth="1.2" fill="none" />
        </g>
      ))}
      <g transform="translate(0 12)">
        {[0, 60, 120, 180, 240, 300].map((a) => (
          <path key={a} d={petal} transform={`rotate(${a})`} fill={a % 120 ? flower : bud} stroke="rgba(0,0,0,.18)" strokeWidth="1" />
        ))}
        {[-20, 0, 20].map((a) => (
          <line key={a} x1="0" y1="0" x2={Math.sin((a * Math.PI) / 180) * 34} y2={-Math.cos((a * Math.PI) / 180) * 34} stroke="#B8862E" strokeWidth="2" />
        ))}
        <circle r="7" fill="#C9A04E" />
      </g>
    </svg>
  );
}

/* ─── 04 Minimal line art: Mt. Isarog over Naga, one stroke ──────────────── */
export function IsarogLine({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 220" className={className} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M8,190 L70,190 C110,190 140,120 168,92 C180,80 190,70 200,58 C212,72 220,78 232,90 C262,120 286,170 330,186 C346,191 360,190 392,190" />
      <path d="M150,190 C170,176 196,172 214,180 C232,188 250,186 262,178" />
      <circle cx="286" cy="62" r="22" />
      <path d="M40,206 L360,206" opacity=".5" />
    </svg>
  );
}

/* ─── 07 Watercolor & 08 Oil — painterly SVG filters ─────────────────────── */
export function Watercolor({ id, blobs }: { id: string; blobs: { x: number; y: number; r: number; c: string }[] }) {
  // Each wash = a few offset, translucent layers so overlaps build up pigment;
  // the darker rim comes from a thin stroke that the displacement roughens.
  const rand = rng(blobs.length * 31 + blobs[0].x);
  const layers = blobs.flatMap((b, i) =>
    [0, 1, 2].map((k) => ({
      key: `${i}-${k}`,
      cx: b.x + (rand() - 0.5) * b.r * 0.5,
      cy: b.y + (rand() - 0.5) * b.r * 0.5,
      r: b.r * (1 - k * 0.22),
      c: b.c,
    })),
  );
  return (
    <svg viewBox="0 0 800 500" preserveAspectRatio="xMidYMid slice" className="art-fill">
      <defs>
        <filter id={`${id}-wc`} x="-30%" y="-30%" width="160%" height="160%">
          <feTurbulence type="fractalNoise" baseFrequency="0.011" numOctaves="5" seed="4" result="n" />
          <feDisplacementMap in="SourceGraphic" in2="n" scale="46" result="d" />
          <feGaussianBlur in="d" stdDeviation="2.4" />
        </filter>
      </defs>
      <g filter={`url(#${id}-wc)`}>
        {layers.map((l) => (
          <circle key={l.key} cx={l.cx} cy={l.cy} r={l.r} fill={l.c} fillOpacity="0.28"
            stroke={l.c} strokeOpacity="0.55" strokeWidth="2.5" style={{ mixBlendMode: 'multiply' }} />
        ))}
      </g>
    </svg>
  );
}

export function OilPainting({ id }: { id: string }) {
  return (
    <svg viewBox="0 0 800 500" preserveAspectRatio="xMidYMid slice" className="art-fill">
      <defs>
        <linearGradient id={`${id}-sky`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#3B2A7A" />
          <stop offset=".35" stopColor="#C2447A" />
          <stop offset=".6" stopColor="#F2711C" />
          <stop offset=".62" stopColor="#1E3FA8" />
          <stop offset="1" stopColor="#0E5E6F" />
        </linearGradient>
        <filter id={`${id}-oil`} x="0" y="0" width="100%" height="100%">
          <feTurbulence type="fractalNoise" baseFrequency="0.012 0.07" numOctaves="3" seed="9" result="n" />
          <feDisplacementMap in="SourceGraphic" in2="n" scale="34" result="paint" />
          <feTurbulence type="fractalNoise" baseFrequency="0.09 0.25" numOctaves="2" seed="2" result="tex" />
          <feDiffuseLighting in="tex" surfaceScale="2.2" lightingColor="#fff" result="lit">
            <feDistantLight azimuth="235" elevation="48" />
          </feDiffuseLighting>
          <feComposite in="paint" in2="lit" operator="arithmetic" k1="1.25" k2="0" k3="0" k4="0" />
        </filter>
      </defs>
      <g filter={`url(#${id}-oil)`}>
        <rect width="800" height="500" fill={`url(#${id}-sky)`} />
        <circle cx="560" cy="300" r="46" fill="#FFD36B" />
        <ellipse cx="560" cy="330" rx="160" ry="10" fill="#FFB347" opacity=".8" />
        <ellipse cx="560" cy="360" rx="110" ry="7" fill="#FFB347" opacity=".7" />
        <ellipse cx="560" cy="392" rx="70" ry="5" fill="#FFD36B" opacity=".6" />
        <path d="M0,300 L120,240 L230,280 L330,230 L460,300 Z" fill="#5A2E6E" />
        <path d="M0,500 L0,420 C120,400 220,440 300,500 Z" fill="#B8865A" />
        <path d="M120,380 L230,380 L210,400 L135,400 Z" fill="#F4EDE4" />
        <path d="M120,380 L230,380 L224,386 L126,386 Z" fill="#B3202A" />
      </g>
    </svg>
  );
}

/* ─── 11 Vaporwave palm ───────────────────────────────────────────────────── */
export function Palm({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 260" className={className} fill="currentColor">
      <path d="M58,260 C60,200 62,140 66,70 L72,70 C70,140 68,200 66,260 Z" />
      {[[-60, -10], [-30, -30], [0, -40], [30, -28], [60, -8], [-80, 20], [80, 22]].map(([dx, dy], i) => (
        <path key={i} d={`M69,70 Q${69 + dx * 0.5},${70 + dy - 18} ${69 + dx},${70 + dy + 22} Q${69 + dx * 0.55},${70 + dy - 4} 69,74 Z`} />
      ))}
    </svg>
  );
}

/* ─── 19 Geometric abstract composition ───────────────────────────────────── */
export function GeoComposition({ id }: { id: string }) {
  return (
    <svg viewBox="0 0 400 500" preserveAspectRatio="xMidYMid slice" className="art-fill">
      <defs>
        <radialGradient id={`${id}-s1`} cx=".35" cy=".35" r=".75">
          <stop offset="0" stopColor="#FFB38A" /><stop offset=".5" stopColor="#F25C54" /><stop offset="1" stopColor="#8E1B4D" />
        </radialGradient>
        <radialGradient id={`${id}-s2`} cx=".35" cy=".3" r=".8">
          <stop offset="0" stopColor="#F6E3A6" /><stop offset=".6" stopColor="#C9A24A" /><stop offset="1" stopColor="#6E5320" />
        </radialGradient>
      </defs>
      <rect width="400" height="500" fill="#F3E9DC" />
      <rect x="0" y="0" width="150" height="260" fill="#0E1A2B" />
      <path d="M150,0 L400,0 L400,190 Z" fill="#E83F6F" />
      <rect x="250" y="190" width="150" height="150" fill="#1A9E9A" />
      <path d="M0,500 L0,300 L200,500 Z" fill="#F28C28" />
      <circle cx="190" cy="230" r="96" fill="none" stroke="#1A9E9A" strokeWidth="26" />
      <circle cx="190" cy="230" r="44" fill={`url(#${id}-s2)`} />
      <path d="M250,340 A75,75 0 0 1 400,340 Z" fill="#0E1A2B" />
      <circle cx="300" cy="420" r="58" fill={`url(#${id}-s1)`} />
      <circle cx="70" cy="90" r="22" fill="#F25C54" />
      <circle cx="350" cy="70" r="12" fill="#0E1A2B" />
      <g stroke="#C9A24A" strokeWidth="1.4">
        <line x1="20" y1="470" x2="390" y2="110" />
        <line x1="40" y1="330" x2="40" y2="480" />
        <line x1="50" y1="330" x2="50" y2="480" />
        <line x1="60" y1="330" x2="60" y2="480" />
      </g>
      <path d="M150,260 A120,120 0 0 1 270,380" fill="none" stroke="#C9A24A" strokeWidth="1.4" />
    </svg>
  );
}

/* ─── 13 Ornamental tile ──────────────────────────────────────────────────── */
export function OrnamentPattern({ id, ground, a, b, c }: { id: string; ground: string; a: string; b: string; c: string }) {
  const scroll = 'M0,0 C10,-22 36,-22 40,-4 C43,10 28,16 22,6 C18,0 24,-6 28,-2';
  const leaf = 'M0,0 C8,-14 26,-18 36,-10 C26,-2 12,4 0,0 Z';
  return (
    <svg className="art-fill" preserveAspectRatio="xMidYMid slice" viewBox="0 0 400 500">
      <defs>
        <pattern id={id} width="80" height="80" patternUnits="userSpaceOnUse">
          <rect width="80" height="80" fill={ground} />
          <g fill="none" stroke={a} strokeWidth="2.2" strokeLinecap="round">
            <path d={scroll} transform="translate(8 44)" />
            <path d={scroll} transform="translate(72 36) rotate(180)" />
          </g>
          <path d={leaf} fill={b} transform="translate(30 70) rotate(-30)" />
          <path d={leaf} fill={c} transform="translate(50 12) rotate(150)" />
          <path d={leaf} fill={b} transform="translate(-4 14) rotate(20)" />
          <circle cx="40" cy="40" r="3.2" fill={a} />
          <circle cx="0" cy="0" r="3" fill={c} /><circle cx="80" cy="80" r="3" fill={c} />
          <circle cx="80" cy="0" r="3" fill={c} /><circle cx="0" cy="80" r="3" fill={c} />
        </pattern>
      </defs>
      <rect width="400" height="500" fill={`url(#${id})`} />
    </svg>
  );
}

/* ─── 12 Memphis confetti ─────────────────────────────────────────────────── */
export function MemphisPattern({ id }: { id: string }) {
  return (
    <svg className="art-fill" preserveAspectRatio="xMidYMid slice" viewBox="0 0 400 500">
      <defs>
        <pattern id={id} width="90" height="90" patternUnits="userSpaceOnUse">
          <rect width="90" height="90" fill="#FFF7EC" />
          <path d="M8,18 q6,-8 12,0 t12,0" stroke="#111" strokeWidth="2.4" fill="none" strokeLinecap="round" />
          <path d="M52,62 q6,-8 12,0 t12,0" stroke="#111" strokeWidth="2.4" fill="none" strokeLinecap="round" />
          <rect x="60" y="14" width="10" height="3.4" rx="1.6" fill="#111" transform="rotate(35 65 16)" />
          <rect x="14" y="62" width="10" height="3.4" rx="1.6" fill="#111" transform="rotate(-25 19 64)" />
          <circle cx="42" cy="38" r="2.4" fill="#111" />
          <circle cx="80" cy="84" r="2.4" fill="#111" />
        </pattern>
      </defs>
      <rect width="400" height="500" fill={`url(#${id})`} />
    </svg>
  );
}

/* ─── 20 Collage: torn-edge polygons ──────────────────────────────────────── */
export function torn(seed: number, jag = 3.5, n = 14) {
  const rand = rng(seed);
  const p: string[] = [];
  const j = () => r1(rand() * jag);
  for (let i = 0; i <= n; i++) p.push(`${r1((100 / n) * i)}% ${j()}%`);
  for (let i = 0; i <= n; i++) p.push(`${r1(100 - j())}% ${r1((100 / n) * i)}%`);
  for (let i = n; i >= 0; i--) p.push(`${r1((100 / n) * i)}% ${r1(100 - j())}%`);
  for (let i = n; i >= 0; i--) p.push(`${j()}% ${r1((100 / n) * i)}%`);
  return `polygon(${p.join(',')})`;
}
