---
page: /clerque
title: Clerque — POS, BIR Compliance, and Accounting for Filipino MSMEs
description: Clerque is a Philippine-built business suite with point of sale, OR sequential numbering, BIR forms, and double-entry accounting — built for MSMEs, not enterprise.
last_updated: 2026-04-28
status: draft
---

# Clerque Product Page Copy

---

## Hero

**Label:** Business Suite · Made for the Philippine Market

**H1:**  
Stop running your business on receipt pads and spreadsheets.

**Subheading:**  
Clerque is a point-of-sale and accounting system built specifically for Filipino MSMEs — with OR sequential numbering, BIR forms, and offline capability built in from the start.

**CTAs:**  
- Primary: "Open Clerque" → https://clerque.hnscorpph.com/login  
- Secondary: "See what's included" → (anchor to features)  

---

## Pain → Solution

**Section label:** Why businesses switch

**Pain 1 — The BIR Problem**  
Manual OR numbering is a compliance risk. If your numbering isn't sequential and documented, you're one audit away from a problem.  
→ **Clerque generates sequential ORs automatically.** Series are locked and logged. Nothing gets reused, nothing gets skipped.

**Pain 2 — The Cash Reconciliation Problem**  
End of day shouldn't take an hour. Counting cash, matching GCash settlements, totaling receipts — it piles up.  
→ **Clerque's Z-Read closes your day in one step.** Immutable log. Everything reconciled. GCash and Maya collections tracked alongside cash.

**Pain 3 — The Accounting Problem**  
Most MSMEs don't have an accountant on staff. VAT forms, income tax, books of account — it's all manual, and it's all wrong until it isn't.  
→ **Clerque generates 2550Q, 1701Q, 2551Q, and your Books of Account.** Double-entry accounting behind the scenes. You don't have to know the entries — you just have to do the transactions.

---

## Feature Breakdown

**Section label:** What's included

**Heading:**  
Everything you need. Nothing you don't.

**Point of Sale**  
Full POS terminal. Cash, GCash (tracked), Maya (tracked), and QR PH. Modifiers, discounts, void workflow with manager approval. Shift open and close. Works offline — writes to local cache, syncs when connection returns.

**OR Sequential Numbering**  
Complies with RR No. 18-2012. Receipts are numbered sequentially per series. No gaps, no rewrites. Every OR is an immutable record.

**Z-Read & X-Read**  
Close your day with a Z-Read — a complete, locked summary of all transactions. Run an X-Read mid-shift to check the count without closing. Both are audit logs — once generated, they cannot be altered.

**BIR Forms**  
Download-ready: BIR Form 2550Q (quarterly VAT), 1701Q (quarterly income tax), and 2551Q (percentage tax). EIS JSON for file-based submission. Note: live BIR e-filing API is not yet implemented — you export the files, you submit them manually.

**Books of Account**  
General Journal, General Ledger, Sales Book, and Purchase Book — exportable as Excel via the Books module. PFRS-aligned Chart of Accounts (186 accounts seeded, customizable).

**AP & AR**  
Accounts Payable: vendor master, expense approval workflow, SOD enforcement, aging report.  
Accounts Receivable: customer master, credit terms, invoice tracking, aging report.

**RBAC — Multi-Tenant**  
11 roles. Feature access gated by your subscription tier and business type. The right people see the right things.

---

## Offline First

**Heading:**  
Works when your internet doesn't.

The power went out on your block. Your router is acting up. The signal in the stockroom is zero. Clerque's POS keeps running.

Transactions are written to a local cache first. When your connection comes back, everything syncs. No lost sales. No manual reconciliation.

**Honest note:** This is an offline-capable POS, not a full Progressive Web App. There's no background sync or service worker — it's a write-through cache that syncs on reconnect. For the way most MSMEs actually work, that's enough.

---

## GCash & Maya

**Heading:**  
Track what you're actually collecting.

GCash and Maya are how a lot of your customers pay. Clerque records them as payment methods and tracks your settlements alongside cash.

**Honest note:** Clerque does not have a live GCash or Maya API. There's no QR generation, no real-time payment confirmation. You record collections manually — Clerque organizes and tracks them so your reconciliation and BIR reporting stay accurate.

---

## BIR Compliance

**Heading:**  
Built to CAS specifications.

Clerque's architecture follows the requirements for a Computerized Accounting System (CAS): sequential OR numbering per RR No. 18-2012, immutable Z-Read/X-Read logs, prescribed form outputs, and Books of Account export.

**Honest note:** BIR CAS accreditation has not been filed. Clerque is built to the specifications — the accreditation process requires submission and inspection by the BIR RDO. If you need a CAS-accredited system today, ask us about timeline.

---

## Get Started

**Heading:**  
Ready to try it?

**Sub:**  
Clerque is available now. Login to get started or contact us if you have questions about setup, pricing, or whether it's the right fit for your business.

**CTAs:**  
- "Open Clerque" → https://clerque.hnscorpph.com/login (new tab)  
- "Contact us" → mailto:hnscorpph@gmail.com?subject=Sales%20Inquiry  
