export const focusRing =
  "focus-visible:outline-2 focus-visible:outline-offset-[3px] focus-visible:outline-ink";

export const textLink = [
  "underline decoration-1 underline-offset-[3px]",
  "hover:decoration-wavy",
  "active:translate-y-px",
  focusRing,
].join(" ");

export const buttonPrimary = [
  "inline-flex h-11 items-center justify-center px-4",
  "bg-ink text-sm font-medium whitespace-nowrap text-bg",
  "active:translate-y-px",
  focusRing,
].join(" ");
