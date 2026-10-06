import { languages, site } from "@/lib/site";

export function About() {
  return (
    <section id="about" aria-labelledby="about-heading" className="gutter py-16 md:py-24">
      <div className="shell">
        <h2
          id="about-heading"
          className="max-w-[14ch] font-display text-[2.6rem] leading-[1.08] font-medium text-balance sm:text-5xl md:text-6xl"
        >
          Studying industrial AI in Amberg.
        </h2>
        <div className="mt-6 max-w-[58ch] space-y-4 text-lg leading-[1.7] text-pretty">
          <p>
            {site.program} at {site.school}, {site.degreeWindow}. Before that,{" "}
            {site.priorDegree} at {site.priorSchool}, {site.priorWindow}, CGPA {site.cgpa},
            in artificial intelligence and machine learning.
          </p>
          <p>
            {languages.map((language) => `${language.name}, ${language.detail}`).join(". ")}.
          </p>
        </div>
      </div>
    </section>
  );
}
