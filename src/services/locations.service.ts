import type { LocationResponse, Location } from "@/types/location.ts";
import { API_URL } from "./api.ts";

export const LocationsService = {
  getAll: async (page: number): Promise<LocationResponse> => {
    const response = await fetch(`${API_URL}/location?page=${page}`);
    if (!response.ok) throw new Error("Failed to fetch locations");
    return response.json();
  },
  getById: async (id: number): Promise<Location> => {
    const response = await fetch(`${API_URL}/location/${id}`);
    if (!response.ok) throw new Error("Failed to fetch location");
    return response.json();
  },
};
