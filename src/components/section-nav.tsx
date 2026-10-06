"use client";

import { useEffect, useState } from "react";
import { focusRing } from "@/lib/styles";

const links = [
  { href: "#work", id: "work", label: "Work" },
  { href: "#write", id: "write", label: "Write" },
] as const;

const pill = [
  "inline-flex items-center rounded-full border border-bone px-5 py-[7px]",
  "text-[19px] leading-none text-bone",
  "hover:bg-bone hover:text-obsidian",
  "aria-[current=true]:bg-bone aria-[current=true]:text-obsidian",
  focusRing,
].join(" ");

export function SectionNav() {
  const [active, setActive] = useState<string | null>(null);

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

  return (
    <nav aria-label="Sections" className="flex justify-center gap-[15px] px-5">
      {links.map((link) => (
        <a
          key={link.id}
          href={link.href}
          aria-current={active === link.id ? "true" : undefined}
          className={pill}
        >
          {link.label}
        </a>
      ))}
    </nav>
  );
}
