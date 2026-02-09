import { useQuery } from "@tanstack/react-query";
import { API_URL } from "../../../lib/api";
import type { EpisodeResponse } from "../../../models/episode-model";

export const useGetAllEpisodes = () => {
  return useQuery({
    queryKey: ["episodes"],
    queryFn: async () => {
      const response = await fetch(`${API_URL}/episode`);
      const data = await response.json();
      if (!response.ok) {
        throw new Error("Failed to fetch episodes");
      }
      return data as EpisodeResponse;
    },
  });
};
