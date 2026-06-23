import Link from 'next/link';
import { HNS_LOGO } from '@/components/brand/ecosystem.data';

export default function SiteFooter() {
  return (
    <footer className="foot">
      <div className="wrap foot-in">
        <div>
          <Link href="/" className="brand">
            <img src={HNS_LOGO} alt="" width={26} height={26} style={{ borderRadius: 8 }} />
            <span>HNS PH Solutions</span>
          </Link>
          <p className="fd">
            Sovereign digital infrastructure for Filipino businesses, families, and government. An SEC-, BIR-, and Naga City LGU-registered OPC.
          </p>
        </div>

        <div className="foot-col">
          <h4>Products</h4>
          <Link href="/clerque">Clerque</Link>
          <Link href="/sariassist">SariAssist</Link>
          <Link href="/altspacecw">AltSpaceCW</Link>
          <Link href="/scatto">Scatto</Link>
        </div>

        <div className="foot-col">
          <h4>Platform</h4>
          <Link href="/#solution">Why sovereign</Link>
          <Link href="/compliance">Compliance</Link>
          <Link href="/compliance">Security</Link>
          <Link href="/about">Status</Link>
        </div>

        <div className="foot-col">
          <h4>Company</h4>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/contact">For LGUs</Link>
        </div>
      </div>

      <div className="wrap foot-bot">
        <span>© {new Date().getFullYear()} HNS PH Solutions OPC — Manila, Philippines</span>
        <span>Own your tools · Own your future</span>
      </div>
    </footer>
  );
}
