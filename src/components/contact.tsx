import { IconArrowUpRight } from "@/components/icons";
import { site } from "@/lib/site";
import { chapterTitle, focusRing } from "@/lib/styles";

const linkClass = `inline-flex items-center gap-2 text-xl leading-snug text-ink underline decoration-line underline-offset-[0.18em] transition-colors duration-200 hover:text-accent sm:text-2xl ${focusRing}`;

export function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-heading" className="gutter py-16 md:py-28">
      <div className="shell">
        <h2 id="contact-heading" className={chapterTitle}>
          Write
        </h2>
        <p className="mt-4 max-w-[42ch] text-lg leading-[1.65] text-pretty">
          Working student, internship, or full-time work in Germany. Hybrid, on-site, or
          remote. {site.hourCap}.
        </p>
        <ul className="mt-10 flex max-w-[36rem] flex-col items-start gap-4">
          <li>
            <a href={`mailto:${site.email}`} className={linkClass}>
              {site.email}
            </a>
          </li>
          <li>
            <a href={site.linkedin} className={linkClass} target="_blank" rel="noopener noreferrer">
              LinkedIn
              <IconArrowUpRight />
            </a>
          </li>
          <li>
            <a href={site.github} className={linkClass} target="_blank" rel="noopener noreferrer">
              GitHub, {site.githubHandle}
              <IconArrowUpRight />
            </a>
          </li>
          <li>
            <a href={site.phoneHref} className={linkClass}>
              +49 151 23606101
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
