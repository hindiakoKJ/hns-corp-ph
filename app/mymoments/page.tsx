import '../home.css';
import ProductPage from '@/components/ui/ProductPage';
import MyMomentsSim from '@/components/ui/sims/MyMomentsSim';

export default function MyMomentsPage() {
  return (
    <ProductPage
      name="MyMoments" logo="/logos/mymoments-icon.svg" accent="#E0656A"
      url="https://mymoments.rsvp"
      sim={<MyMomentsSim />}
      h1="One link for every celebration."
      sub="RSVP, seating, gifts, and a live photo wall for debuts, birthdays, christenings, reunions — every celebration but weddings. Guests get one beautiful link; you get to enjoy the party."
      primaryCta="Create your event" secondaryCta={{ label: 'Weddings? See EverAfter', href: '/everafter' }}
      note="Weddings have their own home — that’s EverAfter."
      featuresHeading="Everything your event needs, in one link"
      features={[
        { icon: 'envelope', title: 'Smart RSVP', body: 'Guests find their name and reply for the whole family — no group-chat headcount.' },
        { icon: 'map', title: 'Seating & find-your-seat', body: 'Arrange the tables; guests look up exactly where they’re seated on the day.' },
        { icon: 'wallet', title: 'Gifts & registry', body: 'A gift fund, GCash QR, or wishlist — however you prefer to receive.' },
        { icon: 'photos', title: 'Live photo wall', body: 'Everyone shares photos in real time — Scatto turns the room into a live gallery.' },
        { icon: 'palette', title: 'Dressed for the occasion', body: 'A debut isn’t a birthday. The words, sections, and mood change to fit what you’re celebrating.' },
        { icon: 'calendar', title: 'Every celebration', body: 'Debut, birthday, christening, reunion, corporate, gender reveal — one platform, dressed for each.' },
      ]}
      ctaHeading="Your celebration deserves one link." ctaSub="Set up your event site in minutes — free RSVP, seating, and a live photo wall."
      ctaButton="Create your event"
    />
  );
}
