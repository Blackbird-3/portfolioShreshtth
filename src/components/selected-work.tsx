"use client";

import { useReducedMotion } from "motion/react";
import { IconArrowUpRight } from "@/components/icons";
import { openProjectCopy, projects } from "@/lib/site";
import { textLink } from "@/lib/styles";

const widths = [
  "min-w-[88%] sm:min-w-[62%] lg:min-w-[48%]",
  "min-w-[72%] sm:min-w-[40%] lg:min-w-[32%]",
  "min-w-[78%] sm:min-w-[46%] lg:min-w-[38%]",
];

const placement = ["self-end", "self-start lg:mt-14", "self-center lg:mt-6"];

const titleSize = [
  "text-4xl md:text-5xl",
  "text-2xl md:text-3xl",
  "text-2xl md:text-4xl",
];

export function SelectedWork() {
  const reduce = useReducedMotion();

  return (
    <section id="work" aria-labelledby="work-heading" className="py-16 md:py-24">
      <div className="gutter">
        <div className="shell">
          <h2
            id="work-heading"
            className="text-3xl font-medium tracking-tight text-balance md:text-5xl"
          >
            Selected Work
          </h2>
          <p className="mt-5 max-w-[46ch] text-lg leading-relaxed text-pretty text-muted">
            These placeholders stay until real projects replace them. Nothing
            here is a case study.
          </p>

          <div
            role="region"
            aria-label="Selected work"
            tabIndex={0}
            onKeyDown={(event) => {
              if (event.key !== "ArrowRight" && event.key !== "ArrowLeft") return;
              event.preventDefault();
              const delta = event.key === "ArrowRight" ? 1 : -1;
              event.currentTarget.scrollBy({
                left: delta * Math.min(420, event.currentTarget.clientWidth * 0.72),
                behavior: reduce ? "auto" : "smooth",
              });
            }}
            className="mt-10 flex snap-x snap-mandatory items-stretch gap-8 overflow-x-auto overscroll-x-contain border-t border-line pt-8 pb-2 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent md:gap-12"
          >
            {projects.map((project, index) => {
              const open = project.title.trim().length === 0;
              const title = open ? "Open Project" : project.title;
              const summary = open
                ? (openProjectCopy[index] ?? openProjectCopy[0])
                : project.summary;
              const external = project.href.startsWith("http");

              return (
                <article
                  key={`${title}-${index}`}
                  className={`snap-start min-w-0 shrink-0 ${widths[index] ?? widths[2]} ${placement[index] ?? ""}`}
                >
                  <h3
                    className={`font-medium tracking-tight text-pretty ${titleSize[index] ?? ""}`}
                  >
                    {project.href && !open ? (
                      <a
                        href={project.href}
                        className={textLink}
                        {...(external
                          ? { target: "_blank", rel: "noopener noreferrer" }
                          : {})}
                      >
                        {title}
                        {external ? <IconArrowUpRight /> : null}
                      </a>
                    ) : (
                      title
                    )}
                  </h3>
                  {summary ? (
                    <p className="mt-3 max-w-[36ch] leading-relaxed text-pretty text-muted">
                      {summary}
                    </p>
                  ) : null}
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
