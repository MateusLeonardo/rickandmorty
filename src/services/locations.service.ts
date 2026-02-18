import type { LocationResponse, Location } from "@/types/location.ts";
import { API_URL, toQueryParams } from "./api.ts";
import type { LocationFilter } from "@/types/filter.ts";

export const LocationsService = {
  getAll: async (
    page: number,
    filters?: LocationFilter,
  ): Promise<LocationResponse> => {
    const params = new URLSearchParams({
      page: String(page),
      ...toQueryParams(filters ?? {}),
    });
    const response = await fetch(`${API_URL}/location?${params}`);
    if (!response.ok) throw new Error("Failed to fetch locations");
    return response.json();
  },
  getById: async (id: number): Promise<Location> => {
    const response = await fetch(`${API_URL}/location/${id}`);
    if (!response.ok) throw new Error("Failed to fetch location");
    return response.json();
  },
};
