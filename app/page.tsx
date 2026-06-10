'use client';

import { motion, useInView } from 'framer-motion';
import {
  Terminal,
  MoveUpRight,
  Shield,
  Smartphone,
  WifiOff,
  PhoneCall,
  ArrowRight,
  Globe,
  Mail,
  Menu,
  X,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useRef, useState, useEffect } from 'react';
import { EcosystemHero, BrandSheet } from '@/components/brand';

// ---------------------------------------------------------------------------
// Animation variants
// ---------------------------------------------------------------------------

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09 } },
};

// ---------------------------------------------------------------------------
// Navbar
// ---------------------------------------------------------------------------

const NAV_LINKS = ['About', 'Ecosystem'];
const NAV_PAGE_LINKS = [
  { label: 'Compliance', href: '/compliance' },
  { label: 'Contact', href: '/contact' },
];

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-white/8 bg-[#020817]/80 backdrop-blur-md'
          : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Image src="/logos/hns-icon.png" width={32} height={32} alt="HNScorpPH" className="rounded-lg" />
          <span className="text-sm font-semibold tracking-tight text-white">HNScorpPH</span>
        </div>

        {/* Desktop links */}
        <div className="hidden items-center gap-7 md:flex">
          {NAV_LINKS.map((label) => (
            <a
              key={label}
              href={`#${label.toLowerCase()}`}
              className="text-sm font-medium text-white/60 transition-colors hover:text-white"
            >
              {label}
            </a>
          ))}
          {NAV_PAGE_LINKS.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              className="text-sm font-medium text-white/60 transition-colors hover:text-white"
            >
              {label}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <Link
          href="https://clerque.hnscorpph.com/login"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden items-center gap-2 rounded-lg bg-hns-600 px-4 py-2 text-sm font-semibold text-white transition-all hover:bg-hns-500 md:flex"
        >
          <Terminal className="h-3.5 w-3.5" />
          Launch Clerque
        </Link>

        {/* Mobile hamburger */}
        <button
          className="flex items-center justify-center rounded-lg p-2 text-white/70 md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile drawer */}
      {open && (
        <div className="border-t border-white/8 bg-[#020817]/95 px-6 pb-5 pt-2 md:hidden">
          <div className="flex flex-col gap-3">
            {NAV_LINKS.map((label) => (
              <a
                key={label}
                href={`#${label.toLowerCase()}`}
                onClick={() => setOpen(false)}
                className="py-1.5 text-sm font-medium text-white/60 transition-colors hover:text-white"
              >
                {label}
              </a>
            ))}
            {NAV_PAGE_LINKS.map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                onClick={() => setOpen(false)}
                className="py-1.5 text-sm font-medium text-white/60 transition-colors hover:text-white"
              >
                {label}
              </Link>
            ))}
            <Link
              href="https://clerque.hnscorpph.com/login"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 flex items-center gap-2 rounded-lg bg-hns-600 px-4 py-2.5 text-sm font-semibold text-white"
            >
              <Terminal className="h-3.5 w-3.5" />
              Launch Clerque
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

// ---------------------------------------------------------------------------
// Hero — dark section
// ---------------------------------------------------------------------------

function Hero() {
  return (
    <section
      id="about"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pb-20 pt-28 text-center"
      style={{ background: '#020817' }}
    >
      {/* Cyan radial glow */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0"
        style={{
          height: '520px',
          background:
            'radial-gradient(ellipse 80% 60% at 50% -10%, rgba(8,145,178,0.28) 0%, transparent 70%)',
        }}
      />

      {/* Subtle grid overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
      />

      <motion.div
        className="relative z-10 mx-auto max-w-4xl"
        initial="hidden"
        animate="visible"
        variants={stagger}
      >
        {/* Badges */}
        <motion.div variants={fadeUp} className="mb-8 flex flex-wrap items-center justify-center gap-2.5">
          <span className="flex items-center gap-2 rounded-full border border-hns-600/30 bg-hns-600/10 px-4 py-1.5 text-sm font-medium text-hns-400">
            🇵🇭 Built for Philippine MSMEs
          </span>
          <span className="flex items-center gap-1.5 rounded-full border border-[#d4714a]/30 bg-[#d4714a]/10 px-4 py-1.5 text-sm font-medium text-[#e8845a]">
            <span className="text-base leading-none">✳</span>
            Claude for Startups
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={fadeUp}
          className="mb-6 text-5xl font-bold leading-[1.08] tracking-wordmark-tight text-white md:text-7xl"
        >
          Digital Sovereignty
          <br />
          <span className="text-hns-400">for the Filipino MSME.</span>
        </motion.h1>

        {/* Sub-headline */}
        <motion.p
          variants={fadeUp}
          className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-white/50 md:text-xl"
        >
          HNScorpPH builds software for Filipino businesses and families —
          starting with the problems that foreign software never bothered to solve.
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={fadeUp}
          className="flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <a
            href="#ecosystem"
            className="flex items-center gap-2 rounded-xl bg-hns-600 px-8 py-3.5 text-sm font-semibold text-white shadow-[0_4px_24px_rgba(8,145,178,0.4)] transition-all hover:bg-hns-500 hover:scale-[1.02]"
          >
            Get Started
            <ArrowRight className="h-4 w-4" />
          </a>
          <Link
            href="/contact?topic=partnership"
            className="flex items-center gap-2 rounded-xl border border-white/15 px-8 py-3.5 text-sm font-semibold text-white/70 transition-all hover:border-white/30 hover:text-white"
          >
            <Mail className="h-4 w-4" />
            Partner with HNScorp
          </Link>
        </motion.div>

        {/* Trust strip */}
        <motion.div
          variants={fadeUp}
          className="mt-14 flex flex-wrap items-center justify-center gap-x-8 gap-y-3"
        >
          {[
            'BIR CAS accreditation in progress',
            'GCash & Maya collection tracking',
            'Offline-Capable POS',
            'Filipino-built',
          ].map((item) => (
            <span
              key={item}
              className="flex items-center gap-2 text-xs font-medium text-white/35"
            >
              <span className="h-1 w-1 rounded-full bg-hns-500" />
              {item}
            </span>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// Compliance Ticker
// ---------------------------------------------------------------------------

const TICKER_TEXT =
  'BIR CAS accreditation in progress  •  GCash & Maya collection tracking  •  OR sequential numbering (RR 18-2012)  •  Z-Read & X-Read audit logs  •  Offline-capable POS  •  PFRS-aligned Chart of Accounts  •  PhilGEPS Red Member  •  Government-ready apps  •  Filipino-built  •  Claude for Startups · Anthropic  •  Powered by HNScorpPH  •  ';

function ComplianceTicker() {
  const doubled = TICKER_TEXT + TICKER_TEXT;
  return (
    <div
      id="compliance"
      className="relative overflow-hidden border-y border-hns-100 bg-hns-50 py-3"
    >
      <div className="pointer-events-none absolute bottom-0 left-0 top-0 z-10 w-20 bg-gradient-to-r from-hns-50 to-transparent" />
      <div className="pointer-events-none absolute bottom-0 right-0 top-0 z-10 w-20 bg-gradient-to-l from-hns-50 to-transparent" />
      <div className="flex animate-ticker whitespace-nowrap text-xs font-medium tracking-[0.06em] text-hns-700">
        {doubled}
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Ecosystem Section
// ---------------------------------------------------------------------------

function EcosystemCard({
  children,
  className = '',
  featured = false,
}: {
  children: React.ReactNode;
  className?: string;
  featured?: boolean;
}) {
  return (
    <motion.div
      variants={fadeUp}
      className={`rounded-2xl border bg-paper p-6 transition-all duration-300 hover:shadow-md ${
        featured
          ? 'border-hns-200 shadow-[0_2px_16px_rgba(8,145,178,0.10)]'
          : 'border-ink/8 shadow-[0_1px_4px_rgba(15,23,42,0.04)]'
      } ${className}`}
    >
      {children}
    </motion.div>
  );
}

function EcosystemSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const cards = [
    { icon: Shield, title: 'BIR Compliance', desc: 'Built to CAS specifications — sequential ORs, immutable Z-Read/X-Read logs, and downloadable BIR forms. CAS accreditation in progress.' },
    { icon: WifiOff, title: 'Offline-Capable', desc: 'Sells even without internet. Transactions write locally and sync automatically when you reconnect.' },
    { icon: Smartphone, title: 'Mobile-Ready', desc: 'Works on any device and screen size. Clerque Counter is now live on Google Play as a standalone app.' },
  ];

  return (
    <section id="ecosystem" className="bg-paper py-24 px-6 md:px-12" ref={ref}>
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={stagger}
          className="mb-14 text-center"
        >
          <motion.p variants={fadeUp} className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-clerque-600">
            Clerque
          </motion.p>
          <motion.h2 variants={fadeUp} className="text-4xl font-bold tracking-wordmark-tight text-ink md:text-5xl">
            The Clerque Ecosystem
          </motion.h2>
          <motion.p variants={fadeUp} className="mt-3 text-lg text-ink/50">
            Three modules. One login. Built for Philippine MSMEs.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={stagger}
          className="grid grid-cols-1 gap-4 md:grid-cols-3"
        >
          {/* Clerque — full-width featured card */}
          <EcosystemCard featured className="md:col-span-3">
            <div className="flex flex-col gap-6 md:flex-row md:items-start md:gap-12">
              {/* Left: identity + modules */}
              <div className="flex-1">
                <div className="mb-5 flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl overflow-hidden">
                    <Image src="/logos/clerque-icon.png" width={44} height={44} alt="Clerque" className="rounded-xl" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold tracking-tight text-ink">Clerque</h3>
                    <p className="text-sm text-ink/45">Three modules, one login.</p>
                  </div>
                  <span className="ml-auto rounded-full border border-hns-200 bg-hns-50 px-3 py-0.5 text-xs font-semibold text-hns-700 md:ml-0">
                    Flagship
                  </span>
                </div>
                <div className="flex flex-col gap-2">
                  {[
                    { name: 'Clerque Counter', desc: 'Point of sale — fast checkout, offline-capable, BIR-compliant receipts. Now on Google Play ↗', href: 'https://play.google.com/store/apps/details?id=com.clerque.counter' },
                    { name: 'Clerque Ledger', desc: 'Accounting — double-entry, BIR forms, Books of Account, AP/AR' },
                    { name: 'Clerque Sync', desc: 'Team — time tracking, attendance, and timesheets' },
                  ].map((m) => (
                    m.href ? (
                      <Link key={m.name} href={m.href} target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 rounded-lg border border-clerque-100 bg-clerque-50/60 px-3 py-2.5 transition-colors hover:bg-clerque-100/60">
                        <span className="min-w-[120px] text-[11px] font-semibold text-clerque-700">{m.name}</span>
                        <span className="text-[11px] leading-snug text-ink/50">{m.desc}</span>
                      </Link>
                    ) : (
                      <div key={m.name} className="flex items-start gap-3 rounded-lg border border-clerque-100 bg-clerque-50/60 px-3 py-2.5">
                        <span className="min-w-[120px] text-[11px] font-semibold text-clerque-700">{m.name}</span>
                        <span className="text-[11px] leading-snug text-ink/50">{m.desc}</span>
                      </div>
                    )
                  ))}
                </div>
              </div>
              {/* Right: CTAs */}
              <div className="flex flex-col items-start gap-2 md:pt-1">
                <Link
                  href="https://clerque.hnscorpph.com/login"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-clerque-600 px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-clerque-700 hover:scale-[1.02]"
                >
                  Open Clerque
                  <MoveUpRight className="h-4 w-4" />
                </Link>
                <Link
                  href="https://clerque.hnscorpph.com/demo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-clerque-200 bg-clerque-50 px-5 py-2.5 text-sm font-semibold text-clerque-700 transition-all hover:bg-clerque-100 hover:scale-[1.02]"
                >
                  Try Demo
                  <MoveUpRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </EcosystemCard>

          {/* Clerque feature cards */}
          {cards.map(({ icon: Icon, title, desc }) => (
            <EcosystemCard key={title}>
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl border border-clerque-100 bg-clerque-600/8">
                <Icon className="h-5 w-5 text-clerque-600" />
              </div>
              <h3 className="mb-1.5 text-base font-bold tracking-tight text-ink">{title}</h3>
              <p className="text-sm leading-relaxed text-ink/55">{desc}</p>
            </EcosystemCard>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// Steady Section — separate HNScorpPH product
// ---------------------------------------------------------------------------

function SteadySection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const features = [
    { icon: '📋', title: 'Seizure logging', desc: 'One tap to start. Captures time, GPS, and weather automatically.' },
    { icon: '🚨', title: 'BEACON alerts', desc: 'One-tap emergency alert — SMS and push to all contacts simultaneously.' },
    { icon: '📄', title: 'Neurologist report', desc: 'PDF export with 6-month chart, stats, and full log. Bring it to your appointment.' },
    { icon: '🛡️', title: 'Privacy-first', desc: 'No full names stored. Phone optional. Free — no ads, no subscription.' },
  ];

  return (
    <section className="bg-sand py-24 px-6 md:px-12" ref={ref}>
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={stagger}
        >
          <motion.p variants={fadeUp} className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-steady-600">
            Also by HNScorpPH
          </motion.p>

          <div className="flex flex-col gap-10 md:flex-row md:items-start md:gap-16">
            {/* Left: identity */}
            <motion.div variants={fadeUp} className="md:w-72 shrink-0">
              <div className="mb-4 flex items-center gap-4">
                <Image src="/logos/steady-icon.png" width={56} height={56} alt="Steady" className="rounded-2xl" />
                <div>
                  <h2 className="text-3xl font-bold tracking-wordmark-tight text-ink">Steady</h2>
                  <span className="mt-1 inline-flex items-center gap-1.5 text-xs font-semibold text-steady-700">
                    <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
                    Coming soon
                  </span>
                </div>
              </div>
              <p className="mb-5 text-sm leading-relaxed text-ink/55">
                A free health companion for people living with epilepsy and their caregivers.
                Seizure logging, emergency alerts, and neurologist reports — no subscription, no ads.
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <Link
                  href="https://steady.hnscorpph.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-steady-600 px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-steady-700 hover:scale-[1.02]"
                >
                  Visit Steady
                  <MoveUpRight className="h-4 w-4" />
                </Link>
                <span className="text-xs text-ink/40">Coming to Google Play</span>
              </div>
            </motion.div>

            {/* Right: features grid */}
            <motion.div
              variants={stagger}
              className="grid grid-cols-1 gap-4 sm:grid-cols-2 flex-1"
            >
              {features.map((f) => (
                <motion.div
                  key={f.title}
                  variants={fadeUp}
                  className="rounded-xl border border-ink/8 bg-paper p-5 shadow-[0_1px_4px_rgba(15,23,42,0.04)]"
                >
                  <div className="mb-2 text-xl">{f.icon}</div>
                  <h3 className="mb-1 text-sm font-bold text-ink">{f.title}</h3>
                  <p className="text-xs leading-relaxed text-ink/50">{f.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// TindaPOS Section — separate HNScorpPH product
// ---------------------------------------------------------------------------

function TindaPOSSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const features = [
    { icon: '🛒', title: 'Mabilis na Benta (POS)', desc: 'I-tap ang produkto, auto-compute ang sukli. Checkout sa ilang segundo — kahit walang internet.' },
    { icon: '📦', title: 'Inventory Tracking', desc: 'Alam mo lagi kung ilan pa ang natitira. Babala kung mababa na ang stock.' },
    { icon: '📊', title: 'Buod ng Kita', desc: 'Makita ang benta, gross kita, gastos, at net kita ngayon sa isang screen.' },
    { icon: '📋', title: 'Kasaysayan ng Benta', desc: 'Lahat ng transaksyon naka-save. Pwedeng i-filter by araw, linggo, o buwan.' },
    { icon: '💰', title: 'Profit Tracker', desc: 'Per-product COGS at profit — alam mo kung anong produkto ang kumikita.' },
    { icon: '💡', title: 'Expense Tracker', desc: 'I-track ang kuryente, tubig, at iba pang gastos para makita ang tunay na kita.' },
  ];

  return (
    <section className="bg-paper py-24 px-6 md:px-12" ref={ref}>
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={stagger}
        >
          <motion.p variants={fadeUp} className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-tinda-600">
            Also by HNScorpPH
          </motion.p>

          <div className="flex flex-col gap-10 md:flex-row md:items-start md:gap-16">
            {/* Left: identity */}
            <motion.div variants={fadeUp} className="md:w-72 shrink-0">
              <div className="mb-4 flex items-center gap-4">
                <Image src="/logos/tindapos-icon.svg" width={56} height={56} alt="TindaPOS" className="rounded-2xl" />
                <div>
                  <h2 className="text-3xl font-bold tracking-wordmark-tight text-ink">TindaPOS</h2>
                  <span className="mt-1 inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-700">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    Live
                  </span>
                </div>
              </div>
              <p className="mb-2 text-sm leading-relaxed text-ink/55">
                Ang POS ng bawat tindahan. Offline-first point of sale para sa sari-sari store,
                carinderia, at lahat ng maliit na negosyo sa inyong kapitbahayan.
              </p>
              <p className="mb-5 text-sm leading-relaxed text-ink/40">
                Walang internet? Hindi problema. Lahat ng datos nasa device mo — walang monthly fee,
                walang login, walang backend.
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <Link
                  href="https://tindapos.hnscorpph.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-tinda-600 px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-tinda-700 hover:scale-[1.02]"
                >
                  Visit TindaPOS
                  <MoveUpRight className="h-4 w-4" />
                </Link>
                <Link
                  href="https://play.google.com/store/apps/details?id=com.hnscorp.tindapos"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-ink/15 bg-ink px-4 py-2.5 text-xs font-semibold text-white transition-all hover:bg-ink/80 hover:scale-[1.02]"
                >
                  <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
                    <path d="M3.18 23.76c.3.17.64.24.99.21L15.77 12 12 8.23 3.18 23.76zM20.77 10.43l-2.55-1.47-3.77 3.34 3.77 3.34 2.57-1.48c.73-.42.73-1.31-.02-1.73zM2.36.25C2.13.49 2 .87 2 1.36V22.6c0 .49.13.87.36 1.11L3.1 23l11.1-11.1v-.26L3.1.94 2.36.25zM15.77 12l3.45-3.45-2.11-1.22L15.77 12z"/>
                  </svg>
                  Google Play
                </Link>
              </div>
            </motion.div>

            {/* Right: features grid */}
            <motion.div
              variants={stagger}
              className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 flex-1"
            >
              {features.map((f) => (
                <motion.div
                  key={f.title}
                  variants={fadeUp}
                  className="rounded-xl border border-ink/8 bg-white p-5 shadow-[0_1px_4px_rgba(15,23,42,0.04)]"
                >
                  <div className="mb-2 text-xl">{f.icon}</div>
                  <h3 className="mb-1 text-sm font-bold text-ink">{f.title}</h3>
                  <p className="text-xs leading-relaxed text-ink/50">{f.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// LOCATR Section — separate HNScorpPH product
// ---------------------------------------------------------------------------

function LocatrSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const features = [
    { icon: '🏠', title: 'Verified Listings', desc: 'Every listing verified at the source. No fake posts, no scam photos, no ghost units.' },
    { icon: '🤝', title: 'No Middlemen', desc: 'Landlords and renters connect directly. No locator, no finder\'s fee, no gatekeeping.' },
    { icon: '🔍', title: 'Swipe to Match', desc: 'Browse verified homes. Both parties choose — landlords pick tenants, renters pick homes.' },
    { icon: '🔒', title: 'Safe Reservation', desc: 'Reserve your unit securely while paperwork and move-in dates are coordinated.' },
  ];

  return (
    <section className="bg-sand py-24 px-6 md:px-12" ref={ref}>
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={stagger}
        >
          <motion.p variants={fadeUp} className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-locatr-600">
            Also by HNScorpPH
          </motion.p>

          <div className="flex flex-col gap-10 md:flex-row md:items-start md:gap-16">
            {/* Left: identity */}
            <motion.div variants={fadeUp} className="md:w-72 shrink-0">
              <div className="mb-4 flex items-center gap-4">
                <Image src="/logos/locatr-icon.svg" width={56} height={56} alt="LOCATR" className="rounded-2xl" />
                <div>
                  <h2 className="text-3xl font-bold tracking-wordmark-tight text-ink">LOCATR</h2>
                  <span className="mt-1 inline-flex items-center gap-1.5 text-xs font-semibold text-locatr-700">
                    <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
                    Coming soon
                  </span>
                </div>
              </div>
              <p className="mb-2 text-sm leading-relaxed text-ink/55">
                The verified rental app where Filipino landlords and renters connect directly.
                No scams. No middlemen. Just verified humans and trusted homes.
              </p>
              <p className="mb-5 text-sm leading-relaxed text-ink/40">
                Now live in the Bicol Region. Coming nationwide 2026.
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <Link
                  href="https://locatr.hnscorpph.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-locatr-600 px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-locatr-700 hover:scale-[1.02]"
                >
                  Visit LOCATR
                  <MoveUpRight className="h-4 w-4" />
                </Link>
              </div>
            </motion.div>

            {/* Right: features grid */}
            <motion.div
              variants={stagger}
              className="grid grid-cols-1 gap-4 sm:grid-cols-2 flex-1"
            >
              {features.map((f) => (
                <motion.div
                  key={f.title}
                  variants={fadeUp}
                  className="rounded-xl border border-ink/8 bg-paper p-5 shadow-[0_1px_4px_rgba(15,23,42,0.04)]"
                >
                  <div className="mb-2 text-xl">{f.icon}</div>
                  <h3 className="mb-1 text-sm font-bold text-ink">{f.title}</h3>
                  <p className="text-xs leading-relaxed text-ink/50">{f.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// AltSpaceCW Section — separate HNScorpPH product
// ---------------------------------------------------------------------------

function AltSpaceCWSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const features = [
    { icon: '🗺️', title: 'Real-time floor map', desc: 'See exactly who\'s sitting where, which desks are available, and flag spaces for maintenance — all updated live.' },
    { icon: '📅', title: 'Smart booking flow', desc: 'Members browse, pick time slots, and reserve in seconds. A built-in 30-minute payment window keeps your calendar clean.' },
    { icon: '✅', title: 'Payment confirmation', desc: 'Clients mark payment as done. You review and confirm within your window — or the slot auto-releases. No more ghost bookings.' },
    { icon: '👥', title: 'Member management', desc: 'Add clients and admins directly from the console. Control who has access to which workspace, no back-and-forth emails.' },
    { icon: '📊', title: 'Occupancy analytics', desc: 'Track daily occupancy, revenue trends, and member activity. Make data-driven decisions about your space.' },
    { icon: '🏢', title: 'Multi-tenant ready', desc: 'Run multiple co-working locations under one operator account. Each space gets its own admin, branding, and booking portal.' },
  ];

  return (
    <section className="bg-paper py-24 px-6 md:px-12" ref={ref}>
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={stagger}
        >
          <motion.p variants={fadeUp} className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-altspace-600">
            Also by HNScorpPH
          </motion.p>

          <div className="flex flex-col gap-10 md:flex-row md:items-start md:gap-16">
            {/* Left: identity */}
            <motion.div variants={fadeUp} className="md:w-72 shrink-0">
              <div className="mb-4 flex items-center gap-4">
                <Image src="/logos/altspacecw-icon.svg" width={56} height={56} alt="AltSpaceCW" className="rounded-2xl" />
                <div>
                  <h2 className="text-3xl font-bold tracking-wordmark-tight text-ink">AltSpaceCW</h2>
                  <span className="mt-1 inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-700">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    Live
                  </span>
                </div>
              </div>
              <p className="mb-2 text-sm leading-relaxed text-ink/55">
                Everything your co-working space needs. From first booking to confirmed payment —
                AltSpaceCW handles the operational layer so you can focus on your members.
              </p>
              <p className="mb-5 text-sm leading-relaxed text-ink/40">
                Real-time floor maps, smart booking flows, and multi-tenant support — built for
                Philippine co-working operators.
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <Link
                  href="https://altspacecw.hnscorpph.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-altspace-700 px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-altspace-900 hover:scale-[1.02]"
                >
                  Visit AltSpaceCW
                  <MoveUpRight className="h-4 w-4" />
                </Link>
              </div>
            </motion.div>

            {/* Right: features grid */}
            <motion.div
              variants={stagger}
              className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 flex-1"
            >
              {features.map((f) => (
                <motion.div
                  key={f.title}
                  variants={fadeUp}
                  className="rounded-xl border border-ink/8 bg-white p-5 shadow-[0_1px_4px_rgba(15,23,42,0.04)]"
                >
                  <div className="mb-2 text-xl">{f.icon}</div>
                  <h3 className="mb-1 text-sm font-bold text-ink">{f.title}</h3>
                  <p className="text-xs leading-relaxed text-ink/50">{f.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// Scatto Section — disposable event camera
// ---------------------------------------------------------------------------

function ScattoSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const features = [
    { icon: '🎞', title: 'Limited roll', desc: 'Every guest gets 5–30 shots. When it\'s gone, it\'s gone — just like a real disposable.' },
    { icon: '🎨', title: 'Filter baked in', desc: 'Kodak Gold, Tri-X B&W, Disposable Flash, or Raw — host picks the look once, every camera wears it.' },
    { icon: '⏱', title: 'Delayed reveal', desc: 'Photos can stay locked until morning. Like waiting for film to develop.' },
    { icon: '📱', title: 'QR join, no accounts', desc: 'Guests scan a code and start shooting. No signup, no email, no app friction.' },
    { icon: '📦', title: 'Develop the roll', desc: 'Host downloads a ZIP of every photo plus a printable contact-sheet PDF when the event ends.' },
    { icon: '₱', title: 'Pay once per event', desc: '₱149 to ₱2,999 depending on guest count. No subscriptions. GCash, Maya, GrabPay, cards.' },
  ];

  return (
    <section className="bg-sand py-24 px-6 md:px-12" ref={ref}>
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={stagger}
        >
          <motion.p variants={fadeUp} className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#E55525]">
            Also by HNScorpPH
          </motion.p>

          <div className="flex flex-col gap-10 md:flex-row md:items-start md:gap-16">
            {/* Left: identity */}
            <motion.div variants={fadeUp} className="md:w-72 shrink-0">
              <div className="mb-4 flex items-center gap-4">
                <Image src="/logos/scatto-icon.svg" width={56} height={56} alt="Scatto" className="rounded-2xl" />
                <div>
                  <h2 className="text-3xl font-bold tracking-wordmark-tight text-ink">Scatto</h2>
                  <span className="mt-1 inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-700">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    Live
                  </span>
                </div>
              </div>
              <p className="mb-2 text-sm leading-relaxed text-ink/55">
                One event. Limited shots. Shared memories.
              </p>
              <p className="mb-2 text-sm leading-relaxed text-ink/55">
                Scatto turns any Filipino event into a shared disposable camera. Guests get a limited roll,
                photos bake in a film aesthetic, and the whole event develops into one shared album.
              </p>
              <p className="mb-5 text-sm leading-relaxed text-ink/40">
                Made for debuts, weddings, fiestas, and corporate parties. Paid per event — no subscriptions.
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <Link
                  href="https://scatto.hnscorpph.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold text-white transition-all hover:scale-[1.02]"
                  style={{ background: '#FF6B35' }}
                >
                  Visit Scatto
                  <MoveUpRight className="h-4 w-4" />
                </Link>
                {/* Google Play — link TBD */}
                <div className="inline-flex items-center gap-2 rounded-xl border border-ink/15 bg-ink/5 px-4 py-2.5 text-xs font-semibold text-ink/35 cursor-not-allowed select-none">
                  <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
                    <path d="M3.18 23.76c.3.17.64.24.99.21L15.77 12 12 8.23 3.18 23.76zM20.77 10.43l-2.55-1.47-3.77 3.34 3.77 3.34 2.57-1.48c.73-.42.73-1.31-.02-1.73zM2.36.25C2.13.49 2 .87 2 1.36V22.6c0 .49.13.87.36 1.11L3.1 23l11.1-11.1v-.26L3.1.94 2.36.25zM15.77 12l3.45-3.45-2.11-1.22L15.77 12z"/>
                  </svg>
                  Google Play · Coming soon
                </div>
              </div>
              {/* Trust signals */}
              <div className="mt-5 flex flex-col gap-1.5">
                {['4 film looks · 4 pricing tiers · 0 subscriptions', 'GCash · Maya · GrabPay · Card via PayMongo', 'Photos stored in Singapore · No ML training · No ads'].map(t => (
                  <span key={t} className="text-[11px] leading-relaxed text-ink/35">{t}</span>
                ))}
              </div>
            </motion.div>

            {/* Right: features grid */}
            <motion.div
              variants={stagger}
              className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 flex-1"
            >
              {features.map((f) => (
                <motion.div
                  key={f.title}
                  variants={fadeUp}
                  className="rounded-xl border border-ink/8 bg-paper p-5 shadow-[0_1px_4px_rgba(15,23,42,0.04)]"
                >
                  <div className="mb-2 text-xl">{f.icon}</div>
                  <h3 className="mb-1 text-sm font-bold text-ink">{f.title}</h3>
                  <p className="text-xs leading-relaxed text-ink/50">{f.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// Government-Ready Section
// ---------------------------------------------------------------------------

function GovReadySection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section ref={ref} className="bg-paper py-20 px-6 md:px-12">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={stagger}
        >
          {/* Header */}
          <div className="flex flex-col gap-10 md:flex-row md:items-center md:gap-16">
            <motion.div variants={fadeUp} className="flex-1">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-konek-600">
                Government-Ready
              </p>
              <h2 className="mb-4 text-3xl font-bold tracking-wordmark-tight text-ink md:text-4xl">
                Not just for businesses.
                <br />
                <span className="text-ink/45">Built for the barangay, too.</span>
              </h2>
              <p className="mb-5 max-w-xl text-sm leading-relaxed text-ink/55">
                HNScorpPH builds software for Filipino businesses and for Filipino government — from
                the smallest sari-sari store to the barangay hall. Our government products are
                designed around Philippine procurement law, DILG mandates, and real LGU workflows.
              </p>
              <p className="text-sm leading-relaxed text-ink/55">
                Two government apps are in development. Details are not public yet — but they&apos;re
                coming. When they ship, every barangay and LGU in the country will be able to procure
                them directly through PhilGEPS, no bidding required.
              </p>
            </motion.div>

            {/* PhilGEPS credential card */}
            <motion.div variants={fadeUp} className="md:w-80 shrink-0">
              <div className="rounded-2xl border border-konek-200 bg-konek-50 p-7">
                <div className="mb-4 flex items-center gap-3">
                  <Image
                    src="/logos/philgeps-logo.png"
                    width={80}
                    height={44}
                    alt="PhilGEPS"
                    className="object-contain"
                  />
                  <div>
                    <div className="text-sm font-bold text-ink">Red Member</div>
                    <div className="text-xs text-ink/50">Philippine Government Electronic Procurement</div>
                  </div>
                </div>
                <div className="space-y-2.5 text-xs leading-relaxed text-ink/60">
                  <div className="flex items-start gap-2">
                    <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-konek-500" />
                    HNScorpPH is a registered PhilGEPS Red Member — eligible for government procurement transactions.
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-konek-500" />
                    LGUs can procure HNScorpPH products via Small Value Procurement (SVP) under RA 9184 — no public bidding required.
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-konek-500" />
                    Priced under the ₱50,000 SVP threshold per product per year.
                  </div>
                </div>
                <div className="mt-5 border-t border-konek-200 pt-4">
                  <Link
                    href="/contact?topic=partnership"
                    className="inline-flex items-center gap-2 text-xs font-semibold text-konek-700 hover:underline"
                  >
                    Inquire for your LGU
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Two product teasers */}
          <motion.div variants={stagger} className="mt-10 grid gap-4 sm:grid-cols-2">
            {[
              {
                icon: '/logos/sangguni-icon.svg',
                name: 'Sangguni',
                color: '#103A78',
                desc: 'A live government product by HNScorpPH. Details are not public yet.',
                tag: 'Live',
                tagColor: 'text-emerald-700',
                dot: 'bg-emerald-500',
              },
              {
                icon: '/logos/konekbarangay-icon.svg',
                name: 'KonekBarangay',
                color: '#16A34A',
                desc: 'An upcoming government product by HNScorpPH. Details coming soon.',
                tag: 'Coming Soon',
                tagColor: 'text-sky-700',
                dot: 'bg-sky-400',
              },
            ].map((p) => (
              <motion.div
                key={p.name}
                variants={fadeUp}
                className="flex items-start gap-4 rounded-xl border border-ink/8 bg-white p-5 shadow-[0_1px_4px_rgba(15,23,42,0.04)]"
              >
                <Image src={p.icon} width={44} height={44} alt={p.name} className="rounded-xl shrink-0" />
                <div>
                  <div className="mb-1 flex items-center gap-2">
                    <span className="text-sm font-bold text-ink">{p.name}</span>
                    <span className={`flex items-center gap-1 text-[10px] font-semibold uppercase tracking-wide ${p.tagColor}`}>
                      <span className={`h-1.5 w-1.5 rounded-full ${p.dot}`} />
                      {p.tag}
                    </span>
                  </div>
                  <p className="text-xs leading-relaxed text-ink/50">{p.desc}</p>
                  <p className="mt-1.5 text-[10px] font-medium text-ink/30">by HNScorpPH · Government-ready · LGU</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// Why Clerque — feature section
// ---------------------------------------------------------------------------

function WorkflowSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const features = [
    {
      icon: Globe,
      title: 'GCash & Maya Tracking',
      desc: 'Record and reconcile GCash and Maya collections alongside cash. Settlement tracking keeps your BIR records accurate.',
    },
    {
      icon: WifiOff,
      title: 'Offline-Capable POS',
      desc: "Power cut. Dead router. No signal. Clerque writes transactions locally and syncs automatically when you're back online.",
    },
    {
      icon: PhoneCall,
      title: 'Direct Local Support',
      desc: 'Filipino-built means Filipino support. You deal directly with the people who built it — not a foreign helpdesk.',
    },
  ];

  return (
    <section className="bg-sand py-24 px-6 md:px-12" ref={ref}>
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={stagger}
          className="mb-16 text-center"
        >
          <motion.p variants={fadeUp} className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-hns-600">
            Why Clerque
          </motion.p>
          <motion.h2 variants={fadeUp} className="text-4xl font-bold tracking-wordmark-tight text-ink md:text-5xl">
            Built for the Filipino Workflow
          </motion.h2>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={stagger}
          className="grid grid-cols-1 gap-5 md:grid-cols-3"
        >
          {features.map(({ icon: Icon, title, desc }) => (
            <motion.div
              key={title}
              variants={fadeUp}
              className="group rounded-2xl border border-ink/8 bg-paper p-8 shadow-[0_1px_4px_rgba(15,23,42,0.04)] transition-all duration-300 hover:border-hns-200 hover:shadow-[0_4px_20px_rgba(8,145,178,0.08)]"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-hns-100 bg-hns-50 transition-all duration-300 group-hover:bg-hns-100">
                <Icon className="h-6 w-6 text-hns-600" />
              </div>
              <h3 className="mb-3 text-xl font-bold tracking-tight text-ink">{title}</h3>
              <p className="text-sm leading-relaxed text-ink/55">{desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// Roadmap Section
// ---------------------------------------------------------------------------

const ROADMAP = [
  {
    phase: 'Now',
    label: 'Live',
    items: [
      {
        name: 'HNScorpPH',
        desc: 'Platform infrastructure, design system, and company website live. SEC OPC filing in progress.',
        status: 'done' as const,
      },
      {
        name: 'Clerque',
        desc: 'Web app live — POS, OR sequential numbering, Z-Read/X-Read, BIR forms (2550Q, 1701Q, 2551Q), Books of Account, AP/AR modules.',
        status: 'done' as const,
      },
      {
        name: 'Clerque Counter on Google Play',
        desc: 'Standalone mobile POS app for Android. Now live on Google Play.',
        status: 'done' as const,
      },
      {
        name: 'Sangguni',
        desc: 'A new HNScorpPH product. Details coming soon.',
        status: 'done' as const,
      },
      {
        name: 'AltSpaceCW',
        desc: 'Co-working space management for Philippine operators. Real-time floor maps, smart booking, payment confirmation, and multi-tenant support.',
        status: 'done' as const,
      },
      {
        name: 'TindaPOS',
        desc: 'Standalone offline POS for Filipino sari-sari stores. Tap to sell, track stock, view daily profit — no internet, no login, no backend.',
        status: 'done' as const,
      },
      {
        name: 'Scatto',
        desc: 'Shared disposable camera for Filipino events. Guests scan a QR, shoot a limited roll with baked-in film looks, and the whole event develops into one shared album.',
        status: 'done' as const,
      },
      {
        name: 'Everafter',
        desc: 'A new HNScorpPH product. Now live at everafter.hnscorpph.com.',
        status: 'done' as const,
      },
    ],
  },
  {
    phase: 'Next',
    label: 'Upcoming',
    items: [
      {
        name: 'Steady',
        desc: 'Free seizure logging and BEACON emergency alert app for people living with epilepsy. Coming to Google Play.',
        status: 'coming-soon' as const,
      },
      {
        name: 'LOCATR',
        desc: 'Verified rental app for the Philippines. Landlords and renters connect directly — no scams, no locator fees. Live in Bicol. Coming nationwide 2026.',
        status: 'coming-soon' as const,
      },
      {
        name: 'KonekBarangay',
        desc: 'A new HNScorpPH product. Details coming soon.',
        status: 'coming-soon' as const,
      },
    ],
  },
  {
    phase: 'Later',
    label: 'Planned',
    items: [
      {
        name: 'BIR CAS Accreditation',
        desc: 'Clerque is built to CAS specifications. Filing for accreditation with the BIR RDO is the next compliance milestone.',
        status: 'planned' as const,
      },
      {
        name: 'Next product',
        desc: 'Another HNScorpPH product in early research. More when there\'s something real to say.',
        status: 'planned' as const,
      },
    ],
  },
];

const STATUS_STYLES = {
  done: { dot: 'bg-emerald-500', label: 'Live', text: 'text-emerald-700' },
  'coming-soon': { dot: 'bg-sky-400', label: 'Coming Soon', text: 'text-sky-700' },
  planned: { dot: 'bg-ink/20', label: 'Planned', text: 'text-ink/40' },
};

function RoadmapSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section ref={ref} className="bg-paper px-8 py-20 md:px-14 md:py-24">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={stagger}
        >
          <motion.p variants={fadeUp} className="text-[11px] font-medium uppercase tracking-[0.18em] text-ink/40">
            What We&apos;re Building · The HNScorpPH Roadmap
          </motion.p>
          <motion.h2 variants={fadeUp} className="mt-3 max-w-2xl text-3xl font-semibold leading-tight tracking-wordmark-tight text-ink md:text-4xl">
            One product at a time.{' '}
            <span className="text-ink/45">Each one solving a real Filipino problem.</span>
          </motion.h2>
        </motion.div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {ROADMAP.map((phase, pi) => (
            <motion.div
              key={phase.phase}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 + pi * 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="mb-4 flex items-center gap-2">
                <span className="text-2xl font-bold tracking-tight text-ink">{phase.phase}</span>
                <span className="rounded-full bg-ink/5 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-ink/40">
                  {phase.label}
                </span>
              </div>
              <div className="flex flex-col gap-4">
                {phase.items.map((item) => {
                  const s = STATUS_STYLES[item.status];
                  return (
                    <div
                      key={item.name}
                      className="rounded-xl border border-ink/8 bg-paper p-5 shadow-[0_1px_3px_rgba(15,23,42,0.04)]"
                    >
                      <div className="mb-2 flex items-center justify-between gap-2">
                        <span className="text-sm font-semibold text-ink">{item.name}</span>
                        <span className={`flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-wider ${s.text}`}>
                          <span className={`h-1.5 w-1.5 rounded-full ${s.dot}`} />
                          {s.label}
                        </span>
                      </div>
                      <p className="text-[11px] leading-relaxed text-ink/50">{item.desc}</p>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// Anthropic / Claude for Startups — supported-by strip
// ---------------------------------------------------------------------------

function AnthropicSection() {
  return (
    <section style={{ background: '#fdf7f3' }} className="border-t border-[#e8d4c8]/60 px-6 py-14 md:px-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 text-center md:flex-row md:items-center md:text-left md:gap-12">
        {/* Claude mark + wordmark */}
        <div className="flex shrink-0 flex-col items-center gap-2 md:items-start">
          <span className="text-5xl leading-none text-[#d4714a]">✳</span>
          <div>
            <div className="text-base font-bold tracking-tight text-[#2d1a12]">Claude for Startups</div>
            <div className="text-xs font-medium text-[#8a5a47]">by Anthropic</div>
          </div>
        </div>

        {/* Divider */}
        <div className="hidden h-14 w-px bg-[#e0c8be] md:block" />

        {/* Copy */}
        <div className="flex-1">
          <p className="text-sm leading-relaxed text-[#4a2e24]">
            <span className="font-semibold">HNScorpPH is a member of the Claude for Startups program by Anthropic.</span>
            {' '}This gives HNScorpPH direct access to the team building Claude, early access to new capabilities, and a community of founders working on similar problems — so every product we ship benefits from the frontier of AI development.
          </p>
        </div>

        {/* Badge */}
        <div className="shrink-0">
          <div className="rounded-xl border border-[#d4714a]/25 bg-white px-5 py-3.5 shadow-[0_1px_4px_rgba(212,113,74,0.08)]">
            <div className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#8a5a47]">Program member</div>
            <div className="mt-0.5 text-sm font-bold text-[#2d1a12]">Claude for Startups</div>
            <div className="mt-0.5 text-[11px] text-[#8a5a47]">Anthropic · 2026</div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// CTA Banner — dark section
// ---------------------------------------------------------------------------

function CTABanner() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      ref={ref}
      className="relative overflow-hidden py-28 px-6"
      style={{ background: '#020817' }}
    >
      <div
        className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2"
        style={{
          width: '600px',
          height: '300px',
          background: 'radial-gradient(ellipse at 50% 0%, rgba(8,145,178,0.18) 0%, transparent 70%)',
        }}
      />

      <motion.div
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        variants={stagger}
        className="relative z-10 mx-auto max-w-3xl text-center"
      >
        <motion.div variants={fadeUp} className="mb-6 inline-flex">
          <span className="rounded-full border border-hns-600/30 bg-hns-600/10 px-4 py-1.5 text-xs font-semibold text-hns-400">
            Get Started Today
          </span>
        </motion.div>

        <motion.h2 variants={fadeUp} className="mb-5 text-4xl font-bold tracking-wordmark-tight text-white md:text-6xl">
          Ready to digitize
          <br />
          your business?
        </motion.h2>

        <motion.p variants={fadeUp} className="mb-10 text-lg text-white/50">
          Clerque is live. Be one of the first Filipino MSMEs to run on it.
        </motion.p>

        <motion.div
          variants={fadeUp}
          className="flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <Link
            href="https://clerque.hnscorpph.com/login"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-xl bg-hns-600 px-8 py-4 text-sm font-semibold text-white shadow-[0_4px_20px_rgba(8,145,178,0.4)] transition-all hover:bg-hns-500 hover:scale-[1.02]"
          >
            Start with Clerque
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/contact?topic=sales"
            className="flex items-center gap-2 rounded-xl border border-white/15 px-8 py-4 text-sm font-semibold text-white/70 transition-all hover:border-white/30 hover:text-white"
          >
            <Mail className="h-4 w-4" />
            Contact Sales
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// Footer
// ---------------------------------------------------------------------------

function Footer() {
  return (
    <footer className="border-t border-ink/8 bg-paper px-6 pt-12 pb-8 md:px-12">
      <div className="mx-auto max-w-6xl">
        {/* Top row: brand + product links */}
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <Image src="/logos/hns-icon.png" width={36} height={36} alt="HNScorpPH" className="rounded-[8px]" />
            <div className="flex flex-col leading-tight">
              <span className="text-sm font-semibold text-ink">HNScorpPH</span>
              <span className="text-[11px] text-ink/45">Software built for the Philippines.</span>
            </div>
          </div>

          {/* Link columns */}
          <div className="flex flex-wrap gap-x-12 gap-y-6 text-sm text-ink/50">
            <div className="flex flex-col gap-2.5">
              <span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-ink/30">Products</span>
              <Link href="https://clerque.hnscorpph.com/login" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-ink">Clerque</Link>
              <Link href="https://tindapos.hnscorpph.com" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-ink">TindaPOS</Link>
              <Link href="https://altspacecw.hnscorpph.com" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-ink">AltSpaceCW</Link>
              <Link href="https://scatto.hnscorpph.com" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-ink">Scatto</Link>
              <Link href="https://everafter.hnscorpph.com" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-ink">Everafter</Link>
            </div>
            <div className="flex flex-col gap-2.5">
              <span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-ink/30">Coming Soon</span>
              <Link href="https://steady.hnscorpph.com" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-ink">Steady</Link>
              <Link href="https://locatr.hnscorpph.com" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-ink">LOCATR</Link>
            </div>
            <div className="flex flex-col gap-2.5">
              <span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-ink/30">Company</span>
              <Link href="/contact" className="transition-colors hover:text-ink">Contact</Link>
              <Link href="/compliance" className="transition-colors hover:text-ink">Compliance</Link>
              <a href="mailto:support@hnscorpph.com" className="transition-colors hover:text-ink">support@hnscorpph.com</a>
            </div>
          </div>
        </div>

        {/* Bottom row: copyright + legal */}
        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-ink/8 pt-6 text-xs text-ink/35 md:flex-row">
          <span>© 2026 HNScorpPH OPC. All rights reserved.</span>
          <div className="flex gap-5">
            <Link href="/privacy" className="transition-colors hover:text-ink">Privacy</Link>
            <Link href="/terms" className="transition-colors hover:text-ink">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ComplianceTicker />
        <EcosystemSection />
        <WorkflowSection />
        <SteadySection />
        <TindaPOSSection />
        <LocatrSection />
        <AltSpaceCWSection />
        <ScattoSection />
        <GovReadySection />

        {/* Brand identity */}
        <EcosystemHero />

        <RoadmapSection />

        <BrandSheet />
        <AnthropicSection />
        <CTABanner />
      </main>
      <Footer />
    </>
  );
}
