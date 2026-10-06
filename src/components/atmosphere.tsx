import Image from "next/image";

export function Atmosphere() {
  return (
    <figure className="bg-raised">
      <div className="relative h-[42vh] min-h-[240px] max-h-[520px]">
        <Image
          src="/images/factory.jpg"
          alt=""
          fill
          sizes="100vw"
          className="photo-grade object-cover"
        />
      </div>
      <figcaption className="gutter">
        <p className="shell py-3 text-sm text-muted">
          Factory interior. Not a project.
        </p>
      </figcaption>
    </figure>
  );
}
