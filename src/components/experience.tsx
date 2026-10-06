import { experience } from "@/lib/site";
import { Reveal } from "@/components/reveal";

export function Experience() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="py-16 md:py-24"
    >
      <div className="gutter">
        <Reveal className="shell">
          <h2
            id="experience-heading"
            className="text-3xl font-medium tracking-tight text-balance md:text-5xl"
          >
            Experience
          </h2>
          {experience.length === 0 ? (
            <p className="mt-6 max-w-[40ch] text-lg leading-relaxed text-muted">
              No positions are listed yet.
            </p>
          ) : (
            <div className="mt-10 grid gap-12 md:grid-cols-2">
              {experience.map((role) => (
                <article key={`${role.title}-${role.organization}`} className="min-w-0">
                  <h3 className="text-xl font-medium tracking-tight text-pretty">
                    {role.title}
                  </h3>
                  <p className="mt-2 text-ink">{role.organization}</p>
                  <p className="mt-1 text-sm text-muted">{role.dates}</p>
                  <p className="mt-3 max-w-[48ch] leading-relaxed text-pretty text-muted">
                    {role.summary}
                  </p>
                </article>
              ))}
            </div>
          )}
        </Reveal>
      </div>
    </section>
  );
}
