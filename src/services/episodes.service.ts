import type { Episode, EpisodeResponse } from "@/types/episode.ts";
import { API_URL } from "./api.ts";

export const EpisodesService = {
  getAll: async (page: number): Promise<EpisodeResponse> => {
    const response = await fetch(`${API_URL}/episode?page=${page}`);
    if (!response.ok) throw new Error("Failed to fetch episodes");
    return response.json();
  },

  getById: async (id: number): Promise<Episode> => {
    const response = await fetch(`${API_URL}/episode/${id}`);
    if (!response.ok) throw new Error("Failed to fetch episode");
    return response.json();
  },
};
