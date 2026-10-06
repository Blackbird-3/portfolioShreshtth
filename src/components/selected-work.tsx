import { Reveal } from "@/components/reveal";
import { StackChips } from "@/components/stack-chips";
import { work } from "@/lib/site";

export function SelectedWork() {
  return (
    <section id="work" aria-labelledby="work-heading" className="py-16 md:py-24">
      <div className="gutter">
        <div className="shell">
          <Reveal>
            <h2
              id="work-heading"
              className="max-w-[14ch] text-3xl font-medium tracking-tight text-balance md:text-5xl"
            >
              Selected work
            </h2>
            <p className="mt-4 max-w-[46ch] text-lg leading-relaxed text-pretty text-muted">
              Production systems and internships, with the figures recorded for each.
            </p>
          </Reveal>

          {work.length === 0 ? (
            <p className="mt-10 max-w-[40ch] text-lg text-muted">
              No projects are listed yet.
            </p>
          ) : (
            <div className="mt-12 flex flex-col gap-8 md:mt-16 md:gap-10">
              {work.map((project, index) => (
                <article
                  key={project.title}
                  className={
                    index === 0
                      ? "rounded-[12px] bg-raised p-5 sm:p-8 lg:p-10"
                      : "px-0 py-2 sm:px-2"
                  }
                >
                  <div className="grid gap-8 lg:grid-cols-12 lg:gap-10">
                    <div className="lg:col-span-7">
                      <p className="font-mono text-sm text-muted">{project.dates}</p>
                      <h3 className="mt-3 text-2xl font-medium tracking-tight text-balance sm:text-3xl lg:text-4xl">
                        {project.title}
                      </h3>
                      <p className="mt-2 text-ink">{project.org}</p>
                      <p className="mt-4 max-w-[52ch] leading-relaxed text-pretty text-muted">
                        {project.summary}
                      </p>
                      <div className="mt-6">
                        <StackChips items={project.stack} />
                      </div>
                    </div>
                    <div className="lg:col-span-5 lg:pt-8">
                      <p className="font-mono text-4xl tracking-tight text-accent sm:text-5xl">
                        {project.metric.value}
                      </p>
                      <p className="mt-2 max-w-[24ch] text-pretty text-ink">
                        {project.metric.label}
                      </p>
                      {project.facts.length > 0 ? (
                        <ul className="mt-6 space-y-2">
                          {project.facts.map((fact) => (
                            <li key={fact.label} className="text-muted">
                              <span className="font-mono text-ink">{fact.value}</span>{" "}
                              {fact.label}
                            </li>
                          ))}
                        </ul>
                      ) : null}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
