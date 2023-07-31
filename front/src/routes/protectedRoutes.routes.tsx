import { useEffect } from "react";
import { useAuth } from "../hooks/useAuth";
import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Container } from "../components/modal/style";

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
      <Container>
        <div className="modal-content">
          <span>Carregando a página</span>
        </div>
      </Container>
    );
  }
  return <Outlet />;
};
