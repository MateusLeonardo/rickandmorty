import { useState } from "react";
import { useGetAllLocations } from "../../hooks/queries/locations/use-get-all-locations";
import { Pagination } from "../../components/ui/Pagination/Pagination";
import { ContentGrid } from "../../components/ui/ContentGrid/ContentGrid";
import { ContentGridSkeleton } from "../../components/ui/ContentGrid/ContentGridSkeleton";
import { LocationCard } from "../../components/ui/LocationCard/LocationCard";
import { LocationCardSkeleton } from "../../components/ui/LocationCard/LocationCardSkeleton";
import HeaderPage from "../../components/ui/HeaderPage/HeaderPage";

const locationGridClassName =
  "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4";

export function LocationsPage() {
  const [page, setPage] = useState(1);
  const { data: locations, isLoading } = useGetAllLocations(page);

  return (
    <div className="container mx-auto p-4 max-w-6xl">
      <HeaderPage
        title="Locais"
        subtitle="Explore os locais da série Rick and Morty"
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
