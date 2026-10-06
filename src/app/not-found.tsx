import Link from "next/link";
import { textLink } from "@/lib/styles";

export default function NotFound() {
  return (
    <main id="content" className="flex min-h-[100dvh] flex-col justify-center">
      <div className="folio">
        <h1 className="font-display text-5xl leading-[0.95] font-semibold tracking-[-0.04em]">
          Not here.
        </h1>
        <p className="mt-4 text-lg">That address does not match a page.</p>
        <Link href="/" className={`${textLink} mt-8 inline-block text-lg`}>
          Back home
        </Link>
      </div>
    </main>
  );
}
