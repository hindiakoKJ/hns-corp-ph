// Animated fake Clerque dashboard for the product-page browser frame.
// Pure CSS animation (server-safe, robust in background tabs).
const BARS = [50, 68, 44, 86, 58, 94, 66, 78, 56, 90, 62, 82, 70];

export default function ClerqueSim() {
  return (
    <div className="sim sim-clq" aria-hidden="true">
      <div className="top">
        <span className="brand">Clerque</span>
        <div className="tabs"><span className="on">Today</span><span>Week</span><span>Month</span></div>
        <span className="live"><i />live</span>
      </div>
      <div className="kpis">
        <div className="kpi"><small>Revenue</small><b>₱24,810</b><em>+12%</em></div>
        <div className="kpi"><small>Transactions</small><b>148</b><em>+8%</em></div>
        <div className="kpi"><small>Avg. ticket</small><b>₱168</b><em>+4%</em></div>
      </div>
      <div className="chart">
        {BARS.map((h, i) => (
          <span
            key={i}
            className={`bar${i === BARS.length - 1 ? ' hl' : ''}`}
            style={{ height: `${h}%`, animationDelay: `${(i * 0.16).toFixed(2)}s` }}
          />
        ))}
      </div>
    </div>
  );
}
