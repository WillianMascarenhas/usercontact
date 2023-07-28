import { useContext } from "react";
import { ContactContext } from "../providers/contactProvider";

export const contactAuth = () => {
  const contactContext = useContext(ContactContext);

  return contactContext;
};
