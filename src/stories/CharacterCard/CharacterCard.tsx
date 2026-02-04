import React from "react";

import {
  getCharacterStatusLabel,
  type CharacterModel,
} from "../../models/character-model";
import {
  CardContainer,
  ImageContainer,
  CharacterImage,
  StatusBadge,
  ContentContainer,
  CharacterName,
  CharacterSpecies,
} from "./CharacterCard.styles";

export interface CharacterCardProps {
  character: CharacterModel;
  onClick?: () => void;
}

export const CharacterCard: React.FC<CharacterCardProps> = ({
  character,
  onClick,
}) => {
  return (
    <CardContainer
      onClick={onClick}
      $clickable={!!onClick}
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}
    >
      <ImageContainer>
        <CharacterImage src={character.image} alt={character.name} />
        <StatusBadge $status={getCharacterStatusLabel(character.status)}>
          {getCharacterStatusLabel(character.status)}
        </StatusBadge>
      </ImageContainer>

      <ContentContainer>
        <CharacterName>{character.name}</CharacterName>
        <CharacterSpecies>{character.species}</CharacterSpecies>
      </ContentContainer>
    </CardContainer>
  );
};
