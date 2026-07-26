// Animated fake AltSpaceCW booking calendar for the product-page browser frame.
// Pure CSS animation (server-safe, robust in background tabs).
const DAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
// per-day booked blocks: top % from the top of the track, height %
const COLS: { t: number; h: number; hot?: boolean }[][] = [
  [{ t: 8, h: 22 }, { t: 40, h: 16 }],
  [{ t: 16, h: 30 }],
  [{ t: 10, h: 18 }, { t: 56, h: 26 }],
  [{ t: 30, h: 26, hot: true }],
  [{ t: 6, h: 20 }, { t: 52, h: 20 }],
  [{ t: 22, h: 34 }],
];

export default function AltSpaceCWSim() {
  return (
    <div className="sim sim-alt" aria-hidden="true">
      <div className="ahead">
        <span className="brand">AltSpace</span>
        <small>This week · Makati</small>
        <span className="live"><i />live</span>
      </div>
      <div className="grid">
        {DAYS.map((d, i) => (
          <div className="day" key={d}>
            <span className="dl">{d}</span>
            <div className="track">
              {COLS[i].map((b, j) => (
                <span
                  key={j}
                  className={`blk${b.hot ? ' hot' : ''}`}
                  style={{ top: `${b.t}%`, height: `${b.h}%`, animationDelay: `${(i * 0.1 + j * 0.05).toFixed(2)}s` }}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
