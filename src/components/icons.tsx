"use client";

import { Moon, Sun } from "@phosphor-icons/react";

const shared = {
  size: 22,
  weight: "regular" as const,
  "aria-hidden": true as const,
};

export function IconSun() {
  return <Sun {...shared} className="hidden dark:block" />;
}

export function IconMoon() {
  return <Moon {...shared} className="dark:hidden" />;
}
