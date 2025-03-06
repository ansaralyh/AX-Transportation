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
import Maintenance from "./pages/Maintenance/Maintenance";
import Settings from "./pages/Settings/Settings";
import DashboardContent from "./pages/DashboardContent/DashboardContent";
import DriverDetails from "./pages/Drivers/DriverDetails/DriverDetails";
import Reports from "./pages/Reports/Reports";
// Admin imports
import AdminDashboard from "./AdminDashboard/Dashboard/AdminDashboard";
import AdminHome from './pages/AdminPages/Home/Home'
import Driver from "./pages/AdminPages/Driver/Driver";
import ApplicationReview from "./pages/AdminPages/Application/ApplicationReview";
import Schedules from "./pages/AdminPages/Schedules/Schedules";
import Tracking from "./pages/AdminPages/VehicleTracking/Tracking";
import AdminReports from "./pages/AdminPages/Reports/Reports";
import AdminSettings from "./pages/AdminPages/settings/AdminSettings";


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

        {/*Driver Dashboard Route with Nested Routes */}
        <Route path="/driver-dashboard" element={<DriverDashboard />}>
          <Route index element={<DashboardContent />} />
          <Route path="real-time-tracking" element={<RealTimeTracking />} />
          <Route path="drivers" element={<Drivers />} />
          <Route path="driver-details" element={<DriverDetails />} />
          <Route path="trips" element={<Trips />} />
          <Route path="reports" element={<Reports />} />
          <Route path="maintenance" element={<Maintenance />} />
          <Route path="contact" element={<Contact />} />
          <Route path="settings" element={<Settings />} />
        </Route>

        {/*Driver Dashboard Route with Nested Routes */}
        <Route path="/admin-dashboard" element={<AdminDashboard />}>
          <Route index element={<AdminHome />} />
          <Route path="driver" element={<Driver />} />
          <Route path="application-review" element={<ApplicationReview />} />
          <Route path="schedules" element={<Schedules />} />
          <Route path="tracking" element={<Tracking />} />
          <Route path="reports" element={<AdminReports />} />
          <Route path="settings" element={<AdminSettings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
