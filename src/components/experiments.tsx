"use client";

import { StackChips } from "@/components/stack-chips";
import { experiments } from "@/lib/site";
import { chapterTitle } from "@/lib/styles";

const widths = [
  "w-[78vw] max-w-[26rem] sm:w-[22rem]",
  "w-[68vw] max-w-[20rem] sm:w-[18rem]",
  "w-[84vw] max-w-[30rem] sm:w-[26rem]",
  "w-[72vw] max-w-[24rem] sm:w-[21rem]",
  "w-[76vw] max-w-[24rem] sm:w-[22rem]",
];

export function Experiments() {
  return (
    <section
      id="experiments"
      aria-labelledby="experiments-heading"
      className="py-16 md:py-24"
    >
      <div className="gutter">
        <div className="shell">
          <h2 id="experiments-heading" className={chapterTitle}>
            Experiments
          </h2>
          <p className="mt-4 max-w-[38ch] text-lg leading-relaxed text-pretty text-muted">
            Studies and prototypes from the same years.
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
        <div
          role="region"
          aria-label="Experiments"
          tabIndex={0}
          onKeyDown={(event) => {
            if (event.key !== "ArrowRight" && event.key !== "ArrowLeft") return;
            event.preventDefault();
            const delta = event.key === "ArrowRight" ? 1 : -1;
            const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
            event.currentTarget.scrollBy({
              left: delta * Math.min(420, event.currentTarget.clientWidth * 0.7),
              behavior: reduce ? "auto" : "smooth",
            });
          }}
          className="mt-12 flex snap-x snap-mandatory gap-8 overflow-x-auto overscroll-x-contain pb-4 pl-[max(1rem,env(safe-area-inset-left))] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent sm:gap-12 sm:pl-[max(2rem,env(safe-area-inset-left))] lg:pl-[max(2.75rem,env(safe-area-inset-left))]"
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
              <h3 className="mt-3 font-display text-3xl leading-[1.12] font-medium text-balance italic sm:text-4xl">
                {item.title}
              </h3>
              <p className="mt-3 max-w-[34ch] leading-relaxed text-pretty text-muted">
                {item.summary}
              </p>
              {item.figure ? (
                <p className="mt-5 text-pretty">
                  <span className="font-display text-3xl leading-[1.1] font-medium text-accent italic">
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
          <div className="w-[max(1rem,env(safe-area-inset-right))] shrink-0" />
        </div>
      )}
    </section>
  );
}
