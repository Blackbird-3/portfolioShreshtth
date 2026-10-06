import Link from "next/link";
import { focusRing } from "@/lib/styles";

export default function NotFound() {
  return (
    <main id="content" className="flex min-h-[100dvh] flex-col justify-end bg-alarm px-5 pb-[50px] text-obsidian sm:px-8">
      <h1 className="font-display text-[clamp(4rem,12vw,8rem)] leading-[0.8] font-normal tracking-[-0.05em] uppercase">
        Not here.
      </h1>
      <p className="mt-[20px] max-w-[36rem] text-[19px] leading-[1.32]">
        That address does not match a page.
      </p>
      <Link href="/" className={`mt-8 inline-block text-[19px] underline decoration-1 underline-offset-[3px] ${focusRing}`}>
        Back home
      </Link>
    </main>
  );
}
