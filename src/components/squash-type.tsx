"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "motion/react";

/**
 * Signature interaction, adapted from Lynn Fisher's 2025 portfolio:
 * the headline stretches and squishes with the window, then bounces home.
 * Only this block moves. Below 500px the resize effect stays off, matching
 * her phone fallback. An intro squash plays once so the motion is visible
 * without a resize. Reduced motion renders the type still.
 */
export function SquashType({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce !== false) return;
    const el = ref.current;
    if (!el) return;

    let cancelled = false;
    let base = 1;
    let windowWidth = window.innerWidth;
    let ready = false;
    let resetTimer = 0;
    let armTimer = 0;
    let frame = 0;

    const bounce = "transform 420ms cubic-bezier(0.175, 0.885, 0.12, 1.775)";
    const mq = window.matchMedia("(min-width: 500px)");

    const reset = () => {
      windowWidth = window.innerWidth;
      el.style.transition = bounce;
      el.style.transform = "scaleX(1)";
    };

    const onMode = () => {
      window.clearTimeout(resetTimer);
      windowWidth = window.innerWidth;
      el.style.transition = "none";
      el.style.transform = "scaleX(1)";
    };

    const observer = new ResizeObserver((entries) => {
      if (!ready || !mq.matches) return;
      const next = entries[0]?.contentRect.width;
      if (!next || !base) return;
      const raw = (next - windowWidth) / base + 1;
      const scaleX = Math.min(1.55, Math.max(0.45, raw));
      el.style.transition = "none";
      el.style.transform = `scaleX(${scaleX})`;
      window.clearTimeout(resetTimer);
      resetTimer = window.setTimeout(() => {
        windowWidth = window.innerWidth;
        el.style.transition = bounce;
        el.style.transform = "scaleX(1)";
      }, 180);
    });

    const start = async () => {
      await document.fonts.ready;
      if (cancelled) return;
      base = el.offsetWidth || 1;
      el.style.transformOrigin = "left center";
      el.style.willChange = "transform";
      el.style.transform = "scaleX(1.14)";
      frame = window.requestAnimationFrame(() => {
        frame = window.requestAnimationFrame(() => {
          if (cancelled) return;
          el.style.transition = "transform 700ms cubic-bezier(0.175, 0.885, 0.12, 1.775)";
          el.style.transform = "scaleX(1)";
        });
      });
      armTimer = window.setTimeout(() => {
        if (cancelled) return;
        ready = true;
        windowWidth = window.innerWidth;
      }, 760);
      observer.observe(document.documentElement);
      mq.addEventListener("change", onMode);
    };

    void start();

    return () => {
      cancelled = true;
      ready = false;
      window.cancelAnimationFrame(frame);
      window.clearTimeout(resetTimer);
      window.clearTimeout(armTimer);
      observer.disconnect();
      mq.removeEventListener("change", onMode);
      reset();
    };
  }, [reduce]);

  return (
    <div ref={ref} className="relative z-[1] w-fit max-w-full">
      {children}
    </div>
  );
}
