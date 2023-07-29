import { ReactNode, createContext, useState } from "react";
import { api } from "../services/api";
import { CreateContactData, UpdateData } from "../schemas/ContactSchema/validators";
import { IContact, IContactTest } from "../pages/Dashbord";

interface ContactValues {
    updateContact: (data: UpdateData, contactId: number) => Promise<void>
    registerContact: (data: CreateContactData) => Promise<void>
    dellContact: (contactId: number) => Promise<void>
    setContacts: React.Dispatch<React.SetStateAction<IContact[]>>
    contacts: IContact[]
    setTest: React.Dispatch<React.SetStateAction<number>>
    test: number
}

interface ContactProviderProps {
  children: ReactNode;
}

export const ContactContext = createContext({} as ContactValues);

export const ContactProvider = ({ children }: ContactProviderProps) => {

  const registerContact = async (data: CreateContactData) => {
      try {
        await api.post("/contact", data);
        setTest(test+1)
      } catch (error) {
        console.log(error);
      }
    };

    const dellContact = async (contactId:number) =>{
        console.log(contactId)
        try{
          await api.delete(`/contact/${contactId}`);
          setTest(test+1)
        }catch (error) {
          console.log(error)
        }
      }

  const updateContact = async (data: UpdateData, contactId: number) => {
    try{
    if (!data.fullName) {
        delete data.fullName;
      }
      
      if (!data.email) {
        delete data.email;
      }
      
      if (!data.phone) {
        delete data.phone;
      }
      await api.patch(`contact/${contactId}`, data);
      setTest(test+1)
    } catch (error) {
      console.log(error);
    }
  };

  const [contacts, setContacts] = useState<IContact[]>([]);
  const [test, setTest] = useState(Number);

  const ContactContextValues: ContactValues = {
    updateContact: updateContact,
    registerContact: registerContact,
    dellContact: dellContact,
    setContacts: setContacts,
    contacts: contacts,
    test: test,
    setTest: setTest
  };

  return (
    <ContactContext.Provider value={ContactContextValues}>
      {children}
    </ContactContext.Provider>
  );
};
