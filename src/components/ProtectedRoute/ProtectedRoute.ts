import { useNavigate } from "react-router-dom";
import { ReactNode, useEffect } from "react";

const ProtectedRoute = ({ children }: { children: ReactNode }) => {
  const navigate = useNavigate();
  const auth: string | null = localStorage.getItem("isAuthenticated");

  useEffect(() => {
    if (!auth) {
      navigate("/admin/dashboard/");
    }
  }, [auth, navigate]);
  if (auth) {
    return children;
  } else {
    return null;
  }
};

export default ProtectedRoute;
