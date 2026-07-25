import '../home.css';
import ProductPage from '@/components/ui/ProductPage';

export default function EverafterPage() {
  return (
    <ProductPage
      name="Everafter" logo="/logos/everafter-icon.svg" accent="#6FB894"
      url="https://everafter.hnscorpph.com"
      h1="Beautiful Filipino wedding websites. Built in minutes."
      sub="RSVP, gallery, venue, schedule, and a built-in Scatto camera — everything guests need on one elegant page."
      primaryCta="Create your site" secondaryCta={{ label: 'Learn about Scatto', href: '/scatto' }}
      featuresHeading="Everything your guests need on one page"
      features={[
        { icon: 'photos', title: 'Photo gallery', body: 'Beautiful gallery pages. Organize by ceremony, reception, and prenup.' },
        { icon: 'venue', title: 'Venue & schedule', body: 'Directions, ceremony time, reception details, dress code — one page.' },
        { icon: 'envelope', title: 'RSVP management', body: 'Smart RSVP form with meal preference, plus-one tracking, and dietary notes.' },
        { icon: 'film', title: 'Scatto integration', body: 'Built-in Scatto camera roll for guests. Candid shots land in the wedding album.' },
        { icon: 'move', title: 'Custom domain', body: 'Use your own domain or a free *.everafter.hnscorpph.com subdomain.' },
        { icon: 'mobile', title: 'Mobile-perfect', body: 'Designed first for phones — where 90% of guests visit from.' },
      ]}
      ctaHeading="Your love story deserves a great page." ctaSub="Live in 10 minutes. Free for your first wedding."
      ctaButton="Start your wedding site"
    />
  );
}
