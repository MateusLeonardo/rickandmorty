import { useQuery } from "@tanstack/react-query";
import { EpisodesService } from "@/services/episodes.service.ts";

export const useEpisode = (id: number) => {
  return useQuery({
    queryKey: ["episode", id],
    queryFn: () => EpisodesService.getById(id),
    staleTime: 1000 * 60 * 5,
    enabled: !!id,
  });
};
