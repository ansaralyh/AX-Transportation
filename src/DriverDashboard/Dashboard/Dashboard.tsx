import React, { useState } from "react";
import Navbar from "../../components/DriverComponents/Navbar/Navbar";
import Sidebar from "../../components/DriverComponents/Sidebar/Sidebar";

const Dashboard: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Ensure toggleSidebar correctly updates state
  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <div className="relative h-screen w-full">
      {/* Sidebar - Now Overlays Content */}
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

      {/* Navbar with Hamburger Button */}
      <Navbar toggleSidebar={toggleSidebar} />

      {/* Main Content - Stays Visible */}
      <div className="p-4 md:ml-[279px] transition-all">
        <h1 className="text-xl">Dashboard Content</h1>
      </div>
    </div>
  );
};

export default Dashboard;
