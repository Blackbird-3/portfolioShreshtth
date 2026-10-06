import Link from "next/link";
import { buttonPrimary } from "@/lib/styles";

export default function NotFound() {
  return (
    <main id="content" className="gutter flex min-h-[100dvh] flex-col justify-center py-24">
      <div className="shell">
        <h1 className="text-4xl font-medium tracking-tight text-balance md:text-6xl">
          Page Not Found
        </h1>
        <p className="mt-4 max-w-[36ch] text-lg text-muted">
          This address is not part of the site.
        </p>
        <Link href="/" className={`${buttonPrimary} mt-8`}>
          Home
        </Link>
      </div>
    </main>
  );
}
