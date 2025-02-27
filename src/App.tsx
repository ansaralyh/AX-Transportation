// src/App.tsx
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import SignUp from "./pages/SignUp/SignUp";
import SignIn from "./pages/SignIn/SignIn";
import DriverForm from "./pages/DriverRegistrationForm/DriverForm";
import DriverDashboard from "./DriverDashboard/Dashboard/Dashboard";

import Contact from "./pages/Contact/Contact";
import RealTimeTracking from "./pages/RealTimeTracking/TimeTrack";
import Drivers from "./pages/Drivers/Driver";
import Trips from "./pages/Trips/Trips";
import Reports from "./pages/Reports/Reports";
import Maintenance from "./pages/Maintenance/Maintenance";
import Settings from "./pages/Settings/Settings";
import DashboardContent from "./pages/DashboardContent/DashboardContent";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Home Route */}
        <Route path="/" element={<Home />} />

        {/* Authentication Routes */}
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/sign-In" element={<SignIn />} />

        {/* Driver Registration Form Route */}
        <Route path="/driver-form" element={<DriverForm />} />

        {/* Dashboard Route with Nested Routes */}
        <Route path="/driver-dashboard" element={<DriverDashboard />}>
          <Route index element={<DashboardContent />} /> {/* Default content */}
          <Route path="real-time-tracking" element={<RealTimeTracking />} />
          <Route path="drivers" element={<Drivers />} />
          <Route path="trips" element={<Trips />} />
          <Route path="reports" element={<Reports />} />
          <Route path="maintenance" element={<Maintenance />} />
          <Route path="contact" element={<Contact />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
