import { getCharacterStatusLabel } from "../../models/character-model";
import { CharacterCard } from "../../components/ui/CharacterCard/CharacterCard";
import { useParams } from "react-router";
import { useGetCharacter } from "../../hooks/queries/characters/use-get-character";

export function ChacarcterShow() {
  const { id } = useParams<{ id: string }>();
  const { data: character, isLoading } = useGetCharacter(Number(id));

  if (isLoading) {
    return <div>Carregando...</div>;
  }

  if (!character) {
    return <div>Personagem não encontrado</div>;
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
