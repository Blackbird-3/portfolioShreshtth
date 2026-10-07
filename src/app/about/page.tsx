import type { Metadata } from "next";
import Link from "next/link";
import { SectionNav } from "@/components/section-nav";
import { focusRing } from "@/lib/styles";
import { contact, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description: `${site.name}. ${site.roleLine}.`,
};

export default function AboutPage() {
  return (
    <main id="content" className="bg-obsidian text-bone">
      <section className="pt-[50px]">
        <SectionNav />
        <h1 className="masthead mt-[30px] text-bone" translate="no">
          About
        </h1>
      </section>

      <section className="bg-alarm px-5 py-[50px] text-obsidian sm:px-8">
        <p className="max-w-[36rem] font-serif text-[19px] leading-[1.3] tracking-[0.05em]">{site.roleLine}</p>
        <p className="mt-[30px] max-w-[40rem] text-[20px] leading-[1.32]">
          Selected work is a production voice platform, chest X-ray classification, and questions answered from
          university policy documents.
        </p>
        <Link
          href="/"
          className={`mt-[30px] inline-block text-[19px] underline decoration-1 underline-offset-[3px] ${focusRing}`}
        >
          Work
        </Link>
      </section>

      <section id="write" className="bg-obsidian text-bone">
        <div className="rule border-b px-5 py-[50px] sm:px-8">
          <h2 className="text-[40px] leading-[1.08] font-bold">Write</h2>
        </div>
        <ul>
          {contact.map((item) => (
            <li key={item.kicker} className="rule border-b">
              <a
                href={item.href}
                className={`grid gap-1 px-5 py-5 sm:px-8 md:grid-cols-12 md:items-baseline md:gap-8 ${focusRing}`}
              >
                <span className="text-[19px] leading-[1.32] tracking-[0.04em] text-ash uppercase md:col-span-3">
                  {item.kicker}
                </span>
                <span className="text-[20px] leading-[1.32] underline decoration-1 underline-offset-[3px] md:col-span-9">
                  {item.label}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
