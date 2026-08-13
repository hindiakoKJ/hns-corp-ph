// Animated fake MyMoments RSVP card for the product-page browser frame.
// Warm-cream brand look; occasion chips + a smart-RSVP invite. Pure CSS animation.
export default function MyMomentsSim() {
  return (
    <div className="sim sim-mymo" aria-hidden="true">
      <div className="top">
        <span className="brand">MyMoments</span>
        <span className="tag">one link · every celebration</span>
      </div>
      <div className="occ">
        <span>Debut</span><span className="on">Birthday</span><span>Baptism</span><span>Reunion</span>
      </div>
      <div className="card">
        <div className="ev">Maya turns 30 · Sat, 6:00 PM</div>
        <div className="q">Will you celebrate with us?</div>
        <div className="rsvp">
          <span className="yes">I&apos;ll be there</span>
          <span className="no">Can&apos;t make it</span>
        </div>
        <div className="fam">Replying for <b>4 guests</b> · Table 4</div>
      </div>
      <div className="foot">
        <span className="live"><i />128 photos live</span>
        <span className="gift">Gift fund open</span>
      </div>
    </div>
  );
}
