import { useEffect, useState } from "react";
import {
  getCharacterStatusLabel,
  type CharacterModel,
} from "../../models/character-model";
import { CharacterCard } from "../../components/ui/CharacterCard/CharacterCard";
import { useParams } from "react-router";

export function ChacarcterShow() {
  const { id } = useParams<{ id: string }>();
  const [character, setCharacter] = useState<CharacterModel | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCharacter = async () => {
      try {
        const response = await fetch(
          `https://rickandmortyapi.com/api/character/${id}`,
        );
        const data = await response.json();
        setCharacter(data);
      } catch (error) {
        console.error("Erro ao buscar personagem:", error);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchCharacter();
    }
  }, [id]);

  if (loading) {
    return (
      <div>
        <p>Carregando...</p>
      </div>
    );
  }

  if (!character) {
    return (
      <div>
        <h1>Personagem não encontrado</h1>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4 flex justify-center gap-3">
      <CharacterCard character={character} />
      <div className="mt-4">
        <h2>Informações Detalhadas</h2>
        <p>
          <strong>Status:</strong> {getCharacterStatusLabel(character.status)}
        </p>
        <p>
          <strong>Espécie:</strong> {character.species}
        </p>
        <p>
          <strong>Gênero:</strong> {character.gender}
        </p>
        <p>
          <strong>Origem:</strong> {character.origin.name}
        </p>
        <p>
          <strong>Localização:</strong> {character.location.name}
        </p>
      </div>
    </div>
  );
}
