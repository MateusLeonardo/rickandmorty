import { useQuery } from "@tanstack/react-query";
import { EpisodesService } from "@/services/episodes.service.ts";
import type { EpisodeFilter } from "@/types/filter";

export const useEpisodes = (page: number, filters: EpisodeFilter) => {
  return useQuery({
    queryKey: ["episodes", page, filters],
    queryFn: () => EpisodesService.getAll(page, filters),
    staleTime: 1000 * 60 * 5,
  });
};
