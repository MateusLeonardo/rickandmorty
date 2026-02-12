import { useState, useEffect, useRef } from "react";
import { Link } from "react-router";
import { useCharacters } from "../hooks/useCharacters.ts";
import { PageHeader } from "@/components/layout/PageHeader/index.ts";
import {
  ContentGrid,
  ContentGridSkeleton,
} from "@/components/layout/ContentGrid/index.ts";
import {
  CharacterCard,
  CharacterCardSkeleton,
} from "@/components/cards/CharacterCard/index.ts";
import { Pagination } from "@/components/ui/Pagination/index.ts";
import { FilterInput } from "@/components/ui/Filter/FilterInput.tsx";
import { FilterSelect } from "@/components/ui/Filter/FilterSelect.tsx";
import type { CharacterFilter } from "@/types/filter.ts";

export function CharactersPage() {
  const [page, setPage] = useState(1);
  const [filters, setFilters] = useState<CharacterFilter>({
    status: "",
    gender: "",
    name: "",
  });
  const inputRef = useRef<HTMLInputElement | null>(null);

  const { data, isLoading } = useCharacters(page, filters);

  const handleFilterChange =
    (key: keyof CharacterFilter) => (value: string) => {
      setFilters((prev) => ({ ...prev, [key]: value }));
      setPage(1);
    };

  useEffect(() => {
    if (inputRef.current) inputRef.current.focus();
  }, []);

  return (
    <div className="p-4 lg-p-2">
      <div className="flex justify-between items-center">
        <PageHeader
          title="Characters"
          subtitle="Explore the characters of the Rick and Morty series"
        />
        <div className="flex items-center gap-4">
          <FilterInput
            onChange={handleFilterChange("name")}
            placeholder="Search"
            value={filters.name}
            inputRef={inputRef}
          />
          <FilterSelect
            onChange={handleFilterChange("status")}
            options={["Alive", "Dead", "Unknown"]}
            placeholder="Status"
            value={filters.status}
          />
          <FilterSelect
            onChange={handleFilterChange("gender")}
            options={["Male", "Female", "Genderless", "Unknown"]}
            placeholder="Gender"
            value={filters.gender}
          />
        </div>
      </div>

      {!isLoading ? (
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
      ) : (
        <ContentGridSkeleton
          length={20}
          renderSkeleton={() => <CharacterCardSkeleton />}
        />
      )}

      {!!data?.info && (
        <Pagination
          pages={data.info.pages}
          next={data.info.next}
          prev={data.info.prev}
          page={page}
          onPrevious={() => setPage((prev) => prev - 1)}
          onNext={() => setPage((prev) => prev + 1)}
        />
      )}
    </div>
  );
}
