import { focusRing } from "@/lib/styles";
import { zIndex } from "@/lib/z-index";

export function SkipLink() {
  return (
    <a
      href="#content"
      className={`sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:bg-ink focus:px-4 focus:py-2 focus:text-sm focus:text-bg ${focusRing}`}
      style={{ zIndex: zIndex.skip }}
    >
      Skip to content
    </a>
  );
}
