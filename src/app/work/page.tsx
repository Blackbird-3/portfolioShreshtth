import type { Metadata } from "next";
import { PageFoot } from "@/components/page-foot";
import { ScaleColumn } from "@/components/scale-column";
import { pieces } from "@/lib/site";

export const metadata: Metadata = {
  title: "Work",
  description: "Three pieces: a voice platform, a chest X-ray study, and EduQuery.",
};

export default function WorkPage() {
  return (
    <main id="content">
      <ScaleColumn className="folio-cards my-12 sm:my-16">
        <header className="text-center">
          <p className="chapter-num">I</p>
          <h1 className="chapter-title">Work</h1>
        </header>
        <ol className="mt-10 grid gap-6">
          {pieces.map((piece) => (
            <li key={piece.title} className="border border-ink/30 px-5 py-5">
              <p className="text-sm">{piece.index}</p>
              <h2 className="mt-3 font-display text-[1.85rem] leading-none font-medium">
                {piece.title}
              </h2>
              <p className="mt-3 max-w-[42ch] text-base leading-relaxed">{piece.sentence}</p>
              {piece.figure ? (
                <p className="mt-6 flex flex-wrap items-baseline gap-x-3 gap-y-1 border-t border-ink/25 pt-4">
                  <span className="font-display text-5xl leading-none font-medium text-figure">
                    {piece.figure.value}
                  </span>
                  <span className="text-sm text-figure">{piece.figure.label}</span>
                </p>
              ) : null}
              <ul className="mt-4 flex flex-wrap gap-2">
                {piece.stack.map((item) => (
                  <li key={item} className="border border-ink/35 px-2 py-0.5 text-sm leading-6">
                    {item}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
        <PageFoot />
      </ScaleColumn>
    </main>
  );
}
