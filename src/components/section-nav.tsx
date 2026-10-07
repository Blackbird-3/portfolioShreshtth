"use client";

import { useEffect, useRef, useState } from "react";
import { focusRing } from "@/lib/styles";
import "../../vendor/liquid-glass-js/glass.css";
import "./section-nav.css";

const links = [
  { href: "#work", id: "work", label: "Work" },
  { href: "#write", id: "write", label: "Write" },
] as const;

const pill = [
  "inline-flex items-center rounded-full border border-white/35 bg-white/10 px-5 py-[7px]",
  "text-[19px] leading-none text-bone backdrop-blur-md",
  "hover:border-bone hover:bg-bone hover:text-obsidian",
  "aria-[current=true]:border-bone aria-[current=true]:bg-bone aria-[current=true]:text-obsidian",
  focusRing,
].join(" ");

type GlassButton = {
  element: HTMLDivElement;
  textElement: HTMLDivElement;
  webglInitialized: boolean;
  gl: WebGLRenderingContext | null;
  render?: () => void;
  destroy: () => void;
};

export function SectionNav() {
  const navRef = useRef<HTMLElement>(null);
  const mountRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState<string | null>(null);
  const [glassOn, setGlassOn] = useState(false);

  useEffect(() => {
    const update = () => {
      const mark = window.innerHeight * 0.72;
      let current: string | null = null;
      for (const link of links) {
        const node = document.getElementById(link.id);
        if (node && node.getBoundingClientRect().top <= mark) current = link.id;
      }
      setActive(current);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  useEffect(() => {
    const root = navRef.current;
    if (!root) return;
    root.querySelectorAll<HTMLAnchorElement>("a[data-section]").forEach((anchor) => {
      if (anchor.dataset.section === active) anchor.setAttribute("aria-current", "true");
      else anchor.removeAttribute("aria-current");
    });
  }, [active, glassOn]);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const probe = document.createElement("canvas");
    const webgl = probe.getContext("webgl");
    if (reduce || !webgl) return;

    let alive = true;
    const created: GlassButton[] = [];

    const fail = () => {
      created.forEach((item) => item.destroy());
      created.length = 0;
      mount.replaceChildren();
      if (alive) setGlassOn(false);
    };

    const boot = async () => {
      const [{ Button }] = await Promise.all([
        import("../../vendor/liquid-glass-js/button.js"),
      ]);
      if (!alive || !mountRef.current) return;

      const controls = {
        edgeIntensity: 0.06,
        rimIntensity: 0.16,
        baseIntensity: 0.02,
        blurRadius: 4,
        rippleEffect: 0.05,
        cornerBoost: 0.04,
      };
      (window as Window & { glassControls?: typeof controls }).glassControls = controls;

      for (const link of links) {
        const button = new Button({
          text: link.label,
          size: 19,
          type: "pill",
          tintOpacity: 0.35,
        }) as unknown as GlassButton;
        created.push(button);
        if (!button.gl) {
          fail();
          return;
        }
        button.textElement.style.fontFamily = "inherit";

        const anchor = document.createElement("a");
        anchor.href = link.href;
        anchor.dataset.section = link.id;
        anchor.className = focusRing;
        anchor.appendChild(button.element);
        mountRef.current.appendChild(anchor);
      }

      const started = performance.now();
      const watch = () => {
        if (!alive) return;
        if (created.every((button) => button.webglInitialized)) {
          setGlassOn(true);
          requestAnimationFrame(() => {
            requestAnimationFrame(() => {
              created.forEach((button) => button.render?.());
            });
          });
          return;
        }
        if (performance.now() - started > 5000) {
          fail();
          return;
        }
        window.setTimeout(watch, 120);
      };
      watch();
    };

    boot().catch(() => fail());

    return () => {
      alive = false;
      created.forEach((item) => item.destroy());
      mount.replaceChildren();
      setGlassOn(false);
    };
  }, []);

  return (
    <nav ref={navRef} aria-label="Sections" className="section-nav relative flex justify-center px-5">
      <div
        data-nav-fallback=""
        className={glassOn ? "hidden" : "flex justify-center gap-[15px]"}
      >
        {links.map((link) => (
          <a
            key={link.id}
            href={link.href}
            data-section={link.id}
            aria-current={active === link.id ? "true" : undefined}
            className={pill}
          >
            {link.label}
          </a>
        ))}
      </div>
      <div
        ref={mountRef}
        className={
          glassOn
            ? "flex justify-center gap-[15px]"
            : "pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 opacity-0"
        }
      />
    </nav>
  );
}
