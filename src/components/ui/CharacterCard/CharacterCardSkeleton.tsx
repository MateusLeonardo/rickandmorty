import * as S from "./Styles";

export const CharacterCardSkeleton = () => {
  return (
    <S.CardContainer>
      <S.ImageContainer>
        <S.SkeletonImage />
      </S.ImageContainer>
      <S.ContentContainer>
        <S.SkeletonText $height="24px" $width="80%" />
        <S.SkeletonText $height="16px" $width="60%" />
      </S.ContentContainer>
    </S.CardContainer>
  );
};
