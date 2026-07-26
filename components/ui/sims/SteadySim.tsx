// Animated fake Steady safety hub for the product-page browser frame.
// Signature concentric "halo" pulse mirrors the app's passive-monitor screen.
// Pure CSS animation (server-safe, robust in background tabs).
export default function SteadySim() {
  return (
    <div className="sim sim-steady" aria-hidden="true">
      <div className="top">
        <span className="who"><i className="ava">M</i><b>Migo</b><small>Age 7</small></span>
        <span className="mon"><i />Monitoring</span>
      </div>
      <div className="core">
        <span className="halo">
          <span className="ring" />
          <span className="ring d2" />
          <span className="ring d3" />
          <span className="disc">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 3l7 3v5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6z" />
              <path d="M9 12l2 2 4-4.5" />
            </svg>
          </span>
        </span>
        <b className="calm">All calm</b>
        <small>Passive monitor active</small>
      </div>
      <div className="beacon"><span className="bi">BEACON</span>Armed · 3 contacts · GPS ready</div>
      <div className="foot">
        <span>Last logged · 12 days ago</span>
        <span className="free">100% free</span>
      </div>
    </div>
  );
}
