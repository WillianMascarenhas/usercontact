import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  UpdateData,
  UpdateSchema,
} from "../../schemas/ContactSchema/validators";
import { contactAuth } from "../../hooks/contactAuth";
import { Modal } from "../../components/modal";
import { IContact } from "../../pages/Dashbord";
import { StyledContainer } from "../modalAddContact/style";

interface ModalEditProps {
  toggleModal: () => void;
  contact: IContact;
}

export const ModalEditUser = ({ toggleModal, contact }: ModalEditProps) => {
  const { updateContact } = contactAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UpdateData>({
    resolver: zodResolver(UpdateSchema),
    defaultValues: contact,
  });

  const onSubmitValues = (data: UpdateData) => {
    updateContact(data, contact.id);
    toggleModal();
  };

  return (
    <>
      <Modal toggleModal={toggleModal}>
        <StyledContainer>
          <h2>Editar contato:</h2>
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
  );
};
