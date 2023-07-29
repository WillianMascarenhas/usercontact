import { useState } from "react";
import { contactAuth } from "../../hooks/contactAuth";
import { IContact } from "../../pages/Dashbord";
import { ModalEditUser } from "../modalEditContact";

interface CardProps {
  contacts: IContact[];
  toggleModal: () => void;
  isOpenModal: boolean;
}

export const Card = ({ contacts, toggleModal, isOpenModal }: CardProps) => {
  // const [contactId, setContactId] = useState<number | null>(null);
  const [contact, setContact] = useState<IContact | null>(null);

  const { dellContact } = contactAuth();

  const handleDeleteContact = (contactId: number) => {
    dellContact(contactId);
  };

  return (
    <>
      {contacts
        .sort((a, b) => a.id - b.id)
        .map((contact) => (
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
                onClick={() => handleDeleteContact(contact.id)} 
              >
                Excluir contato
              </button>
            </div>
          </li>
        ))}
      {isOpenModal && contact && (
        <ModalEditUser toggleModal={toggleModal} contact={contact} />
      )}
    </>
  );
};
