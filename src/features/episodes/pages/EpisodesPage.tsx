import { useState, useEffect, useRef } from "react";
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
import { FilterInput } from "@/components/ui/Filter/FilterInput.tsx";
import { useDebounce } from "@/custom-hooks/useDebounce.ts";
import type { EpisodeFilter } from "@/types/filter.ts";

const episodeGridClassName =
  "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4";

export function EpisodesPage() {
  const [page, setPage] = useState(1);
  const [filters, setFilters] = useState<EpisodeFilter>({
    name: "",
    episode: "",
  });
  const inputRef = useRef<HTMLInputElement | null>(null);
  const debouncedFilters = useDebounce(filters, 500);
  const {
    data: episodes,
    isLoading,
    isError,
  } = useEpisodes(page, debouncedFilters);

  const handleFilterChange = (key: keyof EpisodeFilter) => (value: string) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
    setPage(1);
  };

  useEffect(() => {
    if (inputRef.current) inputRef.current.focus();
  }, []);

  return (
    <div className="p-4 lg:p-2">
      <div className="flex justify-between items-center">
        <PageHeader
          title="Episodes"
          subtitle="All episodes of the Rick and Morty series"
        />

        <div className="flex items-center gap-4">
          <FilterInput
            onChange={handleFilterChange("name")}
            placeholder="Search"
            value={filters.name}
            inputRef={inputRef}
          />
          <FilterInput
            onChange={handleFilterChange("episode")}
            placeholder="Episode (e.g. S01E01)"
            value={filters.episode}
          />
        </div>
      </div>

      {isLoading ? (
        <ContentGridSkeleton
          length={12}
          gridClassName={episodeGridClassName}
          renderSkeleton={() => <EpisodeCardSkeleton />}
        />
      ) : isError ? (
        <div className="flex justify-center items-center">
          <p className="text-red-500 text-lg">Episode not found.</p>
        </div>
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
