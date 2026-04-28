# Parked Feature: Testimonials
> Status: Parked — not built, not shown on site  
> Reason: No clients yet. This section must not go live until real quotes exist.  
> Trigger to activate: First paying or active client willing to give a written quote.

---

## When to Activate

Do NOT add this section until ALL of the following are true:

- [ ] At least one real client is actively using Clerque
- [ ] The client has given explicit written consent to be named on the site
- [ ] The quote is verbatim or approved by them — no paraphrasing without sign-off
- [ ] You have their business name, role/title, and optionally a photo or logo

One real quote from one real person beats three fabricated ones permanently.

---

## Placement

Insert between `<WorkflowSection />` and `<SteadySection />` in `app/page.tsx`.

```tsx
<WorkflowSection />
<TestimonialsSection />   {/* ← insert here when ready */}
<SteadySection />
```

Background: `bg-paper` — sits between the sand-bg WorkflowSection and sand-bg SteadySection, so it needs a light neutral to break the pattern.

---

## Component Design

**Section label:** What early users say  
**Heading:** Straight from the people using it.  
**Sub:** (omit if only 1–2 testimonials — a sub feels odd with few quotes)

### Card structure (per testimonial)

```tsx
interface Testimonial {
  quote: string;          // verbatim, approved
  name: string;           // e.g. "Maria Santos"
  role: string;           // e.g. "Owner, Santos Sari-Sari Store"
  location?: string;      // e.g. "Cebu City" — optional, adds locality
  product: 'clerque' | 'steady';  // which product they're talking about
  avatarSrc?: string;     // optional photo — use initials fallback if absent
}
```

### Layout

- **1 testimonial:** Full-width single card, centered, large quote text
- **2 testimonials:** Two-column grid
- **3+ testimonials:** Three-column grid or a horizontal scroll carousel

Start with the single-card layout. Add columns only as quotes come in.

### Visual style

```
┌─────────────────────────────────────────────────────┐
│  "The BIR forms alone saved me two days every       │
│   quarter. I used to dread filing season."          │
│                                                     │
│  [Avatar]  Maria Santos                             │
│            Owner, Santos General Merchandise        │
│            Cebu City  ·  ● Clerque                  │
└─────────────────────────────────────────────────────┘
```

- Large opening `"` in brand accent color
- Quote in `text-ink` at readable size (~18px)
- Attribution below: name bold, role/location in muted text
- Small product dot indicator (clerque-600 or steady-600) so readers know which product

### Animation

Reuse existing `fadeUp` + `stagger` variants — no new animation needed.

---

## Copy Template (starter code, fill in real data)

```tsx
const TESTIMONIALS: Testimonial[] = [
  {
    quote: "",           // ← paste verbatim quote here
    name: "",            // ← client name
    role: "",            // ← role + business name
    location: "",        // ← city, optional
    product: "clerque",
  },
];
```

If `TESTIMONIALS.length === 0`, the component renders nothing — safe to include in the page early without showing anything.

---

## What NOT to Do

- No placeholder quotes ("Lorem ipsum business owner says...")
- No composite quotes ("Based on user feedback, clients say...")
- No anonymous quotes ("— A Clerque user") unless the client explicitly wants anonymity
- No star ratings unless the client gave a star rating on a real platform
- No fabricated business names or locations

---

## Steady Testimonials (separate consideration)

Steady testimonials are more sensitive — health context, personal data. Before adding any Steady quote:

- Written consent required, more explicitly than for Clerque
- Consider whether the person wants to be identified as someone with epilepsy
- Option: first name + city only (no business, no photo) if they prefer privacy
- Never use a quote that reveals a medical detail the person didn't explicitly agree to share publicly

---

## Files to Create When Ready

| File | Notes |
|------|-------|
| `app/page.tsx` | Add `<TestimonialsSection />` to page composition |
| (inline in page.tsx) | `TESTIMONIALS` data array + `TestimonialsSection` component |
| `public/testimonials/` | Optional avatar photos — keep under 100kb each |

---

*Last updated: 2026-04-28. Do not activate until the checklist above is complete.*
