import { proof } from "@/lib/site";

const spans = [
  "col-span-2 lg:col-span-5",
  "lg:col-span-3",
  "lg:col-span-2",
  "lg:col-span-2",
];

export function Proof() {
  if (proof.length === 0) return null;

  return (
    <section aria-label="Recorded outcomes" className="border-t border-line py-14 md:py-20">
      <div className="gutter">
        <ul className="shell grid grid-cols-2 items-end gap-x-6 gap-y-10 lg:grid-cols-12 lg:gap-x-8">
          {proof.map((item, index) => (
            <li key={item.label} className={spans[index] ?? "lg:col-span-3"}>
              <p
                className={`font-mono tracking-tight text-accent ${
                  index === 0
                    ? "text-5xl sm:text-6xl lg:text-7xl"
                    : "text-4xl sm:text-5xl"
                }`}
              >
                {item.value}
              </p>
              <p className="mt-3 max-w-[22ch] text-pretty leading-snug text-ink">
                {item.label}
              </p>
              <p className="mt-1 text-sm text-muted">{item.detail}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
