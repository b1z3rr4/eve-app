import { PropsWithChildren } from "react";
import * as S from "./styles";

interface ButtonProps
  extends PropsWithChildren<React.ButtonHTMLAttributes<HTMLButtonElement>> {}

export const Button = ({ children, ...props }: ButtonProps) => (
  <S.ButtonContainer {...props}>{children}</S.ButtonContainer>
);
