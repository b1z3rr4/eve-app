import { InputProps } from "../../elements/Input";
import * as S from "./styles";

interface InputFromProps extends InputProps {
  label?: string;
  error?: string;
}

export const InputForm = ({
  label,
  error,
  type = "text",
  ...props
}: InputFromProps) => {
  return (
    <S.FieldSetStyle>
      <S.LabelStyle>
        <S.InputStyle
          className={props.value ? "fulfilled" : props.className}
          {...props}
        />
        <S.SpanStyle type={type}>{label}</S.SpanStyle>
      </S.LabelStyle>
      {error && <S.LabelError>{error}</S.LabelError>}
    </S.FieldSetStyle>
  );
};
