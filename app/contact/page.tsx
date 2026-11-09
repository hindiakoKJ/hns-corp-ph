'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import '../home.css';
import HomeNav from '@/components/ui/HomeNav';
import HomeFooter from '@/components/ui/HomeFooter';

import { CONCERNS, PRODUCTS, HONEYPOT_FIELD } from '@/components/contact/options';

const TOPIC_MAP: Record<string, { product: string; concern: string }> = {
  partnership: { product: 'HNS PH Solutions', concern: 'Partnership inquiry' },
  custom:      { product: 'HNS PH Solutions', concern: 'Custom build' },
  sales:       { product: 'Clerque',   concern: 'Sales inquiry' },
};


function ContactForm() {
  const params = useSearchParams();
  const topic  = params.get('topic') ?? '';
  const preset = TOPIC_MAP[topic] ?? null;

  const [product,  setProduct]  = useState(preset?.product  ?? '');
  const [concern,  setConcern]  = useState(preset?.concern  ?? '');
  const [name,     setName]     = useState('');
  const [email,    setEmail]    = useState('');
  const [message,  setMessage]  = useState('');
  const [status,   setStatus]   = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const [honeypot, setHoneypot] = useState('');
  const [openedAt] = useState(() => Date.now());

  useEffect(() => {
    if (product && concern && !CONCERNS[product]?.includes(concern)) setConcern('');
  }, [product, concern]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');
    try {
      const res  = await fetch('/api/contact', {
        method:  'POST',
        headers: { 'Content-Type': 'application/json' },
        body:    JSON.stringify({ name, email, product, concern, message, [HONEYPOT_FIELD]: honeypot, elapsedMs: Date.now() - openedAt }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error ?? 'Something went wrong.');
      setStatus('success');
    } catch (err: unknown) {
      setStatus('error');
      setErrorMsg(err instanceof Error ? err.message : 'Something went wrong.');
    }
  }

  if (status === 'success') {
    return (
      <div style={{ background: 'rgba(242,198,109,.07)', border: '1px solid rgba(242,198,109,.3)', borderRadius: 4, padding: '48px 32px', textAlign: 'center' }}>
        <div style={{ fontSize: 44, marginBottom: 14 }}>✓</div>
        <h2 style={{ fontFamily: 'var(--font-display), serif', fontSize: 26, fontWeight: 400, color: 'var(--head)', marginBottom: 10 }}>Message sent.</h2>
        <p style={{ fontFamily: 'var(--font-hanken)', color: 'var(--mut)', marginBottom: 24 }}>We&apos;ll reply to <strong style={{ color: 'var(--txt)' }}>{email}</strong> shortly.</p>
        <Link href="/" style={{ color: 'var(--gold)', fontSize: 14, fontWeight: 600 }}>← Back to home</Link>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 22 }}>
      {/* Honeypot: hidden from people and screen readers; bots that fill every field get dropped. */}
      <div aria-hidden="true" style={{ position: 'absolute', left: '-10000px', width: 1, height: 1, overflow: 'hidden' }}>
        <label htmlFor="hp-website">Website</label>
        <input id="hp-website" name={HONEYPOT_FIELD} type="text" tabIndex={-1} autoComplete="off" value={honeypot} onChange={e => setHoneypot(e.target.value)} />
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))', gap: 16 }}>
        <div>
          <label className="hs-label">Name</label>
          <input required value={name} onChange={e => setName(e.target.value)} placeholder="Juan dela Cruz" className="hs-field" />
        </div>
        <div>
          <label className="hs-label">Email</label>
          <input required type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="juan@example.com" className="hs-field" />
        </div>
      </div>

      <div>
        <label className="hs-label">Which product?</label>
        <select required value={product} onChange={e => setProduct(e.target.value)} className="hs-field" style={{ cursor: 'pointer' }}>
          <option value="" disabled>Select a product…</option>
          {PRODUCTS.map(p => <option key={p} value={p}>{p}</option>)}
        </select>
      </div>

      {product && (
        <div>
          <label className="hs-label">What&apos;s your concern?</label>
          <select required value={concern} onChange={e => setConcern(e.target.value)} className="hs-field" style={{ cursor: 'pointer' }}>
            <option value="" disabled>Select a concern…</option>
            {CONCERNS[product].map(c => <option key={c} value={c}>{c}</option>)}
          </select>
        </div>
      )}

      <div>
        <label className="hs-label">Message</label>
        <textarea required rows={5} value={message} onChange={e => setMessage(e.target.value)} placeholder="Tell us what's on your mind…" className="hs-field" style={{ resize: 'none' }} />
      </div>

      {status === 'error' && (
        <div style={{ background: 'rgba(240,101,90,.08)', border: '1px solid rgba(240,101,90,.3)', borderRadius: 4, padding: '12px 16px', fontSize: 14, color: '#F0908A', fontFamily: 'var(--font-hanken)' }}>
          {errorMsg}
        </div>
      )}

      <button type="submit" disabled={status === 'loading'} className="hs-btn hs-btn-indigo"
        style={{ alignSelf: 'flex-start', opacity: status === 'loading' ? 0.6 : 1, cursor: status === 'loading' ? 'not-allowed' : 'pointer' }}>
        {status === 'loading' ? 'Sending…' : 'Send message'}
      </button>
    </form>
  );
}

export default function ContactPage() {
  return (
    <div className="hs-root">
      <HomeNav />

      <section className="hs-phero" style={{ paddingBottom: 40 }}>
        <div className="hs-wrap">
          <div className="hs-eyebrow" style={{ marginBottom: 18 }}>Contact</div>
          <h1>Get in touch.</h1>
          <p className="sub">We read everything. You&apos;ll hear back directly from the team.</p>
          <div className="hs-contact-info">
            <p className="who">HNS PH Solutions OPC</p>
            <p>Unit 103, Rex Centro, Nin Kaaraman, Bagumbayan Sur,<br />Naga City, Camarines Sur 4400, Philippines</p>
            <p>
              <a href="tel:+639496338541">+63 949 633 8541</a>
              {'  ·  '}
              <a href="mailto:support@hnscorpph.com">support@hnscorpph.com</a>
            </p>
          </div>
        </div>
      </section>

      <section className="hs-sec" style={{ paddingTop: 10 }}>
        <div className="hs-wrap" style={{ maxWidth: 640 }}>
          <Suspense fallback={null}>
            <ContactForm />
          </Suspense>
        </div>
      </section>

      <HomeFooter />
    </div>
  );
}
