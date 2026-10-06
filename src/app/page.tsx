import { ModeToggle } from "@/components/mode-toggle";
import { ScaleColumn } from "@/components/scale-column";
import { textLink } from "@/lib/styles";
import { craft, pieces, site } from "@/lib/site";

export default function Home() {
  return (
    <main id="content">
      <ScaleColumn>
        <header className="pt-8 text-center sm:pt-14">
          <h1
            translate="no"
            className="font-display text-[clamp(3.25rem,12vw,5.25rem)] leading-[0.92] font-semibold tracking-[-0.04em] text-balance"
          >
            {site.shortName}
          </h1>
          <p className="mx-auto mt-5 text-[1.05rem] leading-snug text-balance">
            {site.roleLine}
          </p>
        </header>

        <nav aria-label="Contact" className="mt-8 flex flex-col items-center gap-1 text-base">
          <a className={textLink} href={`mailto:${site.email}`}>
            {site.email}
          </a>
          <a className={textLink} href={site.linkedin}>
            LinkedIn
          </a>
          <a className={textLink} href={site.github}>
            GitHub
          </a>
          <a className={textLink} href={site.phoneHref}>
            {site.phone}
          </a>
        </nav>

        <ModeToggle />

        <section aria-labelledby="work-heading" className="mt-16 sm:mt-20">
          <h2 id="work-heading" className="font-serif text-2xl">
            Work
          </h2>
          <ol className="mt-8">
            {pieces.map((piece) => (
              <li key={piece.title} className="border-t border-dotted border-ink/35 py-8">
                <h3 className="font-serif text-xl leading-snug">{piece.title}</h3>
                <p className="mt-2 max-w-[36ch] text-base leading-relaxed">{piece.sentence}</p>
                {piece.figure ? (
                  <p className="mt-5">
                    <span className="font-display block text-5xl leading-none font-semibold tracking-[-0.03em]">
                      {piece.figure.value}
                    </span>
                    <span className="mt-2 block text-base">{piece.figure.label}</span>
                  </p>
                ) : null}
                <p className="mt-4 text-sm leading-6">{piece.stack.join(", ")}</p>
              </li>
            ))}
          </ol>
        </section>

        <p className="mt-4 border-t border-dotted border-ink/35 py-8 text-base leading-relaxed">
          <span className="font-serif">{craft.title}.</span> {craft.sentence}
        </p>
      </ScaleColumn>
    </main>
  );
}
