import { useNavigate } from "react-router-dom";
import { ReactNode, useEffect } from "react";

interface ProtectedRouteProps {
  children: ReactNode;
  allowedRoles: string[]; 
}

const ProtectedRoute = ({ children, allowedRoles }: ProtectedRouteProps) => {
  const navigate = useNavigate();
  const auth = localStorage.getItem("isAuthenticated");
  const userRole = localStorage.getItem("role"); // e.g. "admin", "superAdmin", "driver"

  useEffect(() => {
    if (!auth || !allowedRoles.includes(userRole || "")) {
      navigate("/"); // Redirect if not authenticated or not authorized
    }
  }, [auth, userRole, allowedRoles, navigate]);

  if (auth && allowedRoles.includes(userRole || "")) {
    return children;
  }

  return null;
};

export default ProtectedRoute;
