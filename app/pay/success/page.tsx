import '../../home.css';
import Link from 'next/link';
import type { Metadata } from 'next';
import HomeNav from '@/components/ui/HomeNav';
import HomeFooter from '@/components/ui/HomeFooter';

export const metadata: Metadata = { title: 'Payment received — HNS PH Solutions', robots: { index: false } };

export default function PaySuccessPage() {
  return (
    <div className="hs-root">
      <HomeNav />
      <section className="hs-sec hs-cta" style={{ minHeight: '52vh', display: 'grid', placeItems: 'center' }}>
        <div className="hs-wrap">
          <div className="hs-eyebrow" style={{ marginBottom: 14, color: '#7FD3A6' }}>Payment received</div>
          <h2>Thank you — your payment went through.</h2>
          <p>A receipt from Xendit is on its way to your email. We&apos;ll be in touch shortly to get you set up.</p>
          <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/" className="hs-btn hs-btn-indigo">Back to home</Link>
            <Link href="/contact" className="hs-btn hs-btn-ghost">Contact support</Link>
          </div>
        </div>
      </section>
      <HomeFooter />
    </div>
  );
}
