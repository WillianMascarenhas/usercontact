import { ReactNode, createContext } from "react";
import { api } from "../services/api";
import { UpdateData } from "../schemas/UpadateSchema/validators";

interface ContactValues {
    updateContact: (data: UpdateData, contactId: number) => Promise<void>
}

interface ContactProviderProps {
  children: ReactNode;
}

export const ContactContext = createContext({} as ContactValues);

export const ContactProvider = ({ children }: ContactProviderProps) => {
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
    } catch (error) {
      console.log(error);
    }
  };

  const ContactContextValues: ContactValues = {
    updateContact: updateContact,
  };

  return (
    <ContactContext.Provider value={ContactContextValues}>
      {children}
    </ContactContext.Provider>
  );
};
