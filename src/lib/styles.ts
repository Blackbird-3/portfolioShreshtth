export const focusRing =
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";

const buttonBase = [
  "inline-flex h-11 shrink-0 items-center justify-center gap-2 px-4",
  "text-sm font-medium whitespace-nowrap",
  "transition-[background-color,color,transform] duration-200",
  "ease-[cubic-bezier(0.16,1,0.3,1)]",
  "active:translate-y-px",
  focusRing,
].join(" ");

export const buttonPrimary = `${buttonBase} bg-accent text-on-accent hover:bg-accent-hover`;

export const buttonSecondary = `${buttonBase} border border-ink bg-transparent text-ink hover:bg-ink hover:text-bg`;

export const textLink = [
  "inline-flex items-center gap-1 text-ink underline decoration-line underline-offset-4",
  "transition-colors duration-200 hover:text-accent",
  focusRing,
].join(" ");
