"use client";

import { useId, useState } from "react";
import { focusRing } from "@/lib/styles";
import { skillGroups } from "@/lib/site";

export function TechnicalToolkit() {
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const buttonId = useId();

  return (
    <section
      id="toolkit"
      className="sheet scroll-mt-8"
      onKeyDown={(event) => {
        if (event.key === "Escape") setOpen(false);
      }}
    >
      <p className="sheet-kicker">Toolkit</p>
      <h2 className="sheet-title">
        Technical <em>toolkit.</em>
      </h2>
      <button
        id={buttonId}
        type="button"
        className={`pill pill-line sheet-block tracking-[0.14em] uppercase ${focusRing}`}
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((value) => !value)}
      >
        {open ? "Hide Technical Skills" : "View Technical Skills"}
      </button>
      <div id={panelId} role="region" aria-labelledby={buttonId} hidden={!open} className="skill-grid sheet-block">
        {skillGroups.map((group) => (
          <div key={group.label} className="panel rounded-2xl px-6 py-6">
            <h3 className="entry-title">{group.label}</h3>
            <ul className="chips mt-4">
              {group.items.map((item) => (
                <li key={item} className="chip">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
