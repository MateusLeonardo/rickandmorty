import { useQuery } from "@tanstack/react-query";
import { EpisodesService } from "@/services/episodes.service.ts";

export const useEpisodes = (page: number) => {
  return useQuery({
    queryKey: ["episodes", page],
    queryFn: () => EpisodesService.getAll(page),
    staleTime: 1000 * 60 * 5,
  });
};
