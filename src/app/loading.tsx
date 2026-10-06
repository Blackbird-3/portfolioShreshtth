export default function Loading() {
  return (
    <main id="content" className="gutter pt-20" aria-busy="true" aria-label="Loading">
      <div className="shell grid gap-8 pb-10 lg:grid-cols-2">
        <div className="space-y-4 py-8">
          <div className="h-4 w-40 motion-safe:animate-pulse rounded-[12px] bg-line" />
          <div className="h-16 w-56 motion-safe:animate-pulse rounded-[12px] bg-line" />
          <div className="h-16 w-48 motion-safe:animate-pulse rounded-[12px] bg-line" />
          <div className="h-5 w-72 motion-safe:animate-pulse rounded-[12px] bg-line" />
          <div className="flex gap-3 pt-2">
            <div className="h-11 w-28 motion-safe:animate-pulse rounded-[12px] bg-line" />
            <div className="h-11 w-24 motion-safe:animate-pulse rounded-[12px] bg-line" />
          </div>
        </div>
        <div className="min-h-[30vh] motion-safe:animate-pulse rounded-[12px] bg-line" />
      </div>
    </main>
  );
}
