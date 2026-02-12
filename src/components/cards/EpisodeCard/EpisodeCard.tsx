import type { Episode } from "@/types/episode.ts";

export interface EpisodeCardProps {
  episode: Episode;
}

export function EpisodeCard({ episode }: EpisodeCardProps) {
  const charactersCount = episode.characters?.length ?? 0;

  return (
    <article className="bg-white rounded-xl border border-neutral-100 shadow-sm hover:shadow-md transition-shadow p-5">
      <h2 className="text-lg font-bold text-neutral-900 mb-1 truncate">
        {episode.name}
      </h2>
      <p className="text-neutral-500 text-sm mb-3">{episode.episode}</p>
      <dl className="space-y-2 text-sm">
        <div>
          <dt className="text-neutral-400 uppercase tracking-wider text-xs mb-0.5">
            Release date
          </dt>
          <dd className="text-neutral-800 font-medium">
            {episode.air_date || "—"}
          </dd>
        </div>
        <div>
          <dt className="text-neutral-400 uppercase tracking-wider text-xs mb-0.5">
            Characters
          </dt>
          <dd className="text-neutral-800 font-medium">{charactersCount}</dd>
        </div>
      </dl>
    </article>
  );
}
