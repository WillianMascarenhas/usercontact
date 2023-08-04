import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Card } from "../../components/card";
import { ModalCreateUser } from "../../components/modalAddContact";
import { contactAuth } from "../../hooks/contactAuth";
import { useNavigate } from "react-router-dom";
import { StyledHeader, StyledMain } from "./style";
import { useAuth } from "../../hooks/useAuth";
import { UserResponse } from "../../schemas/RegisterSchema/validators";
import { ModalEditUserOwner } from "../../components/modalEditUser";

export interface IContact {
  id: number;
  fullName: string;
  email: string;
  phone: string;
  createdAt: Date;
}

export const Dashboard = () => {
  const Navigate = useNavigate();
  const { setContacts, contacts, test, setNewUser, newUser } = contactAuth();
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);

  const { owner,deleteUser, editUser, setEditUser } = useAuth();

  const userOwner: UserResponse = owner.data;

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
          <div>Logo Do site</div>
          <nav>
            <button
              onClick={() => {
                toggleModal();
                setNewUser(true);
              }}
            >
              Novo contato
            </button>
            <button
              onClick={() => {
                localStorage.removeItem("@UserContact:Token");
                Navigate("/");
              }}
            >
              Sair
            </button>
          </nav>
          {isOpenModal && newUser && !editUser &&(
            <ModalCreateUser toggleModal={toggleModal} />
          )}
          {isOpenModal && editUser && !newUser &&(
            <ModalEditUserOwner toggleModal={toggleModal} userOwner={userOwner}/>
          )}
        </div>
      </StyledHeader>
      <StyledMain>
        <div className="container">
          <ul>
            <Card
              contacts={contacts}
              toggleModal={toggleModal}
              isOpenModal={isOpenModal}
            />
          </ul>
          <div className="container_userOwner">
            <span>{userOwner.fullName[0]}</span>
            <h1>{userOwner.fullName}</h1>
            <div>
              <button onClick={() => {
                toggleModal()
                setEditUser(true)
              }}>Editar perfil</button>
              <button onClick={() => deleteUser(userOwner.id) }>excluir perfil</button>
            </div>
          </div>
        </div>
      </StyledMain>
    </>
  );
};
