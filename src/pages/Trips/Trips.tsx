import PerformanceCardData from "../DashboardContent/PerformanceCardData";
import PerformanceCard from "../../components/DriverComponents/UiComponents/PerformanceCard";
import PerformanceDashboard from "../../components/DriverComponents/UiComponents/PerformanceDashboard/PerformanceDashboard";
import { useEffect, useState } from "react";

interface TripData {
  id: string;
  vehicleId: string;
  driver: string;
  date: string;
  distance: string;
  duration: string;
  status: string;
}
interface TripDataB {
  driver: string;
  total: number;
  average: string;
  distance: string;
  percent: string;
}
const Trips = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [selectedTrip, setSelectedTrip] = useState<TripData | null>(null);

  // Sample data
  const tripData: TripData[] = [
    {
      id: "T12345",
      vehicleId: "Truck A",
      driver: "John Doe",
      date: "01/12/2025",
      distance: "120 km",
      duration: "1 hour 30 mins",
      status: "On-Time",
    },
    {
      id: "T12346",
      vehicleId: "Truck B",
      driver: "Jane Smith",
      date: "02/12/2025",
      distance: "85 km",
      duration: "1 hour 10 mins",
      status: "On-Time",
    },
    {
      id: "T12347",
      vehicleId: "Truck C",
      driver: "Mike Johnson",
      date: "03/12/2025",
      distance: "150 km",
      duration: "2 hours 15 mins",
      status: "On-Time",
    },
    {
      id: "T12348",
      vehicleId: "Truck D",
      driver: "Sarah Williams",
      date: "04/12/2025",
      distance: "95 km",
      duration: "1 hour 25 mins",
      status: "On-Time",
    },
  ];

  const tripDataB: TripDataB[] = [
    {
      driver: "ohn Doe",
      total: 50,
      average: "4.9 / 5",
      percent: "98%",
      distance: "2,500 km",
    },
    {
      driver: "ohn Doe",
      total: 50,
      average: "4.9 / 5",
      percent: "98%",
      distance: "2,500 km",
    },
    {
      driver: "ohn Doe",
      total: 50,
      average: "4.9 / 5",
      percent: "98%",
      distance: "2,500 km",
    },
    {
      driver: "ohn Doe",
      total: 50,
      average: "4.9 / 5",
      percent: "98%",
      distance: "2,500 km",
    },
    {
      driver: "ohn Doe",
      total: 50,
      average: "4.9 / 5",
      percent: "98%",
      distance: "2,500 km",
    },
  ];

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);

    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  useEffect(() => {
    if (isMobile && tripData.length > 0 && !selectedTrip) {
      setSelectedTrip(tripData[0]);
    }
  }, [isMobile, selectedTrip]);
  return (
    <div className="md:ml-[279px]">
      <h1 className="text-[#092C4C] text-2xl sm:text-3xl font-bold">
        Trip Analytics Overview
      </h1>
      <div className="mt-8 flex flex-wrap justify-center sm:justify-start gap-4 sm:gap-8 lg:gap-16">
        {PerformanceCardData.map((item, index) => (
          <PerformanceCard key={index} data={item} />
        ))}
      </div>
      <div>
        <PerformanceDashboard />
      </div>

      <div className="w-full">
        <h2 className="text-black text-2xl font-bold mt-10">
          Detailed Trip Data
        </h2>

        {!isMobile && (
          <div className="overflow-x-auto mt-4 bg-white shadow-lg rounded-lg">
            <table className="min-w-full border border-gray-200">
              <thead>
                <tr className="bg-orange-100 text-left">
                  <th className="py-4 px-6">Trip ID</th>
                  <th className="py-4 px-6">Vehicle ID</th>
                  <th className="py-4 px-6">Driver</th>
                  <th className="py-4 px-6">Date</th>
                  <th className="py-4 px-6">Distance</th>
                  <th className="py-4 px-6">Duration</th>
                  <th className="py-4 px-6">Status</th>
                </tr>
              </thead>
              <tbody>
                {tripData.map((trip, index) => (
                  <tr
                    key={trip.id}
                    className={index % 2 === 0 ? "bg-gray-100" : "bg-white"}
                  >
                    <td className="py-4 px-6">{trip.id}</td>
                    <td className="py-4 px-6">{trip.vehicleId}</td>
                    <td className="py-4 px-6">{trip.driver}</td>
                    <td className="py-4 px-6">{trip.date}</td>
                    <td className="py-4 px-6">{trip.distance}</td>
                    <td className="py-4 px-6">{trip.duration}</td>
                    <td className="py-4 px-6">{trip.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {isMobile && selectedTrip && (
          <div className="mt-4 bg-orange-50 rounded-lg shadow-md overflow-hidden">
            <div className="p-4 space-y-4">
              {Object.entries(selectedTrip).map(([key, value]) => (
                <div key={key} className="space-y-2">
                  <label className="font-medium text-gray-700 capitalize">
                    {key}
                  </label>
                  <div className="flex justify-between items-center bg-white p-3 rounded-md">
                    {/* <ChevronDown className="h-5 w-5 text-gray-500" /> */}
                    <span>{value}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      <h2 className="text-black text-2xl font-bold mt-10">
        Detailed Trip Data
      </h2>

      {/* Table Container */}
      {!isMobile && (
        <div className="overflow-x-auto mt-4 bg-white shadow-lg rounded-lg">
          <table className="min-w-full border border-gray-200">
            <thead>
              <tr className="bg-orange-100 text-left">
                <th className="py-4 px-6">Driver</th>
                <th className="py-4 px-6">Total Trips</th>
                <th className="py-4 px-6">Average Rating</th>
                <th className="py-4 px-6">On-Time Percentage</th>
                <th className="py-4 px-6">Distance Covered</th>
              </tr>
            </thead>
            <tbody>
              {tripDataB.map((trip, index) => (
                <tr className={index % 2 === 0 ? "bg-gray-100" : "bg-white"}>
                  <td className="py-4 px-6">{trip.driver}</td>
                  <td className="py-4 px-6">{trip.total}</td>
                  <td className="py-4 px-6">{trip.average}</td>
                  <td className="py-4 px-6">{trip.percent}</td>
                  <td className="py-4 px-6">{trip.distance}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {isMobile && selectedTrip && (
        <div className="mt-4 bg-orange-50 rounded-lg shadow-md overflow-hidden">
          <div className="p-4 space-y-4">
            {Object.entries(selectedTrip).map(([key, value]) => (
              <div key={key} className="space-y-2">
                <label className="font-medium text-gray-700 capitalize">
                  {key}
                </label>
                <div className="flex justify-between items-center bg-white p-3 rounded-md">
                  {/* <ChevronDown className="h-5 w-5 text-gray-500" /> */}
                  <span>{value}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Trips;
