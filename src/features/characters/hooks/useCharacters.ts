import { useQuery } from "@tanstack/react-query";
import { CharactersService } from "@/services/characters.service.ts";
import type { CharacterFilter } from "@/types/filter.ts";

export const useCharacters = (page: number, filters?: CharacterFilter) => {
  return useQuery({
    queryKey: ["characters", page, filters?.status, filters?.gender, filters?.name],
    queryFn: () => CharactersService.getAll(page, filters),
    staleTime: 1000 * 60 * 5,
  });
};
