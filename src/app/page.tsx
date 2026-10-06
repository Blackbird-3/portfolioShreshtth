import { Edition } from "@/components/edition";
import { IndexNav } from "@/components/index-nav";
import { ScaleColumn } from "@/components/scale-column";
import { site } from "@/lib/site";

export default function Home() {
  return (
    <main id="content" className="flex min-h-[100dvh] items-center">
      <ScaleColumn className="my-12">
        <header className="text-center">
          <h1 className="home-name" translate="no">
            {site.displayLines.map((line, index) => (
              <span key={line}>
                {index > 0 ? <br /> : null}
                {line}
              </span>
            ))}
          </h1>
          <p className="home-role">{site.roleLine}</p>
        </header>
        <div className="mt-9">
          <IndexNav />
        </div>
        <Edition />
      </ScaleColumn>
    </main>
  );
}
