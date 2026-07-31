import '../home.css';
import ProductPage from '@/components/ui/ProductPage';
import MagnetMomentsSim from '@/components/ui/sims/MagnetMomentsSim';

export default function MagnetMomentsPage() {
  return (
    <ProductPage
      name="Magnet Moments" logo="/logos/magnetmoments-icon.png" accent="#D4A94A"
      url="https://magnetmoments.cc"
      sim={<MagnetMomentsSim />}
      h1="Your photo, cut to the millimeter."
      sub="Magnet Moments turns a single photo into a real, die-cut, ferrite-backed fridge magnet — printed in archival CMYK and shipped worldwide from the Philippines."
      primaryCta="Make a magnet" secondaryCta={{ label: 'Talk to us', href: '/contact' }}
      note="Founded in the Philippines · ships worldwide."
      featuresHeading="One photo. A magnet you keep."
      features={[
        { icon: 'move', title: 'Millimeter-exact die-cut', body: 'Every magnet is cut to your photo’s exact outline — down to the millimeter, not a rough rectangle.' },
        { icon: 'box', title: 'Ferrite-backed', body: 'Real ferrite backing that grips the fridge and holds — not a flimsy peel-and-stick.' },
        { icon: 'palette', title: 'Archival CMYK', body: 'Printed in archival CMYK inks so the colours stay true for years on the door.' },
        { icon: 'tag', title: 'Pick your size', body: 'Choose the magnet size; we scale and lay out your photo to fit it exactly.' },
        { icon: 'photos', title: 'Just one photo', body: 'No app, no design skills — upload a single photo and we handle the print geometry.' },
        { icon: 'map', title: 'Shipped worldwide', body: 'Made in the Philippines, shipped to your door anywhere in the world.' },
      ]}
      ctaHeading="Hold the moment." ctaSub="Turn your favourite photo into a magnet you’ll see every day."
      ctaButton="Make a magnet"
    />
  );
}
