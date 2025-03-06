// src/DriverDashboard/Dashboard/DashboardRoutes.tsx
import { Routes, Route } from "react-router-dom";
import AdminDashboard from "./AdminDashboard";


const AdminDashboardRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<AdminDashboard />} />
      

    </Routes>
  );
};

export default AdminDashboardRoutes;