import { experience } from "@/lib/site";
import { chapterTitle } from "@/lib/styles";

export function Experience() {
  return (
    <section id="experience" aria-labelledby="experience-heading" className="gutter py-16 md:py-24">
      <div className="shell">
        <h2 id="experience-heading" className={chapterTitle}>
          Path
        </h2>
        {experience.length === 0 ? (
          <p className="mt-8 max-w-[40ch] text-lg text-muted">No positions are listed yet.</p>
        ) : (
          <ol className="mt-12 max-w-[52rem] space-y-12 md:space-y-14">
            {experience.map((role) => (
              <li key={`${role.title}-${role.organization}`} className="grid gap-2 md:grid-cols-12 md:gap-8">
                <p className="font-mono text-sm leading-relaxed text-muted md:col-span-4">
                  {role.dates}
                </p>
                <div className="md:col-span-8">
                  <h3 className="font-display text-3xl leading-[1.15] font-medium text-balance sm:text-4xl">
                    {role.title}
                  </h3>
                  <p className="mt-2 text-ink">
                    {role.organization}, {role.place}
                  </p>
                  <p className="mt-3 max-w-[58ch] leading-[1.65] text-pretty text-muted">
                    {role.summary}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        )}
      </div>
    </section>
  );
}
