import type React from "react";
import * as S from "./Button.styles.ts";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export function Button({ children, ...props }: ButtonProps) {
  return <S.StyledButton {...props}>{children}</S.StyledButton>;
}
