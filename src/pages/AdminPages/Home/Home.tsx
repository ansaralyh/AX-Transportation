import { useEffect, useState } from "react";
import StatCard from "../../../components/AdminComponents/StatCard/StatCard";
import { CirclePlus, ClipboardList, FileText, Route } from "lucide-react";
import { TbSteeringWheelFilled } from "react-icons/tb";
import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer } from "recharts";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { LineChart, Line } from "recharts";
import ProgressBar from "../../../components/AdminComponents/ProgressBar/ProgressBar";

interface Driver {
  name: string;
  date: string;
  status: string;
}
interface Routes {
  name: string;
  available: string;
  destination: string;
  time: string;
}
interface Application {
  name: string;
  applied: string;
  status: string;
}
const Home = () => {
  const barData = [
    { name: "1", value: 8 },
    { name: "2", value: 9 },
    { name: "3", value: 7 },
    { name: "4", value: 8 },
    { name: "5", value: 10 },
    { name: "6", value: 8 },
    { name: "7", value: 9 },
    { name: "8", value: 7 },
    { name: "9", value: 8 },
    { name: "10", value: 10 },
    { name: "11", value: 8 },
  ];

  const lineData = [
    { name: "A", value: 3 },
    { name: "B", value: 5 },
    { name: "C", value: 4 },
    { name: "D", value: 6 },
    { name: "E", value: 5 },
    { name: "F", value: 7 },
  ];
  const drivers: Driver[] = [
    { name: "Jhone", date: "01/02/2025", status: "Pending" },
    { name: "Jhone", date: "01/02/2025", status: "Pending" },
    { name: "Jhone", date: "01/02/2025", status: "Pending" },
    { name: "Jhone", date: "01/02/2025", status: "Pending" },
  ];
  const applications: Application[] = [
    { name: "Jhone", applied: "01/02/2025", status: "Pending" },
    { name: "Jhone", applied: "01/02/2025", status: "Pending" },
    { name: "Jhone", applied: "01/02/2025", status: "Rejected" },
    { name: "Jhone", applied: "01/02/2025", status: "Pending" },
  ];
  const routes: Routes[] = [
    {
      name: "Jhone",
      available: "available",
      destination: "Downtown Area",
      time: "15 minutes",
    },
    {
      name: "Jhone",
      available: "available",
      destination: "Downtown Area",
      time: "15 minutes",
    },
    {
      name: "Jhone",
      available: "available",
      destination: "Downtown Area",
      time: "15 minutes",
    },
    {
      name: "Jhone",
      available: "available",
      destination: "Downtown Area",
      time: "15 minutes",
    },
    {
      name: "Jhone",
      available: "available",
      destination: "Downtown Area",
      time: "15 minutes",
    },
  ];

  const [isMobile, setIsMobile] = useState(false);
  const [selectedTrip, setSelectedTrip] = useState<Driver | null>(null);
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);

    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  useEffect(() => {
    if (isMobile && drivers.length > 0 && !selectedTrip) {
      setSelectedTrip(drivers[0]);
    }
  }, [isMobile, selectedTrip]);
  return (
    <div className="ml-[279px] p-5 bg-[#F6F6F6]">
      <div className="flex  font-[Poppins]  flex-col sm:flex-column justify-center items-start  gap-4 mb-20">
        <h1 className="text-2xl font-[Poppins] sm:text-2xl font-medium">
          Admin
        </h1>
        <h2 className="text-4xl font-[Poppins] font-medium">Welcome “Johon”</h2>
      </div>
      <div className="flex gap-14 justify-start">
        <StatCard
          icon={TbSteeringWheelFilled}
          value={56}
          label="Active Drivers"
        />
        <StatCard
          icon={ClipboardList}
          value={567}
          label="Pending Applications"
        />
        <StatCard icon={Route} value={3253} label="Total Trips" />
      </div>

      <div className="w-full">
        <h2 className="text-black text-2xl font-bold mt-10">
          Detailed Trip Data
        </h2>

        {!isMobile && (
          <div className="overflow-x-auto mt-4 bg-white shadow-lg rounded-lg">
            <table className="w-full border-collapse rounded-lg font-[roboto] shadow-lg">
              <thead>
                <tr className="bg-orange-100 font-semibold text-2xl font-[roboto] border-b-12 border-white text-left">
                  <th className="py-[20px] px-4">Driver Name</th>
                  <th className="py-[20px] px-4">Application Date</th>
                  <th className="py-[20px] px-4">Status</th>
                  <th className="py-[20px] text-center px-4">Action</th>
                </tr>
              </thead>
              <tbody>
                {drivers.map((driver, index) => (
                  <tr
                    key={index}
                    className="border-b-12 border-white bg-gray-100 text-2xl hover:bg-gray-100"
                  >
                    <td className="py-[20px] px-4">{driver.name}</td>
                    <td className="py-[20px] px-4">{driver.date}</td>
                    <td className="py-[20px] px-4">{driver.status}</td>
                    <td className="py-[20px] px-4 flex justify-center gap-2">
                      <button className="bg-green-500 text-white px-3 py-1 rounded-md hover:bg-green-600">
                        Approval
                      </button>
                      <button className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600">
                        Reject
                      </button>
                    </td>
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
                    <span>{value}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="w-full">
        <div className="flex justify-between items-center mt-10">
          <h2 className="text-black text-2xl font-bold ">Assign Routes</h2>
          <button className="bg-[#F8A401] flex justify-center items-center gap-1 py-2 px-4 rounded-lg text-white">
            <CirclePlus />
            Assign Route
          </button>
        </div>

        {!isMobile && (
          <div className="overflow-x-auto mt-4 bg-white shadow-lg rounded-lg">
            <table className="w-full border-collapse rounded-lg font-[roboto] shadow-lg">
              <thead>
                <tr className="bg-orange-100 font-semibold text-2xl font-[roboto] border-b-12 border-white text-left">
                  <th className="py-[20px] px-4">Driver Name</th>
                  <th className="py-[20px] px-4">Available</th>
                  <th className="py-[20px] px-4">Destination</th>
                  <th className="py-[20px] px-4">Estimated Time</th>
                  <th className="py-[20px] text-center px-4">Action</th>
                </tr>
              </thead>
              <tbody>
                {routes.map((routes, index) => (
                  <tr
                    key={index}
                    className="border-b-12 border-white bg-gray-100 text-2xl hover:bg-gray-100"
                  >
                    <td className="py-[20px] px-4">{routes.name}</td>
                    <td className="py-[20px] px-4">{routes.available}</td>
                    <td className="py-[20px] px-4">{routes.destination}</td>
                    <td className="py-[20px] px-4">{routes.time}</td>

                    <td className="py-[20px] px-4 flex justify-center gap-2">
                      <button className="border-green-500  px-8 py-2 border rounded-md">
                        Assign
                      </button>
                    </td>
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
                    <span>{value}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      <div className="bg-white rounded-xl">
        <div className="flex justify-between items-center p-4 mt-10">
          <h2 className="text-black text-2xl font-bold ">View Reports</h2>
          <button className="bg-[#F8A401] flex justify-center items-center gap-1 py-2 px-4 rounded-lg text-white">
            <FileText />
            View Report
          </button>
        </div>

        <div className="grid grid-cols-3 gap-4 p-4">
          <div className="bg-[#F6F6F6] rounded-lg shadow-lg p-4 text-center">
            <h3 className="font-semibold mb-2">Trip Performance</h3>
            <ResponsiveContainer width="100%" height={150}>
              <BarChart data={barData}>
                <XAxis dataKey="name" />
                <Tooltip />
                <Bar dataKey="value" fill="#FF8000" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="bg-[#F6F6F6] rounded-lg shadow-lg p-4 text-center">
            <h3 className="font-semibold mb-2">Driver Ratings</h3>
            <div className="w-32 mx-auto">
              <CircularProgressbar
                value={80}
                text={`4.8`}
                styles={buildStyles({
                  textColor: "black",
                  pathColor: "yellow",
                  trailColor: "#d6d6d6",
                })}
              />
            </div>
          </div>

          <div className="bg-[#F6F6F6] rounded-lg shadow-lg p-4 text-center">
            <h3 className="font-semibold mb-2">System Efficiency</h3>
            <ResponsiveContainer width="100%" height={150}>
              <LineChart data={lineData}>
                <Line type="monotone" dataKey="value" stroke="purple" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <div className="w-full mt-8">
        <h2 className="text-black text-2xl mb-4 font-[roboto] font-semibold ">
          New Applications
        </h2>

        {!isMobile && (
          <div className="overflow-x-auto mt-4 bg-white shadow-lg rounded-lg">
            <table className="w-full border-collapse rounded-lg font-[roboto] shadow-lg">
              <thead>
                <tr className="bg-orange-100 font-semibold text-2xl font-[roboto] border-b-12 border-white text-left">
                  <th className="py-[20px] px-4">Driver Name</th>
                  <th className="py-[20px] px-4">Applied Date</th>
                  <th className="py-[20px] px-4">Status</th>
                  <th className="py-[20px] text-center px-4">Action</th>
                </tr>
              </thead>
              <tbody>
                {applications.map((application, index) => (
                  <tr
                    key={index}
                    className="border-b-12 border-white bg-gray-100 text-2xl hover:bg-gray-100"
                  >
                    <td className="py-[20px] px-4">{application.name}</td>
                    <td className="py-[20px] px-4">{application.applied}</td>
                    <td className="py-[20px] px-4">{application.status}</td>
                    <td className="py-[20px] px-4 flex justify-center gap-2">
                      <button className="border-green-500  px-8 py-2 border rounded-md">
                        Assign
                      </button>
                    </td>
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
                    <span>{value}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      <div className="grid grid-cols-2 gap-4 p-4">
        {/* Recent Deliveries */}
        <div className="font-[roboto]">
          <h3 className="font-semibold text-2xl mb-2">Recent Deliveries</h3>
          <div className="bg-white h-48 rounded-lg shadow-lg p-4">
            <p className="mb-2 text-2xl">Jhone</p>
            <div className="mb-4">
              <div className="flex text-2xl justify-between items-center">
                <span className="block mb-1">Delivery</span>
                <h1>100%</h1>
              </div>
              <ProgressBar value={100} color="bg-green-500" />
            </div>
            <div>
              <div className="flex text-2xl justify-between items-center">
                <span className="block mb-1">Delivery</span>
                <h1>50%</h1>
              </div>
              <ProgressBar value={19} max={35} color="bg-red-500" />
            </div>
          </div>
        </div>

        {/* Status Updates */}
        <div>
          <h3 className="font-semibold text-2xl mb-2">Status Updates</h3>
          <div className="bg-white  rounded-lg shadow-lg p-4">
            <ul className="">
              <li className="flex text-2xl items-center mb-4">
                <span className="w-4 h-4 font-[roboto] bg-green-500 rounded-full inline-block mr-2"></span>
                John Doe was assigned Route A - 2 min ago
              </li>
              <li className="flex text-2xl items-center mb-4">
                <span className="w-4 h-4 font-[roboto] bg-red-500 rounded-full inline-block mr-2"></span>
                Jane Smith’s delivery was delayed - 10 min ago
              </li>
              <li className="flex text-2xl items-center">
                <span className="w-4 h-4 font-[roboto] bg-purple-500 rounded-full inline-block mr-2"></span>
                Mark Johnson's trip canceled due to bad weather - 1 hour ago
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
