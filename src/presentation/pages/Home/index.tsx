import { CardAction } from "@/presentation/components/modules/CardAction";
import { CardEvent } from "@/presentation/components/modules/CardEvent";
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
      <CardEvent
        onClick={() => {}}
        title="Encontro virtual Literatura e Criatividade"
        img="https://cpp.org.br/wp-content/uploads/2021/06/ef97f6703c6ab99de2290ae8e2df39de-c0f.jpg"
        description="Olá a todos!! Vamos fazer um encontro virtual para montarmos o calendário de encontros virtuais que irá ocorrer nesse fim de ano."
      />
      <CardEvent
        onClick={() => {}}
        title="Encontro virtual Literatura e Criatividade"
        img="https://cpp.org.br/wp-content/uploads/2021/06/ef97f6703c6ab99de2290ae8e2df39de-c0f.jpg"
        description="Olá a todos!! Vamos fazer um encontro virtual para montarmos o calendário de encontros virtuais que irá ocorrer nesse fim de ano."
      />
      <CardEvent
        onClick={() => {}}
        title="Encontro virtual Literatura e Criatividade"
        img="https://cpp.org.br/wp-content/uploads/2021/06/ef97f6703c6ab99de2290ae8e2df39de-c0f.jpg"
        description="Olá a todos!! Vamos fazer um encontro virtual para montarmos o calendário de encontros virtuais que irá ocorrer nesse fim de ano."
      />
      <CardEvent
        onClick={() => {}}
        title="Encontro virtual Literatura e Criatividade"
        img="https://cpp.org.br/wp-content/uploads/2021/06/ef97f6703c6ab99de2290ae8e2df39de-c0f.jpg"
        description="Olá a todos!! Vamos fazer um encontro virtual para montarmos o calendário de encontros virtuais que irá ocorrer nesse fim de ano."
      />
      <CardEvent
        onClick={() => {}}
        title="Encontro virtual Literatura e Criatividade"
        img="https://cpp.org.br/wp-content/uploads/2021/06/ef97f6703c6ab99de2290ae8e2df39de-c0f.jpg"
        description="Olá a todos!! Vamos fazer um encontro virtual para montarmos o calendário de encontros virtuais que irá ocorrer nesse fim de ano."
      />
    </S.HomeContainer>
  );
}
