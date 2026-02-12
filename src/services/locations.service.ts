import type { LocationResponse } from "@/types/location.ts";
import { API_URL } from "./api.ts";

export const LocationsService = {
  getAll: async (page: number): Promise<LocationResponse> => {
    const response = await fetch(`${API_URL}/location?page=${page}`);
    if (!response.ok) throw new Error("Failed to fetch locations");
    return response.json();
  },
};
