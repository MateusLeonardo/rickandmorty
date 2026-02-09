import { useState } from "react";
import { Link } from "react-router";
import { Pagination } from "../../components/ui/Pagination/Pagination";
import { ContentGrid } from "../../components/ui/ContentGrid/ContentGrid";
import { CharacterCard } from "../../components/ui/CharacterCard/CharacterCard";
import { CharacterCardSkeleton } from "../../components/ui/CharacterCard/CharacterCardSkeleton";
import { useGetAllCharacters } from "../../hooks/queries/characters/use-get-all-characters";
import HeaderPage from "../../components/ui/HeaderPage/HeaderPage";
import { ContentGridSkeleton } from "../../components/ui/ContentGrid/ContentGridSkeleton";

export function CharacterIndex() {
  const [page, setPage] = useState(1);
  const { data, isLoading } = useGetAllCharacters(page);

  if (isLoading) {
    return (
      <ContentGridSkeleton
        length={20}
        renderSkeleton={() => <CharacterCardSkeleton />}
      />
    );
  }
  return (
    <>
      <HeaderPage
        title="Personagens"
        subtitle="Explore os personagens da série Rick and Morty"
      />
      <ContentGrid
        items={data?.results ?? []}
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
      {!!data?.info && (
        <Pagination
          pages={data?.info.pages}
          next={data?.info.next}
          prev={data?.info?.prev}
          page={page}
          onPrevious={() => setPage((prev) => prev - 1)}
          onNext={() => setPage((prev) => prev + 1)}
        />
      )}
    </>
  );
}
