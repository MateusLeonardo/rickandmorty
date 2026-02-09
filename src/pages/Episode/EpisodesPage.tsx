import { useGetAllEpisodes } from "../../hooks/queries/episodes/use-get-all-episodes";
import { ContentGrid } from "../../components/ui/ContentGrid/ContentGrid";
import { ContentGridSkeleton } from "../../components/ui/ContentGrid/ContentGridSkeleton";
import { EpisodeCard } from "../../components/ui/EpisodeCard/EpisodeCard";
import { EpisodeCardSkeleton } from "../../components/ui/EpisodeCard/EpisodeCardSkeleton";
import HeaderPage from "../../components/ui/HeaderPage/HeaderPage";

const episodeGridClassName =
  "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4";

export function EpisodesPage() {
  const { data: episodes, isLoading } = useGetAllEpisodes();

  return (
    <div className="container mx-auto p-4 max-w-6xl">
      <HeaderPage
        title="Episódios"
        subtitle="Todos os episódios de Rick and Morty"
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
          renderItem={(episode) => <EpisodeCard episode={episode} />}
        />
      )}
    </div>
  );
}
