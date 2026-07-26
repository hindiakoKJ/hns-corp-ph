import '../home.css';
import ProductPage from '@/components/ui/ProductPage';
import SariAssistSim from '@/components/ui/sims/SariAssistSim';

export default function SariAssistPage() {
  return (
    <ProductPage
      name="SariAssist" logo="/logos/sariassist-icon.svg" accent="#E8A24E"
      url="https://sariassist.hnscorpph.com"
      sim={<SariAssistSim />}
      h1="Ang katuwang ng bawat tindahan."
      sub="Simple at mabilis para sa sari-sari stores, carinderia, at maliliit na negosyo sa Pilipinas."
      primaryCta="I-try ang SariAssist" secondaryCta={{ label: 'Makipag-ugnayan', href: '/contact' }}
      featuresHeading="Lahat ng kailangan ng tindahan mo"
      features={[
        { icon: 'cart', title: 'Mabilis na checkout', body: 'I-scan o i-type ang item, tanggapin ang bayad, mag-print ng resibo — tatlong hakbang.' },
        { icon: 'box', title: 'Inventory tracking', body: 'Real-time stock count. Low-stock alert bago pa maubusan.' },
        { icon: 'bars', title: 'Daily sales report', body: 'Awtomatikong buod ng benta bawat araw — cash, GCash, utang.' },
        { icon: 'list', title: 'Listahan ng utang', body: 'I-track ang mga suki. Abisuhan sila nang may balance.' },
        { icon: 'coin', title: 'GCash / cash payment', body: 'Tumatanggap ng cash, QR Ph, at GCash nang walang third-party fees.' },
        { icon: 'offline', title: 'Walang internet kailangan', body: 'Gumagana kahit brownout o walang signal. Sine-sync pagka-online.' },
      ]}
      ctaHeading="I-digitize ang tindahan mo ngayon." ctaSub="Mabilis i-setup. Gumagana kahit offline."
      ctaButton="Simulan na"
    />
  );
}
