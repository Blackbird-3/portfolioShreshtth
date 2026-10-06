"use client";

import { useEffect, useId, useRef, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { useTheme } from "next-themes";
import { nav, site } from "@/lib/site";
import { focusRing } from "@/lib/styles";
import { zIndex } from "@/lib/z-index";
import { IconClose, IconList, IconMoon, IconSun } from "@/components/icons";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const menuId = useId();
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);
  const { setTheme } = useTheme();
  const reduce = useReducedMotion();

  useEffect(() => {
    if (!open) return;
    firstLinkRef.current?.focus();
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header
      className="fixed inset-x-0 top-0 border-b border-line bg-bg"
      style={{ zIndex: zIndex.header }}
    >
      <div className="gutter mx-auto flex h-16 max-w-[1400px] items-center justify-between gap-4">
        <a
          href="#top"
          translate="no"
          className={`min-w-0 truncate text-[13px] font-medium tracking-tight text-ink sm:text-sm ${focusRing}`}
        >
          {site.name}
        </a>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Page">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`inline-flex h-11 items-center px-3 text-sm text-ink transition-colors duration-200 hover:text-accent ${focusRing}`}
            >
              {item.label}
            </a>
          ))}
          <ThemeToggle
            onToggle={() => {
              const dark = document.documentElement.classList.contains("dark");
              setTheme(dark ? "light" : "dark");
            }}
          />
        </nav>

        <div className="flex items-center gap-1 lg:hidden">
          <ThemeToggle
            onToggle={() => {
              const dark = document.documentElement.classList.contains("dark");
              setTheme(dark ? "light" : "dark");
            }}
          />
          <button
            ref={menuButtonRef}
            type="button"
            className={`inline-flex h-11 w-11 items-center justify-center text-ink ${focusRing}`}
            aria-expanded={open}
            aria-controls={menuId}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <IconClose /> : <IconList />}
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          </button>
        </div>
      </div>

      {open ? (
        <motion.nav
          id={menuId}
          aria-label="Page"
          className="gutter border-t border-line bg-bg lg:hidden"
          initial={reduce === false ? { opacity: 0, y: -8 } : false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
        >
          <ul className="mx-auto flex max-w-[1400px] flex-col py-2">
            {nav.map((item, index) => (
              <li key={item.href}>
                <a
                  ref={index === 0 ? firstLinkRef : undefined}
                  href={item.href}
                  className={`flex h-12 items-center text-base text-ink ${focusRing}`}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </motion.nav>
      ) : null}
    </header>
  );
}

function ThemeToggle({ onToggle }: { onToggle: () => void }) {
  return (
    <button
      type="button"
      className={`inline-flex h-11 w-11 items-center justify-center text-ink ${focusRing}`}
      aria-label="Switch theme"
      onClick={onToggle}
    >
      <IconSun />
      <IconMoon />
    </button>
  );
}

export function SkipLink() {
  return (
    <a
      href="#content"
      className={`sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:bg-accent focus:px-4 focus:py-2 focus:text-sm focus:text-on-accent ${focusRing}`}
      style={{ zIndex: zIndex.skip }}
    >
      Skip to content
    </a>
  );
}
