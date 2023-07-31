import { useState } from "react";
import { contactAuth } from "../../hooks/contactAuth";
import { IContact } from "../../pages/Dashbord";
import { ModalEditUser } from "../modalEditContact";
import { StyledCard } from "./style";

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
          <StyledCard key={contact.id}>
            <h2>{contact.fullName}</h2>
            <div className="info_contact">
              <div className="tags">
                <span className="tag_name">Email:</span>
                <span>{contact.email}</span>
              </div>
              <div className="tags">
                <span className="tag_name">Telefone:</span>
                <span>{contact.phone}</span>
              </div>
            </div>
            <div className="container_buttons">
              <button
                onClick={() => {
                  toggleModal();
                  setContact(contact);
                }}
              >
                Editar
              </button>
              <button onClick={() => handleDeleteContact(contact.id)}>
                Excluir contato
              </button>
            </div>
          </StyledCard>
        ))}
      {isOpenModal && contact && (
        <ModalEditUser toggleModal={toggleModal} contact={contact} />
      )}
    </>
  );
};
