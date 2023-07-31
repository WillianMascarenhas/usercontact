import { useEffect } from "react";
import { useAuth } from "../hooks/useAuth";
import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export const ProtectedRoutes = () => {
  const { loading } = useAuth();
  const token = localStorage.getItem("@UserContact:Token");
  const Navigate = useNavigate();
  useEffect(() => {
    if (token === null) {
      Navigate("/");
    }
  }, []);
  if (loading) {
    return (
      <div>
        <span>Carregando a página</span>
      </div>
    );
  }
  return <Outlet />;
};
