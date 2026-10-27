"use client";

import { useEffect, useState } from "react";
import { focusRing } from "@/lib/styles";
import { nav } from "@/lib/site";

const links = nav.map((item) => ({
  ...item,
  short: item.href === "#experience" ? "Exp." : item.label,
}));

export function SideNav() {
  const [shown, setShown] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const hero = document.querySelector(".hero-wheel");
    let frame = 0;

    const update = () => {
      frame = 0;
      const rect = hero?.getBoundingClientRect();
      const wide = window.matchMedia("(min-width: 1100px)").matches;
      const pastHero = rect
        ? wide
          ? rect.height > 0 && -rect.top >= rect.height * 0.75
          : rect.bottom <= 1
        : window.scrollY > 0;
      setShown((current) => (current === pastHero ? current : pastHero));

      const marker = window.innerHeight * 0.6;
      let next = "";
      for (const item of nav) {
        const section = document.querySelector(item.href);
        if (section && section.getBoundingClientRect().top <= marker) next = item.href;
      }
      setActive((current) => (current === next ? current : next));
    };

    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <nav
      aria-label="Sections"
      aria-hidden={!shown}
      inert={!shown}
      className={shown ? "side-nav is-shown" : "side-nav"}
    >
      {links.map((item) => {
        const current = item.href.startsWith("#") && active === item.href;
        return (
          <a
            key={item.href}
            href={item.href}
            className={current ? `is-active ${focusRing}` : focusRing}
            aria-current={current ? "true" : undefined}
          >
            <span className="side-nav-full">{item.label}</span>
            <span className="side-nav-short">{item.short}</span>
          </a>
        );
      })}
    </nav>
  );
}
