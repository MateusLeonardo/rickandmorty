import { useQuery } from "@tanstack/react-query";
import type { CharacterResponseModel } from "../../../models/character-model";
import { API_URL } from "../../../lib/api";
import { toQueryParams } from "../../../lib/query-params";
import type { FilterModel } from "../../../models/filter-model";

export const useGetAllCharacters = ({
  page,
  filters,
}: {
  page: number;
  filters?: FilterModel;
}) => {
  return useQuery({
    queryKey: [
      "characters",
      page,
      filters?.status,
      filters?.gender,
      filters?.name,
    ],
    queryFn: async () => {
      const params = new URLSearchParams({
        page: String(page),
        ...toQueryParams(filters ?? {}),
      });
      const response = await fetch(`${API_URL}/character?${params}`);
      const data = await response.json();
      return data as CharacterResponseModel;
    },
    staleTime: 1000 * 60 * 5,
  });
};
