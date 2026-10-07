"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { focusRing } from "@/lib/styles";

const links = [
  { href: "/", id: "work", label: "Work" },
  { href: "/about", id: "about", label: "About" },
  { href: "/#write", id: "write", label: "Write" },
] as const;

const pill = [
  "inline-flex items-center rounded-full border border-bone px-5 py-[7px]",
  "text-[19px] leading-none font-normal text-bone",
  "hover:bg-bone hover:text-obsidian",
  "aria-[current=page]:bg-bone aria-[current=page]:text-obsidian",
  focusRing,
].join(" ");

export function SectionNav() {
  const pathname = usePathname();
  const [hash, setHash] = useState("");

  useEffect(() => {
    const read = () => setHash(window.location.hash);
    read();
    window.addEventListener("hashchange", read);
    return () => window.removeEventListener("hashchange", read);
  }, [pathname]);

  return (
    <nav aria-label="Sections" className="flex justify-center gap-[15px] px-5">
      {links.map((link) => {
        const current =
          link.id === "about"
            ? pathname === "/about"
            : link.id === "write"
              ? pathname === "/" && hash === "#write"
              : pathname === "/" && hash !== "#write";

        return (
          <Link
            key={link.id}
            href={link.href}
            aria-current={current ? "page" : undefined}
            className={pill}
            onClick={() => setHash(link.id === "write" ? "#write" : "")}
          >
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
}
