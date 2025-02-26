import React from "react";
import { Bell, Menu } from "lucide-react";

interface NavbarProps {
  toggleSidebar: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ toggleSidebar }) => {
  return (
    <div className="bg-white flex items-center justify-between p-4 shadow-md relative z-10">
      {/* Hamburger Menu Button (Mobile) */}
      <button className="md:hidden p-2 rounded-full hover:bg-gray-200" onClick={toggleSidebar}>
        <Menu className="w-6 h-6 text-gray-600" />
      </button>

      {/* Right Side - Notification & Profile */}
      <div className="flex items-center space-x-4 ml-auto">
        <button className="relative p-2 rounded-full hover:bg-gray-200">
          <Bell className="w-6 h-6 text-gray-600" />
        </button>
        <img
          src="/assets/pexels-christina-morillo-1181690 1.png"
          alt="User Avatar"
          className="w-10 h-10 rounded-full object-cover cursor-pointer"
        />
      </div>
    </div>
  );
};

export default Navbar;
