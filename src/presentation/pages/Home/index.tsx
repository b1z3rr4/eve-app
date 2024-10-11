import { CardAction } from "@/presentation/components/modules/CardAction";
import { useNavigate } from "react-router-dom";
import * as S from "./styles";

export function Home() {
  const navigate = useNavigate();

  const addNewEvent = () => {
    navigate("/event");
  };
  return (
    <S.HomeContainer>
      <CardAction onClick={addNewEvent}>+</CardAction>
    </S.HomeContainer>
  );
}
