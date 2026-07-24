// HNSFootmark.tsx
// Official HNS PH Solutions OPC lockup (HNS ligature mark + wordmark + muted "OPC").
// Everything uses currentColor — the mark takes the text colour of its container.
// Do not hard-code fills, recolour, add shadows, or change the aspect ratio.

const RATIO = 300 / 48; // full-lockup aspect ratio

export default function HNSFootmark({
  size = 22,
  className,
}: {
  /** rendered height in px; width scales to keep the 300:48 aspect ratio */
  size?: number;
  className?: string;
}) {
  return (
    <svg
      width={Math.round(size * RATIO)}
      height={size}
      viewBox="0 0 300 48"
      fill="none"
      role="img"
      aria-label="HNS PH Solutions OPC"
      className={className}
    >
      <title>HNS PH Solutions OPC</title>
      <g stroke="currentColor" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 10V38" /><path d="M18 10V38" /><path d="M6 24H18" />
        <path d="M18 10L30 38" /><path d="M30 10V38" />
        <path d="M43.5 14 C42.5 10 34 9 32.5 13.5 C31 18 33 21 38 24 C43 27 44.5 30 43.5 34.5 C42 39 33.5 38 32.5 33.5" />
      </g>
      <line x1="58" y1="13" x2="58" y2="35" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.3" strokeLinecap="round" />
      <text x="70" y="31" fontFamily="system-ui, 'Segoe UI', Helvetica, Arial, sans-serif" fontSize="21" letterSpacing="0.2" fill="currentColor">
        <tspan fontWeight="800">HNS PH </tspan>
        <tspan fontWeight="500">Solutions </tspan>
        <tspan fontWeight="700" fontSize="12.5" letterSpacing="1.2" fillOpacity="0.72">OPC</tspan>
      </text>
    </svg>
  );
}
