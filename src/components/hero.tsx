import { site } from "@/lib/site";
import { buttonPrimary, buttonSecondary } from "@/lib/styles";
import { HeroPhoto } from "@/components/hero-photo";

export function Hero() {
  return (
    <section id="top" className="gutter">
      <div className="mx-auto grid min-h-[100dvh] max-w-[1400px] grid-rows-[auto_minmax(28vh,1fr)] lg:grid-cols-2 lg:grid-rows-1 lg:gap-x-12">
        <div className="flex flex-col pt-20 pb-8 lg:pb-16">
          <h1
            translate="no"
            className="rise text-[2rem] leading-[1.08] font-medium tracking-tight sm:text-5xl xl:text-6xl"
          >
            <span className="block">Shreshtth</span>
            <span className="block">Kumar Agarwaal</span>
          </h1>
          <p
            className="rise mt-5 max-w-[42ch] text-base leading-relaxed text-muted"
            style={{ animationDelay: "80ms" }}
          >
            M.Sc. student in Artificial Intelligence for Industrial Applications
            at {site.school}. Open to Werkstudent roles.
          </p>
          <div
            className="rise mt-6 flex flex-wrap items-center gap-3"
            style={{ animationDelay: "160ms" }}
          >
            <a href="#contact" className={buttonPrimary}>
              Contact
            </a>
            <a href="#work" className={buttonSecondary}>
              Work
            </a>
          </div>
        </div>
        <HeroPhoto />
      </div>
    </section>
  );
}
