import type { Metadata } from 'next';
import '../home.css';
import HomeNav from '@/components/ui/HomeNav';
import HomeFooter from '@/components/ui/HomeFooter';

export const metadata: Metadata = {
  title: 'Refunds & Returns — HNS PH Solutions',
  description: 'Refunds, returns, and cancellation policy for HNS PH Solutions OPC products and subscriptions.',
};

const LAST_UPDATED = 'August 6, 2026';

export default function RefundsPage() {
  return (
    <div className="hs-root">
      <HomeNav />
      <main>
        <section className="relative flex flex-col items-center justify-center px-6 pb-16 pt-24 text-center">
          <div className="relative z-10 max-w-2xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#C4C0FB]">Legal</p>
            <h1 className="mb-3 text-4xl font-bold tracking-tight text-white md:text-5xl">Refunds &amp; Returns</h1>
            <p className="text-base text-white/45">Last updated: {LAST_UPDATED}</p>
          </div>
        </section>

        <section className="bg-transparent px-6 py-16">
          <div className="mx-auto max-w-3xl space-y-10 text-sm leading-relaxed text-[#C4D0C8]">
            <div>
              <p>
                This policy explains how refunds, cancellations, and returns work for products and
                services sold by HNS PH Solutions OPC (&quot;HNS PH Solutions,&quot; &quot;we,&quot; &quot;our,&quot; or &quot;us&quot;).
                It applies to purchases made through hnscorpph.com and our checkout. Payments are
                processed securely by Xendit and settle to HNS PH Solutions OPC.
              </p>
            </div>

            <Section title="1. Software subscriptions (SariAssist and other apps)">
              <ul className="list-disc space-y-2 pl-5">
                <li><strong className="text-[#F3F1FB]">7-day money-back guarantee.</strong> If a paid subscription isn&apos;t right for you, request a full refund within 7 days of your first payment and we&apos;ll return it in full.</li>
                <li><strong className="text-[#F3F1FB]">Cancel anytime.</strong> You can cancel a monthly or annual plan at any time; access continues until the end of the paid period. We don&apos;t charge cancellation fees.</li>
                <li><strong className="text-[#F3F1FB]">Renewals.</strong> After the first 7 days, payments already made for the current period are non-refundable, but you can cancel to avoid the next renewal.</li>
                <li>A free tier is available so you can evaluate the app before paying.</li>
              </ul>
            </Section>

            <Section title="2. Custom & commissioned builds">
              <p>
                Commissioned work is quoted and agreed per project. Deposits reserve build time and are
                non-refundable once work has started. Any milestone-based refund terms are set out in your
                individual project agreement.
              </p>
            </Section>

            <Section title="3. Physical products (custom-printed items)">
              <p>
                Custom-printed items (such as personalised magnets) are made to order from the photo you
                provide, so they are not eligible for change-of-mind returns. However:
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>If your item arrives <strong className="text-[#F3F1FB]">damaged, defective, or printed incorrectly on our end</strong>, we will reprint or refund it at no cost.</li>
                <li>Report any issue within <strong className="text-[#F3F1FB]">7 days of delivery</strong> with a photo of the item.</li>
              </ul>
            </Section>

            <Section title="4. How to request a refund">
              <p>
                Email <a href="mailto:hnscorpph@gmail.com" className="font-medium text-[#C4C0FB] hover:underline">hnscorpph@gmail.com</a> or call
                {' '}<a href="tel:+639496338541" className="font-medium text-[#C4C0FB] hover:underline">+63 949 633 8541</a> with your order email
                and reason. Approved refunds are returned to your original payment method via Xendit,
                typically within 5–10 business days depending on your bank or e-wallet.
              </p>
            </Section>

            <Section title="5. Contact">
              <p>
                HNS PH Solutions OPC · Unit 103, Rex Centro, Nin Kaaraman, Bagumbayan Sur, Naga City,
                Camarines Sur 4400, Philippines · <a href="mailto:hnscorpph@gmail.com" className="font-medium text-[#C4C0FB] hover:underline">hnscorpph@gmail.com</a>
                {' '}· <a href="tel:+639496338541" className="font-medium text-[#C4C0FB] hover:underline">+63 949 633 8541</a>
              </p>
            </Section>
          </div>
        </section>
      </main>
      <HomeFooter />
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="mb-4 text-lg font-bold tracking-tight text-[#F3F1FB]">{title}</h2>
      {children}
    </div>
  );
}
