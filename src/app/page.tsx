import { HeroWheel } from "@/components/hero-wheel/hero-wheel";
import { MobileMore } from "@/components/mobile-more";
import { ProjectDemo } from "@/components/project-demos";
import { TechnicalToolkit } from "@/components/technical-toolkit";
import { focusRing } from "@/lib/styles";
import { contact, education, nav, otherProjects, pieces, roles, site } from "@/lib/site";

const linkClass = `underline decoration-1 underline-offset-[3px] ${focusRing}`;

export default function Home() {
  return (
    <main id="content">
      <HeroWheel />

      <div className="below">
        <section id="about" className="sheet scroll-mt-8">
          <div className="intro">
            <div>
              <p className="sheet-kicker">AI research engineer · Amberg, Germany</p>
              <h2 className="sheet-title">
                Engineer and master’s <em>student.</em>
              </h2>
            </div>
            <div>
              <div className="sheet-copy grid gap-4">
                <p>
                  I am in the master’s in artificial intelligence at <strong>OTH Amberg-Weiden</strong>. The work I
                  care about is the overlap of software engineering, AI systems, and applied research.
                </p>
                <MobileMore>
                  <div className="grid gap-4">
                    <p>
                      I studied computer science and engineering at <strong>BML Munjal University</strong>. The first
                      internships were software and data: application workflows at MetLife, then ETL and dashboards at
                      KPMG India.
                    </p>
                    <p>
                      At <strong>GlobalLogic</strong> I built GenAI into a real product, AuditAI, on React and FastAPI.
                      At <strong>Sftwtrs.ai</strong> I worked as an AI Research Engineer on call automation that has to
                      survive a production phone line.
                    </p>
                  </div>
                </MobileMore>
              </div>
              <nav aria-label="Sections" className="sheet-actions">
                {nav.map((item) => (
                  <a key={item.href} href={item.href} className={`pill pill-line ${focusRing}`}>
                    {item.label}
                  </a>
                ))}
                <a href={site.cv} className={`pill pill-fill ${focusRing}`}>
                  CV
                </a>
              </nav>
            </div>
          </div>
        </section>

        <section id="work" className="sheet scroll-mt-8">
          <p className="sheet-kicker">Work</p>
          <h2 className="sheet-title">
            Selected <em>work.</em>
          </h2>
          <ol className="work-list sheet-block">
            {pieces.map((piece, index) => (
              <li id={piece.id} key={piece.id} className="panel work-card rise scroll-mt-8">
                <ProjectDemo id={piece.id} />
                <div className="work-copy">
                  <p className="sheet-kicker">
                    {String(index + 1).padStart(2, "0")} · {piece.kicker}
                  </p>
                  <h3 className="piece-title">{piece.title}</h3>
                  <p className="sheet-copy">{piece.sentence}</p>
                  <ul className="chips">
                    {piece.stack.map((item) => (
                      <li key={item} className="chip">
                        {item}
                      </li>
                    ))}
                  </ul>
                  <MobileMore>
                    <div className="piece-copy sheet-copy">
                      <p>{piece.problem}</p>
                      <p>{piece.built}</p>
                      <ul className="grid gap-2">
                        {piece.decisions.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                      {piece.steps ? (
                        <ol className="steps">
                          {piece.steps.map((step, stepIndex, list) => (
                            <li key={step}>
                              {step}
                              {stepIndex < list.length - 1 ? " /" : ""}
                            </li>
                          ))}
                        </ol>
                      ) : null}
                    </div>
                  </MobileMore>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section id="experience" className="sheet scroll-mt-8">
          <p className="sheet-kicker">Path</p>
          <h2 className="sheet-title">
            Work <em>experience.</em>
          </h2>
          <ol className="role-list sheet-block">
            {roles.map((role) => (
              <li key={role.id} className="role-row rise">
                <p className="sheet-kicker">{role.dates}</p>
                <div>
                  <h3 className="entry-title">{role.title}</h3>
                  <p className="org">{role.org}</p>
                  <MobileMore>
                    <ul className="entry-copy sheet-copy">
                      {role.points.map((point) => (
                        <li key={point.text ?? `${point.label}${point.after}`}>
                          {point.text ? (
                            point.text
                          ) : (
                            <>
                              {point.before}
                              <a href={point.href} className={linkClass}>
                                {point.label}
                              </a>
                              {point.after}
                            </>
                          )}
                        </li>
                      ))}
                    </ul>
                  </MobileMore>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section id="education" className="sheet scroll-mt-8">
          <p className="sheet-kicker">Education</p>
          <h2 className="sheet-title">
            The <em>degrees.</em>
          </h2>
          <ol className="degree-grid sheet-block">
            {education.map((item) => (
              <li key={item.id} className="panel rise rounded-2xl px-6 py-6">
                <p className="sheet-kicker">{item.dates}</p>
                <h3 className="entry-title mt-3">{item.degree}</h3>
                <p className="org">
                  {item.school} · {item.place}
                </p>
              </li>
            ))}
          </ol>
        </section>

        <section id="other" className="sheet scroll-mt-8">
          <p className="sheet-kicker">Earlier</p>
          <h2 className="sheet-title">
            Other <em>projects.</em>
          </h2>
          <ul className="card-grid sheet-block">
            {otherProjects.map((project) => (
              <li key={project.id} className="panel rise rounded-2xl px-6 py-6">
                <h3 className="entry-title">{project.title}</h3>
                <p className="sheet-copy mt-3">{project.sentence}</p>
                <ul className="chips mt-4">
                  {project.stack.map((item) => (
                    <li key={item} className="chip">
                      {item}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </section>

        <TechnicalToolkit />

        <section id="contact" className="sheet scroll-mt-8">
          <p className="sheet-kicker">Contact</p>
          <h2 className="sheet-title">
            Say <em>hello.</em>
          </h2>
          <ul className="contact-grid sheet-block">
            {contact.map((item) => (
              <li key={item.kicker}>
                <a href={item.href} className={focusRing}>
                  <span className="sheet-kicker">{item.kicker}</span>
                  <span className="text-[18px] break-all">{item.label} →</span>
                </a>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </main>
  );
}
