---
page: /roadmap
title: Roadmap — What HNScorpPH Is Building
description: Honest, public roadmap for HNScorpPH products. What's live, what's in active development, and what's planned next.
last_updated: 2026-04-28
status: draft
---

# Roadmap Copy

---

## Hero

**Label:** Updated: April 2026

**H1:**  
What we're building, and where things stand.

**Sub:**  
No dates unless we're certain. No promises we can't keep. This page is updated when something actually changes.

---

## Phase 1 — Now (Live)

### HNScorpPH Website  
The site you're on. Brand identity, product pages, company story. Deployed on Vercel.

### Clerque v1  
Point of sale, OR sequential numbering, Z-Read / X-Read, BIR forms (2550Q, 1701Q, 2551Q), Books of Account export, AP and AR modules, multi-tenant RBAC, offline-capable POS. Live at clerque.hnscorpph.com.

### Steady v1  
Seizure logging, BEACON emergency alerts (SMS + push + GPS), passive seizure detection via accelerometer, first-aid bystander guide (no login required), neurologist PDF export, emergency contact management, household privacy model. Mobile app on Expo/React Native; API on Railway.

---

## Phase 2 — Building (Active Development)

### Clerque v2
- **Payroll computation engine** — TimeEntry and PayRun data structures exist. Salary computation, payslip generation, and payroll journal entries are in active development.
- **BIR Form 2307** — Certificate of Creditable Tax Withheld at Source. Schema exists; generation in progress.
- **2FA** — Schema fields exist on the User model. UI and TOTP implementation are in progress.
- **BIR CAS accreditation filing** — The system is built to CAS specifications. Filing for accreditation with the BIR RDO is pending.

### Steady v2
- **Medication reminders** — Building a proper scheduler and notification system. Currently only a free-text notes field exists.
- **Trigger tracking** — Structured logging for sleep, stress, alcohol, illness. Correlation analysis with seizure history.
- **Bilingual support (EN/TL)** — Language framework is in place. Tagalog translations are in progress.

---

## Phase 3 — Next (Planned, Not Started)

### Clerque
- **Live BIR e-filing API** — When BIR's eFPS/ORUS infrastructure supports it and is stable enough to build against.
- **GCash / Maya live API** — Real-time payment confirmation and QR generation. Pending stable developer access from GCash and Maya.
- **Multi-currency / FX engine** — For businesses that deal in USD or remittance-denominated transactions.
- **T&E (Travel & Expense) module** — OCR receipt capture, approval workflows, reimbursement tracking.

### Steady
- **Neurologist portal** — An authenticated view for clinicians to access a patient's seizure history with consent.
- **Wearable integration** — Accelerometer-based detection from smartwatches or bands.
- **Data portability** — JSON export of your full seizure history for use in other systems.

### HNScorpPH
- **Product 3** — Early thinking. Not named, not announced. We'll update this page when there's something real to say.

---

## What Won't Be Here

We don't list things that are just ideas. If it's not in the codebase, it's not on this page.

---

## Feedback

If you're using Clerque or Steady and there's something you want to see, let us know.

**Contact:** hnscorpph@gmail.com
