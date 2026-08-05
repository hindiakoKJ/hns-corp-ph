import '../home.css';
import Link from 'next/link';
import type { Metadata } from 'next';
import HomeNav from '@/components/ui/HomeNav';
import HomeFooter from '@/components/ui/HomeFooter';
import { peso, PLANS } from '@/components/pay/plans';

export const metadata: Metadata = {
  title: 'Pricing — HNS PH Solutions',
  description: 'Simple, honest pricing for SariAssist. Pay securely with card, GCash, Maya, GrabPay, or bank transfer via Xendit.',
};

const TIERS = [
  {
    name: 'Libre', price: '₱0', per: 'free forever', tag: '', featured: false,
    cta: 'Get the app', href: 'https://sariassist.hnscorpph.com',
    features: ['Offline point-of-sale', 'Barcode scan & quick-add', 'Daily sales summary', 'Single device'],
  },
  {
    name: 'Pro', price: peso(PLANS['pro-monthly'].amount), per: 'per month', tag: 'Most popular', featured: true,
    cta: 'Subscribe', href: '/checkout?plan=pro-monthly',
    features: ['Everything in Libre', 'Inventory & low-stock alerts', 'Utang (credit) ledger', 'GCash / QR Ph payments', 'Multi-device sync', 'Priority Filipino support'],
  },
  {
    name: 'Pro Annual', price: peso(PLANS['pro-annual'].amount), per: 'per year', tag: 'Save 2 months', featured: false,
    cta: 'Subscribe', href: '/checkout?plan=pro-annual',
    features: ['Everything in Pro', 'Two months free', 'Annual billing'],
  },
];

export default function PricingPage() {
  return (
    <div className="hs-root">
      <HomeNav />

      <section className="hs-phero" style={{ paddingBottom: 10 }}>
        <div className="hs-wrap">
          <div className="hs-pbadge" style={{ borderColor: '#E8A24E55', background: '#E8A24E12' }}>
            <img src="/logos/sariassist-icon.svg" alt="" />
            <span style={{ color: '#E8A24E' }}>SariAssist</span>
          </div>
          <h1>Simple, honest pricing.</h1>
          <p className="sub">
            SariAssist — the point-of-sale built for Filipino sari-sari stores and micro-retailers.
            Start free, upgrade when you&apos;re ready. Prices in Philippine pesos, VAT included.
          </p>
        </div>
      </section>

      <section className="hs-sec" style={{ paddingTop: 14 }}>
        <div className="hs-wrap">
          <div className="hs-plans">
            {TIERS.map((t) => (
              <div className={`hs-plan${t.featured ? ' featured' : ''}`} key={t.name}>
                {t.tag && <span className="tag">{t.tag}</span>}
                <h3>{t.name}</h3>
                <div className="price"><b>{t.price}</b><span>{t.per}</span></div>
                <ul>
                  {t.features.map((f) => (
                    <li key={f}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12l5 5 9-11" /></svg>{f}</li>
                  ))}
                </ul>
                {t.href.startsWith('/') ? (
                  <Link href={t.href} className={`hs-btn ${t.featured ? 'hs-btn-indigo' : 'hs-btn-ghost'}`} style={{ justifyContent: 'center' }}>{t.cta}</Link>
                ) : (
                  <a href={t.href} className={`hs-btn ${t.featured ? 'hs-btn-indigo' : 'hs-btn-ghost'}`} style={{ justifyContent: 'center' }}>{t.cta}</a>
                )}
              </div>
            ))}
          </div>

          <div className="hs-pay">
            <span className="lbl">Secure checkout by Xendit</span>
            <div className="methods">Visa · Mastercard · GCash · Maya · GrabPay · Bank transfer</div>
            <p className="fine">
              All payments are processed securely by Xendit and settle to HNS PH Solutions OPC.
              See our <Link href="/refunds">Refunds &amp; Returns</Link> and <Link href="/terms">Terms of Service</Link>.
            </p>
          </div>

          <div className="hs-pnote">
            Need <strong>Clerque</strong>, <strong>CVAssist</strong>, or a <strong>custom build</strong>?
            {' '}<Link href="/contact?topic=custom">Talk to us</Link> for a quote.
          </div>
        </div>
      </section>

      <HomeFooter />
    </div>
  );
}
