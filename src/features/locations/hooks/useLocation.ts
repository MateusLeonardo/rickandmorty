import { LocationsService } from "@/services/locations.service";
import { useQuery } from "@tanstack/react-query";

export const useLocation = (id: number) => {
  return useQuery({
    queryKey: ["location", id],
    queryFn: () => LocationsService.getById(id),
    staleTime: 1000 * 60 * 5,
    enabled: !!id,
  });
};
