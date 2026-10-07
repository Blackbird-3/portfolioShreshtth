export const focusRing =
  "focus-visible:outline-2 focus-visible:outline-offset-[3px] focus-visible:outline-current";

export const buttonPrimary = [
  "inline-flex h-11 items-center justify-center rounded-full px-5",
  "bg-bone text-[19px] leading-none font-normal whitespace-nowrap text-obsidian",
  "active:translate-y-px",
  focusRing,
].join(" ");
