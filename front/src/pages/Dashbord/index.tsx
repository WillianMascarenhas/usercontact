import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Card } from "../../components/card";
import { ModalCreateUser } from "../../components/modalAddContact";
import { contactAuth } from "../../hooks/contactAuth";

export interface IContact {
  id: number;
  fullName: string;
  email: string;
  phone: string;
  createdAt: Date;
}

export const Dashboard = () => {
 const { setContacts, contacts, test } = contactAuth()
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);

  useEffect(() => {
    (async () => {
      const response = await api.get<IContact[]>("/contact");
      setContacts(response.data);
    })();
  }, [test]);

  const toggleModal = () =>{
    setIsOpenModal(!isOpenModal)
  }

  return (
    <>
      <header>
        <div>
          <div>imagem sei lá</div>
          <nav>
            <button onClick={()=>toggleModal()}>Novo contato</button>
            <button>Sair</button>
          </nav>
          {
          isOpenModal && 
          (<ModalCreateUser toggleModal={toggleModal} />)
      }
        </div>
      </header>
      <main>
        <ul>
          <Card contacts={contacts} toggleModal={toggleModal} isOpenModal={isOpenModal}/>
        </ul>
      </main>
    </>
  );
};
