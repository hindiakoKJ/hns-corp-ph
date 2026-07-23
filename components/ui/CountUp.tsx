'use client';

import { useEffect, useRef, useState } from 'react';

/**
 * Animated stat counter. Counts 0 -> `to` once on mount with an ease-out curve.
 * Respects prefers-reduced-motion (renders the final value immediately).
 */
export default function CountUp({
  to,
  suffix = '',
  duration = 1400,
}: {
  to: number;
  suffix?: string;
  duration?: number;
}) {
  // start at the final value so SSR/no-JS renders the real number
  const [value, setValue] = useState(to);
  const started = useRef(false);

  useEffect(() => {
    if (started.current) return;
    started.current = true;

    // Reduced motion, or a tab that isn't painting: show the real number, no animation.
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || document.hidden) {
      setValue(to);
      return;
    }

    let raf = 0;
    const start = performance.now();
    const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

    setValue(0);
    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / duration);
      setValue(Math.round(easeOutCubic(p) * to));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    // Safety net: rAF is paused in background/non-compositing tabs, which would
    // otherwise leave the counter stuck at 0. Snap to the final value regardless.
    const settle = setTimeout(() => setValue(to), duration + 600);

    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(settle);
    };
  }, [to, duration]);

  return (
    <>
      {value}
      {suffix}
    </>
  );
}
