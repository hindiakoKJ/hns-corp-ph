# Content Changes Log
> Last updated: 2026-04-28  
> Documents every inaccurate claim found in the live site, what replaced it, and why.  
> Source of truth for all edits made during the honesty audit.

---

## Removed Claims

| Location | Old Claim | Why Removed |
|----------|-----------|-------------|
| Hero trust strip | `"SEC Registered (OPC)"` | SEC OPC filing is in progress. Company is not yet registered. |
| Hero trust strip | `"BIR CAS-Ready"` | CAS accreditation has not been filed. Clerque is built to CAS specifications. |
| Compliance Ticker | `"SEC Registered (OPC)"` | Same as above. |
| Compliance Ticker | `"BIR CAS-Ready"` | Same as above. |
| Compliance Ticker | `"GCash & Maya Integrated"` | There is no live GCash or Maya API. Clerque tracks collections as payment method labels. |
| Compliance Ticker | `"99.9% Uptime SLA"` | No SLA has been established. Fabricated metric. |
| Compliance Ticker | `"Offline-First PWA"` | Not a Progressive Web App. No service worker, no manifest. It is a Dexie IndexedDB write-through cache. |
| EcosystemSection cards | `"CAS-Ready"` | Same as BIR CAS note above. |
| EcosystemSection cards | `"99.9% uptime backed by enterprise SLA"` | No SLA. Fabricated. |
| EcosystemSection cards | `"Mobile-Native PWA"` / `"Install to homescreen. No app store needed."` | Not a PWA. Reframed as "Mobile-Ready" with honest Play Store context. |
| EcosystemSection — Clerque tags | `'Payroll'` tag | Payroll computation engine is not shipped. TimeEntry + PayRun schema exist; no salary engine or payslip generation. |
| WorkflowSection | `"Accept digital payments natively. No third-party plugins needed. Instant settlement built in."` | Completely inaccurate. No live GCash/Maya API. No real-time confirmation. No settlement engine. |
| CTABanner | `"Join hundreds of Filipino MSMEs already running on Clerque."` | No clients yet. Fabricated social proof. |
| Footer | `"Powering Philippine MSMEs since 2024."` | No clients. No confirmed date. |
| ROADMAP — HNScorpPH item | `"Company incorporated as a One Person Corporation"` | SEC registration is not done. |
| ROADMAP — Clerque item | `"payroll"` and `"GCash & Maya payments"` in description | Payroll computation not shipped. GCash/Maya is collection tracking, not payments. |
| ROADMAP — Steady item | Status `done` / label `Live` | Steady is not live. Currently in development. |
| ROADMAP — entire "Building" phase | `"Clerque v2"` and `"Steady v2"` as `in-progress` | No active v2 build happening. Both items were fabricated. |
| BrandSheet — tagline | `"payroll"` in Clerque description | Not shipped. |
| BrandSheet — tagline | `"Log seizures, track triggers"` in Steady description | Trigger tracking is scaffolded (notes field only); no structured UI. |
| BrandSheet — tagline | Steady described as if live | Steady is not live. |
| BrandSheet — footer | `"Philippine-registered company"` | Not yet registered. |
| BrandSheet — footer | `"Two products live."` | Only Clerque is live. Steady is coming soon. |
| BrandSheet — heading | `"Clerque and Steady are the first to ship."` | Steady has not shipped. |
| EcosystemHero — Steady | `status: 'live'` → green "Live" dot | Steady is not live. |
| EcosystemHero — Clerque kind | `"POS, ledger, payroll"` | Payroll computation not shipped. |

---

## Replacements

| Location | Old | New | Basis |
|----------|-----|-----|-------|
| Hero trust strip | `"BIR CAS-Ready"` | `"BIR CAS accreditation in progress"` | Honest status. |
| Hero trust strip | `"SEC Registered (OPC)"` | `"Filipino-built"` | True and relevant. |
| Hero trust strip | `"GCash & Maya"` | `"GCash & Maya collection tracking"` | Accurate description of what exists. |
| Compliance Ticker | Full rewrite | `OR sequential numbering · Z-Read & X-Read · Offline-capable POS · PFRS-aligned COA · Filipino-built` | All verified SHIPPED features. |
| EcosystemSection BIR card | `"CAS-Ready"` | `"Built to CAS specifications — sequential ORs, immutable Z-Read/X-Read logs... CAS accreditation in progress."` | Accurate. |
| EcosystemSection Cloud card | SLA claim removed | `"Hosted infrastructure built for the Philippine market."` | No SLA to cite. |
| EcosystemSection Mobile card | `"Mobile-Native PWA"` | `"Mobile-Ready"` + Play Store mention | Honest framing, forward-looking. |
| EcosystemSection Clerque tags | `['POS', 'Payroll', 'Accounting', 'BIR']` | `['POS', 'Accounting', 'BIR Forms', 'AP / AR']` | Only shipped features. |
| EcosystemSection Steady card | No status shown | `"Coming Soon"` badge + `"App Store & Google Play"` label | Honest. |
| WorkflowSection GCash card | `"Accept digital payments... Instant settlement"` | `"Record and reconcile GCash and Maya collections alongside cash."` | Accurate. |
| WorkflowSection Support card | `"Filipino support team. Real humans."` | `"Direct Local Support. You deal directly with the people who built it."` | Solo founder; honest. |
| ROADMAP — HNScorpPH | `"Company incorporated"` | `"Platform infrastructure live. SEC OPC filing in progress."` | Accurate. |
| ROADMAP — Clerque | `"payroll"` + `"GCash & Maya payments"` | Honest feature list: POS, OR numbering, Z-Read/X-Read, BIR forms, AP/AR | Matches SHIPPED list. |
| ROADMAP — Steady | `done`/`Live` | `coming-soon`/`Coming Soon` | Steady is not live. |
| ROADMAP — "Building" phase | Removed entirely | New "Next" phase: Clerque on Google Play + Steady | Replaces fake progress with real upcoming milestones. |
| ROADMAP — "Later" phase | `Product 3` + `Product 4` | `BIR CAS Accreditation` + `Product 3` | More honest and specific. |
| CTABanner | `"hundreds of Filipino MSMEs"` | `"Be one of the first Filipino MSMEs to run on it."` | Honest early-adopter framing. |
| Footer tagline | `"Powering Philippine MSMEs since 2024."` | `"Software built for the Philippines."` | No clients, no date to cite. |
| BrandSheet Clerque tagline | Included "payroll" + "GCash & Maya payments" | POS, BIR-compliant accounting, OR numbering, offline-capable POS | Accurate shipped features. |
| BrandSheet Steady tagline | Implied live; "trigger tracking" | Seizure logging, BEACON alerts, PDF reports. "Coming soon to App Store and Google Play." | Accurate. |
| BrandSheet HNS tagline | Implied incorporation complete | `"SEC OPC filing in progress."` | Accurate. |
| BrandSheet footer col 1 | `"Philippine-registered company"` | `"SEC OPC filing in progress."` | Accurate. |
| BrandSheet footer col 2 | `"Two products live."` + `"payroll"` | `"One product live. One coming soon."` + corrected Clerque description | Accurate. |
| BrandSheet heading | `"Clerque and Steady are the first to ship."` | `"Clerque is live, Steady is coming soon."` | Accurate. |
| EcosystemHero Steady | `status: 'live'` (green dot) | `status: 'coming-soon'` (sky blue dot) | Not live. |
| EcosystemHero Clerque kind | `"POS, ledger, payroll"` | `"POS, accounting, BIR"` | Payroll not shipped. |

---

## Flagged for Owner Review

| Item | Flag | Current treatment |
|------|------|-------------------|
| **GCash & Maya** | The site now says "collection tracking" — no live API. Confirm this is acceptable before next release, or confirm if a live API has since been built. | Treated as tracking-only. |
| **Payroll** | Computation engine in development. Site removes all payroll claims. Add it back only when the salary engine ships. | Removed from all copy. |
| **"Local Support, Always"** | Solo founder. Changed to "direct support from the people who built it." Confirm you're comfortable owning support expectations. | Copy updated to reflect solo. |
| **CTA copy** | `"Be one of the first Filipino MSMEs to run on it."` — implies very early stage. Confirm this framing is intentional. | Early-adopter language. |

---

## Files Changed

| File | Changes |
|------|---------|
| `app/page.tsx` | Hero trust strip, Compliance Ticker, EcosystemSection cards + tags + Steady card, WorkflowSection GCash and Support cards, full ROADMAP rewrite, CTABanner, Footer tagline |
| `components/brand/EcosystemHero.tsx` | Steady status `live` → `coming-soon`; Clerque kind; added `coming-soon` ProductCard variant |
| `components/brand/BrandSheet.tsx` | All three taglines; footer columns; section heading |
