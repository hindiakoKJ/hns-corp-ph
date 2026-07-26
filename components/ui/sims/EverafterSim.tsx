// Animated fake Everafter wedding page + RSVP for the product-page browser frame.
// Pure CSS animation (server-safe, robust in background tabs). Sample couple.
export default function EverafterSim() {
  return (
    <div className="sim sim-ever" aria-hidden="true">
      <div className="mono">M <span>&</span> R</div>
      <div className="names">Maya &amp; Rafael</div>
      <div className="date">June 10 · 2026 · Naga City</div>
      <div className="rsvp">
        <span className="q">Will you celebrate with us?</span>
        <div className="opts">
          <span className="on">Joyfully accepts</span>
          <span>Regretfully declines</span>
        </div>
      </div>
      <div className="count"><i />142 guests confirmed</div>
    </div>
  );
}
