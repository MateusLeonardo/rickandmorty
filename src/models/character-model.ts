export interface CharacterModel {
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

const CharacterStatusLabel = {
  Alive: "Vivo",
  Dead: "Morto",
  unknown: "Desconhecido",
};

export const getCharacterStatusLabel = (status: CharacterModel["status"]) => {
  return CharacterStatusLabel[status];
};
