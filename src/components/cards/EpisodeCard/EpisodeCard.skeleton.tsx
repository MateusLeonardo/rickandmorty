export function EpisodeCardSkeleton() {
  return (
    <div className="bg-white rounded-xl border border-neutral-100 shadow-sm p-5 animate-pulse">
      <div className="h-6 bg-neutral-200 rounded w-3/4 mb-2" />
      <div className="h-4 bg-neutral-100 rounded w-1/3 mb-3" />
      <div className="h-4 bg-neutral-100 rounded w-1/2 mb-2" />
      <div className="h-4 bg-neutral-100 rounded w-2/3" />
    </div>
  );
}
