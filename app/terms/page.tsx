import Link from 'next/link';
import type { Metadata } from 'next';
import '../home.css';
import HomeNav from '@/components/ui/HomeNav';
import HomeFooter from '@/components/ui/HomeFooter';

export const metadata: Metadata = {
  title: 'Terms of Service — HNS PH Solutions',
  description: 'Terms of Service for HNS PH Solutions and its products — Clerque, SariAssist, Steady, and LOCATR.',
};

const LAST_UPDATED = 'May 14, 2026';

export default function TermsPage() {
  return (
    <div className="hs-root">
      <HomeNav />
      <main>
        {/* Hero */}
        <section className="relative flex flex-col items-center justify-center px-6 pb-16 pt-24 text-center">
          <div className="relative z-10 max-w-2xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#C4C0FB]">Legal</p>
            <h1 className="mb-3 text-4xl font-bold tracking-tight text-white md:text-5xl">Terms of Service</h1>
            <p className="text-base text-white/45">Last updated: {LAST_UPDATED}</p>
          </div>
        </section>

        {/* Content */}
        <section className="bg-transparent px-6 py-16">
          <div className="mx-auto max-w-3xl space-y-10 text-sm leading-relaxed text-[#C4D0C8]">

            <div>
              <p>
                These Terms of Service (&quot;Terms&quot;) govern your access to and use of the websites,
                applications, and services operated by HNS PH Solutions OPC (&quot;HNS PH Solutions,&quot; &quot;we,&quot; &quot;our,&quot; or
                &quot;us&quot;). By accessing or using any HNS PH Solutions product or this website, you agree to
                these Terms. If you do not agree, do not use our services.
              </p>
            </div>

            <Section title="1. The Services">
              <p>HNS PH Solutions operates the following products, each subject to these Terms:</p>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li><strong className="text-[#F3F1FB]">hnscorpph.com</strong> — corporate website and product information</li>
                <li><strong className="text-[#F3F1FB]">Clerque</strong> — business management suite for Philippine MSMEs (live at clerque.cc)</li>
                <li><strong className="text-[#F3F1FB]">SariAssist</strong> — point-of-sale app for sari-sari stores and micro-retailers (live at sariassist.hnscorpph.com)</li>
                <li><strong className="text-[#F3F1FB]">Steady</strong> — health companion app for people living with epilepsy (live at steady.hnscorpph.com)</li>
                <li><strong className="text-[#F3F1FB]">LOCATR</strong> — verified rental matchmaking app for the Philippines (locatr.hnscorpph.com)</li>
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
                <li>Notify us immediately at <a href="mailto:support@hnscorpph.com" className="font-medium text-[#C4C0FB] hover:underline">support@hnscorpph.com</a> if you suspect unauthorized access.</li>
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
                  SariAssist operates entirely offline on your device. HNS PH Solutions has no access to your
                  data and cannot recover lost data if your device is lost, damaged, or reset.
                  Back up your data regularly.
                </p>
              </SubSection>
              <SubSection name="Steady">
                <p>
                  Steady is not a medical device and is not intended to diagnose, treat, cure, or
                  prevent any medical condition. BEACON emergency alerts require functioning SMS and
                  push notification services — HNS PH Solutions cannot guarantee delivery in all
                  circumstances. Always have a primary emergency plan that does not depend on technology.
                </p>
              </SubSection>
              <SubSection name="LOCATR">
                <p>
                  LOCATR facilitates introductions between landlords and renters. HNS PH Solutions is not
                  a party to any rental agreement. All lease terms, payments, and disputes are
                  between the landlord and renter. HNS PH Solutions does not guarantee the accuracy of
                  listings or the conduct of any user. Always inspect a property before signing
                  a lease agreement.
                </p>
              </SubSection>
            </Section>

            <Section title="6. Intellectual Property">
              <p>
                All content on HNS PH Solutions websites and applications — including logos, product names,
                UI designs, and written content — is owned by HNS PH Solutions OPC and protected under
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
                permitted by Philippine law, HNS PH Solutions disclaims all warranties, express or implied,
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
                To the maximum extent permitted by law, HNS PH Solutions OPC, its founder, and its
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
                <a href="mailto:support@hnscorpph.com" className="font-medium text-[#C4C0FB] hover:underline">
                  support@hnscorpph.com
                </a>.
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

function SubSection({ name, children }: { name: string; children: React.ReactNode }) {
  return (
    <div className="mt-4">
      <h3 className="mb-2 text-sm font-semibold text-[#F3F1FB]">{name}</h3>
      {children}
    </div>
  );
}
