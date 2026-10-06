import { proof } from "@/lib/site";

export function Proof() {
  if (proof.length === 0) return null;

  return (
    <section aria-label="Recorded outcomes" className="border-t border-line py-14 md:py-20">
      <div className="gutter">
        <ul className="shell grid grid-cols-1 gap-x-10 gap-y-12 sm:grid-cols-2">
          {proof.map((item, index) => (
            <li key={item.label} className={index === 0 ? "sm:col-span-2" : undefined}>
              <p
                className={`font-mono tracking-tight whitespace-nowrap text-accent ${
                  index === 0 ? "text-6xl sm:text-7xl" : "text-4xl sm:text-5xl"
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
