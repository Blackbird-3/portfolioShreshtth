"use client";

import { useTheme } from "next-themes";
import { IconMoon, IconSun } from "@/components/icons";
import { focusRing } from "@/lib/styles";

export function ModeToggle() {
  const { setTheme } = useTheme();

  return (
    <button
      type="button"
      className={`mx-auto mt-6 flex h-11 w-11 items-center justify-center ${focusRing}`}
      aria-label="Switch color mode"
      onClick={() => {
        const dark = document.documentElement.classList.contains("dark");
        setTheme(dark ? "light" : "dark");
      }}
    >
      <IconSun />
      <IconMoon />
    </button>
  );
}
