export default function Loading() {
  return (
    <main id="content" aria-busy="true" aria-label="Loading">
      <div className="folio pt-8 text-center sm:pt-14">
        <div className="mx-auto h-16 w-4/5 bg-ink/10 motion-safe:animate-pulse" />
        <div className="mx-auto mt-6 h-5 w-3/5 bg-ink/10 motion-safe:animate-pulse" />
        <div className="mx-auto mt-8 h-4 w-full bg-ink/10 motion-safe:animate-pulse" />
      </div>
    </main>
  );
}
