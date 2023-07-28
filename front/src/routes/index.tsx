import { Route, Routes } from "react-router-dom";
import { Login } from "../pages/Login";
import { Dashboard } from "../pages/Dashbord";
import { Register } from "../pages/Register";
import { ProtectedRoutes } from "./protectedRoutes.routes";
import { ContactProvider } from "../providers/contactProvider";

export const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route element={<ProtectedRoutes />}>
        <Route
          path="/dashboard"
          element={
            <ContactProvider>
              <Dashboard />
            </ContactProvider>
          }
        />
      </Route>
      <Route path="/register" element={<Register />} />
    </Routes>
  );
};
