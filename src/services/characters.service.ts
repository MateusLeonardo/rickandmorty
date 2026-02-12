import type { Character, CharacterResponse } from "@/types/character.ts";
import type { CharacterFilter } from "@/types/filter.ts";
import { API_URL, toQueryParams } from "./api.ts";

export const CharactersService = {
  getAll: async (
    page: number,
    filters?: CharacterFilter,
  ): Promise<CharacterResponse> => {
    const params = new URLSearchParams({
      page: String(page),
      ...toQueryParams(filters ?? {}),
    });
    const response = await fetch(`${API_URL}/character?${params}`);
    if (!response.ok) throw new Error("Failed to fetch characters");
    return response.json();
  },

  getById: async (id: number): Promise<Character> => {
    const response = await fetch(`${API_URL}/character/${id}`);
    if (!response.ok) throw new Error("Failed to fetch character");
    return response.json();
  },

  getByIds: async (ids: (string | number)[]): Promise<Character[]> => {
    const response = await fetch(`${API_URL}/character/${ids.join(",")}`);
    if (!response.ok) throw new Error("Failed to fetch characters");
    return response.json();
  },
};
