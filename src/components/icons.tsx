"use client";

import {
  ArrowUpRight,
  List,
  Moon,
  Sun,
  X,
} from "@phosphor-icons/react";

const shared = {
  size: 18,
  weight: "regular" as const,
  "aria-hidden": true as const,
  className: "shrink-0",
};

export function IconArrowUpRight() {
  return <ArrowUpRight {...shared} />;
}

export function IconList() {
  return <List {...shared} />;
}

export function IconClose() {
  return <X {...shared} />;
}

export function IconSun() {
  return <Sun {...shared} className="hidden shrink-0 dark:block" />;
}

export function IconMoon() {
  return <Moon {...shared} className="shrink-0 dark:hidden" />;
}
