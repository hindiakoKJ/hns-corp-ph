---
page: /for-msmes
title: For MSMEs — BIR Compliance, GCash, and Accounting Basics for Filipino Businesses
description: Practical guides for Filipino MSME owners: BIR CAS requirements, OR numbering, GCash collection tracking, and why your POS needs to work offline.
last_updated: 2026-04-28
status: draft
---

# For MSMEs Hub Copy

---

## Hero

**H1:**  
Most business software wasn't built for you.

**Sub:**  
It was built for Singapore, or the US, or "Southeast Asia" — which usually means Manila's top 500 companies. If you're running a small business with real BIR obligations, real GCash collections, and real connectivity problems, the advice you find online usually doesn't fit.

This page is different. It's written for businesses that file 2550Q, accept GCash, and sometimes lose power mid-shift.

---

## BIR CAS — What It Is and What It Means for You

**Heading:**  
If you use a computerized system for your books, you need CAS compliance.

A Computerized Accounting System (CAS) is any software that generates official receipts, maintains your books, or prepares your BIR returns. If you use POS software or accounting software, BIR's rules apply to you.

**What CAS compliance requires (the short version):**

1. **Sequential OR numbering.** Official receipts must be numbered in sequence. No gaps. No rewrites. The series must be registered with BIR.

2. **Immutable logs.** Your system must be able to produce Z-Reads (end-of-day summaries) and X-Reads (mid-shift snapshots) that cannot be altered after the fact. These are audit evidence.

3. **Books of Account.** General Journal, General Ledger, Sales Book, Purchase Book — these must be maintainable and producible on demand.

4. **BIR forms.** Your quarterly filings (2550Q for VAT-registered, 2551Q for percentage tax, 1701Q for income tax) must be accurate and based on your actual transaction records.

**What CAS accreditation means:**  
To legally use a CAS, you're supposed to file for accreditation with your RDO. In practice, many MSMEs skip this step — but it's a compliance gap. If you want to do it right, you need a system built to the specs and a submission to your RDO.

**Relevant issuance:** Revenue Regulations No. 18-2012 (Computerized Books of Account)

---

## OR Sequential Numbering — Why It Matters

**Heading:**  
Your receipt numbering is an audit trail. Treat it like one.

BIR's RR 18-2012 requires that ORs issued by a computerized system be sequential, with no gaps. If an auditor looks at your receipts and finds a gap in the series — say, receipt #1045 followed by #1047 — that's a red flag. If they find a receipt #1045 issued twice, that's a serious problem.

**Common mistakes:**
- Using the same OR series across multiple terminals without coordination
- Allowing void transactions to leave gaps in the series
- Resetting your counter at the start of each day

**What Clerque does:** Each OR series is registered and locked. Sequential numbers are assigned automatically. Voids are recorded as separate journal entries — the OR stays in the series, marked void. The series never resets.

---

## GCash and Maya — How to Track Collections Correctly

**Heading:**  
GCash and Maya aren't just payment methods. They're settlement timing issues.

When a customer pays you via GCash, you don't receive that money immediately. There's a settlement cycle. Your GCash balance and your bank balance are different things. Your BIR records need to reflect what was actually collected, not what you think was paid.

**What to track:**
- Date of transaction (when the customer paid)
- Amount
- Reference number (from the GCash/Maya notification)
- Settlement date (when it hit your bank)
- Any fees deducted

**Why it matters for BIR:**  
If you declare GCash and Maya collections in your VAT returns, you need to reconcile them against your actual settlements. Mismatches are a common audit finding.

**What Clerque does:** Records GCash and Maya as separate payment methods at the time of transaction. Tracks settlement amounts so your BIR reconciliation is accurate. Note: Clerque does not have a live GCash or Maya API — you record collections manually, and Clerque organizes them.

---

## Offline-First — Why Your POS Needs to Work Without Internet

**Heading:**  
Power cuts happen. Signal drops. Your POS can't afford to stop.

If you're running a sari-sari store, a small resto, or a market stall, your internet connection is not reliable. An hour of downtime during lunch rush can cost you a day's cash flow if your POS doesn't work offline.

**What offline-capable means (and what it doesn't):**

A truly offline-capable POS keeps a local copy of your catalog, customer data, and open transactions. When the connection drops, you keep selling. When it comes back, everything syncs.

It does *not* mean your system works completely independently forever. It means: you don't lose a sale because the Wi-Fi went out for 20 minutes.

**What Clerque does:** Uses a local cache (IndexedDB) that writes every transaction locally first. When your connection returns, the cache syncs to the server. Your end-of-day totals and BIR records are always based on what actually happened — not what happened to be online at the time.

---

## Accounting You Can Actually Do

**Heading:**  
You don't need an accounting degree. You need the right system.

Double-entry accounting sounds complicated. In practice, for an MSME, most of your transactions are one of five types: sale, expense, purchase, payment received, payment sent. If your system handles those automatically, you never have to think about debits and credits.

**The accounts you actually need to know:**

- **Sales Revenue** — what you sell
- **Cost of Goods Sold** — what the goods cost you
- **Accounts Payable** — what you owe suppliers
- **Accounts Receivable** — what customers owe you
- **Cash/Bank** — what's in your till and your bank

**BIR forms that come from your books:**
- 2550Q — VAT return, based on your sales and purchases
- 1701Q / 1701 — Income tax, based on your net income
- 2551Q — Percentage tax, for non-VAT-registered businesses

**What Clerque does:** Posts journal entries automatically when you record a sale, expense, or payment. Your Books of Account are always up to date. At quarter end, you download your forms.

---

## External Resources

(Links open in new tab)

- [BIR Revenue Regulations No. 18-2012](https://www.bir.gov.ph) — CAS requirements
- [BIR RR No. 7-2024](https://www.bir.gov.ph) — Updated e-invoicing requirements
- [DTI — MSME definition and registration](https://www.dti.gov.ph)
- [PhilSys — National ID for business verification](https://philsys.gov.ph)

---

## CTA

**Heading:**  
Clerque is built for exactly this.

**Sub:**  
Sequential ORs. Z-Read. BIR forms. Offline POS. GCash and Maya collection tracking. Everything in one place.

**CTA:** "Try Clerque" → https://clerque.hnscorpph.com/login
