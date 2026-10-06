import { Edition } from "@/components/edition";
import { IconArrowUpRight } from "@/components/icons";
import { IndexNav } from "@/components/index-nav";
import { focusRing } from "@/lib/styles";
import { contact } from "@/lib/site";

export function PageFoot() {
  return (
    <footer className="mt-16">
      <nav aria-label="Contact">
        {contact.map((item) => (
          <a
            key={item.kicker}
            href={item.href}
            className={`flex items-center justify-between gap-4 border-b border-ink/30 py-3 ${focusRing}`}
          >
            <span>
              <span className="block text-[0.72rem] tracking-[0.08em] uppercase">{item.kicker}</span>
              <span className="mt-0.5 block underline decoration-1 underline-offset-[3px] hover:decoration-wavy">
                {item.label}
              </span>
            </span>
            <IconArrowUpRight />
          </a>
        ))}
      </nav>
      <div className="mt-10">
        <IndexNav />
      </div>
      <Edition />
    </footer>
  );
}
