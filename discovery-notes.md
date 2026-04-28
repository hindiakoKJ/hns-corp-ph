# HNScorpPH — Discovery Notes
> Written: 2026-04-28  
> Purpose: Ground truth for all website content. Every claim on hnscorpph.com must trace back to this file.  
> Rule: If it isn't in this file as SHIPPED, don't market it.

---

## 1. Clerque

**Repo:** `E:\AI Projects\app-suite`  
**Stack:** Next.js (App Router) · NestJS 11 · Prisma 6 · PostgreSQL · Turborepo monorepo  
**Hosting:** Vercel (web) + Railway (API + DB)  
**URL:** `https://clerque.hnscorpph.com`

### 1.1 Feature Classification

#### ✅ SHIPPED — in production, code fully implemented

| Feature | Notes |
|---------|-------|
| **POS Terminal** | Full offline-capable terminal. Multi-tender: CASH, GCASH, MAYA, QR_PH. Modifiers, discounts, promotions engine. Void workflow with manager approval. Shift management (open/close). |
| **OR Sequential Numbering** | Complies with RR No. 18-2012. Immutable, auto-incremented per series. Cannot be reused or skipped. |
| **Z-Read / X-Read** | End-of-day summary (Z) and mid-shift snapshot (X). Immutable audit logs; locked at close. |
| **BIR Forms** | 2550Q (quarterly VAT), 1701Q (income tax), 2551Q (percentage tax) — generated as downloadable forms. EIS JSON export (file-only; no live BIR API). |
| **EWT / SAWT Alphalist** | Expanded withholding tax computation. SAWT alphalist generated per quarter. |
| **Books of Account** | Excel export via ExcelJS. General Journal, General Ledger, Sales Book, Purchase Book. |
| **Chart of Accounts** | 186 accounts seeded per Philippine PFRS. Custom accounts supported. |
| **Journal Entries** | Full double-entry. Manual and auto-posted (from POS, AP, AR events). |
| **Accounting Period Lock** | Period close enforced at service layer. No backdating after lock. Hard lock at end of fiscal year. |
| **Cron Event Processor** | AccountingEvent queue processed every 60s via NestJS `@Cron`. No DB triggers. |
| **AP Module** | Vendor master. Expense approval workflow. SOD (separation of duties) enforced in code. AP aging report. |
| **AR Module** | Customer master. Credit terms. Invoice tracking. AR aging report. |
| **GCash / Maya Payments** | Payment method labels and settlement tracking only. **No live payment API.** User manually records collections. |
| **Payroll (Schema)** | TimeEntry + PayRun models exist. Payroll data can be recorded. |
| **Multi-tenant RBAC** | 11 roles. Subscription tiers gate features. BusinessType is primary feature gate. |
| **Auth** | JWT (15m access / 7d refresh). Account lockout after failed attempts. Password reset via Resend email. |
| **Document Attachments** | Polymorphic — attach files to any record type. |
| **Promotions Engine** | Time-of-day, day-of-week, hour-based promotion rules. |

#### ⚠️ SCAFFOLDED — code exists, not fully functional

| Feature | What Exists | What's Missing |
|---------|-------------|----------------|
| **GCash / Maya API** | Payment labels, settlement tracking | No live API integration. No real-time payment confirmation. |
| **Payroll Computation** | TimeEntry + PayRun schema | No salary computation engine. No payslip generation. |
| **Offline Mode** | Dexie 4 IndexedDB write-through cache | Not a true PWA. No service worker. No background sync. Offline = local read/write; sync happens on reconnect. |
| **2FA** | `enable2fa` fields on User model | No UI, no API endpoint, no TOTP implementation. |

#### ❌ NOT SHIPPED — schema-only or mentioned in planning

| Feature | Status |
|---------|--------|
| BIR Form 2307 | Schema exists; no generator |
| Live BIR e-filing API | Not started |
| Multi-currency / FX engine | Not started |
| T&E (Travel & Expense) OCR | Not started |
| WhatsApp integration | Not started |

### 1.2 BIR Compliance — Honest Assessment

- Clerque is **built to CAS (Computerized Accounting System) specifications** — sequential ORs, immutable logs, prescribed form outputs.
- **BIR CAS accreditation has not been filed.** The accreditation process requires submission to the BIR RDO and inspection.
- Safe claim: *"Built to CAS specifications"* or *"CAS-ready architecture"*
- Do NOT claim: *"BIR CAS-Accredited"* or *"BIR Certified"*

### 1.3 GCash / Maya — Honest Assessment

- Clerque records GCash and Maya as **payment methods** and tracks settlements against them.
- There is **no live API integration** with GCash or Maya. No QR code generation. No real-time confirmation.
- Safe claim: *"Tracks GCash and Maya collections"*
- Do NOT claim: *"GCash and Maya integrated"* or *"Accept GCash and Maya payments"*

### 1.4 Company — Honest Assessment

- HNScorpPH OPC is **in the process of SEC filing**. It is not yet SEC-registered.
- Do NOT use: *"SEC Registered (OPC)"* anywhere on the site.
- Safe claim: *"SEC OPC filing in progress"* or omit legal status entirely.

---

## 2. Steady

**Repo:** `E:\AI Projects\Neuro Guard`  
**Stack:** Expo / React Native (55.0) + Expo Router · NestJS API · PostgreSQL + Prisma · Turborepo monorepo  
**Hosting:** Railway (API) + Vercel (landing) + EAS (mobile builds)  
**Status:** Early production (v1.0.0). Core features live. Some scaffolding remains.

### 2.1 Feature Classification

#### ✅ SHIPPED — in production, code fully implemented

| Feature | Notes |
|---------|-------|
| **Seizure Logging** | "I FEEL ONE COMING" button → logs start time, GPS, weather (via OpenWeather). End logs duration. Manual timer on active screen. |
| **Seizure History & Stats** | Monthly chart. Count, avg duration, days since last. Duration color alerts (≥2 min yellow, ≥5 min red). |
| **BEACON (Emergency Alert)** | One-tap. Fires SMS + push notifications to all emergency contacts simultaneously. Includes GPS link (Google Maps), patient nickname. |
| **Push Notifications** | Server-side via expo-server-sdk. High-priority delivery. Contacts register Expo push tokens. |
| **SMS Alerts** | Client-side via Expo SMS. Optional (filtered if no phone number on contact). |
| **Emergency Contacts** | Add/remove contacts. Phone optional (push-only mode if no number). Household-scoped. |
| **Passive Seizure Detection** | Accelerometer hook (3–8 Hz rhythmic shaking, ≥1.5g peaks). Triggers vibration + confirmation dialog. Medical disclaimer present. |
| **First-Aid (Bystander Mode)** | 6-step guide. **No login required.** Recovery position, timing, no-restraint. "Call 911" button. |
| **Neurologist PDF Export** | 6-month bar chart + detailed log table with weather/duration/notes. Shared via native share sheet. No email backend — user sends manually. |
| **Multiple Patients** | Switch between patients in same household. Patient-select screen. All logs scoped by patient. |
| **User Auth** | Email/password. Household + first patient created in one transaction at signup. JWT tokens stored in AsyncStorage. |
| **Privacy Architecture** | No full names stored. No phone on User model. Nickname-only patients. Architectural constraint (not just policy). |
| **Weather at Seizure Time** | OpenWeather API called on seizure start. Temp, condition, humidity stored with log. For neurologist reports. |
| **GPS Capture** | Fine/coarse location at seizure start. Synced with weather fetch. Sent to contacts via BEACON. |
| **Dark/Light Mode** | Dark theme system-wide. Light theme on History tab. Design tokens in STEADY UI package. |
| **Settings UI** | Auto-alert toggle, GPS share toggle, language selector, privacy promise card, sign out. |
| **First-Aid Recovery Steps** | Shown during active seizure. Auto-advances every 30s. 4 steps on main screen, 6 on bystander page. |
| **API Documentation** | Swagger/OpenAPI at `/docs`. Auto-generated via NestJS decorators. |

#### ⚠️ SCAFFOLDED — code exists, not fully functional

| Feature | What Exists | What's Missing |
|---------|-------------|----------------|
| **Medication Reminders** | `Patient.notes` free-text field (used for "takes Keppra 500mg BID" type notes) | No scheduler, no reminder UI, no notification trigger |
| **Trigger Tracking** | `Patient.notes` field | No structured trigger UI, no correlation analysis |
| **Bilingual Support (EN/TL)** | `Lang` type `'en' \| 'tl'` in i18n file | Zero translation strings. Settings promises "coming soon." |
| **Auto-Alert at 5 Minutes** | Toggle visible in Settings UI | Toggle hardcoded `value={true}`. No timer logic. No auto-trigger. |

#### ❌ NOT SHIPPED — planned or mentioned, no code

| Feature | Status |
|---------|--------|
| Medication schedule / reminders | Not implemented |
| Neurologist portal / dashboard | PDF only; no authenticated neurologist view |
| Wearable integration | Not started |
| Account deletion | No DELETE /user endpoint |
| Data portability (JSON export) | PDF only |
| 2FA | Not started |
| Rate limiting | Not implemented on API |

### 2.2 Steady — Honest Assessment

- Steady is a **real, working mobile app** with genuine core functionality: seizure logging, BEACON alerts, passive detection, bystander guide, PDF reports.
- The **app is in early production** (v1.0.0). EAS build profiles exist. Railway API is live.
- Medication reminders and trigger tracking are **not functional** — only a free-text notes field exists.
- Bilingual support is **not implemented** — only the placeholder is present.
- Safe claims: seizure logging, BEACON emergency alerts, neurologist PDF reports, passive detection (with medical disclaimer), bystander first-aid guide (no login required).
- Do NOT claim: medication reminders, trigger correlation, bilingual support, wearable integration.

---

## 3. Current-Site vs Reality — Gap Audit

This section documents every claim on the current hnscorpph.com that is inaccurate or misleading, and what the replacement should be.

| Current Claim | Reality | Fix |
|---------------|---------|-----|
| "SEC Registered (OPC)" | Filing in progress, not yet registered | Remove or replace with "SEC OPC filing in progress" |
| "BIR CAS-Ready" | Built to CAS specs; accreditation not filed | "Built to CAS specifications" |
| "GCash & Maya integrated" / "GCash & Maya Ready" | Payment labels + manual settlement tracking only; no live API | "Tracks GCash and Maya collections" |
| Uptime SLA claims (e.g. "99.9% uptime") | No SLA established | Remove entirely |
| Customer/transaction counts | No confirmed data | Remove entirely |
| "Accept GCash and Maya payments" | No live payment API | Remove |
| Payroll as a live feature | Schema exists; no computation engine | Remove from feature list or mark as "coming soon" |
| Offline mode as "PWA" | Dexie cache, no service worker | Describe as "offline-capable" not "PWA" |
| Steady: "medication reminders" | Notes field only; no scheduler | Remove or mark as "coming soon" |
| Steady: "trigger tracking" | Notes field only; no structured UI | Remove or mark as "coming soon" |
| Steady: "bilingual" | Zero translations implemented | Remove or mark as "coming soon" |

---

## 4. What We Can Confidently Market

### Clerque
- Philippine-built business suite for MSMEs
- Point of sale with full offline support (write-through cache; syncs on reconnect)
- OR sequential numbering per RR No. 18-2012
- Z-Read / X-Read immutable audit logs
- BIR forms: 2550Q, 1701Q, 2551Q — downloadable
- EIS JSON export (file-based; no live e-filing API)
- Books of Account export (Excel)
- PFRS-aligned Chart of Accounts (186 accounts)
- AP and AR modules with aging reports
- Tracks GCash and Maya collections
- Multi-tenant RBAC (11 roles)
- Built by Filipino developers for Filipino compliance rules

### Steady
- Free mobile app for people living with epilepsy
- Seizure logging with GPS, weather capture, duration tracking
- BEACON: one-tap emergency alert to all contacts (SMS + push, with GPS link)
- Passive seizure detection via accelerometer (supplementary tool, not a medical device)
- First-aid guide (Bystander Mode) — no login required
- Neurologist PDF report: 6-month chart + full log with weather data
- Privacy-first architecture: no full names, phone optional, no third-party data sharing
- Free — no subscription, no ads

---

*This file is the source of truth. Update it before editing any website copy.*
