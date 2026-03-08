import { Navigate, Outlet } from "react-router-dom";
import useUser from "../hooks/useUser";

function ProtectedRoute() {
  const { token } = useUser();

  return token ? <Outlet /> : <Navigate to="/login" replace />;
}

export default ProtectedRoute;
