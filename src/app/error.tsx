"use client";

import { buttonPrimary } from "@/lib/styles";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main id="content" className="gutter flex min-h-[100dvh] flex-col justify-center py-24">
      <div className="shell">
        <h1 className="font-display text-5xl leading-[1.05] font-medium text-balance md:text-7xl">
          This page failed to load.
        </h1>
        <p className="mt-4 max-w-[36ch] text-lg text-muted">
          Try again. If it keeps failing, use the links in Write.
        </p>
        <button type="button" className={`${buttonPrimary} mt-8`} onClick={() => reset()}>
          Try again
        </button>
      </div>
    </main>
  );
}
