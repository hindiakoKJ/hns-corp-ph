---
page: /build
title: Build Log — How HNScorpPH Builds
description: Engineering notes from HNScorpPH. How we built OR sequential numbering, offline POS, RBAC, BEACON alerts, and privacy-first architecture.
last_updated: 2026-04-28
status: draft
---

# Build Log — Index Page Copy

---

## Hero

**Label:** Engineering · Open Notes

**H1:**  
How we build.

**Sub:**  
Notes from building Clerque and Steady. Architecture decisions, tradeoffs, things we'd do differently. Written for developers who want to understand the thinking, not just the output.

---

## Index of Entries

*(Each entry gets its own page at /build/[slug])*

---

### Entry 1: OR Sequential Numbering for RR 18-2012  
`/build/or-sequential-numbering`

BIR's Revenue Regulations No. 18-2012 requires that computerized systems generate sequential official receipts with no gaps and no rewrites. Here's how Clerque handles this at the service layer: series registration, auto-increment with Prisma, void handling that preserves series integrity, and why we chose not to use a database sequence for this.

**Tags:** Clerque · BIR · NestJS · Prisma

---

### Entry 2: Dexie IndexedDB Write-Through Cache — Not a PWA, Just Honest Offline  
`/build/offline-pos-dexie`

Clerque's POS works offline. It's not a Progressive Web App (no service worker, no manifest). It's a write-through cache using Dexie 4 (IndexedDB). Here's why we went this route, what the tradeoffs are, and what "offline" actually means for an MSME running on a shared wi-fi router.

**Tags:** Clerque · Offline · Dexie · PWA

---

### Entry 3: Multi-Tenant RBAC — 11 Roles and Why We Needed Them  
`/build/rbac-11-roles`

Clerque has 11 roles. That's a lot for an MSME app. Here's why: the SOD (Separation of Duties) requirements for AP/AR mean you can't have the same person who approves an expense also the one who pays it. We walk through how roles are structured, how BusinessType gates features, and how JwtAuthGuard enforces it all at the route level.

**Tags:** Clerque · RBAC · NestJS · Auth

---

### Entry 4: Accounting Period Lock — Service Layer, Not DB Triggers  
`/build/period-lock-service-layer`

Once an accounting period closes, no entries can be backdated. We enforce this at the NestJS service layer, not with a database trigger. Here's the decision: DB triggers are hard to test, hard to trace, and invisible to application developers. A service-layer check is explicit, testable, and part of the code review process.

**Tags:** Clerque · Accounting · NestJS · Prisma

---

### Entry 5: BEACON — One Tap, GPS + Weather + SMS + Push  
`/build/steady-beacon`

Steady's BEACON alert does four things at once: reads GPS, calls OpenWeather, sends push via expo-server-sdk, and fires SMS via Expo's SMS module. Here's the sequence, why we chose client-side SMS over a server-side Twilio integration, and how the household privacy model affects who gets the alert.

**Tags:** Steady · Expo · NestJS · GPS · Notifications

---

### Entry 6: Privacy-First Schema — Why Steady Stores No Full Names  
`/build/steady-privacy-schema`

Steady's Prisma schema has no `fullName` field on `User`. It's not a GDPR policy — it's an architectural constraint. Here's why: when you design for the minimum viable personal data footprint, you can't accidentally leak what you never collected. Walk through the Household → User → Patient → SeizureLog model and the choices behind each field.

**Tags:** Steady · Privacy · Prisma · Architecture

---

### Entry 7: Cron-Based AccountingEvent Processor — Why Not BullMQ  
`/build/cron-accounting-events`

Every 60 seconds, a NestJS `@Cron` job processes pending AccountingEvents — journal entries that need to be posted from POS, AP, and AR transactions. Here's why we chose a simple cron over a full queue system like BullMQ for this use case, and what we'd change if transaction volume grows.

**Tags:** Clerque · NestJS · Cron · Accounting

---

## Subscribe / Follow

This log is updated when something ships or when we make a decision worth documenting. No newsletter — follow via RSS (coming) or check back.

**Contact:** hnscorpph@gmail.com
