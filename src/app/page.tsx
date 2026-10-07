import { SectionNav } from "@/components/section-nav";
import { focusRing } from "@/lib/styles";
import { contact, pieces, site } from "@/lib/site";

export default function Home() {
  const [first, ...rest] = site.displayLines;

  return (
    <main id="content">
      <section className="bg-obsidian pt-[50px] pb-[30px] text-bone">
        <SectionNav />
        <h1 className="mt-[59px]">
          <span className="sr-only">{site.name}</span>
          <span className="wordmark block text-bone" aria-hidden="true">
            {first}
          </span>
        </h1>
      </section>

      <section className="flex min-h-[100dvh] flex-col bg-alarm pt-[50px] pb-[50px] text-obsidian">
        <p className="wordmark" aria-hidden="true">
          {rest.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </p>
        <p className="mt-[30px] max-w-[28rem] px-5 font-serif text-[14px] leading-[1.3] tracking-[0.05em] sm:px-8">
          {site.roleLine}
        </p>
      </section>

      <section id="work" className="bg-obsidian text-bone">
        <div className="rule border-b px-5 py-[59px] sm:px-8">
          <h2 className="text-[40px] leading-[1.08] font-bold">Work</h2>
        </div>
        <ol>
          {pieces.map((piece) => (
            <li key={piece.title} className="rule border-b px-5 py-[59px] sm:px-8">
              <div className="grid items-baseline gap-[15px] md:grid-cols-12">
                <h3 className="text-[40px] leading-[1.08] font-bold md:col-span-7">{piece.title}</h3>
                {piece.figure ? (
                  <p className="md:col-span-5 md:text-right">
                    <span className="block text-[40px] leading-[1.08] font-bold">{piece.figure.value}</span>
                    <span className="mt-[15px] block text-[19px] leading-[1.25] font-bold uppercase">
                      {piece.figure.label}
                    </span>
                  </p>
                ) : null}
              </div>
              <p className="mt-[20px] max-w-[40rem] text-[20px] leading-[1.32]">{piece.sentence}</p>
              <ul className="mt-[15px] flex flex-wrap gap-x-[15px] text-[19px] leading-[1.32]">
                {piece.stack.map((item) => (
                  <li key={item}>{item}</li>
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
