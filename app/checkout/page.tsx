import '../home.css';
import Link from 'next/link';
import type { Metadata } from 'next';
import HomeNav from '@/components/ui/HomeNav';
import HomeFooter from '@/components/ui/HomeFooter';
import CheckoutForm from '@/components/pay/CheckoutForm';
import { PLANS, peso } from '@/components/pay/plans';

export const metadata: Metadata = { title: 'Checkout — HNS PH Solutions' };

export default async function CheckoutPage({ searchParams }: { searchParams: Promise<{ plan?: string }> }) {
  const sp = await searchParams;
  const planId = sp?.plan && PLANS[sp.plan] ? sp.plan : 'pro-monthly';
  const plan = PLANS[planId];

  return (
    <div className="hs-root">
      <HomeNav />

      <section className="hs-sec">
        <div className="hs-wrap hs-checkout">
          <div className="co-form">
            <div className="hs-eyebrow" style={{ marginBottom: 12 }}>Checkout</div>
            <h1 className="hs-sec-h" style={{ fontSize: 'clamp(28px,3.4vw,40px)' }}>Complete your order</h1>
            <p className="hs-sec-p" style={{ marginBottom: 26 }}>
              Secure payment by Xendit. You&apos;ll be redirected to Xendit&apos;s hosted page to pay by card, GCash, Maya, GrabPay, or bank transfer.
            </p>
            <CheckoutForm planId={plan.id} amount={plan.amount} />
          </div>

          <aside className="co-summary">
            <div className="hs-eyebrow" style={{ marginBottom: 14 }}>Order summary</div>
            <div className="co-line">
              <span>{plan.name}</span>
              <b>{peso(plan.amount)}</b>
            </div>
            <div className="co-sub">Billed {plan.per} · PHP</div>
            <div className="co-total">
              <span>Total due today</span>
              <b>{peso(plan.amount)}</b>
            </div>
            <p className="co-fine">
              By paying you agree to our <Link href="/terms">Terms</Link>, <Link href="/privacy">Privacy Policy</Link>, and <Link href="/refunds">Refunds &amp; Returns</Link>.
            </p>
            <p className="co-fine">Not sure yet? <Link href="/pricing">Compare plans</Link>.</p>
          </aside>
        </div>
      </section>

      <HomeFooter />
    </div>
  );
}
