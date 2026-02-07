import { useState } from "react";
import { Pagination } from "../../components/ui/Pagination/Pagination";
import { CharacterCard } from "../../components/ui/CharacterCard/CharacterCard";
import { CharacterCardSkeleton } from "../../components/ui/CharacterCard/CharacterCardSkeleton";
import { Link } from "react-router";
import { useGetAllCharacters } from "../../hooks/queries/characters/use-get-all-characters";

export function CharacterIndex() {
  const [page, setPage] = useState(1);
  const { data, isLoading } = useGetAllCharacters(page);

  return (
    <div className="p-4 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {isLoading
          ? Array.from({ length: 10 }).map((_, index) => (
              <CharacterCardSkeleton key={index} />
            ))
          : data?.results?.map((character) => (
              <Link key={character.id} to={`/characters/${character.id}`}>
                <CharacterCard character={character} />
              </Link>
            ))}
      </div>

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
    </div>
  );
}
