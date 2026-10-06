export default function Loading() {
  return (
    <main id="content" className="gutter pt-24" aria-busy="true" aria-label="Loading">
      <div className="shell space-y-4 pb-16">
        <div className="h-16 w-64 motion-safe:animate-pulse bg-line" />
        <div className="h-16 w-80 motion-safe:animate-pulse bg-line" />
        <div className="mt-6 h-5 w-96 max-w-full motion-safe:animate-pulse bg-line" />
        <div className="mt-8 h-10 w-40 motion-safe:animate-pulse bg-line" />
      </div>
    </main>
  );
}
