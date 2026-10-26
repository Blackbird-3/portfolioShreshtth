"use client";

import { useId, useState, type ReactNode } from "react";
import { focusRing } from "@/lib/styles";

export function MobileMore({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const panelId = useId();

  return (
    <div
      className="mobile-more"
      onKeyDown={(event) => {
        if (event.key === "Escape") setOpen(false);
      }}
    >
      <div id={panelId} className={open ? "mobile-more-body is-open" : "mobile-more-body"}>
        {children}
      </div>
      <button
        type="button"
        className={`mobile-more-toggle ${focusRing}`}
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((value) => !value)}
      >
        {open ? "Show less" : "Read more"}
      </button>
    </div>
  );
}
