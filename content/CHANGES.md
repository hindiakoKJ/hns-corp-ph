# Content Changes Log
> What's different from the current site and why.

---

## Removed Claims

| Old Claim | Why Removed |
|-----------|-------------|
| "SEC Registered (OPC)" | HNScorpPH OPC filing is in progress, not yet registered. |
| "BIR CAS-Ready" / "BIR CAS-Accredited" | System is built to CAS specifications; accreditation has not been filed with BIR. |
| "GCash & Maya integrated" | No live API. Clerque tracks collections as payment methods; no real-time payment confirmation. |
| "Accept GCash and Maya payments" | Misleading. Clerque records collections, not processes payments. |
| Uptime SLA (e.g. "99.9% uptime") | No SLA established. Fabricated metric. |
| Transaction count / customer count metrics | No confirmed data. Fabricated social proof. |
| Payroll as a live feature | PayRun schema exists; computation engine is in development, not shipped. |
| "PWA" / Progressive Web App | No service worker, no manifest. It's a Dexie IndexedDB write-through cache. |
| Steady: "medication reminders" | Only a free-text notes field exists; no scheduler or notification system. |
| Steady: "trigger tracking" | Only a free-text notes field; no structured UI or correlation analysis. |
| Steady: "bilingual" | Zero translations implemented. Language type in i18n, no strings. |
| EndorsementLockup / repetitive product sections | Removed redundancy — same products shown 4× on one page. Replaced with RoadmapSection. |

---

## New Claims (Added)

| New Claim | Basis |
|-----------|-------|
| "Built to CAS specifications" | OR sequential numbering, Z-Read/X-Read, Books of Account — all implemented per RR 18-2012. |
| "Tracks GCash and Maya collections" | Clerque records GCash/Maya as payment methods and tracks settlement amounts. Accurate. |
| "Offline-capable POS (write-through cache, syncs on reconnect)" | Dexie 4 IndexedDB implementation confirmed in codebase. |
| "SEC OPC filing in progress" | Accurate legal status. |
| Steady: BEACON sends SMS + push + GPS simultaneously | Confirmed in seizure-logs BEACON endpoint + notifications service. |
| Steady: Bystander Mode requires no login | Confirmed. `/bystander` route is public in Expo Router. |
| Steady: Neurologist PDF includes 6-month chart + full log with weather | Confirmed in `lib/pdf.ts`. |
| Steady: Passive detection is supplementary, not a medical device | Medical disclaimer present in codebase. Reflected in all copy. |
| Medication reminders / trigger tracking / bilingual = "coming soon" | Active development (Steady v2). Honestly disclosed. |
| Payroll computation = "in development" | TimeEntry + PayRun schema exists; computation engine in active development (Clerque v2). |
| BIR CAS accreditation = "in progress" | Filing is pending. Disclosed on Clerque product page. |

---

## Structural Changes

| Old Structure | New Structure |
|---------------|---------------|
| Single scroll page only | Multi-page site: /, /clerque, /steady, /for-msmes, /build, /roadmap, /about, /ideas |
| No content strategy | Content architecture in `content/architecture.md` |
| No editorial backlog | 30 blog topics + 15 product concepts in `content/backlog.md` |
| EndorsementLockup (repetitive) | Replaced with RoadmapSection showing phases: Now / Building / Next |
| Generic design-system copy in BrandSheet footer | Real company copy: Philippines origin, two products live, brand commitment |

---

## Tone Changes

| Old Tone | New Tone |
|----------|----------|
| Marketing superlatives ("enterprise-grade," "cutting-edge") | Specific and functional. What the feature does, not how impressive it is. |
| Lead with features | Lead with the problem the user stops having |
| Clerque and Steady same voice | Clerque = confident/practical; Steady = gentle/human; HNScorpPH = composed/builder |
| Opaque about product gaps | Honest about what's in progress and what's planned |
| No acknowledgment of limitations | Explicit "honest notes" on GCash, offline mode, CAS accreditation status |
