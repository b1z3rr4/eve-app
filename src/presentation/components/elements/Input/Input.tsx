import * as S from "./styles";

export const Input = ({
  placeholder,
  type = "text",
  ...props
}: React.InputHTMLAttributes<HTMLInputElement>) => (
  <S.InputContainer type={type} placeholder={placeholder} {...props} />
);
