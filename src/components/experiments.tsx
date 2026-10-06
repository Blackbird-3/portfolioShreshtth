"use client";

import { useReducedMotion } from "motion/react";
import { StackChips } from "@/components/stack-chips";
import { experiments } from "@/lib/site";

const widths = [
  "w-[82vw] sm:w-[48vw] lg:w-[34vw]",
  "w-[68vw] sm:w-[36vw] lg:w-[26vw]",
  "w-[86vw] sm:w-[52vw] lg:w-[38vw]",
  "w-[72vw] sm:w-[40vw] lg:w-[30vw]",
  "w-[76vw] sm:w-[44vw] lg:w-[32vw]",
];

export function Experiments() {
  const reduce = useReducedMotion();

  return (
    <section
      id="experiments"
      aria-labelledby="experiments-heading"
      className="py-16 md:py-24"
    >
      <div className="gutter">
        <div className="shell">
          <h2
            id="experiments-heading"
            className="max-w-[12ch] text-3xl font-medium tracking-tight text-balance md:text-5xl"
          >
            Experiments
          </h2>
          <p className="mt-4 max-w-[42ch] text-lg leading-relaxed text-pretty text-muted">
            Prototypes and research beside the production work.
          </p>
        </div>
      </div>

      {experiments.length === 0 ? (
        <div className="gutter">
          <p className="shell mt-10 max-w-[40ch] text-lg text-muted">
            No experiments are listed yet.
          </p>
        </div>
      ) : (
        <div className="gutter">
          <div
            role="region"
            aria-label="Experiments"
            tabIndex={0}
            onKeyDown={(event) => {
              if (event.key !== "ArrowRight" && event.key !== "ArrowLeft") return;
              event.preventDefault();
              const delta = event.key === "ArrowRight" ? 1 : -1;
              event.currentTarget.scrollBy({
                left: delta * Math.min(440, event.currentTarget.clientWidth * 0.72),
                behavior: reduce ? "auto" : "smooth",
              });
            }}
            className="shell mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto overscroll-x-contain pb-4 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent sm:gap-6"
          >
            <span className="sr-only">
              Use the left and right arrow keys to move through experiments.
            </span>
            {experiments.map((item, index) => (
              <article
                key={item.title}
                className={`snap-start shrink-0 ${widths[index] ?? widths[0]}`}
              >
                <p className="font-mono text-sm text-muted">{item.year}</p>
                <h3 className="mt-3 text-2xl font-medium tracking-tight text-balance sm:text-3xl">
                  {item.title}
                </h3>
                <p className="mt-3 max-w-[36ch] leading-relaxed text-pretty text-muted">
                  {item.summary}
                </p>
                {item.figure ? (
                  <p className="mt-5 max-w-[24ch] text-pretty">
                    <span className="font-mono text-2xl tracking-tight text-accent">
                      {item.figure.value}
                    </span>{" "}
                    <span className="text-ink">{item.figure.label}</span>
                  </p>
                ) : null}
                <div className="mt-5">
                  <StackChips items={item.stack} />
                </div>
              </article>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
