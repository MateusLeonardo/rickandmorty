import { useQuery } from "@tanstack/react-query";
import { LocationsService } from "@/services/locations.service.ts";
import type { LocationFilter } from "@/types/filter";

export const useLocations = (page: number, filters: LocationFilter) => {
  return useQuery({
    queryKey: ["locations", page, filters],
    queryFn: () => LocationsService.getAll(page, filters),
    staleTime: 1000 * 60 * 5,
  });
};
