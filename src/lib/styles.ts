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

/** Rare page-level action. The portfolio itself does not use filled marketing buttons. */
export const buttonPrimary = `${buttonBase} bg-ink text-bg hover:bg-accent hover:text-on-accent`;

export const textLink = [
  "inline-flex items-center gap-1 text-ink underline decoration-line underline-offset-[0.2em]",
  "transition-colors duration-200 hover:text-accent",
  focusRing,
].join(" ");

export const chapterTitle =
  "font-display text-[2.6rem] leading-[1.08] font-medium text-balance sm:text-5xl md:text-6xl";

export const chip =
  "border border-line px-2 py-0.5 font-sans text-[0.8125rem] leading-6 text-ink";
