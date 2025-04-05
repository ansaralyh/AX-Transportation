// src/DriverDashboard/Dashboard/DashboardRoutes.tsx
import { Routes, Route } from "react-router-dom";
import RealTimeTracking from "../../pages/RealTimeTracking/TimeTrack";
import Drivers from "../../pages/Drivers/Driver";
import Trips from "../../pages/Trips/Trips";
import Reports from "../../pages/Reports/Reports";
import Maintenance from "../../pages/Maintenance/Maintenance";
import Contact from "../../pages/Contact/Contact";
import Settings from "../../pages/Settings/Settings";
import DashboardContent from "./Dashboard";

const DashboardRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<DashboardContent />} />
      <Route 
        path="/real-time-tracking" 
        element={
          <RealTimeTracking 
            driver={{
              name: "John",
              age: 34,
              experience: "6+ year",
              status: "Active",
              photo: "/placeholder.svg?height=100&width=100"
            }}
            vehicle={{
              id: "T442452",
              location: "Mg road USA",
              speed: "56 Km",
              eta: "2 Hours"
            }}
          />
        } 
      />
      <Route path="/drivers" element={<Drivers />} />
      <Route path="/trips" element={<Trips />} />
      <Route path="/reports" element={<Reports />} />
      <Route path="/maintenance" element={<Maintenance />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/settings" element={<Settings />} />
    </Routes>
  );
};

export default DashboardRoutes;