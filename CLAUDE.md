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
- **Styles:** Tailwind CSS v4 (`@theme inline` in `globals.css`)
- **Animation:** Framer Motion (`useInView`, `motion`, stagger/fadeUp variants)
- **Fonts:** Inter Tight (via `next/font/google`)
- **Logos:** PNG icons in `public/logos/` — one file per brand (`hns-icon.png`, `clerque-icon.png`, `steady-icon.png`)

---

## Design Tokens (globals.css)

| Token | Value | Usage |
|---|---|---|
| `hns-600` | `#0891B2` | HNScorpPH cyan |
| `clerque-600` | `#4F46E5` | Clerque indigo |
| `steady-600` | `#0D9488` | Steady teal |
| `paper` | `#FAFAF9` | Body background |
| `sand` | `#F5F0E8` | Alternate section bg |
| `ink` | `#0F172A` | Primary text |

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
| Partner with HNScorp | `mailto:hnscorpph@gmail.com?subject=Partnership%20Inquiry` |
| Contact Sales | `mailto:hnscorpph@gmail.com?subject=Sales%20Inquiry` |
| Privacy / Terms | `#` (deferred — no policy pages yet) |

---

## Dev Server

Port `3002`. Start via:
```
npm run dev
```
Or use the `hns-landing` entry in `E:\AI Projects\.claude\launch.json`.
