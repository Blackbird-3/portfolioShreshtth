"use client";

import { useEffect, useRef } from "react";

/**
 * Elastic variable-font morph.
 * Each letter's width axis (`wdth`) follows a phase-offset sine.
 * Factors are renormalized every frame so the predicted word width
 * stays at the measured resting width — one letter widening pulls
 * width from its neighbors. Weight (`wght`) moves the other way,
 * so a wide letter is light and a narrow letter is heavy.
 */
export function MorphWord({ text }: { text: string }) {
  const rootRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const letters = [...root.querySelectorAll<HTMLElement>("[data-letter]")];
    if (letters.length === 0) return;

    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    let bases = letters.map(() => 1);
    let frame = 0;
    let alive = true;

    const apply = (wdth: number, wght: number, el: HTMLElement) => {
      el.style.fontVariationSettings = `"wdth" ${wdth.toFixed(2)}, "wght" ${wght.toFixed(1)}`;
    };

    const rest = () => {
      letters.forEach((el) => apply(118, 780, el));
    };

    const measure = () => {
      letters.forEach((el) => apply(100, 700, el));
      bases = letters.map((el) => Math.max(el.getBoundingClientRect().width, 1));
    };

    const tick = (now: number) => {
      if (!alive) return;
      const t = now / 1000;
      const raw = letters.map((_, index) => {
        const wave = 0.5 + 0.5 * Math.sin(t * 1.15 - index * 0.78);
        return 0.56 + wave * 0.88;
      });
      const predicted = raw.reduce((sum, factor, index) => sum + bases[index] * factor, 0);
      const resting = bases.reduce((sum, width) => sum + width, 0);
      const scale = resting / predicted;

      letters.forEach((el, index) => {
        const wdth = Math.min(150, Math.max(50, raw[index] * scale * 100));
        const wght = 880 - ((wdth - 50) / 100) * 520;
        apply(wdth, wght, el);
      });

      frame = requestAnimationFrame(tick);
    };

    const start = () => {
      cancelAnimationFrame(frame);
      if (media.matches) {
        rest();
        return;
      }
      measure();
      frame = requestAnimationFrame(tick);
    };

    const onChange = () => start();
    media.addEventListener("change", onChange);

    let resizeFrame = 0;
    const onResize = () => {
      cancelAnimationFrame(resizeFrame);
      resizeFrame = requestAnimationFrame(() => {
        if (media.matches) {
          rest();
          return;
        }
        measure();
      });
    };
    window.addEventListener("resize", onResize);

    document.fonts.ready.then(() => {
      if (alive) start();
    });

    return () => {
      alive = false;
      cancelAnimationFrame(frame);
      cancelAnimationFrame(resizeFrame);
      media.removeEventListener("change", onChange);
      window.removeEventListener("resize", onResize);
    };
  }, [text]);

  return (
    <span ref={rootRef} className="morph-word" aria-hidden="true">
      {text.split("").map((char, index) => (
        <span key={`${char}-${index}`} data-letter className="morph-letter">
          {char}
        </span>
      ))}
    </span>
  );
}
