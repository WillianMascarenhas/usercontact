import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Card } from "../../components/card";

export interface IContact {
  id: number;
  fullName: string;
  email: string;
  phone: string;
  createdAt: Date;
}

export const Dashboard = () => {
  const [contacts, setContacts] = useState<IContact[]>([]);
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);

  useEffect(() => {
    (async () => {
      const response = await api.get<IContact[]>("/contact");
      setContacts(response.data);
    })();
  }, []);

  const toggleModal = () =>{
    setIsOpenModal(!isOpenModal)
  }

  return (
    <>
      <header>
        <div>
          <div>imagem sei lá</div>
          <nav>
            <span>Novo contato</span>
            <span>Sair</span>
          </nav>
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
