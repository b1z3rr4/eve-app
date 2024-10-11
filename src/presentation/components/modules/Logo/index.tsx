import * as S from "./styles";

export const Logo = ({ size = "md" }: { size?: "sm" | "md" | "lg" }) => {
  const sizeOptions = {
    sm: 32,
    md: 64,
    lg: 96,
  };

  return <S.AppLogo fontSize={sizeOptions[size]}>eve</S.AppLogo>;
};
