import { Button } from "@/presentation/components/elements/Button";
import { InputForm } from "@/presentation/components/modules/InputForm";
import { useToast } from "@/presentation/hooks/useToast";
import { useForm } from "react-hook-form";
import * as S from "./styles";

export function Form() {
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { notifyError, notifySuccess } = useToast();

  const onSubmit = (data: unknown) => {
    try {
      console.log(data);
      notifySuccess("Formulário enviado com sucesso!");
      reset();
    } catch (error) {
      notifyError("Erro ao enviar o formulário. Tente novamente.");
    }
  };

  return (
    <S.FormContainer>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-container">
          <div className="image-upload">
            {/* Implementação do upload de imagem */}
          </div>

          <div className="input-group">
            <InputForm
              label="Título"
              error={errors.titulo?.message as string}
              {...register("titulo", { required: "O título é obrigatório" })}
            />
          </div>

          <div className="input-group">
            <InputForm
              label="Tipo"
              error={errors.tipo?.message as string}
              {...register("tipo", { required: "O tipo é obrigatório" })}
            />
          </div>

          <div className="input-group">
            <InputForm
              label="Valor"
              type="number"
              {...register("valor", {
                required: "O valor é obrigatório",
                min: 1,
              })}
              error={errors.valor?.message as string}
            />
          </div>

          <div className="input-group">
            <InputForm
              label="Descrição"
              type="textarea"
              {...register("descricao", {
                required: "A descrição é obrigatória",
              })}
              error={errors.descricao?.message as string}
            />
          </div>

          <div className="input-group">
            <InputForm
              label="Localização"
              {...register("localizacao", {
                required: "A localização é obrigatória",
              })}
              error={errors.localizacao?.message as string}
            />
          </div>

          <div className="input-group">
            <InputForm
              label="Dia"
              type="date"
              {...register("dia", { required: "O dia é obrigatório" })}
              error={errors.dia?.message as string}
            />
          </div>

          <div className="input-group">
            <InputForm
              label="Hora"
              type="time"
              {...register("hora", { required: "A hora é obrigatória" })}
              error={errors.hora?.message as string}
            />
          </div>

          <div className="input-group">
            <InputForm
              label="Vagas"
              type="number"
              {...register("vagas", {
                required: "O número de vagas é obrigatório",
                min: 1,
              })}
              error={errors.vagas?.message as string}
            />
          </div>

          <Button type="submit">Salvar</Button>
        </div>
      </form>
    </S.FormContainer>
  );
}
