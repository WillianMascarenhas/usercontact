import { IContact } from "../../pages/Dashbord";
import { ModalEditUser } from "../modalEditContact";
import { useState } from "react";

interface CardProps {
  contacts: IContact[];
  toggleModal: () => void;
  isOpenModal: boolean;
}
export const Card = ({ contacts, toggleModal, isOpenModal }: CardProps) => {
  const [contactId, setContactId] = useState(Number);
  const [contact, setContact] = useState({});

  return (
    <>
      {contacts.map((contact) => (
        <li key={contact.id}>
          <h2>{contact.fullName}</h2>
          <div>
            <span>Email: {contact.email}</span>
            <span>Telefone: {contact.phone}</span>
          </div>
          <div>
            <button
              onClick={() => {
                toggleModal();
                setContact(contact);
              }}
            >
              Editar
            </button>
            <button
              onClick={() => {
                setContactId(contact.id);
              }}
            >
              Excluir contato
            </button>
          </div>
        </li>
      ))}
      {isOpenModal && <ModalEditUser toggleModal={toggleModal} contact={contact}/>}
    </>
  );
};
