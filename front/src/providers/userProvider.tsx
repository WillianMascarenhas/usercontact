import { ReactNode, createContext, useEffect, useState } from "react";
import { LoginData } from "../schemas/LoginSchema/validators";
import { api } from "../services/api";
import { useNavigate } from "react-router-dom";
import { RegisterData, UserUpdate } from "../schemas/RegisterSchema/validators";
import { Dict } from "styled-components/dist/types";

interface AuthValues {
  login: (data: LoginData) => Promise<void>;
  registerUser: (data: RegisterData) => Promise<void>;
  setLoading: (value: React.SetStateAction<boolean>) => void;
  loading: boolean;
  owner: Dict
  deleteUser: (userId: number) => Promise<void>
  updateUser: (data: UserUpdate, userId: number) => Promise<void>
  setEditUser: React.Dispatch<React.SetStateAction<boolean>>
  editUser: boolean
  setPatchUser: React.Dispatch<React.SetStateAction<number>>
}
interface LoginProviderProps {
  children: ReactNode;
}
export const LoginContext = createContext({} as AuthValues);

export const LoginProvider = ({ children }: LoginProviderProps) => {
  const [loading, setLoading] = useState(true);
  const [owner, setOwner] = useState({});
  const [editUser, setEditUser] = useState(false);
  const [patchUser, setPatchUser] = useState(0);
  const Navigate = useNavigate();

  const login = async (data: LoginData) => {
    try {
      const response = await api.post("/login", data);

      const { token } = response.data;
      
      api.defaults.headers.common.Authorization = `Bearer ${token}`;
      // Aqui esta setendo o token no headers após o login ser feito

      if(response){
        const userOwner = await api.get("/user/owner")
        setOwner(userOwner)
      }
 
      localStorage.setItem("@UserContact:Token", token);
      setLoading(false);
      Navigate("/dashboard");
    } catch (error) {
      console.log(error);
    }
  };

  const getUserOwner = async (token:string) =>{
    try{
        api.defaults.headers.common.Authorization = `Bearer ${token}`;
        const userOwner = await api.get("/user/owner")
        setOwner(userOwner)
    }catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    const token = localStorage.getItem("@UserContact:Token");
    if(token){
      getUserOwner(token)
    }
  },[patchUser])

  const registerUser = async (data: RegisterData) => {
    try {
      await api.post("/user", data);
      Navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const deleteUser = async (userId:number) =>{
    try{
      await api.delete(`/user/${userId}`)
      Navigate("/")
    }catch (error){
      console.log(error)
    }
  }

  const updateUser = async (data:UserUpdate, userId:number) => {
    try{
      if (!data.fullName) {
        delete data.fullName;
      }
      if (!data.email) {
        delete data.email;
        }
      if (!data.password) {
        delete data.password;
      }
      if (!data.phone) {
        delete data.phone;
      }
        await api.patch(`user/${userId}`, data);
      setPatchUser(patchUser+1)

      } catch (error) {
        console.log(error);
      }
  }

  useEffect(() => {
    const token = localStorage.getItem("@UserContact:Token");

    if (!token) {
      return;
    }

    api.defaults.headers.common.Authorization = `Bearer ${token}`;

    setTimeout(() => {
      setLoading(false);
    }, 1000);
    // esse loading impede que a requisição de get contact sejá feita sem quem o token já estejá setado no auth
  }, []);
  // Aqui é para que caso o user der f5 e seu token ainda estiver ativo ele sejá usado como padrão nas requisições

  const loginContextValue: AuthValues = {
    loading: loading,
    setLoading: setLoading,
    login: login,
    registerUser: registerUser,
    owner:owner,
    deleteUser: deleteUser,
    updateUser:updateUser,
    setEditUser:setEditUser,
    editUser:editUser,
    setPatchUser: setPatchUser
  };

  return (
    <LoginContext.Provider value={loginContextValue}>
      {children}
    </LoginContext.Provider>
  );
};
