import { focusRing } from "@/lib/styles";
import { contact, pieces, site } from "@/lib/site";

const pill = [
  "inline-flex items-center rounded-full border border-bone px-5 py-[7px]",
  "text-[19px] leading-none",
  "hover:bg-bone hover:text-obsidian",
  focusRing,
].join(" ");

export default function Home() {
  return (
    <main id="content">
      <header className="bg-obsidian px-5 pt-[50px] pb-4">
        <nav aria-label="Sections" className="flex justify-center gap-[15px]">
          <a href="#work" className={pill}>
            Work
          </a>
          <a href="#write" className={pill}>
            Write
          </a>
        </nav>
      </header>

      <section className="hero flex min-h-[calc(100dvh-92px)] flex-col justify-end bg-alarm px-4 pt-[50px] pb-[50px] text-obsidian sm:px-6">
        <h1 className="masthead" translate="no">
          {site.displayLines.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </h1>
        <p className="mt-[30px] max-w-[36rem] text-[19px] leading-[1.32]">{site.roleLine}</p>
      </section>

      <section id="work" className="bg-obsidian text-bone">
        <div className="rule border-b px-5 py-[59px] sm:px-8">
          <h2 className="text-[40px] leading-[1.08] font-bold">Work</h2>
        </div>
        <ol>
          {pieces.map((piece) => (
            <li key={piece.title} className="rule border-b px-5 py-[59px] sm:px-8">
              <div className="grid items-end gap-[15px] md:grid-cols-12 md:gap-8">
                <h3 className="project-name md:col-span-7">{piece.title}</h3>
                {piece.figure ? (
                  <p className="md:col-span-5 md:text-right">
                    <span className="project-figure block">{piece.figure.value}</span>
                    <span className="mt-2 block text-[19px] leading-[1.32]">{piece.figure.label}</span>
                  </p>
                ) : null}
              </div>
              <p className="mt-[20px] max-w-[40rem] text-[19px] leading-[1.32]">{piece.sentence}</p>
              <ul className="mt-[15px] flex flex-wrap text-[19px] leading-[1.32]">
                {piece.stack.map((item, index) => (
                  <li key={item} className={index === 0 ? "pr-[15px]" : "border-l border-bone px-[15px]"}>
                    {item}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </section>

      <section id="write" className="bg-obsidian text-bone">
        <div className="rule border-b px-5 py-[59px] sm:px-8">
          <h2 className="text-[40px] leading-[1.08] font-bold">Write</h2>
        </div>
        <ul>
          {contact.map((item) => (
            <li key={item.kicker} className="rule border-b">
              <a
                href={item.href}
                className={`grid gap-1 px-5 py-5 sm:px-8 md:grid-cols-12 md:items-baseline md:gap-8 ${focusRing}`}
              >
                <span className="text-[19px] leading-[1.32] md:col-span-3">{item.kicker}</span>
                <span className="text-[19px] leading-[1.32] underline decoration-1 underline-offset-[3px] md:col-span-9">
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
