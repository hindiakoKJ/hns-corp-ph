import '../home.css';
import ProductPage from '@/components/ui/ProductPage';
import ClerqueSim from '@/components/ui/sims/ClerqueSim';

export default function ClerquePage() {
  return (
    <ProductPage
      name="Clerque" logo="/logos/clerque-icon.png" accent="#8B93F7"
      url="https://clerque.cc/"
      sim={<ClerqueSim />}
      h1="The Filipino business suite that runs offline."
      sub="POS, ledger, sync, and BIR-ready reports — one tool designed around how Philippine MSMEs actually work."
      primaryCta="Open Clerque" secondaryCta={{ label: 'Request demo', href: '/contact' }}
      featuresHeading="Everything a Filipino business needs"
      features={[
        { icon: 'compliance', title: 'BIR-ready reports', body: 'Auto-generate 2550Q, 1701Q, and 2551Q — formatted exactly as BIR expects.' },
        { icon: 'offline', title: 'Works offline', body: 'Full functionality without internet. Syncs automatically when back online.' },
        { icon: 'mobile', title: 'Mobile-first', body: 'Optimised for Android and iOS. Run the counter from your phone on the floor.' },
        { icon: 'wallet', title: 'Integrated ledger', body: 'Sales, expenses, and payables in one view. No manual double-entry.' },
        { icon: 'support', title: 'Philippine support', body: 'Filipino-speaking support — no ticket queue, direct chat with the builder.' },
        { icon: 'bars', title: 'Real-time analytics', body: 'Live dashboards: daily revenue, top SKUs, margin per category.' },
      ]}
      ctaHeading="Apply smarter, run leaner." ctaSub="Start with the free tier — no credit card required."
      ctaButton="Open Clerque"
    />
  );
}
