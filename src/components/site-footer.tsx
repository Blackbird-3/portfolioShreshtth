import { site } from "@/lib/site";
import { focusRing } from "@/lib/styles";

export function SiteFooter() {
  return (
    <footer className="border-t border-line py-8">
      <div className="gutter">
        <div className="shell flex flex-col gap-3 sm:flex-row sm:items-baseline sm:justify-between">
          <p translate="no" className="font-display text-2xl italic">
            {site.name}
          </p>
          <p className="font-mono text-sm text-muted">{site.roleLine}</p>
          <a
            href={site.linkedin}
            className={`text-sm text-ink underline decoration-line underline-offset-4 transition-colors duration-200 hover:text-accent ${focusRing}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </div>
        <p className="shell mt-6 font-mono text-sm text-muted">Photographs via Unsplash.</p>
      </div>
    </footer>
  );
}
