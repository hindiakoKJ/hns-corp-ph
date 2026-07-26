// Animated fake SariAssist POS checkout for the product-page browser frame.
// Pure CSS animation (server-safe, robust in background tabs).
const ITEMS = [
  { n: 'Bigas 1kg', q: 2, p: '₱96' },
  { n: 'Sardinas 155g', q: 4, p: '₱88' },
  { n: 'Kape 3-in-1', q: 6, p: '₱42' },
  { n: 'Toyo 200ml', q: 1, p: '₱24' },
  { n: 'Load ₱50', q: 1, p: '₱52' },
];

export default function SariAssistSim() {
  return (
    <div className="sim sim-sari" aria-hidden="true">
      <div className="cart">
        <div className="chead"><span>Cart</span><small>5 items</small></div>
        <div className="lines">
          {ITEMS.map((it, i) => (
            <div className={`li${i === 0 ? ' fresh' : ''}`} key={it.n} style={{ animationDelay: `${(i * 0.12).toFixed(2)}s` }}>
              <span className="q">{it.q}×</span>
              <span className="n">{it.n}</span>
              <span className="p">{it.p}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="pay">
        <div className="row"><span>Subtotal</span><b>₱302</b></div>
        <div className="row"><span>Suki discount</span><b>−₱12</b></div>
        <div className="tot"><span>Total</span><b>₱290</b></div>
        <div className="charge">Bayad · ₱290</div>
        <div className="tender"><span>Cash</span><span>GCash</span><span className="on">QR Ph</span></div>
      </div>
    </div>
  );
}
