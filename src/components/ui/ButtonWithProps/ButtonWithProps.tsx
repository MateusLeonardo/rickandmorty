import React from "react";
import * as S from "./Styles";

export interface ButtonWithPropsProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const ButtonWithProps = ({
  children,
  ...props
}: ButtonWithPropsProps) => {
  return (
    <S.ButtonWithPropsContainer {...props}>
      {children}
    </S.ButtonWithPropsContainer>
  );
};
