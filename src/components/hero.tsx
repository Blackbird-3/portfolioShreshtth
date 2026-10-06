import Image from "next/image";
import { SquashType } from "@/components/squash-type";
import { site } from "@/lib/site";
import { buttonPrimary, buttonSecondary } from "@/lib/styles";

export function Hero() {
  return (
    <section id="top" className="gutter flex min-h-[100dvh] flex-col pt-20">
      <div className="shell grid flex-1 gap-8 pb-6 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-stretch lg:gap-12 lg:pb-8">
        <div className="flex flex-col justify-end lg:justify-center lg:py-6">
          <p translate="no" className="rise text-sm font-medium text-ink">
            {site.name}
          </p>
          <SquashType>
            <h1 className="rise mt-4 max-w-[9ch] text-5xl leading-[1.05] font-medium tracking-tight sm:text-6xl lg:text-7xl">
              Call time down <span className="italic">35%</span>.
            </h1>
          </SquashType>
          <p className="rise mt-5 max-w-[38ch] text-base leading-relaxed text-pretty text-muted sm:text-lg">
            I build production voice and audit AI. M.Sc. student at {site.school},
            open to Werkstudent roles.
          </p>
          <div className="rise mt-6 flex flex-wrap items-center gap-3">
            <a href="#contact" className={buttonPrimary}>
              Contact
            </a>
            <a href="#work" className={buttonSecondary}>
              Work
            </a>
          </div>
        </div>
        <div className="relative min-h-[30vh] lg:min-h-full lg:py-6">
          <div className="relative h-full min-h-[30vh] overflow-hidden rounded-[12px] bg-raised">
            <Image
              src="/images/hero.jpg"
              alt="Milling machine cutting a metal workpiece in a workshop. Atmospheric photograph, not a project."
              fill
              priority
              sizes="(min-width: 1024px) 46vw, 100vw"
              className="photo-grade object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
