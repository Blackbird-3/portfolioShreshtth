export default function Loading() {
  return (
    <main
      id="content"
      className="flex min-h-[100dvh] flex-col justify-end bg-obsidian px-5 pb-16 sm:px-8"
      aria-busy="true"
      aria-label="Loading"
    >
      <div className="space-y-3">
        <div className="h-16 w-4/5 bg-bone/15 motion-safe:animate-pulse" />
        <div className="h-16 w-3/5 bg-bone/15 motion-safe:animate-pulse" />
        <div className="h-16 w-2/5 bg-bone/15 motion-safe:animate-pulse" />
      </div>
    </main>
  );
}
