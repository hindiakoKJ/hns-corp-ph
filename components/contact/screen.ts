// Spam screening for the contact form. Pure functions, no I/O, so they are easy
// to test. Two kinds of outcome:
//   - "fix": a person could have made this mistake; show them a helpful error.
//   - "drop": a bot signature; pretend success and send nothing, so bots learn nothing.

import { CONCERNS } from './options';

export type ContactInput = {
  name?: unknown; email?: unknown; product?: unknown; concern?: unknown; message?: unknown;
  website?: unknown; elapsedMs?: unknown;
};

export type Screened =
  | { ok: true; name: string; email: string; product: string; concern: string; message: string }
  | { ok: false; kind: 'fix'; error: string }
  | { ok: false; kind: 'drop'; reason: string };

const MIN_FILL_MS = 3000;   // nobody reads and fills the form in under 3 seconds
const LIMITS = { name: 80, email: 254, message: 4000 };
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

const str = (v: unknown) => (typeof v === 'string' ? v.trim() : '');

/** A single random-looking token with case flipping mid-word, e.g. "hNIFvokWvzdOmQnSBTahjRk". */
export function looksLikeGibberishName(name: string): boolean {
  if (/\s/.test(name) || name.length < 10) return false;
  const innerCaps = (name.slice(1).match(/[A-Z]/g) ?? []).length;
  const vowels = (name.match(/[aeiou]/gi) ?? []).length;
  return innerCaps >= 4 || vowels / name.length < 0.2;
}

/** Gmail "dot trick" addresses used by spam farms, e.g. "o.nazu.f.e.wo9.59@gmail.com". */
export function looksLikeDottedGmail(email: string): boolean {
  const [local, domain] = email.toLowerCase().split('@');
  if (!local || !/^(gmail|googlemail)\.com$/.test(domain ?? '')) return false;
  return (local.match(/\./g) ?? []).length >= 4;
}

export function screenContact(input: ContactInput): Screened {
  // 1. Honeypot: only bots fill a field people cannot see.
  if (str(input.website)) return { ok: false, kind: 'drop', reason: 'honeypot' };

  // 2. Speed: the form sends how long it was open. Missing or too fast means a script.
  const elapsed = typeof input.elapsedMs === 'number' ? input.elapsedMs : -1;
  if (elapsed < MIN_FILL_MS) return { ok: false, kind: 'drop', reason: 'too-fast' };

  const name = str(input.name), email = str(input.email), product = str(input.product),
        concern = str(input.concern), message = str(input.message);

  // 3. Basics a person can correct.
  if (!name || !email || !product || !concern || !message) return { ok: false, kind: 'fix', error: 'Please fill in every field.' };
  if (name.length > LIMITS.name) return { ok: false, kind: 'fix', error: 'That name is too long.' };
  if (email.length > LIMITS.email || !EMAIL_RE.test(email)) return { ok: false, kind: 'fix', error: 'Please enter a valid email address.' };
  if (!CONCERNS[product]?.includes(concern)) return { ok: false, kind: 'fix', error: 'Please choose a product and concern from the list.' };
  if (message.length > LIMITS.message) return { ok: false, kind: 'fix', error: 'Please keep your message under 4,000 characters.' };
  const letters = (message.match(/\p{L}/gu) ?? []).length;
  if (message.length < 10 || letters < 5) return { ok: false, kind: 'fix', error: 'Please write a few words about what you need.' };

  // 4. Bot signature: gibberish name AND dot-trick Gmail together. Either alone is allowed,
  //    so real people with unusual names or addresses still get through.
  if (looksLikeGibberishName(name) && looksLikeDottedGmail(email)) return { ok: false, kind: 'drop', reason: 'bot-signature' };

  return { ok: true, name, email, product, concern, message };
}

/** Escape text before it goes into the HTML email, so submissions cannot inject markup or links. */
export function escapeHtml(s: string): string {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');
}
