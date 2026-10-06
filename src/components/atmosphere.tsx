import Image from "next/image";

export function Atmosphere() {
  return (
    <figure className="gutter py-6 md:py-10">
      <div className="shell">
        <div className="relative aspect-[5/4] max-w-[34rem] overflow-hidden bg-raised sm:aspect-[4/3]">
          <Image
            src="/images/hero.jpg"
            alt="Milling machine cutting a metal workpiece in a workshop. Atmospheric photograph, not a project."
            fill
            sizes="(min-width: 768px) 34rem, 100vw"
            className="photo-grade object-cover"
          />
        </div>
        <figcaption className="mt-3 max-w-[34rem] font-mono text-sm text-muted">
          Workshop photograph. Atmosphere, not a project.
        </figcaption>
      </div>
    </figure>
  );
}
