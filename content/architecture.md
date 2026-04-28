# HNScorpPH Website — Content Architecture
> Written: 2026-04-28  
> All copy must comply with discovery-notes.md. No claim goes on the site unless it's in the SHIPPED section.

---

## Site Map

```
hnscorpph.com/
├── /                    ← Home (single scroll page, current)
├── /clerque             ← Clerque product page
├── /steady              ← Steady product page
├── /for-msmes           ← Why local businesses need this
├── /build               ← Engineering / Build log
├── /roadmap             ← What's live, what's building, what's next
├── /about               ← Company, founder, mission
└── /ideas               ← Future possibilities (transparent speculation)
```

---

## Page Briefs

---

### `/` — Home

**Purpose:** First impression. Orient the visitor. Two audiences: business owners (Clerque) and individuals/caregivers (Steady). Make the parent brand legible without drowning the products.

**Tone:** Composed. Builder-grade. "We build things that work in the Philippines."

**Sections (in order):**
1. **Navbar** — HNScorpPH mark + wordmark. Links: Products, Build Log, Roadmap, About. CTA: "Open Clerque"
2. **Hero** — Dark. One sentence that says what HNScorpPH is. Not the products — the *mission*. Sub: Two products. One for business, one for health.
3. **Compliance Strip** — Scrolling ticker: BIR CAS specs · GCash & Maya tracking · OR RR 18-2012 · PFRS Chart of Accounts · Offline-capable · Privacy-first · Free to families
4. **Products Grid** — Two cards: Clerque (business) + Steady (health). No feature lists. Just the problem each one solves + CTA.
5. **What We're Building** — 3 items, honest: what's live, what's in progress, what's planned. Tie to /roadmap.
6. **Brand Architecture** — EcosystemHero. HNScorpPH parent → Clerque → Steady. One mark, multiple products.
7. **Company** — BrandSheet. Founders build in the Philippines, for the Philippines.
8. **CTA Banner** — Dark. "Start with Clerque." + "Contact us"

**Content file:** `content/home.md`

---

### `/clerque` — Clerque Product Page

**Purpose:** Convince an MSME owner that Clerque is the right tool. Lead with what they stop doing (manually calculating VAT, reconciling cash manually, worrying about BIR audit readiness). Then show what they get.

**Tone:** Confident. Practical. Direct. Like talking to a tindero who has wasted years on spreadsheets.

**Sections (in order):**
1. **Hero** — Dark. Problem statement: "You're running your business on receipt pads and spreadsheets. That's a BIR audit waiting to happen."
2. **Pain → Solution** — 3 pain cards → 3 Clerque solutions (POS + BIR forms + AP/AR)
3. **Feature Breakdown** — Honest list of what's live: POS, OR numbering, Z-Read, BIR forms, Books of Account, AP, AR. No scaffolded features.
4. **Offline First** — "Works when your internet doesn't." Explain the Dexie cache model honestly: local write-through, syncs on reconnect. Don't call it a PWA.
5. **GCash / Maya** — "Track collections from GCash and Maya." Honest: no live API, you record collections manually. Frame as organized tracking, not payment processing.
6. **BIR Compliance** — "Built to CAS specifications." Honest: accreditation in progress. What it means: OR series, immutable logs, prescribed forms.
7. **Pricing** — Defer or say "contact us." Don't publish without user confirmation.
8. **CTA** — "Open Clerque" → login URL

**Content file:** `content/clerque.md`

---

### `/steady` — Steady Product Page

**Purpose:** Reach people living with epilepsy and their caregivers. Not a feature list. A conversation. What does it feel like to have Steady vs. not have it?

**Tone:** Gentle. Human. Calm. "We built this for people who are scared, not for investors."

**Sections (in order):**
1. **Hero** — Soft, not dark. "Epilepsy is unpredictable. Your safety plan doesn't have to be." Free. No ads. No subscription.
2. **The Problem** — Living with epilepsy means living with uncertainty. Logging seizures manually, hoping caregivers are nearby, trying to remember what the neurologist said six months ago.
3. **What Steady Does** — 4 cards: Log it, Alert them, Show the doctor, Know when it might happen. Each one honest about what's real (logging is live; detection is supplementary; reminders are coming).
4. **BEACON** — The emotional core. "One tap. Everyone who needs to know, knows." How it works: GPS, contacts, simultaneous SMS + push.
5. **Bystander Mode** — "Your phone can help a stranger." Public. No login. First-aid guide.
6. **Privacy Promise** — No full names. Phone numbers optional. No advertising. It's free.
7. **PDF for your doctor** — "Bring a real report to your neurologist, not a memory."
8. **What's Coming** — Honest. Medication reminders and trigger tracking are in progress. Bilingual support is planned.
9. **CTA** — Get the app (EAS / App Store link when available). Or: "For caregivers."

**Content file:** `content/steady.md`

---

### `/for-msmes` — For MSMEs Hub

**Purpose:** Education hub for Filipino MSME owners. Not a product pitch — genuine help. BIR rules, cash flow basics, why offline matters, GCash settlement tips. Builds trust. Leads to Clerque.

**Tone:** Mentor. Practical. Filipino-aware. "Here's what we know. Use it."

**Sections (in order):**
1. **Intro** — "Most MSME advice is written for big companies. This is written for you."
2. **BIR Basics** — What is CAS? What forms do you need? What's OR sequential numbering?
3. **GCash / Maya for Business** — How to track collections. Why it matters for BIR.
4. **Offline-first business** — Why your POS needs to work without internet. Power cuts, signal drops, dead Wi-Fi.
5. **Accounting you can actually do** — AP, AR, COA — explained for non-accountants.
6. **Resources** — Link to relevant BIR RRs (external). Link to Clerque.

**Content file:** `content/for-msmes.md`

---

### `/build` — Engineering / Build Log

**Purpose:** Transparency. Show the work. Attract developers who want to understand what HNScorpPH builds and how. Also builds credibility with technical buyers.

**Tone:** Engineering. Direct. No buzzwords.

**Entries (initial batch — to be drafted in backlog):**
- How we built OR sequential numbering for RR 18-2012
- Dexie IndexedDB write-through cache: not a PWA, just honest offline
- Multi-tenant RBAC: 11 roles and why we needed them
- Prisma period lock: no DB triggers, service layer only
- How Steady's BEACON works: Expo SDK + GPS + OpenWeather in one tap
- Privacy-first schema: why Steady stores no full names by design

**Content file:** `content/build-log.md` (index) + `content/build/` (individual entries)

---

### `/roadmap` — Roadmap

**Purpose:** Honest, public view of what's live, what's being built, what's planned. No dates unless confirmed. No vaporware.

**Tone:** Straightforward. Builder. "Here's where we are."

**Phases:**
- **Now (Live):** HNScorpPH website, Clerque v1, Steady v1
- **Building:** Clerque v2 (payroll engine, 2FA, BIR Form 2307), Steady v2 (medication reminders, trigger tracking, bilingual)
- **Next:** Product 3 (unnamed — no details until confirmed), BIR e-filing API when it's real

**Rule:** Nothing enters "Building" unless work has actually started in the codebase.

**Content file:** `content/roadmap.md`

---

### `/about` — About

**Purpose:** Who is HNScorpPH? Who built this? Why?

**Tone:** Personal. Direct. Filipino. Not a corporate bio.

**Sections:**
1. **The company** — What HNScorpPH OPC is. Solo-founded. Philippines. SEC OPC filing in progress.
2. **Why we build** — Filipino businesses are underserved by software. Foreign tools aren't built for BIR. Health tech ignores families who can't afford subscriptions.
3. **The products** — Two live. More coming.
4. **Contact** — Email. No corporate pretense.

**Content file:** `content/about.md`

---

### `/ideas` — Future Possibilities

**Purpose:** Transparent speculation. Ideas the founder is thinking about — not committed, not roadmap, just public thinking. Shows ambition without false promises.

**Tone:** Curious. Builder. "What if."

**Rule:** Every item is prefaced with "We're thinking about" or "This is an idea, not a commitment."

**Content file:** `content/ideas.md`

---

## Navigation Structure

**Primary nav:** Products (dropdown: Clerque, Steady) · For MSMEs · Build · Roadmap · About  
**CTA (sticky):** "Open Clerque"  
**Mobile:** Hamburger. Same links collapsed.  
**Footer:** Products · Build Log · Roadmap · About · Contact

---

## Phase 2 → Phase 3 Handoff

Each `content/*.md` file follows this format:

```md
---
page: /clerque
title: <SEO title>
description: <meta description>
last_updated: 2026-04-28
status: draft | review | approved
---

[copy here]
```

Copy should be written as final prose, not bullet points, so it can be dropped into components with minimal editing.
