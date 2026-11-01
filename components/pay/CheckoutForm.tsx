'use client';

import { useState } from 'react';
import { peso } from './plans';


export default function CheckoutForm({ planId, amount }: { planId: string; amount: number }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState('');

  async function pay(e: React.FormEvent) {
    e.preventDefault();
    setErr('');
    setLoading(true);
    try {
      const res = await fetch('/api/pay/create-invoice', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ plan: planId, name, email, phone }),
      });
      const data = await res.json().catch(() => ({}));
      if (res.ok && data.invoice_url) {
        window.location.href = data.invoice_url;
        return;
      }
      if (res.status === 503) {
        setErr('Card & e-wallet checkout is being finalised. To complete your order now, message us at +63 949 633 8541 or support@hnscorpph.com and we’ll send a secure payment link.');
      } else if (res.status === 422) {
        setErr('Please enter your full name and email.');
      } else {
        setErr('We couldn’t start your payment. Please try again, or contact us at support@hnscorpph.com.');
      }
    } catch {
      setErr('Network error. Please check your connection and try again.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={pay} style={{ display: 'grid', gap: 16, maxWidth: 440 }}>
      <div>
        <label className="hs-label" htmlFor="co-name">Full name</label>
        <input id="co-name" name="name" className="hs-field" value={name} onChange={(e) => setName(e.target.value)} required autoComplete="name" />
      </div>
      <div>
        <label className="hs-label" htmlFor="co-email">Email</label>
        <input id="co-email" name="email" type="email" className="hs-field" value={email} onChange={(e) => setEmail(e.target.value)} required autoComplete="email" />
      </div>
      <div>
        <label className="hs-label" htmlFor="co-phone">Mobile number <span style={{ textTransform: 'none', opacity: .6 }}>(optional)</span></label>
        <input id="co-phone" name="phone" type="tel" className="hs-field" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="+63" autoComplete="tel" />
      </div>

      {err && <p role="alert" style={{ color: '#F1A9A0', fontSize: 14, lineHeight: 1.5, margin: 0 }}>{err}</p>}

      <button type="submit" className="hs-btn hs-btn-indigo" disabled={loading} style={{ justifyContent: 'center', opacity: loading ? .7 : 1 }}>
        {loading ? 'Starting secure payment…' : `Pay ${peso(amount)} with Xendit`}
      </button>

      <div className="co-methods">
        <span>We accept</span> Visa · Mastercard · GCash · Maya · GrabPay · Bank transfer
        <div className="co-secure">🔒 Payments secured by Xendit</div>
      </div>
    </form>
  );
}
