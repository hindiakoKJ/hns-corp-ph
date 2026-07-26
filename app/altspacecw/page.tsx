import '../home.css';
import ProductPage from '@/components/ui/ProductPage';
import AltSpaceCWSim from '@/components/ui/sims/AltSpaceCWSim';

export default function AltSpaceCWPage() {
  return (
    <ProductPage
      name="AltSpaceCW" logo="/logos/altspacecw-icon.svg" accent="#9B7BF0"
      url="https://altspacecw.hnscorpph.com"
      sim={<AltSpaceCWSim />}
      h1="Co-working management, without the spreadsheets."
      sub="Booking, check-in, billing, and member management — purpose-built for Philippine co-working spaces."
      primaryCta="Try AltSpaceCW" secondaryCta={{ label: 'Book a demo', href: '/contact' }}
      featuresHeading="Everything your space needs"
      features={[
        { icon: 'map', title: 'Space map', body: 'Visual floor plan. See which desks, pods, and rooms are free in real time.' },
        { icon: 'calendar', title: 'Booking calendar', body: 'Members book from their phone. No phone tag, no double-bookings.' },
        { icon: 'checkCircle', title: 'Check-in / out', body: 'QR-code check-in at the door. Automatic billing on check-out.' },
        { icon: 'people', title: 'Member management', body: 'Profiles, plan tiers, access levels, and payment history in one place.' },
        { icon: 'buildings', title: 'Multi-branch', body: 'Manage multiple locations under one dashboard, with per-branch reports.' },
        { icon: 'wallet', title: 'Billing & invoicing', body: 'Automatic monthly invoices. GCash, bank transfer, and cash — all tracked.' },
      ]}
      ctaHeading="Ready to automate your space?" ctaSub="Join co-working operators running on AltSpaceCW."
      ctaButton="Get started"
    />
  );
}
