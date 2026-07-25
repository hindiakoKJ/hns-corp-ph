import '../home.css';
import ProductPage from '@/components/ui/ProductPage';

export default function ScattoPage() {
  return (
    <ProductPage
      name="Scatto" logo="/logos/scatto-icon.svg" accent="#E0573B"
      url="https://scatto.hnscorpph.com"
      h1="A disposable camera for every event. No app required."
      sub="Guests scan a QR code and shoot. You get all the candid photos in one shared album."
      primaryCta="Try Scatto" secondaryCta={{ label: 'See Everafter bundle', href: '/everafter' }}
      featuresHeading="How Scatto works"
      features={[
        { icon: 'film', title: 'Disposable camera UX', body: 'Guests get a QR link — no app install. They shoot, photos land in your album.' },
        { icon: 'palette', title: 'Branded overlays', body: 'Add your event name, date, or logo as a frame on every guest photo.' },
        { icon: 'timer', title: 'Time-limited rolls', body: 'Each guest gets a capped roll. No 500-photo dumps from one person.' },
        { icon: 'qr', title: 'QR distribution', body: 'One QR code on the table. Everyone scans and starts shooting instantly.' },
        { icon: 'download', title: 'Bulk download', body: 'Download all event photos as a zip at the end. Full resolution, one click.' },
        { icon: 'tag', title: 'Bundles with Everafter', body: 'Wedding guests get Scatto built into their Everafter wedding website.' },
      ]}
      ctaHeading="Set up in 2 minutes." ctaSub="Create your event, print the QR, let guests do the rest."
      ctaButton="Create an event"
    />
  );
}
