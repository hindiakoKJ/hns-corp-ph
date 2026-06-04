'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, AlertCircle } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

// ---------------------------------------------------------------------------
// Data
// ---------------------------------------------------------------------------

const CONCERNS: Record<string, string[]> = {
  'HNScorpPH': [
    'Partnership inquiry',
    'Press / Media',
    'General question',
    'Other',
  ],
  'Clerque': [
    'Sales inquiry',
    'Technical support',
    'Feature request',
    'Bug report',
    'Other',
  ],
  'Steady': [
    'App feedback',
    'Bug report',
    'Privacy concern',
    'Other',
  ],
  'TindaPOS': [
    'App feedback',
    'Bug report',
    'Other',
  ],
  'LOCATR': [
    'Landlord inquiry',
    'Renter inquiry',
    'Partnership inquiry',
    'Bug report',
    'Other',
  ],
  'AltSpaceCW': [
    'Operator inquiry',
    'Sales inquiry',
    'Technical support',
    'Bug report',
    'Other',
  ],
  'Scatto': [
    'Event setup help',
    'Sales inquiry',
    'Bug report',
    'Feature request',
    'Other',
  ],
  'KonekBarangay': [
    'LGU inquiry',
    'Partnership inquiry',
    'General question',
    'Other',
  ],
};

const PRODUCTS = Object.keys(CONCERNS);

// Pre-fill map from ?topic= query param
const TOPIC_MAP: Record<string, { product: string; concern: string }> = {
  partnership: { product: 'HNScorpPH', concern: 'Partnership inquiry' },
  sales:       { product: 'Clerque',    concern: 'Sales inquiry' },
};

// ---------------------------------------------------------------------------
// Animation
// ---------------------------------------------------------------------------

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
};

// ---------------------------------------------------------------------------
// Inner form (needs useSearchParams — wrapped in Suspense below)
// ---------------------------------------------------------------------------

function ContactForm() {
  const params = useSearchParams();
  const topic = params.get('topic') ?? '';
  const preset = TOPIC_MAP[topic] ?? null;

  const [product, setProduct]   = useState(preset?.product ?? '');
  const [concern, setConcern]   = useState(preset?.concern ?? '');
  const [name, setName]         = useState('');
  const [email, setEmail]       = useState('');
  const [message, setMessage]   = useState('');
  const [status, setStatus]     = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  // Reset concern when product changes (unless it's still valid)
  useEffect(() => {
    if (product && concern && !CONCERNS[product]?.includes(concern)) {
      setConcern('');
    }
  }, [product, concern]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, product, concern, message }),
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
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center gap-4 rounded-2xl border border-emerald-200 bg-emerald-50 px-8 py-12 text-center"
      >
        <CheckCircle className="h-12 w-12 text-emerald-500" />
        <h2 className="text-xl font-bold text-ink">Message sent.</h2>
        <p className="text-sm text-ink/55">
          We&apos;ll reply to <span className="font-semibold text-ink">{email}</span> shortly.
        </p>
        <Link
          href="/"
          className="mt-2 text-sm font-semibold text-hns-600 hover:underline"
        >
          ← Back to home
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial="hidden"
      animate="visible"
      variants={stagger}
      className="flex flex-col gap-5"
    >
      {/* Name + Email */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <motion.div variants={fadeUp} className="flex flex-col gap-1.5">
          <label className="text-xs font-semibold text-ink/60">Name</label>
          <input
            required
            value={name}
            onChange={e => setName(e.target.value)}
            placeholder="Juan dela Cruz"
            className="rounded-xl border border-ink/15 bg-white px-4 py-3 text-sm text-ink placeholder:text-ink/30 focus:border-hns-500 focus:outline-none focus:ring-2 focus:ring-hns-500/20"
          />
        </motion.div>
        <motion.div variants={fadeUp} className="flex flex-col gap-1.5">
          <label className="text-xs font-semibold text-ink/60">Email</label>
          <input
            required
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="juan@example.com"
            className="rounded-xl border border-ink/15 bg-white px-4 py-3 text-sm text-ink placeholder:text-ink/30 focus:border-hns-500 focus:outline-none focus:ring-2 focus:ring-hns-500/20"
          />
        </motion.div>
      </div>

      {/* Product */}
      <motion.div variants={fadeUp} className="flex flex-col gap-1.5">
        <label className="text-xs font-semibold text-ink/60">Which product is this about?</label>
        <select
          required
          value={product}
          onChange={e => setProduct(e.target.value)}
          className="rounded-xl border border-ink/15 bg-white px-4 py-3 text-sm text-ink focus:border-hns-500 focus:outline-none focus:ring-2 focus:ring-hns-500/20"
        >
          <option value="" disabled>Select a product…</option>
          {PRODUCTS.map(p => (
            <option key={p} value={p}>{p}</option>
          ))}
        </select>
      </motion.div>

      {/* Concern — only shown once a product is selected */}
      {product && (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25 }}
          className="flex flex-col gap-1.5"
        >
          <label className="text-xs font-semibold text-ink/60">What&apos;s your concern?</label>
          <select
            required
            value={concern}
            onChange={e => setConcern(e.target.value)}
            className="rounded-xl border border-ink/15 bg-white px-4 py-3 text-sm text-ink focus:border-hns-500 focus:outline-none focus:ring-2 focus:ring-hns-500/20"
          >
            <option value="" disabled>Select a concern…</option>
            {CONCERNS[product].map(c => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
        </motion.div>
      )}

      {/* Message */}
      <motion.div variants={fadeUp} className="flex flex-col gap-1.5">
        <label className="text-xs font-semibold text-ink/60">Message</label>
        <textarea
          required
          rows={5}
          value={message}
          onChange={e => setMessage(e.target.value)}
          placeholder="Tell us what's on your mind…"
          className="resize-none rounded-xl border border-ink/15 bg-white px-4 py-3 text-sm text-ink placeholder:text-ink/30 focus:border-hns-500 focus:outline-none focus:ring-2 focus:ring-hns-500/20"
        />
      </motion.div>

      {/* Error */}
      {status === 'error' && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex items-center gap-2 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700"
        >
          <AlertCircle className="h-4 w-4 shrink-0" />
          {errorMsg}
        </motion.div>
      )}

      {/* Submit */}
      <motion.div variants={fadeUp}>
        <button
          type="submit"
          disabled={status === 'loading'}
          className="flex items-center gap-2 rounded-xl bg-hns-600 px-8 py-3.5 text-sm font-semibold text-white shadow-[0_4px_20px_rgba(8,145,178,0.3)] transition-all hover:bg-hns-500 hover:scale-[1.02] disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {status === 'loading' ? 'Sending…' : 'Send message'}
          {status !== 'loading' && <ArrowRight className="h-4 w-4" />}
        </button>
      </motion.div>
    </motion.form>
  );
}

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------

export default function ContactPage() {
  return (
    <>
      {/* Mini navbar */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/8 bg-[#020817]/80 backdrop-blur-md">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/logos/hns-icon.png" width={28} height={28} alt="HNScorpPH" className="rounded-lg" />
            <span className="text-sm font-semibold tracking-tight text-white">HNScorpPH</span>
          </Link>
          <Link
            href="/"
            className="text-sm font-medium text-white/60 transition-colors hover:text-white"
          >
            ← Back to site
          </Link>
        </nav>
      </header>

      <main>
        {/* Hero */}
        <section
          className="flex flex-col items-center justify-center px-6 pb-16 pt-32 text-center"
          style={{ background: '#020817' }}
        >
          <div
            className="pointer-events-none absolute inset-x-0 top-0"
            style={{
              height: '320px',
              background: 'radial-gradient(ellipse 70% 60% at 50% -10%, rgba(8,145,178,0.22) 0%, transparent 70%)',
            }}
          />
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="relative z-10 max-w-xl"
          >
            <motion.p variants={fadeUp} className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-hns-400">
              Contact
            </motion.p>
            <motion.h1 variants={fadeUp} className="mb-3 text-4xl font-bold tracking-tight text-white md:text-5xl">
              Get in touch.
            </motion.h1>
            <motion.p variants={fadeUp} className="text-base text-white/45">
              We read everything. You&apos;ll hear back directly from the team.
            </motion.p>
            <motion.a
              variants={fadeUp}
              href="mailto:support@hnscorpph.com"
              className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-hns-400 hover:text-hns-300 transition-colors"
            >
              support@hnscorpph.com
            </motion.a>
          </motion.div>
        </section>

        {/* Form */}
        <section className="bg-paper px-6 py-16">
          <div className="mx-auto max-w-xl">
            <Suspense fallback={null}>
              <ContactForm />
            </Suspense>
          </div>
        </section>
      </main>
    </>
  );
}
