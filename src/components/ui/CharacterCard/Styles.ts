import styled, { keyframes } from "styled-components";
import type { getCharacterStatusLabel } from "../../../models/character-model";

const shimmer = keyframes`
  0% {
    background-position: -1000px 0;
  }
  100% {
    background-position: 1000px 0;
  }
`;

export const CardContainer = styled.div`
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  overflow: hidden;
  background: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition:
    transform 0.2s,
    box-shadow 0.2s;
  cursor: pointer;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  }
`;

export const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  padding-top: 100%;
  overflow: hidden;
  background: #f5f5f5;
`;

export const CharacterImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const StatusBadge = styled.span<{
  $status: ReturnType<typeof getCharacterStatusLabel>;
}>`
  position: absolute;
  top: 8px;
  right: 8px;
  padding: 4px 8px;
  border-radius: 12px;
  color: white;
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  background-color: ${({ $status }) => {
    switch ($status) {
      case "Vivo":
        return "#4caf50";
      case "Morto":
        return "#f44336";
      default:
        return "#9e9e9e";
    }
  }};
`;

export const ContentContainer = styled.div`
  padding: 16px;
`;

export const CharacterName = styled.h3`
  margin: 0 0 8px 0;
  font-size: 20px;
  font-weight: 700;
  color: #333;
`;

export const CharacterSpecies = styled.p`
  margin: 0 0 12px 0;
  font-size: 14px;
  color: #666;
`;

export const SkeletonImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 2000px 100%;
  animation: ${shimmer} 1.5s infinite;
`;

export const SkeletonText = styled.div<{ $width?: string; $height?: string }>`
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 2000px 100%;
  animation: ${shimmer} 1.5s infinite;
  border-radius: 4px;
  height: ${({ $height }) => $height || "20px"};
  width: ${({ $width }) => $width || "100%"};
  margin-bottom: 8px;
`;
