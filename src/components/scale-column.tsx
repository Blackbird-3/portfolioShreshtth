"use client";

import { useEffect, useRef } from "react";

/**
 * Lynn Fisher v.XIX: the narrow column stretches with the window, then
 * springs back to scaleX(1). Formula from her homepage script:
 * scale = (newWidth - windowWidth) / columnWidth + 1, reset after 200ms
 * with cubic-bezier(0.175, 0.885, 0.12, 1.775). Off under reduced motion
 * and under 500px.
 */
export function ScaleColumn({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    const el = ref.current;
    if (!el) return;

    const wide = window.matchMedia("(min-width: 500px)");
    let cancelled = false;
    let base = 1;
    let windowWidth = window.innerWidth;
    let ready = false;
    let resetTimer = 0;
    let armTimer = 0;
    let frame = 0;
    const bounce = "transform 420ms cubic-bezier(0.175, 0.885, 0.12, 1.775)";

    const settle = () => {
      windowWidth = window.innerWidth;
      base = el.offsetWidth || base;
      el.style.transition = bounce;
      el.style.transform = "scaleX(1)";
    };

    const observer = new ResizeObserver((entries) => {
      if (!ready || !wide.matches) return;
      const next = entries[0]?.contentRect.width;
      if (!next || !base) return;
      const raw = (next - windowWidth) / base + 1;
      const scale = Math.min(1.45, Math.max(0.55, raw));
      el.style.transition = "none";
      el.style.transform = `scaleX(${scale})`;
      window.clearTimeout(resetTimer);
      resetTimer = window.setTimeout(settle, 200);
    });

    const start = async () => {
      await document.fonts.ready;
      if (cancelled) return;
      base = el.offsetWidth || 1;
      el.style.transformOrigin = "center top";
      el.style.willChange = "transform";
      el.style.transform = "scaleX(1.12)";
      frame = window.requestAnimationFrame(() => {
        frame = window.requestAnimationFrame(() => {
          if (cancelled) return;
          el.style.transition = bounce;
          el.style.transform = "scaleX(1)";
        });
      });
      armTimer = window.setTimeout(() => {
        if (cancelled) return;
        ready = true;
        windowWidth = window.innerWidth;
        base = el.offsetWidth || base;
      }, 700);
      observer.observe(document.body);
      wide.addEventListener("change", settle);
    };

    void start();

    return () => {
      cancelled = true;
      ready = false;
      window.cancelAnimationFrame(frame);
      window.clearTimeout(resetTimer);
      window.clearTimeout(armTimer);
      observer.disconnect();
      wide.removeEventListener("change", settle);
      el.style.transition = "none";
      el.style.transform = "";
    };
  }, []);

  return (
    <div ref={ref} className={`folio ${className}`}>
      {children}
    </div>
  );
}
