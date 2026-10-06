"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { useReducedMotion } from "motion/react";

/**
 * The still workshop photo shifts a little as the hero leaves the viewport,
 * so the opening image does not feel glued in place. No scroll pinning.
 */
export function HeroPhoto() {
  const frame = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce !== false) return;
    const root = frame.current;
    if (!root) return;

    let cancelled = false;
    let revert: (() => void) | undefined;

    (async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      if (cancelled) return;
      gsap.registerPlugin(ScrollTrigger);
      const ctx = gsap.context(() => {
        const target = root.querySelector("[data-hero-photo]");
        if (!target) return;
        gsap.to(target, {
          yPercent: -8,
          ease: "none",
          scrollTrigger: {
            trigger: root,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      }, root);
      revert = () => ctx.revert();
    })();

    return () => {
      cancelled = true;
      revert?.();
    };
  }, [reduce]);

  return (
    <div
      ref={frame}
      className="relative min-h-[32vh] overflow-hidden bg-raised lg:min-h-full"
    >
      <div data-hero-photo className="absolute inset-x-0 top-0 h-[115%] w-full">
        <Image
          src="/images/hero.jpg"
          alt="Milling machine cutting a metal workpiece in a workshop. Atmospheric photograph, not a project."
          fill
          priority
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="photo-grade object-cover"
        />
      </div>
    </div>
  );
}
