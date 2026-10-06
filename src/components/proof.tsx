import { proof } from "@/lib/site";
import { chapterTitle } from "@/lib/styles";

export function Proof() {
  if (proof.length === 0) return null;

  return (
    <section id="figures" aria-labelledby="figures-heading" className="gutter py-16 md:py-24">
      <div className="shell">
        <h2 id="figures-heading" className={chapterTitle}>
          Figures
        </h2>
        <p className="mt-4 max-w-[42ch] text-lg leading-relaxed text-pretty text-muted">
          The numbers recorded with the work.
        </p>
        <ol className="mt-10 max-w-[46rem]">
          {proof.map((item) => (
            <li
              key={item.label}
              className="grid gap-2 py-6 sm:grid-cols-12 sm:items-baseline sm:gap-6"
            >
              <p className="font-display text-5xl leading-[1.05] font-medium tracking-tight text-accent italic sm:col-span-4 sm:text-6xl">
                <span className="inline-block pb-1">{item.value}</span>
              </p>
              <div className="sm:col-span-8">
                <p className="text-lg leading-snug text-pretty text-ink">{item.label}</p>
                <p className="mt-1 font-mono text-sm text-muted">{item.detail}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
