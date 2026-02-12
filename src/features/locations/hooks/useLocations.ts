import { useQuery } from "@tanstack/react-query";
import { LocationsService } from "@/services/locations.service.ts";

export const useLocations = (page: number) => {
  return useQuery({
    queryKey: ["locations", page],
    queryFn: () => LocationsService.getAll(page),
    staleTime: 1000 * 60 * 5,
  });
};
