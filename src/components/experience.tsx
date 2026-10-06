import { Reveal } from "@/components/reveal";
import { experience } from "@/lib/site";

export function Experience() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="py-16 md:py-24"
    >
      <div className="gutter">
        <div className="shell">
          <Reveal>
            <h2
              id="experience-heading"
              className="text-3xl font-medium tracking-tight text-balance md:text-5xl"
            >
              Experience
            </h2>
          </Reveal>
          {experience.length === 0 ? (
            <p className="mt-8 max-w-[40ch] text-lg leading-relaxed text-muted">
              No positions are listed yet.
            </p>
          ) : (
            <ol className="mt-12 grid gap-y-12 md:gap-y-14">
              {experience.map((role) => (
                <li
                  key={`${role.title}-${role.organization}`}
                  className="grid gap-2 md:grid-cols-12 md:gap-8"
                >
                  <p className="font-mono text-sm text-muted md:col-span-3">
                    {role.dates}
                  </p>
                  <div className="md:col-span-9">
                    <h3 className="text-xl font-medium tracking-tight text-pretty sm:text-2xl">
                      {role.title}
                    </h3>
                    <p className="mt-1 text-ink">
                      {role.organization}, {role.place}
                    </p>
                    <p className="mt-3 max-w-[58ch] leading-relaxed text-pretty text-muted">
                      {role.summary}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          )}
        </div>
      </div>
    </section>
  );
}
