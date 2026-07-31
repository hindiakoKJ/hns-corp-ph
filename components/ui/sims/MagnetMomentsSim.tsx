// Animated fake Magnet Moments preview for the product-page browser frame.
// Warm-paper brand look — a die-cut photo magnet with a marching-ants cut line.
// Abstract gradient "photo" only (no real imagery). Pure CSS animation.
export default function MagnetMomentsSim() {
  return (
    <div className="sim sim-magnet" aria-hidden="true">
      <div className="head">
        <span className="brand">Magnet Moments</span>
        <span className="tag">MM-exact preview</span>
      </div>
      <div className="magnet">
        <div className="photo" />
        <svg className="cut" viewBox="0 0 100 100" preserveAspectRatio="none">
          <rect x="1.5" y="1.5" width="97" height="97" rx="8" />
        </svg>
      </div>
      <div className="sizes"><span>5cm</span><span className="on">7cm</span><span>10cm</span></div>
      <div className="cap">Die-cut to the millimeter</div>
    </div>
  );
}
