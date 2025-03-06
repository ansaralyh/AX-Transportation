// src/DriverDashboard/Dashboard/Dashboard.tsx
import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../../components/AdminComponents/AdminSidebar/AdminNavbar/AdminNavbar";
import Sidebar from "../../components/AdminComponents/AdminSidebar/AdminSidebar";

const AdminDashboard: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <div className="relative h-screen w-full">
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <Navbar toggleSidebar={toggleSidebar} />

      <div className="  transition-all">
        <div className=" bg-[#F6F6F6] transition-all">
          <Outlet /> {/* This will render the nested routes */}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
