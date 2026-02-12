import { useState } from "react";
import { Link } from "react-router";
import { useEpisodes } from "../hooks/useEpisodes.ts";
import { PageHeader } from "@/components/layout/PageHeader/index.ts";
import {
  ContentGrid,
  ContentGridSkeleton,
} from "@/components/layout/ContentGrid/index.ts";
import {
  EpisodeCard,
  EpisodeCardSkeleton,
} from "@/components/cards/EpisodeCard/index.ts";
import { Pagination } from "@/components/ui/Pagination/index.ts";

const episodeGridClassName =
  "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4";

export function EpisodesPage() {
  const [page, setPage] = useState(1);
  const { data: episodes, isLoading } = useEpisodes(page);

  return (
    <div className="p-4 lg-p-2">
      <PageHeader
        title="Episodes"
        subtitle="All episodes of the Rick and Morty series"
      />

      {isLoading ? (
        <ContentGridSkeleton
          length={12}
          gridClassName={episodeGridClassName}
          renderSkeleton={() => <EpisodeCardSkeleton />}
        />
      ) : (
        <ContentGrid
          items={episodes?.results ?? []}
          keyExtractor={(ep) => ep.id}
          gridClassName={episodeGridClassName}
          renderItem={(episode) => (
            <Link to={`/episodes/${episode.id}`}>
              <EpisodeCard episode={episode} />
            </Link>
          )}
        />
      )}

      {episodes?.info && (
        <Pagination
          pages={episodes.info.pages}
          next={episodes.info.next}
          prev={episodes.info.prev}
          page={page}
          onPrevious={() => setPage((prev) => prev - 1)}
          onNext={() => setPage((prev) => prev + 1)}
        />
      )}
    </div>
  );
}
