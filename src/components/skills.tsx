import { IconArrowUpRight } from "@/components/icons";
import { Reveal } from "@/components/reveal";
import { languages, site, studyGroups } from "@/lib/site";
import { textLink } from "@/lib/styles";

export function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-heading" className="py-16 md:py-24">
      <div className="gutter">
        <div className="shell">
          <Reveal>
            <h2
              id="skills-heading"
              className="text-3xl font-medium tracking-tight text-balance md:text-5xl"
            >
              Skills
            </h2>
            <p className="mt-5 max-w-[52ch] text-lg leading-relaxed text-pretty text-muted">
              Compulsory modules from the published study plan for this degree.
              This list describes the program, not personal results.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-x-16 gap-y-10 md:grid-cols-2">
            {studyGroups.map((group) => (
              <Reveal key={group.title}>
                <h3 className="text-xl font-medium tracking-tight">{group.title}</h3>
                <p className="mt-3 max-w-[42ch] leading-relaxed text-pretty text-muted">
                  {group.modules.join(", ")}
                </p>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-14 max-w-[52ch]">
            <h3 className="text-xl font-medium tracking-tight">Languages</h3>
            <ul className="mt-3 space-y-1 text-muted">
              {languages.map((language) => (
                <li key={language.name}>
                  <span className="text-ink">{language.name}</span>
                  {", "}
                  {language.detail}
                </li>
              ))}
            </ul>
            <p className="mt-6">
              <a
                href={site.studyPlanUrl}
                className={textLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                Study Plan
                <IconArrowUpRight />
              </a>
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
