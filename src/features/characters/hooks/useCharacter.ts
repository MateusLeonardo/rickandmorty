import { useQuery } from "@tanstack/react-query";
import { CharactersService } from "@/services/characters.service.ts";

export const useCharacter = (id: number) => {
  return useQuery({
    queryKey: ["character", id],
    queryFn: () => CharactersService.getById(id),
    staleTime: 1000 * 60 * 5,
    enabled: !!id,
  });
};
