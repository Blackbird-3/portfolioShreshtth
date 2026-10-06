import Link from "next/link";
import { ModeToggle } from "@/components/mode-toggle";
import { focusRing } from "@/lib/styles";
import { site } from "@/lib/site";

export function Edition() {
  return (
    <div className="mt-14 text-center">
      <Link
        href="/"
        className={`font-serif text-sm font-semibold no-underline hover:underline hover:decoration-wavy ${focusRing}`}
      >
        {site.edition}
      </Link>
      <ModeToggle />
    </div>
  );
}
