import Link from 'next/link';
import HNSFootmark from '@/components/brand/HNSFootmark';

function Mark({ size = 24 }: { size?: number }) {
  return (
    <svg viewBox="0 0 48 48" width={size} height={size} fill="none" aria-hidden="true">
      <g stroke="currentColor" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 10V38" /><path d="M18 10V38" /><path d="M6 24H18" />
        <path d="M18 10L30 38" /><path d="M30 10V38" />
        <path d="M43.5 14 C42.5 10 34 9 32.5 13.5 C31 18 33 21 38 24 C43 27 44.5 30 43.5 34.5 C42 39 33.5 38 32.5 33.5" />
      </g>
    </svg>
  );
}

export default function HomeFooter() {
  return (
    <footer className="hs-foot">
      <div className="hs-wrap hs-foot-in">
        <div>
          <Link href="/" className="hs-brand"><span className="mk"><Mark size={24} /></span><span className="wm">HNS PH Solutions<span className="opc">OPC</span></span></Link>
          <p className="fd">Sovereign digital infrastructure for Filipino businesses, families, and government. An SEC-, BIR-, and Naga City LGU-registered OPC.</p>
          <address className="hs-foot-contact">
            Unit 103, Rex Centro, Nin Kaaraman,<br />
            Bagumbayan Sur, Naga City, Camarines Sur 4400, Philippines<br />
            <a href="tel:+639496338541">+63 949 633 8541</a> · <a href="mailto:hnscorpph@gmail.com">hnscorpph@gmail.com</a>
          </address>
        </div>
        <div className="hs-foot-col">
          <h4>Products</h4>
          <Link href="/clerque">Clerque</Link>
          <Link href="/sariassist">SariAssist</Link>
          <Link href="/cvassist">CVAssist</Link>
          <Link href="/pricing">Pricing</Link>
        </div>
        <div className="hs-foot-col">
          <h4>Platform</h4>
          <Link href="/#sovereign">Why sovereign</Link>
          <Link href="/compliance">Compliance</Link>
          <Link href="/about">About</Link>
        </div>
        <div className="hs-foot-col">
          <h4>Company</h4>
          <Link href="/about">Our story</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/contact">For LGUs</Link>
        </div>
      </div>
      <div className="hs-wrap hs-foot-bot">
        <a href="https://hnscorpph.com" target="_blank" rel="noopener noreferrer" aria-label="Powered by HNS PH Solutions" className="hs-footmark">
          <span className="lbl">Powered by</span>
          <HNSFootmark size={20} />
        </a>
        <div className="hs-foot-legal">
          <Link href="/terms">Terms</Link>
          <Link href="/privacy">Privacy</Link>
          <Link href="/refunds">Refunds</Link>
        </div>
        <span>© {new Date().getFullYear()} HNS PH Solutions OPC · Naga City, Philippines</span>
      </div>
    </footer>
  );
}
