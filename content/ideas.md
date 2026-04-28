---
page: /ideas
title: Ideas — Future Possibilities from HNScorpPH
description: Transparent speculation about where HNScorpPH might go. Not commitments, not a roadmap — just public thinking about what could exist.
last_updated: 2026-04-28
status: draft
---

# Ideas Page Copy

---

## Hero

**Label:** Speculation · Not Commitments

**H1:**  
What we're thinking about.

**Sub:**  
These are ideas, not promises. Some of these will ship in two years. Some will never ship. Publishing them anyway because we think transparency about ambition is better than silence.

---

## Disclaimer (visible, not buried)

Everything on this page is prefaced with "we're thinking about" for a reason. None of these are on the roadmap. If something moves to active development, it moves to /roadmap. Until then, it's here.

---

## For Businesses

**A second product for service businesses**  
Clerque is built for retail and F&B. Service businesses — repair shops, salons, professional services — have different billing, different time tracking, different BIR forms. We're thinking about what a Clerque for service businesses looks like: time-based billing, job cards, service history. Not started.

**Inventory forecasting**  
Clerque tracks stock. We're thinking about what it would look like to predict low-stock before it happens — based on sales velocity, seasonality, and supplier lead times. Relevant for small stores that stock fast-moving goods.

**Multi-store management**  
Some of our users have more than one branch. Right now, each branch is a separate tenant. We're thinking about what a consolidated view looks like: one dashboard, multiple locations, roll-up reporting.

**Supplier portal**  
Your suppliers invoice you. Right now, you enter those invoices manually in the AP module. A supplier portal would let suppliers submit invoices directly — you approve, it posts. Reduces manual entry, reduces errors.

**WhatsApp for Clerque**  
Some Filipino business owners manage more from WhatsApp than from a browser. We're thinking about what Clerque interactions could look like via WhatsApp Business API — daily Z-Read summary, low-stock alerts, pending invoice approvals.

**Integrated GCash / Maya payments**  
Right now, Clerque tracks GCash and Maya collections manually. If the GCash and Maya developer APIs become accessible and stable, we'd build real-time QR generation and payment confirmation into the POS. Not started.

---

## For Health

**Neurologist portal**  
Steady generates a PDF report for your doctor. We're thinking about what it would look like for a neurologist to have an authenticated dashboard — with patient consent, they could see the log in real time, not just the last PDF you remembered to bring.

**Trigger correlation engine**  
Once we have structured trigger logging (in active development), we're thinking about what correlation analysis looks like: does your seizure frequency increase after consecutive late nights? After certain weather conditions? The data will be there — the question is how to surface it usefully without overfitting on small sample sizes.

**Caregiver alert fatigue**  
Right now, every BEACON alert goes to every contact. If you're having multiple seizures a week, your contacts might start treating alerts as noise. We're thinking about escalation logic: alert closest contact first, escalate to the full list if no response in X minutes.

**Wearable integration**  
The accelerometer on a phone is okay for passive detection. The accelerometer on a wrist-worn device is better. We're thinking about what Steady looks like on a smartwatch or a low-cost sensor band.

**Steady for other episodic conditions**  
The architecture of Steady — logging events, alerting contacts, tracking environmental context — isn't specific to epilepsy. We're thinking about whether it makes sense to adapt it for other episodic conditions: migraine, syncope, panic disorder. Not started, and we'd want to talk to patients and clinicians before going there.

---

## Platform

**HNScorpPH developer API**  
Some businesses want to integrate Clerque with their own systems — warehouse software, custom dashboards, existing accounting tools. We're thinking about a public API layer that makes this possible without requiring them to use the web app.

**Offline-first infrastructure as a service**  
The Dexie write-through cache pattern we built for Clerque is reusable. We're thinking about whether there's a general-purpose offline-first layer that other Filipino developers could use — particularly for apps that need to work in low-connectivity environments.

---

*Last updated: April 2026. This page changes when our thinking changes.*
