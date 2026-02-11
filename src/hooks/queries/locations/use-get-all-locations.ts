import { useQuery } from "@tanstack/react-query";
import type { LocationResponse } from "../../../models/location-model";
import { API_URL } from "../../../lib/api";

export const useGetAllLocations = (page: number) => {
  return useQuery({
    queryKey: ["locations", page],
    queryFn: async () => {
      const response = await fetch(`${API_URL}/location?page=${page}`);
      if (!response.ok) throw new Error("Failed to fetch locations");
      const data = await response.json();
      return data as LocationResponse;
    },
    staleTime: 1000 * 60 * 5,
  });
};
