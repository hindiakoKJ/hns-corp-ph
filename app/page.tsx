'use client';

import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';
import {
  Terminal,
  Zap,
  MoveUpRight,
  Shield,
  Cloud,
  Smartphone,
  WifiOff,
  PhoneCall,
  BarChart3,
  CheckCircle2,
  ArrowRight,
  Globe,
  TrendingUp,
  Menu,
  X,
} from 'lucide-react';
import Link from 'next/link';
import { useRef, useEffect, useState } from 'react';
import { EcosystemHero, BrandSheet, EndorsementLockup } from '@/components/brand';
import { ClerqueLogo, SteadyLogo, HNSLogo } from '@/components/brand/logos';

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function useCountUp(target: number, inView: boolean, decimals = 0) {
  const motionVal = useMotionValue(0);
  const spring = useSpring(motionVal, { stiffness: 60, damping: 20 });
  const [display, setDisplay] = useState('0');

  useEffect(() => {
    if (inView) motionVal.set(target);
  }, [inView, target, motionVal]);

  useEffect(() => {
    const unsub = spring.on('change', (v: number) => {
      setDisplay(
        decimals > 0 ? v.toFixed(decimals) : Math.round(v).toLocaleString()
      );
    });
    return unsub;
  }, [spring, decimals]);

  return display;
}

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

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-paper/95 backdrop-blur-md shadow-[0_1px_0_rgba(15,23,42,0.08)]'
          : 'bg-paper/80 backdrop-blur-sm'
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:px-10">
        {/* Logo */}
        <div className="flex items-center gap-2.5">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-hns-600">
            <HNSLogo size={20} color="#fff" />
          </div>
          <span className="text-base font-semibold tracking-tight text-ink">HNScorpPH</span>
        </div>

        {/* Nav links — desktop */}
        <div className="hidden items-center gap-8 md:flex">
          {['About', 'Ecosystem', 'Products'].map((label) => (
            <a
              key={label}
              href={`#${label.toLowerCase()}`}
              className="text-sm font-medium text-ink/55 transition-colors hover:text-ink"
            >
              {label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden items-center gap-3 md:flex">
          <Link
            href="https://clerque.hnscorpph.com/login"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 rounded-lg bg-hns-600 px-4 py-2 text-sm font-semibold text-white transition-all hover:bg-hns-700"
          >
            <Terminal className="h-3.5 w-3.5" />
            Launch Clerque
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="flex h-9 w-9 items-center justify-center rounded-lg border border-ink/10 text-ink/60 md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-ink/8 bg-paper px-6 pb-5 pt-3 md:hidden">
          <div className="flex flex-col gap-3">
            {['About', 'Ecosystem', 'Products'].map((label) => (
              <a
                key={label}
                href={`#${label.toLowerCase()}`}
                onClick={() => setOpen(false)}
                className="py-1 text-sm font-medium text-ink/60 hover:text-ink"
              >
                {label}
              </a>
            ))}
            <Link
              href="https://clerque.hnscorpph.com/login"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 flex items-center justify-center gap-2 rounded-lg bg-hns-600 py-2.5 text-sm font-semibold text-white"
            >
              Launch Clerque
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

// ---------------------------------------------------------------------------
// Hero Dashboard Card (light)
// ---------------------------------------------------------------------------

function DashboardCard() {
  const bars = [40, 65, 50, 80, 70, 90];

  return (
    <div className="animate-float mx-auto mt-14 w-full max-w-sm rounded-2xl border border-ink/10 bg-paper p-5 shadow-[0_8px_40px_rgba(15,23,42,0.10)]">
      {/* Card header */}
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex h-6 w-6 items-center justify-center rounded-md bg-clerque-600/10">
            <ClerqueLogo size={14} className="text-clerque-600" />
          </div>
          <span className="text-sm font-semibold text-ink">Clerque Suite</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
          </span>
          <span className="text-xs font-medium text-emerald-600">Live</span>
        </div>
      </div>

      {/* Metrics */}
      <div className="mb-4 space-y-1.5">
        {[
          { label: "Today's Sales", value: '₱12,847', color: 'text-ink' },
          { label: 'Active Shifts', value: '3', color: 'text-ink' },
          { label: 'Pending Sync', value: '0', color: 'text-emerald-600' },
        ].map(({ label, value, color }) => (
          <div key={label} className="flex items-center justify-between rounded-lg bg-sand px-3 py-1.5">
            <span className="text-xs text-ink/50">{label}</span>
            <span className={`text-xs font-semibold ${color}`}>{value}</span>
          </div>
        ))}
      </div>

      {/* Mini bar chart */}
      <div className="mb-4 flex h-10 items-end gap-1">
        {bars.map((h, i) => (
          <div
            key={i}
            className="flex-1 rounded-sm bg-hns-600"
            style={{ height: `${h}%`, opacity: 0.35 + i * 0.1 }}
          />
        ))}
      </div>

      <div className="border-t border-ink/6 pt-3 text-center text-[10px] text-ink/35">
        Powered by HNScorpPH Infrastructure
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Hero Section
// ---------------------------------------------------------------------------

function Hero() {
  return (
    <section
      id="about"
      className="relative flex min-h-screen flex-col items-center justify-center px-6 pb-16 pt-28 text-center"
      style={{
        background: 'linear-gradient(180deg, #F0FDFA 0%, #FFFFFF 55%, #FAFAF9 100%)',
      }}
    >
      {/* Subtle top accent */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, #0891B2, transparent)' }}
      />

      <motion.div
        className="relative z-10 mx-auto max-w-4xl"
        initial="hidden"
        animate="visible"
        variants={stagger}
      >
        {/* Badge */}
        <motion.div variants={fadeUp} className="mb-6 inline-flex">
          <span className="flex items-center gap-2 rounded-full border border-hns-200 bg-hns-50 px-4 py-1.5 text-sm font-medium text-hns-700">
            🇵🇭 Built for Philippine MSMEs
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={fadeUp}
          className="mb-5 text-5xl font-bold leading-[1.1] tracking-wordmark-tight text-ink md:text-7xl"
        >
          Digital Sovereignty
          <br />
          <span className="text-hns-600">for the Filipino MSME.</span>
        </motion.h1>

        {/* Sub-headline */}
        <motion.p
          variants={fadeUp}
          className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-ink/55 md:text-xl"
        >
          HNScorpPH provides the high-tech infrastructure local businesses need
          to compete in the digital economy — POS, payroll, ledger, and more.
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={fadeUp}
          className="mb-4 flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <Link
            href="https://clerque.hnscorpph.com/login"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-xl bg-hns-600 px-8 py-3.5 text-sm font-semibold text-white shadow-[0_4px_16px_rgba(8,145,178,0.35)] transition-all hover:bg-hns-700 hover:shadow-[0_6px_20px_rgba(8,145,178,0.45)] hover:scale-[1.02]"
          >
            Login to Clerque
            <ArrowRight className="h-4 w-4" />
          </Link>
          <button className="flex items-center gap-2 rounded-xl border border-ink/12 bg-paper px-8 py-3.5 text-sm font-semibold text-ink/70 transition-all hover:border-ink/20 hover:text-ink hover:scale-[1.02]">
            Partner with HNScorp
          </button>
        </motion.div>

        {/* Dashboard card */}
        <motion.div variants={fadeUp}>
          <DashboardCard />
        </motion.div>
      </motion.div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// Compliance Ticker
// ---------------------------------------------------------------------------

const TICKER_TEXT =
  'BIR CAS-Ready  •  GCash & Maya Integrated  •  100% Local Support  •  SEC Registered (OPC)  •  99.9% Uptime SLA  •  Offline-First PWA  •  Powered by HNScorpPH  •  ';

function ComplianceTicker() {
  const doubled = TICKER_TEXT + TICKER_TEXT;

  return (
    <div
      id="compliance"
      className="relative overflow-hidden border-y border-hns-100 bg-hns-50 py-3"
    >
      <div className="pointer-events-none absolute bottom-0 left-0 top-0 z-10 w-20 bg-gradient-to-r from-hns-50 to-transparent" />
      <div className="pointer-events-none absolute bottom-0 right-0 top-0 z-10 w-20 bg-gradient-to-l from-hns-50 to-transparent" />
      <div
        className="flex animate-ticker whitespace-nowrap text-xs font-medium tracking-[0.06em] text-hns-700"
      >
        {doubled}
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Ecosystem Bento Grid
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
    { icon: Shield, title: 'BIR Compliance', desc: 'CAS-Ready, 2550Q, EIS e-invoicing built in. Stay compliant without the headache.' },
    { icon: Cloud, title: 'Cloud Infrastructure', desc: 'Railway + Vercel. Asia-Pacific region. 99.9% uptime backed by enterprise SLA.' },
    { icon: Smartphone, title: 'Mobile-Native PWA', desc: 'Works on any device. Install to homescreen. No app store needed.' },
    { icon: WifiOff, title: 'Offline Mode', desc: 'Sells even without internet. Auto-syncs when back online — zero data loss.' },
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
          <motion.p
            variants={fadeUp}
            className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-hns-600"
          >
            Products
          </motion.p>
          <motion.h2 variants={fadeUp} className="text-4xl font-bold tracking-wordmark-tight text-ink md:text-5xl">
            The Clerque Ecosystem
          </motion.h2>
          <motion.p variants={fadeUp} className="mt-3 text-lg text-ink/50">
            Every tool a Filipino business owner needs, unified.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={stagger}
          className="grid grid-cols-1 gap-4 md:grid-cols-3"
        >
          {/* Featured card */}
          <EcosystemCard featured className="relative overflow-hidden md:col-span-2">
            <div className="mb-4 flex items-start justify-between">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-clerque-600/10">
                <ClerqueLogo size={24} className="text-clerque-600" />
              </div>
              <span className="rounded-full border border-hns-200 bg-hns-50 px-3 py-0.5 text-xs font-semibold text-hns-700">
                Flagship
              </span>
            </div>
            <h3 className="mb-2 text-2xl font-bold tracking-tight text-ink">Clerque Suite</h3>
            <p className="mb-5 text-sm leading-relaxed text-ink/55">
              The all-in-one business platform for Philippine MSMEs. Manage your point of sale,
              process payroll, and keep your books — all from a single, beautifully designed interface.
            </p>
            <div className="mb-6 flex flex-wrap gap-2">
              {['POS', 'Payroll', 'Accounting', 'BIR'].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-clerque-200 bg-clerque-50 px-3 py-1 text-xs font-medium text-clerque-700"
                >
                  {tag}
                </span>
              ))}
            </div>
            <Link
              href="https://clerque.hnscorpph.com/login"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-clerque-600 px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-clerque-700 hover:scale-[1.02]"
            >
              Visit App
              <MoveUpRight className="h-4 w-4" />
            </Link>
          </EcosystemCard>

          {/* Steady card */}
          <EcosystemCard>
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-steady-600/10">
              <SteadyLogo size={24} className="text-steady-600" />
            </div>
            <h3 className="mb-1.5 text-lg font-bold tracking-tight text-ink">Steady</h3>
            <p className="mb-4 text-sm leading-relaxed text-ink/55">
              A calm, empathetic health companion for seizure tracking. Safety and peace of mind, always on hand.
            </p>
            <span className="rounded-full border border-steady-200 bg-steady-50 px-3 py-1 text-xs font-medium text-steady-700">
              Health Companion
            </span>
          </EcosystemCard>

          {/* Feature cards */}
          {cards.map(({ icon: Icon, title, desc }) => (
            <EcosystemCard key={title}>
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-hns-600/8 border border-hns-100">
                <Icon className="h-5 w-5 text-hns-600" />
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
// Filipino Workflow Section
// ---------------------------------------------------------------------------

function WorkflowSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const features = [
    {
      icon: Globe,
      title: 'GCash & Maya Ready',
      desc: 'Accept digital payments natively. No third-party plugins needed. Instant settlement built in.',
    },
    {
      icon: WifiOff,
      title: 'Offline-First Architecture',
      desc: "Patchy internet? No problem. Clerque queues transactions and syncs automatically when you're back online.",
    },
    {
      icon: PhoneCall,
      title: 'Local Support, Always',
      desc: 'Filipino support team. Same timezone. Real humans who understand your business and speak your language.',
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
          <motion.p
            variants={fadeUp}
            className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-hns-600"
          >
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
// Animated SVG Line Chart
// ---------------------------------------------------------------------------

function AnimatedLineChart({ inView }: { inView: boolean }) {
  const pathRef = useRef<SVGPathElement>(null);
  const [length, setLength] = useState(0);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    if (pathRef.current) {
      const l = pathRef.current.getTotalLength();
      setLength(l);
      setOffset(l);
    }
  }, []);

  useEffect(() => {
    if (inView && length > 0) {
      const start = performance.now();
      const duration = 1800;
      const tick = (now: number) => {
        const elapsed = now - start;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        setOffset(length * (1 - eased));
        if (progress < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    }
  }, [inView, length]);

  const points: [number, number][] = [
    [0, 80], [40, 72], [80, 68], [120, 55], [160, 50],
    [200, 42], [240, 30], [280, 22], [320, 10],
  ];

  const d =
    `M ${points[0][0]} ${points[0][1]} ` +
    points.slice(1).map(([x, y]) => `L ${x} ${y}`).join(' ');

  const fillD = d + ` L 320 90 L 0 90 Z`;

  return (
    <svg viewBox="0 0 320 90" className="w-full" style={{ height: '100px' }}>
      <defs>
        <linearGradient id="chartFill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="rgba(8,145,178,0.18)" />
          <stop offset="100%" stopColor="rgba(8,145,178,0)" />
        </linearGradient>
      </defs>
      <path d={fillD} fill="url(#chartFill)" opacity={inView ? 1 : 0} style={{ transition: 'opacity 0.5s 0.5s' }} />
      <path
        ref={pathRef}
        d={d}
        fill="none"
        stroke="#0891B2"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray={length}
        strokeDashoffset={offset}
      />
      {inView && (
        <circle cx="320" cy="10" r="4" fill="#0891B2">
          <animate attributeName="r" values="3;5;3" dur="1.5s" repeatCount="indefinite" />
        </circle>
      )}
      {['Jan', 'Mar', 'Jun', 'Sep', 'Dec'].map((label, i) => (
        <text key={label} x={i * 80} y="88" fontSize="8" fill="rgba(15,23,42,0.3)" textAnchor="middle">
          {label}
        </text>
      ))}
    </svg>
  );
}

// ---------------------------------------------------------------------------
// HUD Section (Business Health)
// ---------------------------------------------------------------------------

function HUDSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const sales = useCountUp(2.4, inView, 1);
  const txCount = useCountUp(1200, inView);
  const uptime = useCountUp(99.9, inView, 1);

  const metrics = [
    { label: 'Total Processed', value: `₱${sales}M`, icon: TrendingUp },
    { label: 'Transactions', value: `${txCount}+`, icon: BarChart3 },
    { label: 'Uptime', value: `${uptime}%`, icon: CheckCircle2 },
  ];

  return (
    <section className="bg-paper py-24 px-6 md:px-12" ref={ref}>
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={stagger}
          className="mb-14 text-center"
        >
          <motion.p
            variants={fadeUp}
            className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-hns-600"
          >
            Live Dashboard
          </motion.p>
          <motion.h2 variants={fadeUp} className="text-4xl font-bold tracking-wordmark-tight text-ink md:text-5xl">
            See Your Business Health
            <br />
            <span className="text-hns-600">in Real Time</span>
          </motion.h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, delay: 0.15 }}
          className="rounded-3xl border border-ink/8 bg-sand p-8 shadow-[0_2px_16px_rgba(15,23,42,0.06)] md:p-12"
        >
          {/* Metrics */}
          <div className="mb-8 grid grid-cols-1 gap-4 md:grid-cols-3">
            {metrics.map(({ label, value, icon: Icon }) => (
              <div
                key={label}
                className="rounded-2xl border border-ink/8 bg-paper p-6 text-center shadow-[0_1px_4px_rgba(15,23,42,0.04)]"
              >
                <Icon className="mx-auto mb-3 h-6 w-6 text-hns-600" />
                <div className="mb-1 text-3xl font-bold tracking-tight text-ink md:text-4xl">{value}</div>
                <div className="text-xs font-medium uppercase tracking-wider text-ink/40">{label}</div>
              </div>
            ))}
          </div>

          {/* Chart */}
          <div className="rounded-2xl border border-ink/8 bg-paper p-6">
            <div className="mb-4 flex items-center justify-between">
              <span className="text-sm font-semibold text-ink">Revenue (₱)</span>
              <span className="rounded bg-hns-50 px-2 py-0.5 text-xs font-medium text-hns-700">2026</span>
            </div>
            <AnimatedLineChart inView={inView} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// CTA Banner (intentionally dark for contrast)
// ---------------------------------------------------------------------------

function CTABanner() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-ink py-28 px-6"
    >
      {/* Accent glow */}
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

        <motion.h2 variants={fadeUp} className="mb-5 text-4xl font-bold tracking-wordmark-tight text-paper md:text-6xl">
          Ready to digitize
          <br />
          your business?
        </motion.h2>

        <motion.p variants={fadeUp} className="mb-10 text-lg text-paper/50">
          Join hundreds of Filipino MSMEs already running on Clerque.
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
          <button className="flex items-center gap-2 rounded-xl border border-paper/15 px-8 py-4 text-sm font-semibold text-paper/70 transition-all hover:border-paper/30 hover:text-paper">
            Contact Sales
          </button>
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
    <footer className="border-t border-ink/8 bg-paper py-10 px-6 md:px-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 text-sm text-ink/40 md:flex-row">
        <div className="flex items-center gap-2.5">
          <div className="flex h-7 w-7 items-center justify-center rounded-md bg-hns-600">
            <HNSLogo size={16} color="#fff" />
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-sm font-semibold text-ink">HNScorpPH</span>
            <span className="text-[10px]">Powering Philippine MSMEs since 2024.</span>
          </div>
        </div>

        <div className="flex items-center gap-6">
          <Link
            href="https://clerque.hnscorpph.com/login"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-ink"
          >
            Clerque
          </Link>
          <a href="#" className="transition-colors hover:text-ink">Privacy</a>
          <a href="#" className="transition-colors hover:text-ink">Terms</a>
        </div>

        <div className="text-xs">© 2026 HNScorpPH OPC. All rights reserved.</div>
      </div>
    </footer>
  );
}

// ---------------------------------------------------------------------------
// Page Root
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
        <HUDSection />

        {/* Brand identity sections */}
        <EcosystemHero />

        <section className="bg-sand px-8 py-16 md:px-14 md:py-20">
          <div className="mx-auto max-w-6xl">
            <p className="mb-3 text-[11px] font-medium uppercase tracking-[0.18em] text-ink/40">
              Endorsement System · Product Lockups
            </p>
            <h2 className="mb-10 text-2xl font-semibold tracking-wordmark-tight text-ink md:text-3xl">
              Every product, unmistakably HNScorpPH.
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              <EndorsementLockup
                ProductMark={ClerqueLogo}
                productName="Clerque"
                productColorClass="text-clerque-600"
              />
              <EndorsementLockup
                ProductMark={SteadyLogo}
                productName="Steady"
                productColorClass="text-steady-600"
              />
            </div>
          </div>
        </section>

        <BrandSheet />

        <CTABanner />
      </main>
      <Footer />
    </>
  );
}
