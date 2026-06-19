import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy — HNScorpPH',
  description: 'Privacy Policy for HNScorpPH and its products — Clerque, SariAssist, Steady, and LOCATR.',
};

const LAST_UPDATED = 'May 14, 2026';

export default function PrivacyPage() {
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
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-hns-400">Legal</p>
            <h1 className="mb-3 text-4xl font-bold tracking-tight text-white md:text-5xl">Privacy Policy</h1>
            <p className="text-base text-white/45">Last updated: {LAST_UPDATED}</p>
          </div>
        </section>

        {/* Content */}
        <section className="bg-paper px-6 py-16">
          <div className="mx-auto max-w-3xl space-y-10 text-sm leading-relaxed text-ink/70">

            <div>
              <p>
                HNScorpPH OPC (&quot;HNScorpPH,&quot; &quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting the
                privacy of users of our website and products. This Privacy Policy explains what
                information we collect, how we use it, and your rights under the{' '}
                <strong className="text-ink">Republic Act 10173 — Data Privacy Act of 2012</strong> and
                its Implementing Rules and Regulations.
              </p>
            </div>

            <Section title="1. Who We Are">
              <p>
                HNScorpPH OPC is a Philippine one-person corporation (SEC OPC filing in progress)
                registered in the Philippines. We build software for Filipino businesses, families,
                and communities — including Clerque, SariAssist, Steady, and LOCATR.
              </p>
              <p className="mt-3">
                <strong className="text-ink">Data Protection Officer / Contact:</strong>{' '}
                <a href="mailto:hnscorpph@gmail.com" className="font-medium text-hns-600 hover:underline">
                  hnscorpph@gmail.com
                </a>
              </p>
            </Section>

            <Section title="2. What We Collect — By Product">
              <SubSection name="hnscorpph.com (this website)">
                <ul className="list-disc space-y-1 pl-5">
                  <li>Contact form submissions: name, email address, message content</li>
                  <li>Standard server/CDN access logs (IP address, browser, pages visited) — retained up to 30 days via Vercel</li>
                </ul>
              </SubSection>
              <SubSection name="Clerque">
                <ul className="list-disc space-y-1 pl-5">
                  <li>Business name, owner name, and email used to create an account</li>
                  <li>Transaction records (sales, receipts, expenses) entered by the business owner</li>
                  <li>Customer data is entered by the merchant — HNScorpPH is the processor, not the controller, of that data</li>
                </ul>
              </SubSection>
              <SubSection name="SariAssist">
                <ul className="list-disc space-y-1 pl-5">
                  <li><strong className="text-ink">No data collected.</strong> SariAssist operates fully offline. All product and transaction data stays on your device. HNScorpPH has no access to it.</li>
                </ul>
              </SubSection>
              <SubSection name="Steady">
                <ul className="list-disc space-y-1 pl-5">
                  <li>No full name required. Phone number is optional.</li>
                  <li>Seizure log entries (time, GPS location if granted, notes) — stored on your device</li>
                  <li>Emergency contact phone numbers — stored on your device only</li>
                  <li>PDF reports are generated locally and shared only when you choose to export them</li>
                </ul>
              </SubSection>
              <SubSection name="LOCATR">
                <ul className="list-disc space-y-1 pl-5">
                  <li>Name, email address, and mobile number for account registration</li>
                  <li>Government-issued ID details for identity verification (landlords and renters)</li>
                  <li>Listing details: property address, photos, rent amount, availability</li>
                  <li>In-app messages between matched landlords and renters</li>
                </ul>
              </SubSection>
            </Section>

            <Section title="3. How We Use Your Information">
              <ul className="list-disc space-y-2 pl-5">
                <li>To provide and operate our products and services</li>
                <li>To respond to contact form inquiries</li>
                <li>To verify identities on LOCATR (fraud prevention and trust)</li>
                <li>To send transactional emails (e.g., receipt of your contact form submission)</li>
                <li>We do <strong className="text-ink">not</strong> sell personal data to third parties</li>
                <li>We do <strong className="text-ink">not</strong> use your data for advertising targeting</li>
              </ul>
            </Section>

            <Section title="4. Data Sharing">
              <p>
                We share personal data only with:
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li><strong className="text-ink">Resend</strong> — transactional email delivery for contact form submissions (hnscorpph.com only)</li>
                <li><strong className="text-ink">Vercel</strong> — website hosting and CDN (standard server logs)</li>
                <li><strong className="text-ink">Philippine government agencies</strong> — only when required by law or valid legal process</li>
              </ul>
              <p className="mt-3">
                No personal data is shared with advertisers, data brokers, or other third parties.
              </p>
            </Section>

            <Section title="5. Your Rights Under RA 10173">
              <p>As a data subject, you have the right to:</p>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li><strong className="text-ink">Access</strong> — request a copy of personal data we hold about you</li>
                <li><strong className="text-ink">Correction</strong> — request correction of inaccurate or incomplete data</li>
                <li><strong className="text-ink">Erasure</strong> — request deletion of your personal data, subject to legal retention obligations</li>
                <li><strong className="text-ink">Object</strong> — object to processing of your personal data for legitimate interests</li>
                <li><strong className="text-ink">Data portability</strong> — receive your data in a structured, machine-readable format</li>
                <li><strong className="text-ink">Complaint</strong> — file a complaint with the National Privacy Commission (privacy.gov.ph)</li>
              </ul>
              <p className="mt-3">
                To exercise any of these rights, email{' '}
                <a href="mailto:hnscorpph@gmail.com" className="font-medium text-hns-600 hover:underline">
                  hnscorpph@gmail.com
                </a>{' '}
                with the subject line &quot;Privacy Request — [your name].&quot; We will respond within 15 business days.
              </p>
            </Section>

            <Section title="6. Data Retention">
              <ul className="list-disc space-y-2 pl-5">
                <li>Contact form submissions: retained for up to 2 years or until you request deletion</li>
                <li>Clerque account data: retained while your account is active and for 5 years after closure for BIR audit compliance</li>
                <li>SariAssist: no data on our servers — retention is entirely controlled by you on your device</li>
                <li>Steady: no data on our servers — retention is entirely controlled by you on your device</li>
                <li>LOCATR: account and listing data retained while active; verification data deleted within 90 days of account closure</li>
              </ul>
            </Section>

            <Section title="7. Cookies">
              <p>
                hnscorpph.com does not use tracking cookies or third-party analytics scripts.
                Vercel may set functional cookies for CDN performance. No advertising cookies are used.
              </p>
            </Section>

            <Section title="8. Children's Privacy">
              <p>
                Our services are not directed to children under 13. We do not knowingly collect personal
                data from children. If you believe a child has submitted data to us, contact us immediately
                and we will delete it.
              </p>
            </Section>

            <Section title="9. Changes to This Policy">
              <p>
                We may update this Privacy Policy as our products evolve. Material changes will be noted
                with a new &quot;Last updated&quot; date at the top of this page. Continued use of our
                products after a change constitutes acceptance of the updated policy.
              </p>
            </Section>

            <Section title="10. Governing Law">
              <p>
                This Privacy Policy is governed by the laws of the Republic of the Philippines,
                including RA 10173 (Data Privacy Act of 2012) and its Implementing Rules and
                Regulations as enforced by the National Privacy Commission.
              </p>
            </Section>

          </div>
        </section>
      </main>

      <footer className="border-t border-ink/8 bg-paper px-6 py-8 text-center text-xs text-ink/40">
        © 2026 HNScorpPH OPC · <Link href="/compliance" className="hover:text-ink">Compliance</Link> · <Link href="/terms" className="hover:text-ink">Terms</Link>
      </footer>
    </>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="mb-4 text-lg font-bold tracking-tight text-ink">{title}</h2>
      {children}
    </div>
  );
}

function SubSection({ name, children }: { name: string; children: React.ReactNode }) {
  return (
    <div className="mt-4">
      <h3 className="mb-2 text-sm font-semibold text-ink">{name}</h3>
      {children}
    </div>
  );
}
