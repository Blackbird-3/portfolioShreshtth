import { SquashType } from "@/components/squash-type";
import { contents, site } from "@/lib/site";
import { focusRing } from "@/lib/styles";

export function Hero() {
  return (
    <section id="top" className="gutter pt-24 pb-8 md:pt-28 md:pb-16">
      <div className="shell">
        <SquashType>
          <h1
            translate="no"
            className="font-display text-[3.5rem] leading-[0.92] font-medium tracking-[-0.03em] sm:text-7xl lg:text-[6.25rem]"
          >
            <span className="block">Shreshtth</span>
            <span className="block">Kumar</span>
            <span className="block pb-1 italic leading-[1.08]">Agarwaal</span>
          </h1>
        </SquashType>
        <p className="mt-8 max-w-[38ch] text-xl leading-[1.55] text-pretty text-ink sm:text-[1.35rem]">
          Master&apos;s student at {site.school}. At Sftwtrs.ai I helped build a voice
          platform that cut average call handling by{" "}
          <em className="font-display text-[1.2em] leading-[1.15] font-medium text-accent italic">
            35%
          </em>
          .
        </p>
        <nav aria-label="Contents" className="mt-12 max-w-[22rem]">
          <ol className="flex flex-col">
            {contents.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className={`inline-flex py-1 font-display text-3xl leading-[1.15] font-medium italic transition-colors duration-200 hover:text-accent sm:text-4xl ${focusRing}`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ol>
        </nav>
      </div>
    </section>
  );
}
