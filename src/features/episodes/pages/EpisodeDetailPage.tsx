import { Link, useParams } from "react-router";
import { useEpisode } from "../hooks/useEpisode.ts";
import { useCharactersByIds } from "@/features/characters/hooks/useCharactersByIds.ts";
import { ContentGrid } from "@/components/layout/ContentGrid/index.ts";
import { CharacterCard } from "@/components/cards/CharacterCard/index.ts";
import { FaArrowLeft } from "react-icons/fa";

function EpisodeDetailSkeleton() {
  return (
    <div className="p-4 animate-pulse">
      <div className="h-5 w-32 bg-neutral-200 rounded mb-6" />
      <div className="h-8 bg-neutral-200 rounded w-1/2 mb-3" />
      <div className="h-4 bg-neutral-100 rounded w-1/3 mb-2" />
      <div className="h-4 bg-neutral-100 rounded w-1/4 mb-8" />
      <div className="h-6 bg-neutral-200 rounded w-1/3 mb-4" />
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {Array.from({ length: 10 }).map((_, i) => (
          <div key={i} className="bg-neutral-100 rounded-lg h-48" />
        ))}
      </div>
    </div>
  );
}

export function EpisodeDetailPage() {
  const { id } = useParams<{ id: string }>();
  const { data: episode, isLoading } = useEpisode(Number(id));

  const characterIds =
    episode?.characters?.map((url) => Number(url.split("/").pop())) ?? [];
  const { data: characters } = useCharactersByIds(characterIds);

  if (isLoading) return <EpisodeDetailSkeleton />;

  return (
    <div className="p-4 lg-p-2">
      <Link
        to="/episodes"
        className="inline-flex items-center gap-1 text-neutral-500 hover:text-neutral-700 text-sm mb-6 transition-colors"
      >
        <FaArrowLeft /> Go back
      </Link>

      <div className="flex flex-col gap-2 mb-8">
        <h1 className="text-3xl font-bold text-neutral-900">{episode?.name}</h1>
        <p className="text-neutral-500">{episode?.air_date}</p>
        <p className="text-neutral-400 text-sm">{episode?.episode}</p>
      </div>

      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-bold text-neutral-800">
          Characters of the episode
        </h2>
        <ContentGrid
          items={characters ?? []}
          keyExtractor={(character) => character.id}
          renderItem={(character) => (
            <Link to={`/characters/${character.id}`}>
              <CharacterCard character={character} />
            </Link>
          )}
        />
      </div>
    </div>
  );
}
