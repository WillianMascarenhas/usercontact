// components/pages/Dashboard.tsx
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { useAuth } from "../../hooks/useAuth";

export interface IContact {
  id: number;
  fullName: string;
  email: string;
  phone: string;
  createdAt: Date;
}

export const Dashboard = () => {
  const [contacts, setContacts] = useState<IContact[]>([]);
  const { loading } = useAuth();
  
  useEffect(() => {
    (async () => {
      const response = await api.get<IContact[]>("/contact");
      setContacts(response.data);
    })();
  }, [loading]);

  return (
    <>
      <h1>Dashbord</h1>
      <ul>
        {contacts.map((contact) => (
          <li key={contact.id}>{contact.fullName}</li>
        ))}
      </ul>
    </>
  );
};
