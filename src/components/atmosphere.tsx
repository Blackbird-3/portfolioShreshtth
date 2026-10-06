import Image from "next/image";

export function Atmosphere() {
  return (
    <div className="gutter py-4 md:py-8">
      <div className="shell">
        <div className="relative h-[38vh] min-h-[220px] max-h-[460px] overflow-hidden rounded-[12px] bg-raised">
          <Image
            src="/images/factory.jpg"
            alt="Factory floor with machinery and a worker in a high-visibility vest. Atmospheric photograph, not a project."
            fill
            sizes="(min-width: 1400px) 1400px, 100vw"
            className="photo-grade object-cover"
          />
        </div>
      </div>
    </div>
  );
}
