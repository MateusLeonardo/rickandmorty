import {
  getCharacterStatusLabel,
  type CharacterModel,
} from "../../../models/character-model";
import * as S from "./Styles";

export interface CharacterCardProps {
  character: CharacterModel;
  onClick?: () => void;
}

export const CharacterCard = ({ character, onClick }: CharacterCardProps) => {
  return (
    <S.CardContainer onClick={onClick}>
      <S.ImageContainer>
        <S.CharacterImage src={character.image} alt={character.name} />
        <S.StatusBadge $status={getCharacterStatusLabel(character.status)}>
          {getCharacterStatusLabel(character.status)}
        </S.StatusBadge>
      </S.ImageContainer>

      <S.ContentContainer>
        <S.CharacterName>{character.name}</S.CharacterName>
        <S.CharacterSpecies>{character.species}</S.CharacterSpecies>
      </S.ContentContainer>
    </S.CardContainer>
  );
};
