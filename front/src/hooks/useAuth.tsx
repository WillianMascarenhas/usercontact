import { useContext } from "react";
import { LoginContext } from "../providers/userProvider";

export const useAuth = () => {
  const loginContext = useContext(LoginContext);

  return loginContext;
};
