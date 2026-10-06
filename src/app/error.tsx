"use client";

import { buttonPrimary } from "@/lib/styles";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main id="content" className="flex min-h-[100dvh] flex-col justify-end bg-obsidian px-5 pb-[50px] text-bone sm:px-8">
      <h1 className="font-display text-[clamp(4rem,12vw,8rem)] leading-[0.8] font-normal tracking-[-0.05em] text-bone uppercase">
        Something broke.
      </h1>
      <p className="mt-[20px] max-w-[36rem] text-[19px] leading-[1.32]">Try loading the page again.</p>
      <button type="button" className={`${buttonPrimary} mt-8`} onClick={() => reset()}>
        Try again
      </button>
    </main>
  );
}
