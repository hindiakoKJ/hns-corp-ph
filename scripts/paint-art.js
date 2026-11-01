// Renders the site's oil-painting art to static images in public/art/.
// Run from the repo root:  node scripts/paint-art.js
// Uses the Playwright + Chromium already on the machine (not a project dependency).
// Paintings are pre-rendered because live SVG turbulence filters are too heavy for phones.
const path = require('path');
const OUT = path.join(__dirname, '..', 'public', 'art');
const { chromium } = require('playwright');
const fs = require('fs');

function rng(seed){let a=seed>>>0;return()=>{a=(a+0x6d2b79f5)>>>0;let t=a;t=Math.imul(t^(t>>>15),t|1);t^=t+Math.imul(t^(t>>>7),t|61);return((t^(t>>>14))>>>0)/4294967296;};}

function oilFilter(id, freq, scale, tex, surf, k1){
  return `<filter id="${id}" x="0" y="0" width="100%" height="100%" color-interpolation-filters="sRGB">
    <feTurbulence type="fractalNoise" baseFrequency="${freq}" numOctaves="3" seed="9" result="n"/>
    <feDisplacementMap in="SourceGraphic" in2="n" scale="${scale}" xChannelSelector="R" yChannelSelector="G" result="paint"/>
    <feTurbulence type="fractalNoise" baseFrequency="${tex}" numOctaves="4" seed="2" result="t"/>
    <feDiffuseLighting in="t" surfaceScale="${surf}" lighting-color="#fff" result="lit"><feDistantLight azimuth="235" elevation="50"/></feDiffuseLighting>
    <feComposite in="paint" in2="lit" operator="arithmetic" k1="${k1}" k2="0" k3="0" k4="0"/>
  </filter>`;
}

/* ── hero: Bicol harbour at dusk, Mt. Isarog, a bangka ─────────────────── */
function harbor(){
  const W=2400,H=1350,HZ=830, r=rng(7);
  let clouds='';
  for(let i=0;i<26;i++){
    const y=120+r()*600, x=r()*W, rx=140+r()*460, ry=10+r()*30;
    const t=y/720; const cols=t<.35?['#6E3A92','#8E3F8F','#5A2E80']:t<.7?['#E2588C','#C9457F','#F07A6A']:['#FF9A4A','#FFB65A','#F37D3A'];
    clouds+=`<ellipse cx="${x|0}" cy="${y|0}" rx="${rx|0}" ry="${ry|0}" fill="${cols[i%3]}" opacity="${(.45+r()*.4).toFixed(2)}"/>`;
  }
  let waves='';
  for(let i=0;i<150;i++){
    const y=HZ+12+Math.pow(r(),1.3)*(H-HZ), x=r()*W, s=(y-HZ)/(H-HZ);
    const rx=20+s*120*r()+10, ry=2+s*6;
    const c=['#3E6FC4','#2A55B0','#1A6F8A','#5B4BA8','#0E5E6F'][i%5];
    waves+=`<ellipse cx="${x|0}" cy="${y|0}" rx="${rx|0}" ry="${ry.toFixed(1)}" fill="${c}" opacity="${(.35+r()*.4).toFixed(2)}"/>`;
  }
  let glints='';
  for(let i=0;i<34;i++){
    const t=i/33, y=HZ+10+t*(H-HZ-30), rx=40+t*300*(.6+r()*.5), ry=4+t*8;
    const c=['#FFE7A0','#FFD36B','#FFB347','#FF9A4A'][i%4];
    glints+=`<ellipse cx="${(1560+(r()-.5)*80*t)|0}" cy="${y|0}" rx="${rx|0}" ry="${ry.toFixed(1)}" fill="${c}" opacity="${(.9-t*.45).toFixed(2)}"/>`;
  }
  const bangka=(x,y,s,o=1)=>`<g transform="translate(${x} ${y}) scale(${s})" opacity="${o}">
    <path d="M-260,-6 Q-200,-90 -120,-96 M260,-6 Q200,-90 120,-96" stroke="#2A1A12" stroke-width="11" stroke-linecap="round" fill="none"/>
    <path d="M-120,-96 L120,-96" stroke="#3A2618" stroke-width="7"/>
    <rect x="-300" y="-4" width="140" height="10" rx="5" fill="#2A1A12"/>
    <rect x="160" y="-4" width="140" height="10" rx="5" fill="#2A1A12"/>
    <path d="M-170,-40 Q0,-10 180,-52 L150,6 Q0,26 -140,8 Z" fill="#F4EDE4"/>
    <path d="M-164,-30 Q0,-2 174,-42 L170,-32 Q0,8 -160,-20 Z" fill="#B3202A"/>
    <path d="M-150,-6 Q0,14 158,-14 L156,-6 Q0,22 -146,2 Z" fill="#1E3FA8"/>
    <path d="M-40,-44 L-40,-120 L50,-120 L50,-46" fill="none" stroke="#3A2618" stroke-width="6"/>
    <path d="M-60,-120 Q5,-150 70,-120 Z" fill="#B3202A"/>
    <circle cx="10" cy="-66" r="11" fill="#1A1010"/><path d="M0,-56 L20,-56 L24,-30 L-4,-30 Z" fill="#1A1010"/>
  </g>
  <g transform="translate(${x} ${y+26}) scale(${s} ${-s*.55})" opacity="${.28*o}">
    <path d="M-170,-40 Q0,-10 180,-52 L150,6 Q0,26 -140,8 Z" fill="#F4EDE4"/>
  </g>`;
  const frond=(a,len)=>{const tx=len*Math.cos(a), ty=len*Math.sin(a)+len*.42; const cx=len*.55*Math.cos(a), cy=len*.55*Math.sin(a)-len*.18; return `<path d="M0,-6 Q${cx|0},${cy|0} ${tx|0},${ty|0} Q${(cx*.9)|0},${(cy+34)|0} 0,10 Z" fill="#160C1E"/>`;};
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <defs>
    <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#1E1446"/><stop offset=".26" stop-color="#43226B"/><stop offset=".46" stop-color="#A8377A"/>
      <stop offset=".56" stop-color="#EE6F2E"/><stop offset=".615" stop-color="#FFC45E"/><stop offset=".62" stop-color="#FFC45E"/>
    </linearGradient>
    <linearGradient id="sea" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#8A3E7C"/><stop offset=".14" stop-color="#2E3E9E"/><stop offset=".55" stop-color="#13507A"/><stop offset="1" stop-color="#0A1E30"/>
    </linearGradient>
    <linearGradient id="mt" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#6A3474"/><stop offset="1" stop-color="#3E2160"/></linearGradient>
    <radialGradient id="glow"><stop offset="0" stop-color="#FFE7A0" stop-opacity=".9"/><stop offset=".35" stop-color="#FFB347" stop-opacity=".45"/><stop offset="1" stop-color="#FF7A3A" stop-opacity="0"/></radialGradient>
    ${oilFilter('oil','0.0045 0.03',40,'0.02 0.07',1.7,1.16)}
  </defs>
  <g filter="url(#oil)">
    <rect x="-120" y="-120" width="${W+240}" height="${HZ+124}" fill="url(#sky)"/>
    ${clouds}
    <circle cx="1560" cy="770" r="330" fill="url(#glow)"/>
    <circle cx="1560" cy="772" r="74" fill="#FFF0B8"/>
    <path d="M1650,${HZ} C1800,770 1900,742 2010,738 C2140,736 2260,780 2400,800 L2520,806 L2520,${HZ} Z" fill="#4A2560"/>
    <path d="M180,${HZ} C420,780 600,640 760,590 C800,578 830,574 860,580 C1010,620 1180,760 1420,${HZ} Z" fill="url(#mt)"/>
    <path d="M760,590 C800,578 830,574 860,580 C880,600 870,612 850,606 C830,620 800,612 780,616 Z" fill="#8A4A86"/>
    <rect x="-120" y="${HZ}" width="${W+240}" height="${H-HZ+120}" fill="url(#sea)"/>
    ${waves}
    ${glints}
    ${bangka(2010,900,.42,.9)}
    ${bangka(1300,1090,1.25)}
    <path d="M-120,${H+120} L-120,1170 C160,1140 300,1180 420,1230 C520,1270 600,1310 680,${H+120} Z" fill="#24132A"/>
    <path d="M-120,1250 C120,1230 260,1260 360,1300 L400,${H+120} L-120,${H+120} Z" fill="#170C1C"/>
    <g transform="translate(2190 520)">
      <path d="M190,830 C150,620 70,320 0,0 L18,-4 C96,320 176,620 214,830 Z" fill="#160C1E"/>
      ${[-3.0,-2.6,-2.2,-1.75,-1.35,-0.95,-0.55,-0.15].map((a,i)=>frond(a,240+(i%3)*60)).join('')}
    </g>
  </g>
</svg>`;
}

/* ── page backdrop: dark painted canvas ────────────────────────────────── */
function night(){
  const W=1920,H=1200,r=rng(3);
  let strokes='';
  const cols=['#2B1747','#1A2C4A','#3A1A3E','#0F3340','#2A1A50','#4A2030'];
  for(let i=0;i<22;i++){
    strokes+=`<ellipse cx="${(r()*W)|0}" cy="${(r()*H)|0}" rx="${(380+r()*640)|0}" ry="${(70+r()*170)|0}" fill="${cols[i%cols.length]}" opacity="${(.22+r()*.3).toFixed(2)}" transform="rotate(${((r()-.5)*16).toFixed(1)})"/>`;
  }
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <defs>
    <linearGradient id="b" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#160F2C"/><stop offset=".55" stop-color="#120C24"/><stop offset="1" stop-color="#1B0F22"/></linearGradient>
    <filter id="soft" x="-20%" y="-20%" width="140%" height="140%"><feGaussianBlur stdDeviation="38"/></filter>
    ${oilFilter('oil','0.004 0.02',60,'0.022 0.065',1.6,1.14)}
  </defs>
  <g filter="url(#oil)">
    <rect x="-120" y="-120" width="${W+240}" height="${H+240}" fill="url(#b)"/>
    <g filter="url(#soft)">${strokes}
    <ellipse cx="1650" cy="1150" rx="620" ry="180" fill="#5A2A18" opacity=".4"/>
    <ellipse cx="260" cy="120" rx="560" ry="140" fill="#3A2470" opacity=".45"/></g>
  </g>
</svg>`;
}

/* ── tileable canvas texture (grey, for blending onto panels) ─────────── */
function tile(){
  return `<svg xmlns="http://www.w3.org/2000/svg" width="400" height="400" viewBox="0 0 400 400">
  <filter id="t" x="0" y="0" width="100%" height="100%" color-interpolation-filters="sRGB"><feTurbulence type="fractalNoise" baseFrequency="0.045 0.12" numOctaves="3" seed="5" stitchTiles="stitch"/>
  <feDiffuseLighting surfaceScale="2.4" lighting-color="#fff"><feDistantLight azimuth="235" elevation="55"/></feDiffuseLighting>
  <feComponentTransfer><feFuncR type="linear" slope="0.5" intercept="0.11"/><feFuncG type="linear" slope="0.5" intercept="0.11"/><feFuncB type="linear" slope="0.5" intercept="0.11"/></feComponentTransfer></filter>
  <rect width="400" height="400" filter="url(#t)"/></svg>`;
}

(async()=>{
  const b=await chromium.launch();
  for(const [name,svg,w,h,file] of [['harbor',harbor(),2400,1350,'harbor.jpg'],['night',night(),1920,1200,'canvas-night.jpg'],['tile',tile(),400,400,'canvas-tile.png']]){
    const B=name==='tile'?0:90;
    const inner=svg.replace(/^<svg[^>]*>/,'').replace(/<\/svg>$/,'');
    const defs=(inner.match(/<defs>[\s\S]*?<\/defs>/)||[''])[0];
    const body=inner.replace(defs,'').replace(/filter="url\(#oil\)"/,'');
    const wrapped=B?`<svg xmlns="http://www.w3.org/2000/svg" width="${w+2*B}" height="${h+2*B}">${defs}<g filter="url(#oil)"><g transform="translate(${B} ${B})">${body}</g></g></svg>`:svg;
    const p=await b.newPage({viewport:{width:w+2*B,height:h+2*B}});
    await p.setContent(`<html><body style="margin:0">${wrapped}</body></html>`);
    await p.waitForTimeout(300);
    const jpg=file.endsWith('.jpg');
    await p.screenshot({path:path.join(OUT,file),clip:{x:B,y:B,width:w,height:h},type:jpg?'jpeg':'png',...(jpg?{quality:84}:{})});
    await p.close();
  }
  // phone-sized copy of the hero painting
  const p=await b.newPage({viewport:{width:1280,height:720}});
  const data=fs.readFileSync(path.join(OUT,'harbor.jpg')).toString('base64');
  await p.setContent(`<html><body style="margin:0"><img src="data:image/jpeg;base64,${data}" style="width:1280px;height:720px;display:block"></body></html>`);
  await p.waitForTimeout(200);
  await p.screenshot({path:path.join(OUT,'harbor-1280.jpg'),type:'jpeg',quality:80,clip:{x:0,y:0,width:1280,height:720}});
  await b.close();
})();
