import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service — HNScorpPH',
  description: 'Terms of Service for HNScorpPH and its products — Clerque, SariAssist, Steady, and LOCATR.',
};

const LAST_UPDATED = 'May 14, 2026';

export default function TermsPage() {
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
            <h1 className="mb-3 text-4xl font-bold tracking-tight text-white md:text-5xl">Terms of Service</h1>
            <p className="text-base text-white/45">Last updated: {LAST_UPDATED}</p>
          </div>
        </section>

        {/* Content */}
        <section className="bg-paper px-6 py-16">
          <div className="mx-auto max-w-3xl space-y-10 text-sm leading-relaxed text-ink/70">

            <div>
              <p>
                These Terms of Service (&quot;Terms&quot;) govern your access to and use of the websites,
                applications, and services operated by HNScorpPH OPC (&quot;HNScorpPH,&quot; &quot;we,&quot; &quot;our,&quot; or
                &quot;us&quot;). By accessing or using any HNScorpPH product or this website, you agree to
                these Terms. If you do not agree, do not use our services.
              </p>
            </div>

            <Section title="1. The Services">
              <p>HNScorpPH operates the following products, each subject to these Terms:</p>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li><strong className="text-ink">hnscorpph.com</strong> — corporate website and product information</li>
                <li><strong className="text-ink">Clerque</strong> — business management suite for Philippine MSMEs (live at clerque.hnscorpph.com)</li>
                <li><strong className="text-ink">SariAssist</strong> — point-of-sale app for sari-sari stores and micro-retailers (live at sariassist.hnscorpph.com)</li>
                <li><strong className="text-ink">Steady</strong> — health companion app for people living with epilepsy (coming soon)</li>
                <li><strong className="text-ink">LOCATR</strong> — verified rental matchmaking app for the Philippines (locatr.hnscorpph.com)</li>
              </ul>
            </Section>

            <Section title="2. Eligibility">
              <p>
                You must be at least 18 years old to create an account or use our paid services.
                By using our services, you represent that you meet this requirement and that any
                information you provide is accurate and complete.
              </p>
            </Section>

            <Section title="3. Accounts and Security">
              <ul className="list-disc space-y-2 pl-5">
                <li>You are responsible for maintaining the confidentiality of your account credentials.</li>
                <li>You are responsible for all activity that occurs under your account.</li>
                <li>Notify us immediately at <a href="mailto:hnscorpph@gmail.com" className="font-medium text-hns-600 hover:underline">hnscorpph@gmail.com</a> if you suspect unauthorized access.</li>
                <li>We reserve the right to suspend or terminate accounts that violate these Terms.</li>
              </ul>
            </Section>

            <Section title="4. Acceptable Use">
              <p>You agree not to:</p>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>Use our services for any unlawful purpose or in violation of Philippine law</li>
                <li>Upload false, misleading, or fraudulent information (especially on LOCATR listings)</li>
                <li>Attempt to reverse-engineer, decompile, or extract source code from our applications</li>
                <li>Use automated bots, scrapers, or scripts without written permission</li>
                <li>Interfere with or disrupt the security or availability of our services</li>
                <li>Impersonate another person or entity</li>
              </ul>
            </Section>

            <Section title="5. Product-Specific Terms">
              <SubSection name="Clerque">
                <p>
                  Clerque is a business management tool. You are responsible for the accuracy of
                  data you enter, including transaction records and BIR-required information. Clerque
                  assists compliance but does not substitute for the advice of a licensed accountant
                  or tax professional. BIR CAS accreditation is in progress — Clerque is not yet
                  an accredited CAS.
                </p>
              </SubSection>
              <SubSection name="SariAssist">
                <p>
                  SariAssist operates entirely offline on your device. HNScorpPH has no access to your
                  data and cannot recover lost data if your device is lost, damaged, or reset.
                  Back up your data regularly.
                </p>
              </SubSection>
              <SubSection name="Steady">
                <p>
                  Steady is not a medical device and is not intended to diagnose, treat, cure, or
                  prevent any medical condition. BEACON emergency alerts require functioning SMS and
                  push notification services — HNScorpPH cannot guarantee delivery in all
                  circumstances. Always have a primary emergency plan that does not depend on technology.
                </p>
              </SubSection>
              <SubSection name="LOCATR">
                <p>
                  LOCATR facilitates introductions between landlords and renters. HNScorpPH is not
                  a party to any rental agreement. All lease terms, payments, and disputes are
                  between the landlord and renter. HNScorpPH does not guarantee the accuracy of
                  listings or the conduct of any user. Always inspect a property before signing
                  a lease agreement.
                </p>
              </SubSection>
            </Section>

            <Section title="6. Intellectual Property">
              <p>
                All content on HNScorpPH websites and applications — including logos, product names,
                UI designs, and written content — is owned by HNScorpPH OPC and protected under
                Philippine intellectual property law. You may not reproduce, distribute, or create
                derivative works without written permission.
              </p>
              <p className="mt-3">
                Data you enter into our products (your business records, listings, health logs)
                remains your property. We do not claim ownership of your data.
              </p>
            </Section>

            <Section title="7. Disclaimers">
              <p>
                Our services are provided &quot;as is&quot; and &quot;as available.&quot; To the fullest extent
                permitted by Philippine law, HNScorpPH disclaims all warranties, express or implied,
                including warranties of merchantability, fitness for a particular purpose, and
                non-infringement.
              </p>
              <p className="mt-3">
                We do not warrant that our services will be uninterrupted, error-free, or completely
                secure. Internet-dependent features require connectivity and may be affected by
                conditions outside our control.
              </p>
            </Section>

            <Section title="8. Limitation of Liability">
              <p>
                To the maximum extent permitted by law, HNScorpPH OPC, its founder, and its
                employees shall not be liable for any indirect, incidental, special, consequential,
                or punitive damages arising from your use of our services — including lost profits,
                data loss, or business interruption.
              </p>
            </Section>

            <Section title="9. Changes to These Terms">
              <p>
                We may update these Terms as our products evolve. We will notify users of material
                changes by updating the &quot;Last updated&quot; date. Continued use after a change
                constitutes acceptance of the revised Terms.
              </p>
            </Section>

            <Section title="10. Governing Law and Disputes">
              <p>
                These Terms are governed by the laws of the Republic of the Philippines. Any dispute
                arising from these Terms or your use of our services shall be resolved through
                good-faith negotiation first, and if unresolved, through the appropriate courts of
                the Philippines.
              </p>
            </Section>

            <Section title="11. Contact">
              <p>
                Questions about these Terms? Reach us at{' '}
                <a href="mailto:hnscorpph@gmail.com" className="font-medium text-hns-600 hover:underline">
                  hnscorpph@gmail.com
                </a>.
              </p>
            </Section>

          </div>
        </section>
      </main>

      <footer className="border-t border-ink/8 bg-paper px-6 py-8 text-center text-xs text-ink/40">
        © 2026 HNScorpPH OPC · <Link href="/compliance" className="hover:text-ink">Compliance</Link> · <Link href="/privacy" className="hover:text-ink">Privacy</Link>
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
