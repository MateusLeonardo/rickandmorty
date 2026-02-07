import { useQuery } from "@tanstack/react-query";
import type { CharacterModel } from "../../../models/character-model";

export const useGetCharacter = (id: number) => {
  return useQuery({
    queryKey: ["character", id],
    queryFn: async () => {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character/${id}`,
      );
      const data = await response.json();
      return data as CharacterModel;
    },
    staleTime: 1000 * 60 * 5,
    enabled: !!id,
  });
};
