import { useEffect, useRef, useState } from "react";
import { useLocations } from "../hooks/useLocations.ts";
import { PageHeader } from "@/components/layout/PageHeader/index.ts";
import {
  ContentGrid,
  ContentGridSkeleton,
} from "@/components/layout/ContentGrid/index.ts";
import {
  LocationCard,
  LocationCardSkeleton,
} from "@/components/cards/LocationCard/index.ts";
import { Pagination } from "@/components/ui/Pagination/index.ts";
import { FilterInput } from "@/components/ui/Filter/FilterInput.tsx";
import type { LocationFilter } from "@/types/filter.ts";
import { useDebounce } from "@/custom-hooks/useDebounce.ts";

const locationGridClassName =
  "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4";

export function LocationsPage() {
  const [page, setPage] = useState(1);
  const [filters, setFilters] = useState<LocationFilter>({
    name: "",
    dimension: "",
    type: "",
  });
  const debouncedFilters = useDebounce(filters, 500);
  const { data: locations, isLoading } = useLocations(page, debouncedFilters);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleFilterChange = (key: keyof LocationFilter) => (value: string) => {
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
          title="Locations"
          subtitle="Explore the locations of the Rick and Morty series"
        />

        <div className="flex items-center gap-4">
          <FilterInput
            onChange={handleFilterChange("name")}
            placeholder="Search"
            value={filters.name}
            inputRef={inputRef}
          />
          <FilterInput
            onChange={handleFilterChange("type")}
            placeholder="Type"
            value={filters.type}
          />
          <FilterInput
            onChange={handleFilterChange("dimension")}
            placeholder="Dimension"
            value={filters.dimension}
          />
        </div>
      </div>

      {isLoading ? (
        <ContentGridSkeleton
          length={12}
          gridClassName={locationGridClassName}
          renderSkeleton={() => <LocationCardSkeleton />}
        />
      ) : (
        <ContentGrid
          items={locations?.results ?? []}
          keyExtractor={(loc) => loc.id}
          gridClassName={locationGridClassName}
          renderItem={(location) => <LocationCard location={location} />}
        />
      )}

      {!!locations?.info && (
        <div className="mt-8">
          <Pagination
            pages={locations.info.pages}
            next={locations.info.next}
            prev={locations.info.prev}
            page={page}
            onPrevious={() => setPage((prev) => prev - 1)}
            onNext={() => setPage((prev) => prev + 1)}
          />
        </div>
      )}
    </div>
  );
}
