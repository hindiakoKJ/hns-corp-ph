'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import '../home.css';
import HomeNav from '@/components/ui/HomeNav';
import HomeFooter from '@/components/ui/HomeFooter';

const CONCERNS: Record<string, string[]> = {
  'HNS PH Solutions': ['Custom build', 'Partnership inquiry', 'Press / Media', 'General question', 'Other'],
  Clerque:      ['Sales inquiry', 'Technical support', 'Feature request', 'Bug report', 'Other'],
  SariAssist:   ['App feedback', 'Bug report', 'Other'],
  CVAssist:     ['App feedback', 'Bug report', 'Feature request', 'Other'],
  Steady:       ['App feedback', 'Bug report', 'Privacy concern', 'Other'],
  LOCATR:       ['Landlord inquiry', 'Renter inquiry', 'Partnership inquiry', 'Bug report', 'Other'],
  AltSpaceCW:   ['Operator inquiry', 'Sales inquiry', 'Technical support', 'Bug report', 'Other'],
  Scatto:       ['Event setup help', 'Sales inquiry', 'Bug report', 'Feature request', 'Other'],
  Everafter:    ['General inquiry', 'Sales inquiry', 'Bug report', 'Feature request', 'Other'],
  KonekBarangay:['LGU inquiry', 'Partnership inquiry', 'General question', 'Other'],
};

const PRODUCTS = Object.keys(CONCERNS);

const TOPIC_MAP: Record<string, { product: string; concern: string }> = {
  partnership: { product: 'HNS PH Solutions', concern: 'Partnership inquiry' },
  custom:      { product: 'HNS PH Solutions', concern: 'Custom build' },
  sales:       { product: 'Clerque',   concern: 'Sales inquiry' },
};

const inputStyle: React.CSSProperties = {
  width: '100%', padding: '12px 16px', background: '#181B23',
  border: '1px solid rgba(232,233,238,.14)', borderRadius: 12, color: '#E8E9EE',
  fontSize: 15, fontFamily: 'var(--font-hanken)', outline: 'none', transition: 'border-color .15s',
};
const labelStyle: React.CSSProperties = {
  display: 'block', fontSize: 12.5, fontWeight: 600, fontFamily: 'var(--font-hanken)',
  letterSpacing: '.08em', color: '#9AA0B2', textTransform: 'uppercase', marginBottom: 8,
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
      <div style={{ background: 'rgba(139,124,247,.08)', border: '1px solid rgba(139,124,247,.3)', borderRadius: 18, padding: '48px 32px', textAlign: 'center' }}>
        <div style={{ fontSize: 44, marginBottom: 14 }}>✓</div>
        <h2 style={{ fontFamily: 'var(--font-fraunces), serif', fontSize: 26, fontWeight: 600, color: '#F3F1FB', marginBottom: 10 }}>Message sent.</h2>
        <p style={{ fontFamily: 'var(--font-hanken)', color: '#9AA0B2', marginBottom: 24 }}>We&apos;ll reply to <strong style={{ color: '#E8E9EE' }}>{email}</strong> shortly.</p>
        <Link href="/" style={{ color: '#C4C0FB', fontSize: 14, fontWeight: 600 }}>← Back to home</Link>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 22 }}>
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

      <div>
        <label style={labelStyle}>Which product?</label>
        <select required value={product} onChange={e => setProduct(e.target.value)} style={{ ...inputStyle, cursor: 'pointer' }}>
          <option value="" disabled>Select a product…</option>
          {PRODUCTS.map(p => <option key={p} value={p}>{p}</option>)}
        </select>
      </div>

      {product && (
        <div>
          <label style={labelStyle}>What&apos;s your concern?</label>
          <select required value={concern} onChange={e => setConcern(e.target.value)} style={{ ...inputStyle, cursor: 'pointer' }}>
            <option value="" disabled>Select a concern…</option>
            {CONCERNS[product].map(c => <option key={c} value={c}>{c}</option>)}
          </select>
        </div>
      )}

      <div>
        <label style={labelStyle}>Message</label>
        <textarea required rows={5} value={message} onChange={e => setMessage(e.target.value)} placeholder="Tell us what's on your mind…" style={{ ...inputStyle, resize: 'none' }} />
      </div>

      {status === 'error' && (
        <div style={{ background: 'rgba(240,101,90,.08)', border: '1px solid rgba(240,101,90,.3)', borderRadius: 10, padding: '12px 16px', fontSize: 14, color: '#F0908A', fontFamily: 'var(--font-hanken)' }}>
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
