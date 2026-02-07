import { useQuery } from "@tanstack/react-query";
import type { CharacterResponseModel } from "../../../models/character-model";

export const useGetAllCharacters = (page: number) => {
  return useQuery({
    queryKey: ["characters", page],
    queryFn: async () => {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character?page=${page}`,
      );
      const data = await response.json();
      return data as CharacterResponseModel;
    },
    staleTime: 1000 * 60 * 5,
  });
};
