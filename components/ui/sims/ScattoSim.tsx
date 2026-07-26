// Animated fake Scatto live photo wall for the product-page browser frame.
// Abstract gradient tiles only — no third-party imagery. Pure CSS animation.
const GRADS = [
  'linear-gradient(135deg, #E0573B, #7A2B1E)',
  'linear-gradient(135deg, #F4A261, #C56A2E)',
  'linear-gradient(135deg, #6FB894, #2E6E52)',
  'linear-gradient(135deg, #5B77C4, #2E3E7A)',
  'linear-gradient(135deg, #C98BD6, #6E3E7E)',
  'linear-gradient(135deg, #E8C468, #B0842E)',
  'linear-gradient(135deg, #3EA9B0, #1E5E66)',
  'linear-gradient(135deg, #D96B8A, #8A2E4E)',
  'linear-gradient(135deg, #8B9BE0, #3E4E9A)',
  'linear-gradient(135deg, #E0894B, #A0521E)',
  'linear-gradient(135deg, #6FBFA0, #2E7E5E)',
  'linear-gradient(135deg, #C4574B, #7A2B24)',
];

export default function ScattoSim() {
  return (
    <div className="sim sim-scatto" aria-hidden="true">
      <div className="shead">
        <span className="brand">Scatto</span>
        <small>Reyes–Santos</small>
        <span className="live"><i />342 photos</span>
      </div>
      <div className="wall">
        {GRADS.map((g, i) => (
          <span
            key={i}
            className={`tile${i === 5 ? ' fresh' : ''}`}
            style={{ background: g, animationDelay: `${(i * 0.22).toFixed(2)}s` }}
          />
        ))}
      </div>
    </div>
  );
}
