import { Reveal } from "@/components/reveal";
import { languages, site } from "@/lib/site";

export function About() {
  return (
    <section id="about" aria-labelledby="about-heading" className="py-16 md:py-24">
      <div className="gutter">
        <Reveal className="shell">
          <h2
            id="about-heading"
            className="max-w-[16ch] text-3xl font-medium tracking-tight text-balance md:text-5xl"
          >
            Studying industrial AI in Amberg.
          </h2>
          <div className="mt-6 max-w-[62ch] space-y-4 text-lg leading-relaxed text-pretty text-ink">
            <p>
              {site.program} at {site.school}, {site.degreeWindow}. The prior
              degree is {site.priorDegree} at {site.priorSchool}, {site.priorWindow},
              CGPA {site.cgpa}, in artificial intelligence and machine learning.
            </p>
            <p>
              Working student hours on a German student residence permit: {site.hourCap}.
            </p>
          </div>
          <ul className="mt-8 flex max-w-[62ch] flex-col gap-2 sm:flex-row sm:flex-wrap sm:gap-x-10 sm:gap-y-2">
            {languages.map((language) => (
              <li key={language.name} className="text-ink">
                <span className="font-medium">{language.name}</span>
                <span className="text-muted">, {language.detail}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
