import { useQuery } from "@tanstack/react-query";
import { API_URL } from "../../../lib/api";
import type { EpisodeResponse } from "../../../models/episode-model";

export const useGetAllEpisodes = (page: number) => {
  return useQuery({
    queryKey: ["episodes", page],
    queryFn: async () => {
      const response = await fetch(`${API_URL}/episode?page=${page}`);
      const data = await response.json();
      if (!response.ok) {
        throw new Error("Failed to fetch episodes");
      }
      return data as EpisodeResponse;
    },
  });
};
