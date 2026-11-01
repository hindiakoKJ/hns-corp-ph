# HNScorpPH Landing Page — Session Instructions

This session is for the **HNScorpPH landing page only**.
Repo: `hindiakoKJ/hns-corp-ph` at `E:\AI Projects\hns-corp-ph`

> Clerque web app lives in the `app-suite` monorepo — separate session, separate repo.
> Do not touch anything outside this directory.

---

## Read These First

- `C:\Users\user\.claude\projects\E--AI-Projects\memory\user_profile.md` — working style and preferences
- `C:\Users\user\.claude\projects\E--AI-Projects\memory\feedback.md` — how to work with this user
- `C:\Users\user\.claude\projects\E--AI-Projects\memory\project_clerque.md` — for brand/product context only (what Clerque and Steady actually are)

---

## Stack

- **Framework:** Next.js 15, App Router
- **Styles:** `app/home.css` (site-wide design system, scoped under `.hs-root`, `hs-` classes) + Tailwind CSS v4 on the legal pages
- **Fonts (root layout):** DM Serif Display (`--font-display`, headlines) · Cormorant Garamond (`--font-cormorant`, running copy) · Hanken Grotesk (`--font-hanken`, small UI)
- **Logos:** brand marks in `public/logos/`

---

## Design language: Oil Painting (since Nov 2026)

A gallery at dusk: plum-night painted canvas, gold-leaf frames, cadmium-orange actions.
Reference for all 20 explored styles: `.claude/skills/design-styles/SKILL.md`, live at `/styles`.

| Token (`home.css`) | Value | Usage |
|---|---|---|
| `--bg` | `#140E26` | Plum night base |
| `--txt` / `--head` | `#F6EEE2` / `#FBF4E8` | Cream text / headlines |
| `--mut` | `#D2C3AE` | Secondary copy |
| `--gold` / `--gold-hi` | `#F2C66D` / `#FFE2A0` | Gold leaf: eyebrows, links, numbers |
| `--orange` | `#F2711C` | Primary buttons (`.hs-btn-indigo`, name kept for compatibility) |
| `--frame` | gold gradient | Gold frames (hero directory, CTA, app shots, featured plan) |

Old token names (`--indigo`, `--lav`) are aliased to the new palette.
Paintings are pre-rendered images in `public/art/` (`harbor.jpg`, `harbor-1280.jpg`, `canvas-night.jpg`, `canvas-tile.png`);
regenerate them with `node scripts/paint-art.js`. Don't use live SVG turbulence filters on the real site (too heavy for phones).

---

## Page Sections (in order)

1. `Navbar` — sticky, dark, hamburger on mobile, anchor links + "Launch Clerque" CTA
2. `Hero` — dark (`#020817`), badge, H1, subtitle, two CTAs
3. `ComplianceTicker` — scrolling credentials strip
4. `EcosystemSection` — products bento grid (`id="ecosystem"`)
5. `WorkflowSection` — Why Clerque, 3 feature cards
6. `EcosystemHero` — brand architecture (parent → products)
7. `RoadmapSection` — Now / Building / Next phases
8. `BrandSheet` — 3 brand cards + company story
9. `CTABanner` — dark, "Start with Clerque" + "Contact Sales"
10. `Footer` — logo, links, copyright

---

## Key Links

| Element | URL |
|---|---|
| Login / Visit App / Start with Clerque | `https://clerque.hnscorpph.com/login` |
| Partner with HNScorp | `mailto:support@hnscorpph.com?subject=Partnership%20Inquiry` |
| Contact Sales | `mailto:support@hnscorpph.com?subject=Sales%20Inquiry` |
| Privacy / Terms | `#` (deferred — no policy pages yet) |

---

## Dev Server

Port `3002`. Start via:
```
npm run dev
```
Or use the `hns-landing` entry in `E:\AI Projects\.claude\launch.json`.
