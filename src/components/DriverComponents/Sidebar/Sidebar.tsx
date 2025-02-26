import React from "react";
import { X, LayoutGrid, MapPin, IdCard, Briefcase,LogOut, FileText, Wrench, Mail, Settings } from "lucide-react";

// Sidebar Props Interface
interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

// Sidebar Item Props Interface
interface SidebarItemProps {
  icon: React.ElementType;
  text: string;
}

// Sidebar Component
const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggleSidebar }) => {
  return (
    <>
      {/* Background Overlay - Click to Close Sidebar */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-white bg-opacity-50 z-40 md:hidden"
          onClick={toggleSidebar}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-screen w-[279px] bg-[#231D1D] text-white z-50 shadow-lg transition-transform
        ${isOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}
      >
       <button 
  className="md:hidden absolute top-4 right-4 text-white z-[60]" 
  onClick={() => {
    console.log("Close button clicked!");
    toggleSidebar();
  }}
>
  <X size={24} />
</button>

        {/* Sidebar Logo */}
        <div className="relative w-full flex justify-center items-center py-8">
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
        <nav className="mt-20">
          <ul className="space-y-3">
            <SidebarItem icon={LayoutGrid} text="Dashboards" />
            <SidebarItem icon={MapPin} text="Real-Time Tracking" />
            <SidebarItem icon={IdCard} text="Drivers" />
            <SidebarItem icon={Briefcase} text="Trips" />
            <SidebarItem icon={FileText} text="Reports" />
            <SidebarItem icon={Wrench} text="Maintenance" />
            <SidebarItem icon={Mail} text="Contact" />
            <SidebarItem icon={Settings} text="Settings" />
          </ul>
        </nav>

        <div className="absolute bottom-4 left-0 w-full px-4">
  <button className="flex items-center w-full px-4 py-3 text-lg text-white hover:bg-red-600 rounded-lg">
    <LogOut className="w-6 h-6 mr-3 text-orange-500" /> 
    Log Out
  </button>
</div>

      </div>
    </>
  );
};

// Sidebar Item Component
const SidebarItem: React.FC<SidebarItemProps> = ({ icon: Icon, text }) => (
  <li className="flex items-center px-6 py-3 text-lg cursor-pointer transition-colors hover:bg-orange-500 rounded-lg">
    <Icon className="w-5 h-5 mr-4" />
    {text}
  </li>
);

export default Sidebar;
