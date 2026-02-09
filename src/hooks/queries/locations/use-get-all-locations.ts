import { useQuery } from "@tanstack/react-query";
import type { LocationResponse } from "../../../models/location-model";

export const useGetAllLocations = (page: number) => {
  return useQuery({
    queryKey: ["locations", page],
    queryFn: async () => {
      const response = await fetch(
        `https://rickandmortyapi.com/api/location?page=${page}`,
      );
      if (!response.ok) throw new Error("Failed to fetch locations");
      const data = await response.json();
      return data as LocationResponse;
    },
    staleTime: 1000 * 60 * 5,
  });
};
