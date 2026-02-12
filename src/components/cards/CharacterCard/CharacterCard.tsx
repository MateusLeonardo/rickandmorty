import { getCharacterStatusLabel, type Character } from "@/types/character.ts";
import * as S from "./CharacterCard.styles.ts";

export interface CharacterCardProps {
  character: Character;
  onClick?: () => void;
}

export function CharacterCard({ character, onClick }: CharacterCardProps) {
  return (
    <S.CardContainer onClick={onClick}>
      <S.ImageContainer>
        <S.CharacterImage src={character.image} alt={character.name} />
        <S.StatusBadge $status={character.status}>
          {character.status}
        </S.StatusBadge>
      </S.ImageContainer>

      <S.ContentContainer>
        <S.CharacterName>{character.name}</S.CharacterName>
        <S.CharacterSpecies>{character.species}</S.CharacterSpecies>
      </S.ContentContainer>
    </S.CardContainer>
  );
}
