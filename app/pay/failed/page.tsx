import '../../home.css';
import Link from 'next/link';
import type { Metadata } from 'next';
import HomeNav from '@/components/ui/HomeNav';
import HomeFooter from '@/components/ui/HomeFooter';

export const metadata: Metadata = { title: 'Payment not completed — HNS PH Solutions', robots: { index: false } };

export default function PayFailedPage() {
  return (
    <div className="hs-root">
      <HomeNav />
      <section className="hs-sec hs-cta" style={{ minHeight: '52vh', display: 'grid', placeItems: 'center' }}>
        <div className="hs-wrap">
          <div className="hs-eyebrow" style={{ marginBottom: 14, color: '#F1A9A0' }}>Payment not completed</div>
          <h2>That payment didn&apos;t go through.</h2>
          <p>No charge was made. You can try again, or reach us and we&apos;ll help you complete your order.</p>
          <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/pricing" className="hs-btn hs-btn-indigo">Try again</Link>
            <Link href="/contact" className="hs-btn hs-btn-ghost">Contact us</Link>
          </div>
        </div>
      </section>
      <HomeFooter />
    </div>
  );
}
