// src/DriverDashboard/Dashboard/Dashboard.tsx
import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../../components/DriverComponents/Navbar/Navbar";
import Sidebar from "../../components/DriverComponents/Sidebar/Sidebar";

const Dashboard: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <div className="relative h-screen w-full">
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <Navbar toggleSidebar={toggleSidebar} />
      <div className="p-4 md:ml-[279px]  transition-all">
        <Outlet /> {/* This will render the nested routes */}
      </div>
    </div>
  );
};

export default Dashboard;