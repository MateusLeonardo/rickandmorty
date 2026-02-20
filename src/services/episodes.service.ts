import type { Episode, EpisodeResponse } from "@/types/episode.ts";
import { API_URL, toQueryParams } from "./api.ts";
import type { EpisodeFilter } from "@/types/filter.ts";

export const EpisodesService = {
  getAll: async (
    page: number,
    filters?: EpisodeFilter,
  ): Promise<EpisodeResponse> => {
    const params = new URLSearchParams({
      page: String(page),
      ...toQueryParams(filters ?? {}),
    });

    const response = await fetch(`${API_URL}/episode?${params}`);
    if (!response.ok) throw new Error("Failed to fetch episodes");
    return response.json();
  },

  getById: async (id: number): Promise<Episode> => {
    const response = await fetch(`${API_URL}/episode/${id}`);
    if (!response.ok) throw new Error("Failed to fetch episode");
    return response.json();
  },
};
