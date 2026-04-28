# Content Backlog
> Written: 2026-04-28  
> 30 blog/guide topics + 15 future product/feature concepts.  
> For editorial planning and product ideation. Not a roadmap.

---

## Part 1 — Blog & Guide Topics (30)

### BIR Compliance

1. **What is BIR CAS and do you actually need it?**  
   Plain-language explainer. What the law says, who it applies to, and what "accreditation" actually means vs "built to specs."

2. **OR Sequential Numbering: What RR 18-2012 Actually Requires**  
   The specific rule, why gaps are a problem, what void transactions should look like, and what auditors look for.

3. **Z-Read vs X-Read: What They Are and Why You Need Them Every Day**  
   The difference between end-of-day summary and mid-shift snapshot. Why immutability matters. What you hand to an auditor.

4. **BIR Form 2550Q: A Plain-English Guide for MSME Owners**  
   What quarterly VAT reporting is, who files it, when it's due, and what the inputs are. No accounting degree required.

5. **BIR Form 2551Q vs 2550Q: Which One Do You File?**  
   VAT-registered vs non-VAT-registered. Percentage tax vs VAT. How to know which bucket you're in.

6. **Books of Account for MSMEs: What You Need and How Often**  
   General Journal, General Ledger, Sales Book, Purchase Book. Manual vs computerized. When BIR asks for them.

7. **EIS JSON: What It Is and Why Your POS Needs to Generate It**  
   The electronic reporting format BIR uses. What it contains, how to submit it, and why file-based submission ≠ e-filing API.

8. **EWT and SAWT: What MSMEs Need to Know About Withholding Tax**  
   Expanded withholding tax on supplier payments. The alphalist. Why your AP module needs to track this.

9. **What Happens During a BIR Audit: A Practical Guide for Small Business Owners**  
   Demystify the process. What auditors actually look at, what triggers audits, how to prepare your records.

10. **PFRS for Small Entities vs Full PFRS: Which Applies to Your Business?**  
    Quick breakdown for MSME owners trying to understand if they need full PFRS or the simplified version.

---

### Business Operations

11. **GCash and Maya for Business: How to Track Collections the Right Way**  
    Settlement timing, reference numbers, reconciliation against bank deposits. Why it matters for BIR.

12. **Separation of Duties for Small Businesses: Why the Person Who Approves Can't Be the Person Who Pays**  
    SOD explained for businesses with 3–10 staff. How to implement it without a full compliance team.

13. **Cash Reconciliation at End of Day: A Step-by-Step Process**  
    Counting cash, matching GCash, checking voided receipts, running Z-Read. The exact steps in order.

14. **AP Aging: Why You Should Be Looking at It Every Week**  
    What accounts payable aging tells you, how to read the report, and what to do when a supplier is overdue.

15. **AR Aging: The One Report That Tells You Who Isn't Paying You**  
    Accounts receivable aging for businesses that extend credit. How to use it for collections.

16. **Why Offline-First Matters for Philippine MSMEs**  
    Power interruptions, signal dead zones, shared router congestion. Why "requires internet" is a dealbreaker for some businesses.

17. **Shift Management in a POS: Why It's Not Just About Cash**  
    Open/close shift, shift-level vs day-level reconciliation, who's responsible for what. For businesses with multiple staff at the register.

18. **How to Set Up Chart of Accounts for a Small Retail Business**  
    The 5–10 accounts most small retail businesses actually need. What PFRS says and what's practical.

19. **Promotions and Discounts: How to Set Them Up Without Losing Track of BIR Records**  
    Time-based promos, senior/PWD discounts, VIP pricing. How discounts affect your sales records and BIR forms.

20. **When to Hire an Accountant vs When to Use Software**  
    Honest advice. What software can replace, what it can't, and when you genuinely need a person.

---

### Health (Steady)

21. **How to Talk to Your Neurologist About Your Seizure History**  
    What information neurologists actually need, why memory isn't enough, and what to bring to your appointment.

22. **Epilepsy and Emergency Preparedness: A Guide for Families**  
    What to do when a seizure happens. When to call emergency services. How to brief new caregivers.

23. **Seizure First Aid: What Bystanders Actually Need to Know**  
    The six steps. What not to do (and why). How to time it. When it's an emergency.

24. **Tracking Seizure Triggers: Why It Matters and How to Start**  
    Common triggers, how to log them, what patterns to look for, and what to tell your doctor.

25. **Living with Epilepsy in the Philippines: Resources and Support**  
    Philippine Epilepsy Society, support groups, government programs, practical advice for families.

26. **The Hidden Cost of Epilepsy: Medication, Lost Work, and the Social Burden**  
    Honest piece on the economic reality. Not a product pitch — a conversation starter.

27. **Privacy and Health Apps: What Your Epilepsy App Should and Shouldn't Know About You**  
    What data is necessary, what's excessive, and how to evaluate an app's privacy posture before you install it.

28. **Passive Seizure Detection: What It Can and Can't Do**  
    How accelerometer-based detection works, why it's a supplementary tool and not a medical device, and realistic expectations.

29. **Explaining Epilepsy to Employers, Schools, and Communities in the Philippines**  
    Practical advice for navigating disclosure. What the law says. How to frame it.

30. **Building a Seizure Log That Actually Helps Your Doctor**  
    What to record, what context matters (weather, sleep, stress, time of day), and how to present it.

---

## Part 2 — Future Product & Feature Concepts (15)

*(These are ideas in the sense of "worth exploring" — not commitments, not on the roadmap)*

1. **Clerque for Service Businesses**  
   Time-based billing, job cards, service history, technician tracking. A Clerque variant for repair shops, salons, clinics, and professional services.

2. **Steady for Migraine**  
   The same architecture — event logging, contact alerts, neurologist report — applied to episodic migraine. Weather correlation, trigger tracking, BEACON for severe episodes.

3. **HNScorpPH Developer API**  
   Public API layer so developers and businesses can integrate Clerque data with their own systems — warehouse software, custom dashboards, third-party analytics.

4. **Multi-Store Dashboard for Clerque**  
   Consolidated view across multiple Clerque tenants. Ideal for businesses with 2–5 branches wanting a roll-up P&L without running separate sessions.

5. **Supplier Portal for Clerque AP**  
   Allow suppliers to submit invoices directly into Clerque's AP module. Reduces manual entry, reduces keying errors, creates a cleaner audit trail.

6. **WhatsApp Alerts for Clerque**  
   Daily Z-Read summary, low-stock alerts, and pending AP approvals via WhatsApp Business API. For business owners who manage from their phone.

7. **Inventory Forecasting Engine**  
   Based on sales velocity, seasonality, and historical purchase patterns — predict when stock will run out and alert before it happens.

8. **Neurologist Portal for Steady**  
   Authenticated dashboard for clinicians. With patient consent, view the full seizure log, trends, medication notes. More useful than a PDF every 3 months.

9. **Steady Wearable Integration**  
   Accelerometer-based passive detection from a wrist-worn device. More reliable than phone-based detection; better battery life for continuous monitoring.

10. **Caregiver Escalation Logic for BEACON**  
    Alert the closest contact first. If no acknowledgment in X minutes, escalate to the full list. Reduces alert fatigue for frequent-seizure patients.

11. **Offline-First Infrastructure Package**  
    Extract Clerque's Dexie write-through cache pattern into a reusable library for Filipino developers building apps that need to work in low-connectivity environments.

12. **Steady for Syncope / Fainting Episodes**  
    Structural adaptation for syncope patients: log episodes, track triggers (dehydration, heat, standing up quickly), alert contacts, report to cardiologist.

13. **BIR e-Filing API Integration for Clerque**  
    Direct submission to BIR's eFPS/ORUS systems when the API is stable enough to build against. Eliminate the file-download-and-upload step for quarterly filings.

14. **GCash / Maya Payment API Integration**  
    Real-time QR generation and payment confirmation in the Clerque POS. Depends on accessible, stable developer API access from GCash and Maya.

15. **HNScorpPH Health Data Cooperative**  
    A long-term idea: a patient-controlled, privacy-preserving aggregate of anonymized health data (seizure patterns, medication responses) that researchers could query with consent. Built on the same privacy architecture as Steady.

---

*This backlog is a planning tool, not a commitment list. Items move to architecture.md → roadmap.md as they become real.*
