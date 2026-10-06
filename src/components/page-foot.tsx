import { Edition } from "@/components/edition";
import { IndexNav } from "@/components/index-nav";
import { textLink } from "@/lib/styles";
import { contact } from "@/lib/site";

export function PageFoot() {
  return (
    <footer className="mt-16">
      <nav
        aria-label="Contact"
        className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2 border-y-2 border-ink py-3 text-sm"
      >
        {contact.map((item) => (
          <a key={item.label} href={item.href} className={textLink}>
            {item.label}
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
