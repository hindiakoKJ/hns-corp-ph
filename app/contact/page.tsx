'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import SiteNav from '@/components/ui/SiteNav';
import SiteFooter from '@/components/ui/SiteFooter';

const CONCERNS: Record<string, string[]> = {
  'HNS PH Solutions': ['Partnership inquiry', 'Press / Media', 'General question', 'Other'],
  Clerque:      ['Sales inquiry', 'Technical support', 'Feature request', 'Bug report', 'Other'],
  Steady:       ['App feedback', 'Bug report', 'Privacy concern', 'Other'],
  SariAssist:   ['App feedback', 'Bug report', 'Other'],
  LOCATR:       ['Landlord inquiry', 'Renter inquiry', 'Partnership inquiry', 'Bug report', 'Other'],
  AltSpaceCW:   ['Operator inquiry', 'Sales inquiry', 'Technical support', 'Bug report', 'Other'],
  Scatto:       ['Event setup help', 'Sales inquiry', 'Bug report', 'Feature request', 'Other'],
  Everafter:    ['General inquiry', 'Sales inquiry', 'Bug report', 'Feature request', 'Other'],
  KonekBarangay:['LGU inquiry', 'Partnership inquiry', 'General question', 'Other'],
};

const PRODUCTS = Object.keys(CONCERNS);

const TOPIC_MAP: Record<string, { product: string; concern: string }> = {
  partnership: { product: 'HNS PH Solutions', concern: 'Partnership inquiry' },
  sales:       { product: 'Clerque',   concern: 'Sales inquiry' },
};

const inputStyle: React.CSSProperties = {
  width: '100%',
  padding: '12px 16px',
  background: '#101724',
  border: '1px solid rgba(255,255,255,.12)',
  borderRadius: 10,
  color: '#EAF1F9',
  fontSize: 15,
  fontFamily: 'var(--font-manrope)',
  outline: 'none',
  transition: 'border-color .15s',
};

const labelStyle: React.CSSProperties = {
  display: 'block',
  fontSize: 12.5,
  fontWeight: 600,
  fontFamily: 'var(--font-space-grotesk)',
  letterSpacing: '.08em',
  color: '#63718A',
  textTransform: 'uppercase',
  marginBottom: 8,
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
        body:    JSON.stringify({ name, email, product, concern, message }),
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
      <div style={{ background: 'rgba(55,217,160,.07)', border: '1px solid rgba(55,217,160,.25)', borderRadius: 18, padding: '48px 32px', textAlign: 'center' }}>
        <div style={{ fontSize: 48, marginBottom: 16 }}>✓</div>
        <h2 style={{ fontFamily: 'var(--font-space-grotesk)', fontSize: 22, fontWeight: 700, color: '#EAF1F9', marginBottom: 10 }}>Message sent.</h2>
        <p style={{ color: '#94A2B6', marginBottom: 24 }}>We&apos;ll reply to <strong style={{ color: '#EAF1F9' }}>{email}</strong> shortly.</p>
        <Link href="/" style={{ color: '#2BC4DE', fontSize: 14, fontWeight: 600 }}>← Back to home</Link>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 22 }}>
      {/* Name + Email */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))', gap: 16 }}>
        <div>
          <label style={labelStyle}>Name</label>
          <input required value={name} onChange={e => setName(e.target.value)} placeholder="Juan dela Cruz" style={inputStyle} />
        </div>
        <div>
          <label style={labelStyle}>Email</label>
          <input required type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="juan@example.com" style={inputStyle} />
        </div>
      </div>

      {/* Product */}
      <div>
        <label style={labelStyle}>Which product?</label>
        <select required value={product} onChange={e => setProduct(e.target.value)} style={{ ...inputStyle, cursor: 'pointer' }}>
          <option value="" disabled>Select a product…</option>
          {PRODUCTS.map(p => <option key={p} value={p}>{p}</option>)}
        </select>
      </div>

      {/* Concern */}
      {product && (
        <div>
          <label style={labelStyle}>What&apos;s your concern?</label>
          <select required value={concern} onChange={e => setConcern(e.target.value)} style={{ ...inputStyle, cursor: 'pointer' }}>
            <option value="" disabled>Select a concern…</option>
            {CONCERNS[product].map(c => <option key={c} value={c}>{c}</option>)}
          </select>
        </div>
      )}

      {/* Message */}
      <div>
        <label style={labelStyle}>Message</label>
        <textarea required rows={5} value={message} onChange={e => setMessage(e.target.value)} placeholder="Tell us what's on your mind…" style={{ ...inputStyle, resize: 'none' }} />
      </div>

      {/* Error */}
      {status === 'error' && (
        <div style={{ background: 'rgba(224,87,59,.08)', border: '1px solid rgba(224,87,59,.28)', borderRadius: 10, padding: '12px 16px', fontSize: 14, color: '#F08070' }}>
          {errorMsg}
        </div>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={status === 'loading'}
        className="btn btn-blue"
        style={{ alignSelf: 'flex-start', opacity: status === 'loading' ? 0.6 : 1, cursor: status === 'loading' ? 'not-allowed' : 'pointer' }}
      >
        {status === 'loading' ? 'Sending…' : 'Send message'}
      </button>
    </form>
  );
}

export default function ContactPage() {
  return (
    <>
      <SiteNav />
      <main>

        {/* Hero */}
        <section style={{ padding: '90px 32px 60px', position: 'relative', overflow: 'hidden', textAlign: 'center' }}>
          <div style={{ position: 'absolute', top: -120, left: '50%', transform: 'translateX(-50%)', width: 500, height: 340, background: 'radial-gradient(ellipse, rgba(43,196,222,.14) 0%, transparent 65%)', pointerEvents: 'none' }} />
          <div className="wrap" style={{ position: 'relative', zIndex: 1 }}>
            <div className="eyebrow" style={{ marginBottom: 18 }}>Contact</div>
            <h1 style={{ fontSize: 'clamp(36px, 5.5vw, 60px)', lineHeight: 1.05, letterSpacing: '-.03em', marginBottom: 18 }}>
              Get in touch.
            </h1>
            <p style={{ color: '#94A2B6', fontSize: 17, marginBottom: 10 }}>
              We read everything. You&apos;ll hear back directly from the team.
            </p>
            <a href="mailto:hnscorpph@gmail.com" style={{ color: '#2BC4DE', fontSize: 15, fontWeight: 600 }}>hnscorpph@gmail.com</a>
          </div>
        </section>

        {/* Form */}
        <section style={{ padding: '40px 32px 100px', background: '#0C111B', borderTop: '1px solid rgba(255,255,255,.07)' }}>
          <div style={{ maxWidth: 640, margin: '0 auto' }}>
            <Suspense fallback={null}>
              <ContactForm />
            </Suspense>
          </div>
        </section>

      </main>
      <SiteFooter />
    </>
  );
}
