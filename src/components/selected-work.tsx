import { StackChips } from "@/components/stack-chips";
import { work } from "@/lib/site";
import { chapterTitle } from "@/lib/styles";

export function SelectedWork() {
  return (
    <section id="work" aria-labelledby="work-heading" className="gutter py-16 md:py-24">
      <div className="shell">
        <h2 id="work-heading" className={chapterTitle}>
          Work
        </h2>
        <p className="mt-4 max-w-[46ch] text-lg leading-relaxed text-pretty text-muted">
          Voice, audit, and healthcare, with the figure recorded for each.
        </p>

        {work.length === 0 ? (
          <p className="mt-10 max-w-[40ch] text-lg text-muted">No projects are listed yet.</p>
        ) : (
          <div className="mt-12 flex flex-col gap-16 md:mt-16 md:gap-20">
            {work.map((project) => (
              <article key={project.title} className="grid gap-6 md:grid-cols-12 md:gap-x-8">
                <div className="md:col-span-8">
                  <h3 className="font-display text-[2rem] leading-[1.12] font-medium text-balance sm:text-4xl md:text-[2.75rem]">
                    {project.title}
                  </h3>
                  <p className="mt-3 font-mono text-sm text-muted">
                    {project.org}, {project.dates}
                  </p>
                  <p className="mt-4 max-w-[54ch] text-lg leading-[1.65] text-pretty">
                    {project.summary}
                  </p>
                  <div className="mt-5">
                    <StackChips items={project.stack} />
                  </div>
                </div>
                <div className="md:col-span-4 md:pt-2 md:text-right">
                  <p className="font-display text-5xl leading-[1.05] font-medium tracking-tight text-accent italic sm:text-6xl">
                    <span className="inline-block pb-1">{project.metric.value}</span>
                  </p>
                  <p className="mt-2 max-w-[22ch] text-pretty text-ink md:ml-auto">
                    {project.metric.label}
                  </p>
                  {project.facts.length > 0 ? (
                    <ul className="mt-4 space-y-1 text-sm text-muted md:ml-auto md:max-w-[24ch]">
                      {project.facts.map((fact) => (
                        <li key={fact.label}>
                          <span className="font-mono text-ink">{fact.value}</span> {fact.label}
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
