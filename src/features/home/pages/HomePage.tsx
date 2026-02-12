import { useMemo } from "react";
import { Link } from "react-router";
import { useCharacters } from "@/features/characters/hooks/useCharacters.ts";
import {
  ContentGrid,
  ContentGridSkeleton,
} from "@/components/layout/ContentGrid/index.ts";
import {
  CharacterCard,
  CharacterCardSkeleton,
} from "@/components/cards/CharacterCard/index.ts";

export function HomePage() {
  const randomPage = useMemo(() => Math.floor(Math.random() * 42) + 1, []);
  const { data: characters, isLoading } = useCharacters(randomPage);

  const randomCharacters = useMemo(() => {
    if (!characters?.results?.length) return [];
    return [...characters.results].sort(() => Math.random() - 0.5).slice(0, 10);
  }, [characters?.results]);

  return (
    <div className="p-4 lg-p-2">
      {isLoading ? (
        <ContentGridSkeleton
          length={10}
          renderSkeleton={() => <CharacterCardSkeleton />}
        />
      ) : (
        <ContentGrid
          items={randomCharacters}
          keyExtractor={(c) => c.id}
          renderItem={(character) => (
            <Link
              to={`/characters/${character.id}`}
              className="block w-full min-w-0"
            >
              <CharacterCard character={character} />
            </Link>
          )}
        />
      )}
    </div>
  );
}
