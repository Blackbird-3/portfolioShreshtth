import Link from "next/link";
import { index } from "@/lib/site";
import { focusRing } from "@/lib/styles";

export function IndexNav() {
  return (
    <nav aria-label="Index" className="mx-auto w-full max-w-[19rem]">
      <ol className="grid gap-3">
        {index.map((item) => (
          <li key={item.href}>
            <Link href={item.href} className={`index-link ${focusRing}`}>
              <span>{item.label}</span>
              <span className="index-dots" aria-hidden="true" />
              <span>{item.numeral}</span>
            </Link>
          </li>
        ))}
      </ol>
    </nav>
  );
}
