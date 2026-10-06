"use client";

import { buttonPrimary } from "@/lib/styles";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main id="content" className="flex min-h-[100dvh] flex-col justify-center">
      <div className="folio">
        <h1 className="font-display text-5xl leading-[0.95] font-semibold tracking-[-0.04em]">
          Something broke.
        </h1>
        <p className="mt-4 text-lg">Try loading the page again.</p>
        <button type="button" className={`${buttonPrimary} mt-8`} onClick={() => reset()}>
          Try again
        </button>
      </div>
    </main>
  );
}
