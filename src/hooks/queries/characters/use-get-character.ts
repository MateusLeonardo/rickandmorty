import { useQuery } from "@tanstack/react-query";
import type { CharacterModel } from "../../../models/character-model";
import { API_URL } from "../../../lib/api";

export const useGetCharacter = (id: number) => {
  return useQuery({
    queryKey: ["character", id],
    queryFn: async () => {
      const response = await fetch(`${API_URL}/character/${id}`);
      const data = await response.json();
      if (!response.ok) {
        throw new Error("Failed to fetch character");
      }
      return data as CharacterModel;
    },
    staleTime: 1000 * 60 * 5,
    enabled: !!id,
  });
};
