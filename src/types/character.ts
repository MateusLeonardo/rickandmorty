import type { PaginationInfo } from "./pagination.ts";

export interface Character {
  id: number;
  name: string;
  status: "Alive" | "Dead" | "unknown";
  species: string;
  type: string;
  gender: "Male" | "Female" | "Genderless" | "unknown";
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: string[];
  url: string;
  created: string;
}

export interface CharacterResponse {
  info: PaginationInfo;
  results: Character[];
}

const statusLabels: Record<Character["status"], string> = {
  Alive: "Vivo",
  Dead: "Morto",
  unknown: "Desconhecido",
};

export const getCharacterStatusLabel = (status: Character["status"]) => {
  return statusLabels[status];
};

export const statusBadgeClass: Record<string, string> = {
  Vivo: "bg-emerald-500",
  Morto: "bg-red-500",
  Desconhecido: "bg-neutral-500",
};

export const genderLabel: Record<string, string> = {
  Male: "Masculino",
  Female: "Feminino",
  Genderless: "Sem gênero",
  unknown: "Desconhecido",
};
