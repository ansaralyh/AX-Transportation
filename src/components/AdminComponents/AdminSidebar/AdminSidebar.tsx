// src/components/DriverComponents/Sidebar/Sidebar.tsx
import React from "react";
import { Link } from "react-router-dom";
import { X, LayoutGrid, MapPin, IdCard, Briefcase, LogOut, FileText, Wrench,Settings } from "lucide-react";

// Sidebar Props Interface
interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

// Sidebar Item Props Interface
interface SidebarItemProps {
  icon: React.ElementType;
  text: string;
  to: string;
}

// Sidebar Item Component
const SidebarItem: React.FC<SidebarItemProps> = ({ icon: Icon, text, to }) => (
  <li className="flex items-center px-6 py-3 text-lg cursor-pointer transition-colors hover:bg-orange-500 rounded-lg">
    <Link to={to} className="flex items-center w-full">
      <Icon className="w-5 h-5 mr-4" />
      {text}
    </Link>
  </li>
);

// Sidebar Component
const AdminSidebar: React.FC<SidebarProps> = ({ isOpen, toggleSidebar }) => {
  return (
    <>
      {/* Background Overlay - Click to Close Sidebar */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={toggleSidebar}
        />
      )}

      {/* Sidebar Container */}
      <div
        className={`fixed top-0 left-0 h-screen w-[279px] bg-[#231D1D] text-white z-50 shadow-lg transition-transform
        flex flex-col justify-between
        ${isOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}
      >
        {/* Close Button */}
        <button
          className="md:hidden absolute top-4 right-4 text-white z-[60]"
          onClick={toggleSidebar}
        >
          <X size={24} />
        </button>

        {/* Sidebar Logo */}
        <div className="relative w-full flex justify-center items-center py-10">
          <div className="absolute w-[250px] sm:w-[300px] h-[250px] sm:h-[300px] flex items-center justify-center">
            <div className="absolute inset-0 bg-white opacity-30 blur-3xl rounded-full" />
          </div>
          <img
            src="/assets/image 54.png"
            alt="AXT Transportation Logo"
            className="relative z-10 w-[120px] sm:w-[150px] h-auto"
          />
        </div>

        {/* Sidebar Items */}
        <nav className="flex-grow overflow-y-auto">
          <ul className="space-y-3 px-4 lg:mt-22">
            <SidebarItem icon={LayoutGrid} text="Dashboards" to="/admin-dashboard" />
            <SidebarItem icon={MapPin} text="Driver" to="/admin-dashboard/driver" />
            <SidebarItem icon={IdCard} text="Application Review" to="/admin-dashboard/application-review" />
            <SidebarItem icon={Briefcase} text="Work Scehdule" to="/admin-dashboard/schedules" />
            <SidebarItem icon={FileText} text="Vahicle Training" to="/admin-dashboard/tracking" />
            <SidebarItem icon={Wrench} text="Reports" to="/admin-dashboard/reports" />
            <SidebarItem icon={Settings} text="Settings" to="/admin-dashboard/settings" />
          </ul>
        </nav>

        {/* Logout Button */}
        <div className="px-6 pb-2">
          <button className="flex items-center w-full px-4 py-3 text-lg text-white hover:bg-red-600 rounded-lg">
            <LogOut className="w-6 h-6 mr-3 text-orange-500" />
            Log Out
          </button>
        </div>
      </div>
    </>
  );
};

export default AdminSidebar;