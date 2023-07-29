import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { contactAuth } from "../../hooks/contactAuth";
import {  CreateContactData,  CreateContactSchema,} from "../../schemas/ContactSchema/validators";
import { Modal } from "../modal";

interface ModalCreateProps {
    toggleModal: () => void
}

export const ModalCreateUser = ({toggleModal}: ModalCreateProps) => {
  const { registerContact } = contactAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateContactData>({
    resolver: zodResolver(CreateContactSchema),
  });

  const onSubmitValues =(data:CreateContactData) =>{
    registerContact(data,)
    toggleModal()
}

  return (
    <>
      <Modal toggleModal={toggleModal}>

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

          <button type="submit">Novo contato</button>
        </form>
      </Modal>
    </>
  );
};
