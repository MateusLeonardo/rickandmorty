import { useQuery } from "@tanstack/react-query";
import { CharactersService } from "@/services/characters.service.ts";

export const useCharactersByIds = (ids: (string | number)[]) => {
  return useQuery({
    queryKey: ["characters", ids.join(",")],
    queryFn: () => CharactersService.getByIds(ids),
    enabled: ids.length > 0,
  });
};
