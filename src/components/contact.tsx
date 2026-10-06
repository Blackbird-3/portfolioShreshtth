import { IconArrowUpRight } from "@/components/icons";
import { Reveal } from "@/components/reveal";
import { site } from "@/lib/site";
import { focusRing } from "@/lib/styles";

const linkClass = `inline-flex items-center gap-2 rounded-[12px] text-2xl font-medium tracking-tight text-ink transition-colors duration-200 hover:text-accent sm:text-3xl ${focusRing}`;

export function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-heading" className="bg-raised py-16 md:py-24">
      <div className="gutter">
        <Reveal className="shell">
          <h2
            id="contact-heading"
            className="text-3xl font-medium tracking-tight text-balance md:text-5xl"
          >
            Contact
          </h2>
          <p className="mt-4 max-w-[42ch] text-lg leading-relaxed text-pretty text-ink">
            Open to working student, internship, and full-time roles in Germany.
            Hybrid, on-site, or remote.
          </p>
          <ul className="mt-10 flex flex-col items-start gap-4">
            <li>
              <a
                href={site.linkedin}
                className={linkClass}
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
                <IconArrowUpRight />
              </a>
            </li>
            <li>
              <a
                href={site.github}
                className={linkClass}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub, {site.githubHandle}
                <IconArrowUpRight />
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className={linkClass}>
                {site.email}
              </a>
            </li>
            <li>
              <a href={site.phoneHref} className={linkClass}>
                {site.phone}
              </a>
            </li>
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
