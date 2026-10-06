import type { Metadata } from "next";
import Image from "next/image";
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
      <ScaleColumn className="my-12 sm:my-16">
        <header className="text-center">
          <p className="chapter-num">I</p>
          <h1 className="chapter-title">Work</h1>
        </header>
        <ul className="mt-10 grid gap-10">
          {pieces.map((piece) => (
            <li key={piece.title}>
              <Image
                src={piece.image}
                alt={piece.alt}
                width={1150}
                height={700}
                unoptimized
                className="block h-auto w-full border border-ink"
              />
              <div className="mt-2 flex items-baseline justify-between gap-4 text-[0.78rem] leading-snug">
                <span className="font-semibold tracking-[0.04em] uppercase">{piece.title}</span>
                {piece.proof ? <span className="shrink-0 text-right">{piece.proof}</span> : null}
              </div>
            </li>
          ))}
        </ul>
        <PageFoot />
      </ScaleColumn>
    </main>
  );
}
