import { site } from "@/lib/site";
import { Reveal } from "@/components/reveal";

export function About() {
  return (
    <section id="about" aria-labelledby="about-heading" className="py-16 md:py-24">
      <div className="gutter">
        <Reveal className="shell">
          <h2
            id="about-heading"
            className="text-3xl font-medium tracking-tight text-balance md:text-5xl"
          >
            About
          </h2>
          <div className="mt-6 max-w-[65ch] space-y-4 text-lg leading-relaxed text-ink">
            <p className="text-pretty">
              I am a student in the {site.program} at {site.school}, in{" "}
              {site.place}.
            </p>
            <p className="text-pretty">
              I want a Werkstudent role in AI, ML, or software engineering.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
