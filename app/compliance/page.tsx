import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Compliance — HNScorpPH',
  description: 'How HNScorpPH products comply with Philippine regulations — BIR, RA 10173, and more.',
};

const PRODUCTS = [
  {
    key: 'clerque',
    icon: '/logos/clerque-icon.png',
    name: 'Clerque',
    color: '#4F46E5',
    status: 'Live',
    items: [
      {
        law: 'BIR Revenue Regulations 18-2012',
        label: 'OR Sequential Numbering',
        desc: 'Official Receipts are auto-numbered in strict ascending sequence. Numbers are never reused or skipped — compliant with RR 18-2012 requirements.',
      },
      {
        law: 'BIR CAS Specifications',
        label: 'Computerized Accounting System — Accreditation in Progress',
        desc: 'Clerque is built to CAS specifications: immutable transaction logs, Z-Read/X-Read daily summaries, and audit trails. BIR RDO accreditation filing is the next compliance milestone.',
      },
      {
        law: 'BIR Forms',
        label: 'Downloadable BIR Forms',
        desc: 'Clerque generates and exports Forms 2550Q (VAT quarterly), 2551Q (percentage tax), 1701Q (income tax quarterly), and Books of Account — ready for filing.',
      },
      {
        law: 'PFRS / GAAP',
        label: 'PFRS-Aligned Chart of Accounts',
        desc: 'The default chart of accounts follows Philippine Financial Reporting Standards — correctly classifying assets, liabilities, equity, income, and expenses.',
      },
      {
        law: 'BSP / GCash / Maya',
        label: 'E-Money Collection Tracking',
        desc: 'GCash and Maya collections are recorded and reconciled alongside cash transactions. Settlement tracking keeps Books of Account accurate.',
      },
    ],
  },
  {
    key: 'tindapos',
    icon: '/logos/tindapos-icon.svg',
    name: 'TindaPOS',
    color: '#F59E0B',
    status: 'Coming Soon',
    items: [
      {
        law: 'RA 10173 — Data Privacy Act of 2012',
        label: 'Offline-First, No Server',
        desc: 'TindaPOS stores all data exclusively on the user\'s device. No account registration, no backend server, no data transmitted to HNScorpPH. There is no personal data to protect because none is collected.',
      },
      {
        law: 'RA 10173 — Data Privacy Act of 2012',
        label: 'Minimal Data Principle',
        desc: 'Product names, prices, and transaction amounts are entered by the owner and stay on-device. No customer data, no payment credentials, no biometrics.',
      },
    ],
  },
  {
    key: 'steady',
    icon: '/logos/steady-icon.png',
    name: 'Steady',
    color: '#0D9488',
    status: 'Coming Soon',
    items: [
      {
        law: 'RA 10173 — Data Privacy Act of 2012',
        label: 'Privacy-First Design',
        desc: 'Steady does not require a full name. Phone number is optional. Seizure logs are stored on-device and only shared when the user explicitly exports a PDF for a medical appointment.',
      },
      {
        law: 'NPC Circular 16-01',
        label: 'Security of Personal Data',
        desc: 'Any data Steady handles is treated under the NPC\'s security guidelines — access-controlled, not sold, not used for advertising.',
      },
    ],
  },
  {
    key: 'locatr',
    icon: '/logos/locatr-icon.svg',
    name: 'LOCATR',
    color: '#0D7377',
    status: 'Coming Soon',
    items: [
      {
        law: 'RA 10173 — Data Privacy Act of 2012',
        label: 'Identity Verification Data',
        desc: 'LOCATR collects government-issued ID details to verify landlord and renter identities. This data is processed solely for verification purposes, retained only as long as necessary, and never sold to third parties.',
      },
      {
        law: 'RA 10173 — Data Privacy Act of 2012',
        label: 'User Rights',
        desc: 'LOCATR users may request access to, correction of, or deletion of their personal data at any time by contacting the HNScorpPH Data Protection Officer at hnscorpph@gmail.com.',
      },
    ],
  },
];

export default function CompliancePage() {
  return (
    <>
      {/* Mini navbar */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/8 bg-[#020817]/80 backdrop-blur-md">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/logos/hns-icon.png" width={28} height={28} alt="HNScorpPH" className="rounded-lg" />
            <span className="text-sm font-semibold tracking-tight text-white">HNScorpPH</span>
          </Link>
          <Link href="/" className="text-sm font-medium text-white/60 transition-colors hover:text-white">
            ← Back to site
          </Link>
        </nav>
      </header>

      <main>
        {/* Hero */}
        <section
          className="relative flex flex-col items-center justify-center px-6 pb-16 pt-32 text-center"
          style={{ background: '#020817' }}
        >
          <div
            className="pointer-events-none absolute inset-x-0 top-0"
            style={{ height: '320px', background: 'radial-gradient(ellipse 70% 60% at 50% -10%, rgba(8,145,178,0.22) 0%, transparent 70%)' }}
          />
          <div className="relative z-10 max-w-2xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-hns-400">Compliance</p>
            <h1 className="mb-3 text-4xl font-bold tracking-tight text-white md:text-5xl">Built to comply.</h1>
            <p className="text-base text-white/45">
              Every HNScorpPH product is designed around Philippine regulations — not retrofitted for them.
              This page documents the standards each product is built to meet.
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="bg-paper px-6 py-16">
          <div className="mx-auto max-w-3xl space-y-16">

            {PRODUCTS.map((p) => (
              <div key={p.key}>
                {/* Product header */}
                <div className="mb-6 flex items-center gap-4 border-b border-ink/8 pb-5">
                  <Image src={p.icon} width={44} height={44} alt={p.name} className="rounded-xl" />
                  <div>
                    <div className="flex items-center gap-2">
                      <h2 className="text-xl font-bold tracking-tight text-ink">{p.name}</h2>
                      <span
                        className="rounded-full px-2.5 py-0.5 text-[11px] font-semibold"
                        style={{ background: `${p.color}18`, color: p.color }}
                      >
                        {p.status}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Compliance items */}
                <div className="space-y-5">
                  {p.items.map((item) => (
                    <div
                      key={item.label}
                      className="rounded-xl border border-ink/8 bg-white p-5 shadow-[0_1px_4px_rgba(15,23,42,0.04)]"
                    >
                      <p className="mb-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-ink/35">{item.law}</p>
                      <h3 className="mb-2 text-sm font-bold text-ink">{item.label}</h3>
                      <p className="text-sm leading-relaxed text-ink/55">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}

            <div className="rounded-2xl border border-ink/8 bg-sand p-6 text-sm leading-relaxed text-ink/55">
              <p className="mb-1 font-semibold text-ink">Questions about compliance?</p>
              Contact us at{' '}
              <a href="mailto:hnscorpph@gmail.com" className="font-medium text-hns-600 hover:underline">
                hnscorpph@gmail.com
              </a>
              . We&apos;re happy to provide documentation for audits, procurement requirements, or due diligence.
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-ink/8 bg-paper px-6 py-8 text-center text-xs text-ink/40">
        © 2026 HNScorpPH OPC · <Link href="/privacy" className="hover:text-ink">Privacy</Link> · <Link href="/terms" className="hover:text-ink">Terms</Link>
      </footer>
    </>
  );
}
