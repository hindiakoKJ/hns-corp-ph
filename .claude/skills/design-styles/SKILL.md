---
name: design-styles
description: Reference of 20 graphic design styles (Art Deco, Bauhaus, Brutalism, Minimal line art, Paper cutout, Risograph, Watercolor, Oil painting, Japanese ink, Low-poly 3D, Vaporwave, Memphis, Ornamental, Botanical, Vintage engraving, Dreamy pastel, Metallic chrome, Holographic, Geometric abstract, Photorealistic collage) with palettes, type, layout rules, CSS/Tailwind recipes and image-prompt keywords. Use when choosing or applying a visual direction for UI sections, landing pages, posters, social cards, OG images, illustrations or AI image prompts.
---

# Graphic Design Styles

A working reference for picking a visual direction and applying it to **UI**, **posters**, and **cards** (social posts, OG images, product/feature cards).

**Live samples:** `/styles` in this repo (`app/styles/`) renders the HNS homepage hero and a 4:5 social card in all 20 styles. Start the dev server and open `http://localhost:3002/styles`. Each style is a scoped `.x-<id>` block in `app/styles/styles.css`; procedural art (low-poly, ink, watercolor, oil, guilloché) lives in `app/styles/art.tsx`.

## How to use this

1. **Pick by mood first, not by looks.** Use the selection table below.
2. **Commit to 1 style per surface.** One primary style; at most one accent style (e.g. Bauhaus layout + Risograph texture). Never mix 3+.
3. **Translate, don't costume.** In UI, a style is expressed through color, type, shape, spacing, and texture, while content stays readable. Save full-intensity rendering for posters, hero art, and illustrations.
4. **Keep accessibility.** Whatever the style, body text must hit WCAG AA contrast (4.5:1). Decorative textures go *behind* or *beside* text, never under small text.
5. **For AI-generated art**, use the *Prompt keywords* line, plus subject + composition + aspect ratio.

### Quick selection

| Mood / goal | Best fits |
|---|---|
| Premium, luxury, heritage | Art Deco, Ornamental, Vintage Engraving, Botanical |
| Clear, rational, product/SaaS | Bauhaus, Geometric Abstract, Minimal Line Art |
| Bold, raw, anti-corporate | Brutalism, Risograph, Photorealistic Collage |
| Warm, handmade, human | Paper Cutout, Watercolor, Oil Painting, Risograph |
| Calm, focused, mindful | Japanese Ink, Minimal Line Art, Dreamy Pastel |
| Playful, youthful, loud | Memphis, Vaporwave, Low-poly 3D |
| Futuristic, tech, Web3/AI | Metallic Chrome, Holographic, Vaporwave |
| Editorial, storytelling | Photorealistic Collage, Vintage Engraving, Watercolor |

### Fit by surface

| Style | UI | Poster | Card |
|---|:-:|:-:|:-:|
| Art Deco | ●● | ●●● | ●●● |
| Bauhaus | ●●● | ●●● | ●●● |
| Brutalism | ●●● | ●●● | ●● |
| Minimal Line Art | ●●● | ●● | ●●● |
| Paper Cutout | ●● | ●●● | ●●● |
| Risograph | ●● | ●●● | ●●● |
| Watercolor | ● | ●●● | ●● |
| Oil Painting | ● | ●●● | ●● |
| Japanese Ink | ●● | ●●● | ●● |
| Low-poly 3D | ● | ●● | ●●● |
| Vaporwave | ●● | ●●● | ●●● |
| Memphis | ●● | ●●● | ●●● |
| Ornamental | ● | ●●● | ●●● |
| Botanical | ●● | ●●● | ●●● |
| Vintage Engraving | ● | ●●● | ●●● |
| Dreamy Pastel | ●● | ●●● | ●●● |
| Metallic Chrome | ●● | ●●● | ●●● |
| Holographic | ●● | ●●● | ●●● |
| Geometric Abstract | ●●● | ●●● | ●●● |
| Photorealistic Collage | ● | ●●● | ●● |

●●● natural fit · ●● use as accent / hero only · ● art or illustration only

---

## 1. Art Deco

1920s–30s glamour: symmetry, gold on black, stepped arches, sunbursts, fan shapes, vertical rhythm.

- **Palette:** black `#0B0B0B`, deep green `#0F3D3E`, gold `#C9A227`, cream `#EFE6D2`, brass `#A67C3D`
- **Type:** tall geometric display caps (Poiret One, Limelight, Josefin Sans, Cinzel) with wide letter-spacing; plain sans for body
- **Shapes:** stepped/zigzag edges, arches, sunburst rays, thin double-rule borders, chevrons
- **UI:** dark sections with thin gold rules, symmetric centered layouts, arch-topped image frames, small-caps labels. Good for premium tiers and pricing.
- **Poster/Card:** strict symmetry, a central figure framed by an arch, gold linework, title in tall caps at top or bottom
- **CSS:** `border: 1px solid #C9A227; outline: 1px solid #C9A227; outline-offset: 4px;` (double rule) · `letter-spacing: 0.2em; text-transform: uppercase;` · arch frame: `border-radius: 999px 999px 0 0;`
- **Prompt keywords:** art deco, 1920s, gold and black, geometric symmetry, stepped arches, sunburst, Gatsby, travel poster, gilded linework
- **Avoid:** gold text on cream (low contrast); too many fonts; skipping symmetry

## 2. Bauhaus

Form follows function: primary colors, basic shapes (circle, square, triangle), grid, asymmetric balance, sans type.

- **Palette:** red `#D72F27`, blue `#1F4E9C`, yellow `#F2C230`, black `#111111`, off-white `#F1EBDD`
- **Type:** geometric grotesk (Futura, Jost, Outfit, Archivo, DM Sans), bold weights, lowercase allowed, rotated vertical labels
- **Shapes:** big flat circles and rectangles, thick bars, strong grid, overlapping primaries
- **UI:** clean grid, flat color blocks behind sections, a single big circle or bar as focal accent, no shadows or gradients. Pairs very well with product/SaaS layouts.
- **Poster/Card:** one bold geometric composition, small type set flush to the grid, year/number as a graphic element
- **CSS:** `display: grid; grid-template-columns: repeat(12, 1fr);` · flat fills only · accent: `aspect-ratio: 1; border-radius: 50%; background: #D72F27;`
- **Prompt keywords:** Bauhaus poster, primary colors, flat geometric shapes, modernist, 1926, grid composition, minimal furniture, cream background
- **Avoid:** gradients, drop shadows, decorative serif fonts, centering everything

## 3. Brutalism

Raw, heavy, honest: exposed structure, concrete greys, massive blocks, harsh contrast, one aggressive accent.

- **Palette:** concrete `#8A8A85`, charcoal `#2B2B2B`, off-white `#EDEDE8`, black `#000`, one accent (red `#C8102E` or acid `#D4FF00`)
- **Type:** huge heavy grotesk or monospace (Space Grotesk, Archivo Black, IBM Plex Mono, JetBrains Mono), tight leading, all-caps headings
- **Shapes:** thick black borders, hard offset shadows, visible grid lines, unrounded corners
- **UI (neo-brutalism):** `border: 3px solid #000; box-shadow: 6px 6px 0 #000; border-radius: 0;` with flat bright fills, oversized headings, buttons that "press" (shadow shrinks on active)
- **Poster/Card:** big slabs of type and grey blocks, one red element, lots of negative space, architectural photography
- **Prompt keywords:** brutalist architecture, raw concrete, monolithic, stark shadows, single red wall, lone figure, dramatic scale, overcast sky
- **Avoid:** going so raw it looks broken; low-contrast greys on grey for text

## 4. Minimal Line Art

Single continuous or sparse strokes on calm backgrounds; elegance through restraint.

- **Palette:** ink `#1A1A1A` on cream `#F3EDE0` or white; optional single muted accent (terracotta `#C46A4A`, sage `#8BA888`)
- **Type:** light/regular weights, a refined serif (Cormorant, Fraunces, Playfair) or thin sans; generous tracking
- **Shapes:** 1–2px strokes, no fills, lots of whitespace
- **UI:** line icons, hairline dividers, empty states and onboarding illustrations, feature icons. Use SVG with `stroke="currentColor" fill="none" stroke-width="1.5"`.
- **Poster/Card:** one subject drawn in a single line, centered with huge margins, small caption
- **Prompt keywords:** minimal line art, single continuous line, one-line drawing, black ink on cream paper, elegant, sparse, negative space
- **Avoid:** mixing stroke weights; adding shading

## 5. Paper Cutout

Layered paper shapes with soft drop shadows that create real depth; tactile and handmade.

- **Palette:** warm earthy layers: cream `#F2E3D0`, terracotta `#C5522E`, rust `#8C2F1B`, charcoal `#2A2321`, sand `#E2B58E` (or any 4–6 analogous tones)
- **Type:** friendly rounded or soft serif (Recoleta, Nunito, Fraunces)
- **Shapes:** organic wavy layers, stacked from back to front, each with a small shadow
- **UI:** layered section dividers (wavy SVG stacked with shadows), hero backgrounds, cards that sit "above" the page
- **CSS:** `filter: drop-shadow(0 4px 6px rgba(0,0,0,.18));` on stacked SVG paths · each layer slightly darker than the one behind
- **Poster/Card:** portrait or landscape built from 5–8 depth layers, flowing hair/waves/hills
- **Prompt keywords:** layered paper cut art, papercraft, paper sculpture, soft shadows between layers, depth, handmade, warm tones
- **Avoid:** flat shapes with no shadow (that's just flat vector); too many layers in small UI

## 6. Risograph

Imperfect print aesthetic: 2–3 spot colors, grain, halftone, slight misregistration.

- **Palette:** riso inks: fluorescent pink `#FF48B0`, blue `#0078BF`, red `#FF665E`, yellow `#FFE800`, teal `#00838A`, on paper `#F4EEE1`. Pick 2–3 max.
- **Type:** chunky grotesk or quirky display (Bricolage Grotesque, Syne, Space Grotesk)
- **Texture:** grain noise, halftone dots, overprint (multiply) where colors overlap, 1–3px offset between color layers
- **UI:** grain overlay on hero/cards, `mix-blend-mode: multiply` overlapping shapes, slightly offset duplicate headings for misregistration
- **CSS:** grain via SVG `feTurbulence` as a background-image at ~8–15% opacity · `mix-blend-mode: multiply;`
- **Poster/Card:** zine/gig-poster energy, flat scenes with sun circles, overlapping inks
- **Prompt keywords:** risograph print, grainy texture, two-color, spot color, halftone, misregistration, screen print, zine
- **Avoid:** more than 3 colors; smooth gradients; grain over small body text

## 7. Watercolor

Soft washes, bleeding edges, transparent layers, paper texture, light and airy.

- **Palette:** soft saturated washes (cyan `#4FC3E8`, magenta `#F06BA8`, amber `#F7B54A`, violet `#9B7FD4`) bleeding into white paper `#FBF8F3`
- **Type:** elegant serif or handwritten accent (Cormorant, Lora, Caveat for accents only)
- **UI:** watercolor PNG/WebP splashes as section backgrounds or behind headings, soft blurred blobs (`filter: blur(40px)`) as a CSS approximation
- **Poster/Card:** cityscapes, florals, portraits with reflections and drips; white space as part of the art
- **Prompt keywords:** watercolor painting, wet-on-wet, color bleeding, soft washes, paper texture, drips, reflections, vibrant pastel
- **Avoid:** placing text on busy wash areas; hard vector edges next to it

## 8. Oil Painting

Thick impasto brushwork, rich saturated color, visible texture, classical or impressionist.

- **Palette:** rich and warm: cadmium orange `#F2711C`, ultramarine `#1E3FA8`, crimson `#B3202A`, ochre `#D9A441`, deep teal `#0E5E6F`
- **Type:** classical serif (Playfair Display, EB Garamond, DM Serif Display)
- **UI:** rarely native; use as full-bleed hero art or gallery imagery with a dark scrim behind text
- **Poster/Card:** sunsets, harbors, landscapes, portraits; gilded or plain frame borders
- **Prompt keywords:** oil painting, impasto, thick palette-knife strokes, textured canvas, impressionist, vibrant sunset, Mediterranean
- **Avoid:** text directly on painted texture without a scrim/panel

## 9. Japanese Ink (Sumi-e)

Monochrome ink wash, expressive brush strokes, mist, asymmetry, emptiness as composition.

- **Palette:** sumi black `#111`, greys via dilution `#555` / `#999`, rice paper `#F2ECE2`, optional red seal `#B7282E`
- **Type:** quiet serif or brush-style accent (Noto Serif JP, Shippori Mincho, Zen Antique); vertical text as accent
- **UI:** generous negative space, brush-stroke SVG dividers, ink-splash hero art, a red seal stamp as logo/badge accent
- **Poster/Card:** mountains, waterfalls, pagodas, bamboo, cranes; subject off-center, mist fading into paper
- **Prompt keywords:** sumi-e, Japanese ink wash, monochrome brush painting, mist, mountains, pagoda, rice paper, ink splatter, red seal
- **Avoid:** filling the frame; adding color beyond a single red accent

## 10. Low-poly 3D

Faceted geometry, flat-shaded triangles, bright game-like color, cute isometric scenes.

- **Palette:** saturated naturals: grass `#7BC043`, water `#3AB7E0`, rock `#8E7CC3`, wood `#A0522D`, sunset `#FFB347`
- **Type:** rounded friendly sans (Nunito, Baloo 2, Fredoka)
- **UI:** isometric illustrations for onboarding, empty states, feature heroes; Three.js / Spline embeds for interactive heroes
- **Poster/Card:** isometric diorama (campsite, island, city block) on a soft gradient background
- **Prompt keywords:** low poly 3D, faceted, flat shading, isometric diorama, stylized game art, bright colors, soft lighting
- **Avoid:** mixing with photographic elements; using it for serious/financial tone

## 11. Vaporwave / Synthwave

80s–90s retro-futurism: neon magenta/cyan, sunset grids, palm trees, chrome type, VHS glow.

- **Palette:** magenta `#FF2E97`, cyan `#00E5FF`, purple `#7B2FF7`, deep navy `#120458`, sunset orange `#FF8A3D`
- **Type:** retro display (Monoton, Audiowide, Orbitron) or chrome italics for headings; clean mono for body
- **Shapes:** striped sun, perspective grid floor, palms, scanlines
- **UI:** dark gradient backgrounds, neon glow (`text-shadow: 0 0 8px #FF2E97, 0 0 24px #FF2E97;`), scanline overlay, gradient borders
- **CSS:** sun: `background: linear-gradient(#FFD319, #FF2E97);` masked with horizontal stripes via `repeating-linear-gradient`
- **Poster/Card:** city at dusk, road to horizon, sun behind skyline, purple haze
- **Prompt keywords:** synthwave, vaporwave, retrowave, neon, 80s, striped sunset, palm trees, purple and pink, outrun, car on road
- **Avoid:** glow on body text; using it where trust/seriousness matters

## 12. Memphis Design

80s Italian postmodern: clashing brights, squiggles, confetti patterns, terrazzo, geometric solids, playful chaos.

- **Palette:** hot pink `#FF5FA2`, turquoise `#21C1C1`, yellow `#FFD93D`, violet `#7B61FF`, black `#111`, white
- **Type:** chunky playful display (Rubik, Lilita One, Chango) with black outlines or offset shadows
- **Shapes:** squiggles, zigzags, dots, grids, triangles, half-circles, confetti patterns, black-and-white stripes
- **UI:** pattern backgrounds at low density, floating shape decorations around headings, colored offset shadows on cards
- **Poster/Card:** pedestal composition with geometric solids, a classical bust as a focal point, dense pattern backdrop
- **Prompt keywords:** Memphis design, 1980s postmodern, squiggles, confetti pattern, bold primary pastels, geometric shapes, playful
- **Avoid:** placing patterns behind text; overuse in data-heavy UI

## 13. Ornamental

Dense decorative patterning: scrolls, acanthus leaves, flourishes, damask, repeating motifs, rich color.

- **Palette:** deep navy `#14213D` or teal `#0F3B3A` base with gold `#D4A64A`, coral `#E07A5F`, sage `#7FB7A4`, cream `#F4E1C1`
- **Type:** classic serif or decorative display (Cinzel Decorative, Playfair, Cormorant SC)
- **UI:** seamless pattern as background of a single band or card back; ornamental corner flourishes on frames
- **CSS:** `background: url(pattern.svg) repeat; background-size: 240px;` · keep content on a solid panel above it
- **Poster/Card:** full-bleed pattern with a central framed title; packaging, invitations, premium card backs
- **Prompt keywords:** ornamental pattern, baroque flourishes, acanthus scrolls, damask, seamless repeat, gold filigree, dark background
- **Avoid:** patterns behind body text; using in dense UI

## 14. Botanical

Detailed flowers and leaves, often scientific-illustration inspired, with soft vintage backgrounds and gilded accents.

- **Palette:** leaf green `#3F6B4F`, lily cream `#F6EBD3`, violet `#6B4A8E`, gold `#C9A04E`, dusty teal `#8FB3B0`
- **Type:** refined serif with italics (Fraunces, Cormorant, Libre Caslon)
- **UI:** botanical illustrations cropped off the edges of sections, leaf line icons, soft cream backgrounds. Suits wellness, food, beauty, eco.
- **Poster/Card:** single specimen or bouquet centered, arch or panel background shapes, gold leaf touches
- **Prompt keywords:** botanical illustration, lilies, detailed flowers and leaves, vintage scientific print, gold leaf accents, soft teal background
- **Avoid:** clip-art flowers; too many species in one frame

## 15. Vintage Engraving

Fine crosshatch/line engraving like old banknotes, books and stamps; sepia, ornate frames.

- **Palette:** sepia ink `#3B2F23`, parchment `#E8DCC2`, faded brown `#8B6F4E`, optional oxblood `#6E1E1E`
- **Type:** old-style serif and slab (IM Fell, Playfair, Abril Fatface, Rye for Western accents)
- **UI:** engraved-style icons/illustrations for heritage brands, certificate-like borders, parchment backgrounds, guilloché patterns on "official" cards (receipts, badges, certificates)
- **Poster/Card:** subject inside an ornate oval or arch frame with corner flourishes; stamp/banknote layouts
- **Prompt keywords:** vintage engraving, crosshatching, etching, sepia, banknote style, ornate frame, 19th century illustration, woodcut
- **Avoid:** bright colors; low-res images where the fine lines blur

## 16. Dreamy Pastel

Soft, ethereal, fantasy: pastel gradients, clouds, glow, light sources, floating elements.

- **Palette:** lavender `#C8B6FF`, blush `#FFC8DD`, baby blue `#BDE0FE`, peach `#FFD6A5`, white glow `#FFFFFF`
- **Type:** soft rounded sans or delicate serif (Quicksand, Comfortaa, Cormorant)
- **UI:** pastel mesh gradients, soft glows, rounded-2xl cards, glassmorphism (`backdrop-filter: blur(16px); background: rgba(255,255,255,.4);`)
- **CSS:** mesh: layered `radial-gradient(at 20% 30%, #FFC8DD, transparent 50%), radial-gradient(at 80% 20%, #BDE0FE, transparent 50%), …`
- **Poster/Card:** clouds, stairways, floating islands, sunsets, florals
- **Prompt keywords:** dreamy pastel, ethereal, soft glow, cotton candy clouds, fantasy, floating, pink and lavender sky, magical
- **Avoid:** white text on pastel (fails contrast); use dark slate `#334155` text instead

## 17. Metallic Chrome

Liquid metal, high-gloss reflections, Y2K/futuristic 3D, cool and sleek.

- **Palette:** chrome greys `#E6E8EB` → `#8A9099` → `#2C2F33`, white highlights, optional cool tint (ice blue `#CFE3F5`)
- **Type:** wide/extended sans or chrome-effect display (Unbounded, Michroma, Syncopate); body stays plain
- **UI:** chrome-gradient headings, 3D chrome objects in heroes, metallic borders on premium cards
- **CSS:** `background: linear-gradient(180deg,#fff 0%,#9aa3ad 45%,#2c2f33 50%,#cfd6dd 100%); -webkit-background-clip: text; color: transparent;`
- **Poster/Card:** liquid chrome forms (hands, blobs, drops, type) on light grey, studio lighting
- **Prompt keywords:** liquid chrome, metallic, mirror finish, reflective 3D, Y2K, molten silver, studio lighting, light grey background
- **Avoid:** chrome on small text; muddy mid-grey gradients (keep a sharp horizon line in the gradient)

## 18. Holographic / Iridescent

Rainbow foil, prismatic light, oil-slick shifts, glassy refractions, cosmic.

- **Palette:** iridescent spectrum: `#FF6EC7`, `#7DF9FF`, `#B388FF`, `#FFF59D`, `#69F0AE` on dark space `#0B0B1A` or silver
- **Type:** futuristic sans (Space Grotesk, Sora, Orbitron)
- **UI:** holographic gradient borders, foil shine on hover for cards (like collectible cards), animated conic gradients
- **CSS:** `background: conic-gradient(from 0deg, #FF6EC7, #7DF9FF, #B388FF, #FFF59D, #69F0AE, #FF6EC7);` · animate `--angle` with `@property` for a shimmer
- **Poster/Card:** prismatic portrait or object, light rays, bubbles, glass ribbons, dark background
- **Prompt keywords:** holographic, iridescent, prismatic, rainbow foil, chromatic aberration, glass refraction, cosmic, futuristic portrait
- **Avoid:** using it everywhere; keep it to one hero or one card treatment

## 19. Geometric Abstract

Modern abstract composition of circles, triangles, arcs and blocks; gradient fills, gold lines, grain.

- **Palette:** teal `#1A9E9A`, coral `#F25C54`, pink `#E83F6F`, orange `#F28C28`, navy `#0E1A2B`, cream `#F3E9DC`, gold lines `#C9A24A`
- **Type:** clean geometric sans (Satoshi, General Sans, Manrope, Inter Tight)
- **UI:** abstract SVG compositions as hero art, section backgrounds, card headers; very compatible with product UI because it carries no figurative meaning
- **Poster/Card:** dense overlapping shapes with a few gradient spheres, thin gold lines, subtle grain
- **Prompt keywords:** geometric abstract art, overlapping circles and triangles, mid-century modern, gradient spheres, gold lines, grain texture
- **Avoid:** random shapes with no grid or focal point; too many colors (cap at 5–6)

## 20. Photorealistic Collage

Cut-and-paste mixed media: torn paper edges, photo fragments, classical statues, nature, surreal juxtapositions.

- **Palette:** taken from the photos; unify with a muted warm grade (cream `#EDE3D1`, terracotta `#B5563A`, sea blue `#2F5D7C`, stone `#BFB6A8`)
- **Type:** editorial serif + small mono captions (Instrument Serif, Playfair, DM Mono); cut-out "ransom" letters as accents
- **UI:** editorial heroes, about/story sections, campaign pages; torn-paper edge masks (`mask-image` with a torn SVG), tape/sticker details
- **Poster/Card:** layered fragments (portrait, eye, statue, sea, flowers, moon) with torn edges and shadows
- **Prompt keywords:** photorealistic collage, mixed media, torn paper edges, vintage photos, Greek statue, surreal, dreamy editorial, scrapbook
- **Avoid:** inconsistent lighting/grading across pieces; more than ~7 fragments

---

## Combining styles (safe pairings)

| Base (structure) | + Accent (surface) | Result |
|---|---|---|
| Bauhaus | Risograph | Grainy modernist poster |
| Geometric Abstract | Holographic | Futuristic tech hero |
| Minimal Line Art | Botanical | Calm wellness brand |
| Brutalism | Memphis | Loud neo-brutalist UI |
| Art Deco | Vintage Engraving | Heritage luxury label |
| Japanese Ink | Minimal Line Art | Zen editorial |
| Dreamy Pastel | Metallic Chrome | Y2K soft-tech |
| Photorealistic Collage | Risograph | Zine/editorial campaign |

## Applying a style: checklist

- [ ] Defined 4–6 color tokens for the style (bg, surface, ink, accent, accent-2, muted)
- [ ] Chose 1 display font + 1 body font
- [ ] Defined the shape language (radius, border weight, shadow type)
- [ ] Texture/pattern used only as background or decoration
- [ ] Body text contrast ≥ 4.5:1, large text ≥ 3:1
- [ ] Respects `prefers-reduced-motion` for any shimmer, glow or parallax
- [ ] Tested at mobile width (posters/cards: check 1:1, 4:5, 9:16 and 1.91:1 OG crops)

### Common card/poster sizes

| Format | Size (px) | Ratio |
|---|---|---|
| OG / link preview | 1200 × 630 | 1.91:1 |
| Instagram / Facebook square | 1080 × 1080 | 1:1 |
| Instagram portrait | 1080 × 1350 | 4:5 |
| Story / Reel / TikTok | 1080 × 1920 | 9:16 |
| Poster (A-series, print) | 2480 × 3508 @300dpi (A4) | 1:√2 |
