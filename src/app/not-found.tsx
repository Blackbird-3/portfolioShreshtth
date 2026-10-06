import Link from "next/link";
import { textLink } from "@/lib/styles";

export default function NotFound() {
  return (
    <main id="content" className="gutter flex min-h-[100dvh] flex-col justify-center py-24">
      <div className="shell">
        <h1 className="font-display text-5xl leading-[1.05] font-medium text-balance md:text-7xl">
          This page is not in the book.
        </h1>
        <p className="mt-4 max-w-[36ch] text-lg text-muted">The address does not match a chapter.</p>
        <Link href="/" className={`${textLink} mt-8 text-lg`}>
          Back to the start
        </Link>
      </div>
    </main>
  );
}
