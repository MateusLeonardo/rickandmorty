import { useMemo } from "react";
import { Link } from "react-router";
import { useGetAllCharacters } from "../hooks/queries/characters/use-get-all-characters";
import { ContentGrid } from "../components/ui/ContentGrid/ContentGrid";
import { ContentGridSkeleton } from "../components/ui/ContentGrid/ContentGridSkeleton";
import { CharacterCard } from "../components/ui/CharacterCard/CharacterCard";
import { CharacterCardSkeleton } from "../components/ui/CharacterCard/CharacterCardSkeleton";

export function HomePage() {
  const aleatoryPage = useMemo(() => Math.floor(Math.random() * 42) + 1, []);
  const { data: characters, isLoading } = useGetAllCharacters(aleatoryPage);

  const randomCharacters = useMemo(() => {
    if (!characters?.results?.length) return [];
    return [...characters.results].sort(() => Math.random() - 0.5).slice(0, 10);
  }, [characters?.results]);

  if (isLoading) {
    return (
      <ContentGridSkeleton
        length={10}
        renderSkeleton={() => <CharacterCardSkeleton />}
      />
    );
  }
  return (
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
  );
}
