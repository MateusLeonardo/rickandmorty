import { useState } from "react";
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

const locationGridClassName =
  "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4";

export function LocationsPage() {
  const [page, setPage] = useState(1);
  const { data: locations, isLoading } = useLocations(page);

  return (
    <div className="container mx-auto p-4 ">
      <PageHeader
        title="Locations"
        subtitle="Explore the locations of the Rick and Morty series"
      />

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
