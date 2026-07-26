// Animated fake CVAssist flow (CV → match ring → tailored letter) for the frame.
// Pure CSS animation; the match ring animates via SVG stroke-dashoffset.
export default function CVAssistSim() {
  return (
    <div className="sim sim-cv" aria-hidden="true">
      <div className="doc">
        <span className="dt">Your CV</span>
        <i style={{ width: '82%' }} />
        <i style={{ width: '96%' }} />
        <i style={{ width: '70%' }} />
        <i style={{ width: '90%' }} />
        <i style={{ width: '64%' }} />
        <i style={{ width: '86%' }} />
      </div>
      <div className="match">
        <svg viewBox="0 0 120 120" className="ring">
          <circle className="trk" cx="60" cy="60" r="52" />
          <circle className="prg" cx="60" cy="60" r="52" />
        </svg>
        <div className="pct"><b>92%</b><small>match</small></div>
        <span className="role">Senior Analyst · BPO</span>
      </div>
      <div className="letter">
        <span className="dt">Tailored letter</span>
        <i className="ty" style={{ animationDelay: '.2s' }} />
        <i className="ty" style={{ animationDelay: '.5s' }} />
        <i className="ty" style={{ animationDelay: '.8s' }} />
        <i className="ty" style={{ animationDelay: '1.1s' }} />
        <i className="ty" style={{ animationDelay: '1.4s' }} />
        <i className="ty" style={{ animationDelay: '1.7s' }} />
      </div>
    </div>
  );
}
