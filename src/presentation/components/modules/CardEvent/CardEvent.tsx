import { Button } from "../../elements/Button";
import { Paragraph } from "../../elements/Paragraph";
import * as S from "./styles";

export const CardEvent = ({
  img,
  title,
  description,
  onClick,
}: {
  img: string;
  title: string;
  description: string;
  onClick: () => void;
}) => {
  return (
    <S.CardContainer>
      <S.ImageContainer>
        <img src={img} />
      </S.ImageContainer>
      <S.DescriptionContainer>
        <Paragraph className="title">{title}</Paragraph>
        <Paragraph className="description">{description}</Paragraph>
      </S.DescriptionContainer>
      <S.ActionsContainer>
        <Button onClick={onClick}>Editar</Button>
      </S.ActionsContainer>
    </S.CardContainer>
  );
};
