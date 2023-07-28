import { ReactNode, createContext, useEffect, useState } from "react";
import { LoginData } from "../schemas/LoginSchema/validators";
import { api } from "../services/api";
import { useNavigate } from "react-router-dom";
import { RegisterData } from "../schemas/RegisterSchema/validators";

export const LoginContext = createContext({} as AuthValues);

interface LoginProviderProps {
  children: ReactNode;
}

interface AuthValues {
  login: (data: LoginData) => Promise<void>;
  registerUser: (data: RegisterData) => Promise<void>
  loading: boolean;
}

export const LoginProvider = ({ children }: LoginProviderProps) => {
  const [loading, setLoading] = useState(true);
  const Navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("@UserContact:Token");

    if (!token) {
      return;
    }

    api.defaults.headers.common.Authorization = `Bearer ${token}`;
    setLoading(false);
    // esse loading impede que a requisição de get contact sejá feita sem quem o token já estejá setado no auth
  }, []);
  // Aqui é para que caso o user der f5 e seu token ainda estiver ativo ele sejá usado como padrão nas requisições

  const login = async (data: LoginData) => {
    try {
      const response = await api.post("/login", data);

      const { token } = response.data;

      api.defaults.headers.common.Authorization = `Bearer ${token}`;
      // Aqui esta setendo o token no headers após o login ser feito

      localStorage.setItem("@UserContact:Token", token);
      setLoading(false);

      Navigate("/dashboard");
    } catch (error) {
      console.log(error);
    }
  };

  const registerUser = async (data: RegisterData) =>{
    try {
      await api.post("/user", data)
      Navigate("/")
    } catch (error){
      console.log(error)
    }
  }

  const loginContextValue: AuthValues = {
    loading: loading,
    login: login,
    registerUser: registerUser
  };

  return (
    <LoginContext.Provider value={loginContextValue}>
      {children}
    </LoginContext.Provider>
  );
};
