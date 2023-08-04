import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { UpdateSchema, UserResponse, UserUpdate } from "../../schemas/RegisterSchema/validators";
import { Modal } from "../modal";
import { StyledContainer } from "../modalAddContact/style";
import { useAuth } from "../../hooks/useAuth";

interface ModalCreateProps {
  toggleModal: () => void;
  userOwner: UserResponse;
}

export const ModalEditUserOwner = ({ toggleModal, userOwner }: ModalCreateProps) => {
  const { updateUser } = useAuth();

  const { register, handleSubmit, formState: { errors } } = useForm<UserUpdate>({
    resolver: zodResolver(UpdateSchema),
  });


  const onSubmitValues = (data: UserUpdate) => {
    updateUser(data, userOwner.id);
    toggleModal();
  };
  return (
    <>
      <Modal toggleModal={toggleModal}>
        <StyledContainer>
          <h2>Editar usuário:</h2>
          <form onSubmit={handleSubmit(onSubmitValues)}>
            <label htmlFor="fullName">Nome completo</label>
            <input
              type="text"
              id="fullName"
              {...register("fullName")}
              placeholder="Nome completo"
            />
            {errors.fullName && <span>{errors.fullName.message}</span>}

            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              {...register("email")}
              placeholder="Email"
            />
            {errors.email && <span>{errors.email.message}</span>}

            <label htmlFor="password">Senha</label>
            <input
              type="password"
              id="password"
              {...register("password")}
              placeholder="Senha"
            />
            {errors.email && <span>{errors.email.message}</span>}

            <label htmlFor="phone">Número de telefone</label>
            <input
              type="text"
              id="phone"
              {...register("phone")}
              placeholder="Número de telefone"
            />
            {errors.phone && <span>{errors.phone.message}</span>}

            <button type="submit">Atualizar contato</button>
          </form>
        </StyledContainer>
      </Modal>
    </>
  )
};

