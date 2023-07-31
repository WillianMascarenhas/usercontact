import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Card } from "../../components/card";
import { ModalCreateUser } from "../../components/modalAddContact";
import { contactAuth } from "../../hooks/contactAuth";
import { useNavigate } from "react-router-dom";
import { StyledHeader, StyledMain } from "./style";

export interface IContact {
  id: number;
  fullName: string;
  email: string;
  phone: string;
  createdAt: Date;
}

export const Dashboard = () => {
  const Navigate = useNavigate();
  const { setContacts, contacts, test } = contactAuth();
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);

  useEffect(() => {
    (async () => {
      const response = await api.get<IContact[]>("/contact");
      setContacts(response.data);
    })();
  }, [setContacts, test]);

  const toggleModal = () => {
    setIsOpenModal(!isOpenModal);
  };

  return (
    <>
      <StyledHeader>
        <div className="conatiner_header">
          <div>imagem sei lá</div>
          <nav>
            <button onClick={() => toggleModal()}>Novo contato</button>
            <button
              onClick={() => {
                localStorage.removeItem("@UserContact:Token");
                Navigate("/");
              }}
            >
              Sair
            </button>
          </nav>
          {isOpenModal && <ModalCreateUser toggleModal={toggleModal} />}
        </div>
      </StyledHeader>
      <StyledMain>
        <ul>
          <Card
            contacts={contacts}
            toggleModal={toggleModal}
            isOpenModal={isOpenModal}
          />
        </ul>
      </StyledMain>
    </>
  );
};
