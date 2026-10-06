import { IconArrowUpRight } from "@/components/icons";
import { Reveal } from "@/components/reveal";
import { site } from "@/lib/site";
import { buttonPrimary, textLink } from "@/lib/styles";

export function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-heading" className="bg-raised py-16 md:py-28">
      <div className="gutter">
        <Reveal className="shell">
          <h2
            id="contact-heading"
            className="text-3xl font-medium tracking-tight text-balance md:text-5xl"
          >
            Contact
          </h2>
          <p className="mt-5 max-w-[40ch] text-lg leading-relaxed text-pretty">
            LinkedIn is the way to reach me about a Werkstudent role.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-6">
            <a
              href={site.linkedin}
              className={buttonPrimary}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Contact on LinkedIn"
            >
              Contact
              <IconArrowUpRight />
            </a>
            {site.email ? (
              <a href={`mailto:${site.email}`} className={textLink}>
                {site.email}
              </a>
            ) : null}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
