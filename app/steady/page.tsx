import '../home.css';
import ProductPage from '@/components/ui/ProductPage';
import SteadySim from '@/components/ui/sims/SteadySim';

export default function SteadyPage() {
  return (
    <ProductPage
      name="Steady" logo="/logos/steady-icon.png" accent="#37D9A0"
      url="https://steady.hnscorpph.com"
      sim={<SteadySim />}
      h1="A steady hand when seconds count."
      sub="A free, private companion for families living with epilepsy — log every episode, alert your people instantly, and guide any bystander through first aid."
      primaryCta="Get Steady" secondaryCta={{ label: 'Our privacy promise', href: '/privacy' }}
      note="100% free — no subscriptions, no ads, and nothing about your health is ever sold."
      featuresHeading="Safety, logging, and calm — in one app"
      features={[
        { icon: 'beacon', title: 'BEACON alerts', body: 'One tap sends your live GPS location to every emergency contact by SMS — so help knows exactly where you are.' },
        { icon: 'log', title: 'Seizure logging', body: 'Record each episode with time, duration, and weather context — a clear history to share with your neurologist.' },
        { icon: 'mobile', title: 'Passive monitor', body: 'Optional motion monitoring watches for rhythmic shaking and can raise an alert when you may not be able to.' },
        { icon: 'people', title: 'Bystander Mode', body: 'A no-login first-aid guide anyone nearby can open to help you safely through an episode.' },
        { icon: 'lock', title: 'Private by design', body: 'Your data is scoped to your household and minimal by default — no full name required, nothing sold.' },
        { icon: 'wallet', title: 'Always free', body: 'No subscriptions, no paywalls, no Pro tier. Built by a dad of two kids with epilepsy, for families like his.' },
      ]}
      ctaHeading="Peace of mind, for free." ctaSub="Set up Steady and build your family's safety net in minutes."
      ctaButton="Get Steady"
    />
  );
}
