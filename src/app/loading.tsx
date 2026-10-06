export default function Loading() {
  return (
    <main id="content" className="flex min-h-[100dvh] items-center" aria-busy="true" aria-label="Loading">
      <div className="folio my-12 text-center">
        <div className="mx-auto h-16 w-4/5 bg-ink/10 motion-safe:animate-pulse" />
        <div className="mx-auto mt-4 h-16 w-3/5 bg-ink/10 motion-safe:animate-pulse" />
        <div className="mx-auto mt-8 h-4 w-full bg-ink/10 motion-safe:animate-pulse" />
      </div>
    </main>
  );
}
