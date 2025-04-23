import { useEffect, useState } from "react";
import { TbSteeringWheelFilled } from "react-icons/tb";
import { CalendarClock, CalendarX2, CirclePlus } from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
// Import Swiper styles

import DriverCard, {
  DriverProfile,
} from "../../../components/AdminComponents/DriverCard/DriverCard";
import "swiper/swiper-bundle.css";
import { getAllDrivers } from "../../../components/Services/DriverServices";
import { Driver } from "../../../Types/UserTypes/driverTypes";
import { useQuery } from "@tanstack/react-query";
interface Drivers {
  name: string;
  email: string;
  status: string;
  route: string;
}
interface Approve {
  name: string;
  email: string;
  status: string;
}
interface History {
  id: number;
  date: string;
  route: string;
  status: string;
  earnings: string;
}
const Driver = () => {
  const [drivers] = useState<DriverProfile[]>([
    {
      id: "1",
      name: "Michael Nguyen",
      avatar: "/placeholder.svg?height=100&width=100",
      car: {
        make: "Pontiac",
        color: "White",
        licensePlate: "586 SGX",
      },
      rating: 4.5,
      totalRatings: 2256,
      phone: "0903001276",
      location: "Saigon",
    },
    {
      id: "2",
      name: "Michael Nguyen",
      avatar: "/placeholder.svg?height=100&width=100",
      car: {
        make: "Pontiac",
        color: "White",
        licensePlate: "586 SGX",
      },
      rating: 4.5,
      totalRatings: 2256,
      phone: "0903001276",
      location: "Saigon",
    },
    {
      id: "2",
      name: "Michael Nguyen",
      avatar: "/placeholder.svg?height=100&width=100",
      car: {
        make: "Pontiac",
        color: "White",
        licensePlate: "586 SGX",
      },
      rating: 4.5,
      totalRatings: 2256,
      phone: "0903001276",
      location: "Saigon",
    },
    {
      id: "2",
      name: "Michael Nguyen",
      avatar: "/placeholder.svg?height=100&width=100",
      car: {
        make: "Pontiac",
        color: "White",
        licensePlate: "586 SGX",
      },
      rating: 4.5,
      totalRatings: 2256,
      phone: "0903001276",
      location: "Saigon",
    },
    {
      id: "2",
      name: "Michael Nguyen",
      avatar: "/placeholder.svg?height=100&width=100",
      car: {
        make: "Pontiac",
        color: "White",
        licensePlate: "586 SGX",
      },
      rating: 4.5,
      totalRatings: 2256,
      phone: "0903001276",
      location: "Saigon",
    },
    {
      id: "3",
      name: "Michael Nguyen",
      avatar: "/placeholder.svg?height=100&width=100",
      car: {
        make: "Pontiac",
        color: "White",
        licensePlate: "586 SGX",
      },
      rating: 4.5,
      totalRatings: 2256,
      phone: "0903001276",
      location: "Saigon",
    },
  ]);
  const history: History[] = [
    {
      id: 1,
      date: "01/02/2025",
      route: "ROute A",
      status: "Pending",
      earnings: "Completed",
    },
    {
      id: 2,
      date: "01/02/2025",
      route: "ROute A",
      status: "Pending",
      earnings: "Completed",
    },
    {
      id: 3,
      date: "01/02/2025",
      route: "ROute A",
      status: "Pending",
      earnings: "Completed",
    },
    {
      id: 4,
      date: "01/02/2025",
      route: "ROute A",
      status: "Pending",
      earnings: "Completed",
    },
  ];
  const applications: Drivers[] = [
    {
      name: "Jhone",
      email: "john@example.com",
      status: "Pending",
      route: "Route A",
    },
    {
      name: "Jhone",
      email: "john@example.com",
      status: "Pending",
      route: "Route A",
    },
    {
      name: "Jhone",
      email: "john@example.com",
      status: "Pending",
      route: "Route A",
    },
    {
      name: "Jhone",
      email: "john@example.com",
      status: "Pending",
      route: "Route A",
    },
  ];
  const approve: Approve[] = [
    {
      name: "Jhone",
      email: "john@example.com",
      status: "Pending",
    },
    {
      name: "Jhone",
      email: "john@example.com",
      status: "Pending",
    },
    {
      name: "Jhone",
      email: "john@example.com",
      status: "Pending",
    },
    {
      name: "Jhone",
      email: "john@example.com",
      status: "Pending",
    },
  ];
  const [isMobile, setIsMobile] = useState(false);
  const [selectedTrip, setSelectedTrip] = useState<Drivers | null>(null);
  const { data, isLoading, isError, error } = useQuery<Driver[]>({
    queryKey: ["DriverDetails"],
    queryFn: getAllDrivers,
  });
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);

    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  useEffect(() => {
    if (isMobile && applications.length > 0 && !selectedTrip) {
      setSelectedTrip(applications[0]);
    }
  }, [isMobile, selectedTrip]);
  const activeDrivers =
    data?.filter((d) => d.applicationStatus?.status === "active").length ?? 0;
  const pendingApplications =
    data?.filter((d) => d.applicationStatus?.status === "pending").length ?? 0;
  const rejectedApplications =
    data?.filter((d) => d.applicationStatus?.status === "rejected").length ?? 0;
  return (
    <div className="ml-[279px] p-5 bg-[#F6F6F6]">
      {/* Header Section */}
      <div className="flex font-[Poppins] flex-col justify-start items-start gap-4 mb-20">
        <h1 className="text-2xl font-medium">Admin</h1>
        <h2 className="text-4xl font-medium">Driver Management</h2>
      </div>

      {/* Stats Section */}
      <div className="flex gap-14 justify-start">
        <div className="flex flex-col items-start justify-center bg-white border border-gray-300 p-6 w-[300px] rounded-lg shadow-sm">
          {/* Corrected Icon Usage */}
          <TbSteeringWheelFilled className="w-12 h-12 text-[#00FF1E] " />
          {/* Centered Number */}
          <div className="w-full flex justify-center">
            <h2 className="text-[64px] font-medium font-[Poppins]">
              {activeDrivers}
            </h2>
          </div>
          <p className="font-[Poppins] text-[#00FF1E] font-medium text-[22px]">
            Active Drivers
          </p>
        </div>
        <div className="flex flex-col items-start justify-center bg-white border border-gray-300 p-6 w-[300px] rounded-lg shadow-sm">
          {/* Corrected Icon Usage */}
          <CalendarClock className="w-12 h-12 text-[#FFA600] " />
          {/* Centered Number */}
          <div className="w-full flex justify-center">
            <h2 className="text-[64px] font-medium font-[Poppins]">
              {pendingApplications}
            </h2>
          </div>
          <p className="font-[Poppins] text-[#FFA600] font-medium text-[22px]">
            Pending Applications
          </p>
        </div>
        <div className="flex flex-col items-start justify-center bg-white border border-gray-300 p-6 w-[300px] rounded-lg shadow-sm">
          {/* Corrected Icon Usage */}
          <CalendarX2 className="w-12 h-12 text-[#FF0000] " />
          {/* Centered Number */}
          <div className="w-full flex justify-center">
            <h2 className="text-[64px] font-medium font-[Poppins]">
              {rejectedApplications}
            </h2>
          </div>
          <p className="font-[Poppins] text-[#FF0000] font-medium text-[22px]">
            Reject Application
          </p>
        </div>
      </div>

      <div className="flex justify-between items-center p-4 mt-10">
        <h2 className="text-black text-2xl font-bold ">Approve Drivers</h2>
        <button className="bg-[#F8A401] flex justify-center items-center gap-1 py-2 px-4 rounded-lg text-white">
          <CirclePlus />
          Add New Driver
        </button>
      </div>
   

        
      {!isMobile && (
  <div className="overflow-x-auto mt-4 bg-white shadow-lg rounded-lg">
    <table className="w-full border-collapse rounded-lg font-[roboto] shadow-lg">
      <thead>
        <tr className="bg-orange-100 font-semibold text-2xl border-b-12 border-white text-left">
          <th className="py-[20px] px-4">Driver Name</th>
          <th className="py-[20px] px-4">Email</th>
          <th className="py-[20px] px-4">Status</th>
          <th className="py-[20px] text-center px-4">Action</th>
        </tr>
      </thead>
      <tbody>
        {isLoading ? (
          <tr>
            <td colSpan={4} className="text-center py-6 text-gray-500">
              Loading approved applications...
            </td>
          </tr>
        ) : isError ? (
          <tr>
            <td colSpan={4} className="text-center py-6 text-red-500">
              Failed to load applications: {error?.message}
            </td>
          </tr>
        ) : (() => {
            const approvedApps = data?.filter(
              (app) => app.applicationStatus?.status === "approved"
            );

            if (!approvedApps || approvedApps.length === 0) {
              return (
                <tr>
                  <td colSpan={4} className="text-center py-6 text-gray-500">
                    No approved applications found.
                  </td>
                </tr>
              );
            }

            return approvedApps.map((app, index) => (
              <tr
                key={app._id || index}
                className="border-b-12 border-white bg-gray-100 text-2xl hover:bg-gray-100"
              >
                <td className="py-[20px] px-4">{app.fullName}</td>
                <td className="py-[20px] px-4">{app.emailAddress}</td>
                <td className="py-[20px] px-4">
                  {app.applicationStatus?.status}
                </td>
                <td className="py-[20px] px-4 flex justify-center gap-2">
                  <button className="bg-[#14EF00] text-white px-3 py-1 rounded-md hover:bg-green-600">
                    Approve
                  </button>
                  <button className="bg-[#FF0000] text-white px-3 py-1 rounded-md hover:bg-red-600">
                    Reject
                  </button>
                </td>
              </tr>
            ));
        })()}
      </tbody>
    </table>
  </div>
)}


      <div className="flex justify-between items-center p-4 mt-10">
        <h2 className="text-black text-2xl font-bold ">
          Approve or Reject Applications
        </h2>
      </div>

      {!isMobile && (
        <div className="overflow-x-auto mt-4 bg-white shadow-lg rounded-lg">
          <table className="w-full border-collapse rounded-lg font-[roboto] shadow-lg">
            <thead>
              <tr className="bg-orange-100 font-semibold text-2xl border-b-12 border-white text-left">
                <th className="py-[20px] px-4">Driver Name</th>
                <th className="py-[20px] px-4">Application Date</th>
                <th className="py-[20px] px-4">Status</th>
                <th className="py-[20px] text-center px-4">Action</th>
              </tr>
            </thead>
            <tbody>
              {isLoading ? (
                <tr>
                  <td
                    colSpan={4}
                    className="py-6 text-center text-lg text-gray-500"
                  >
                    Loading applications...
                  </td>
                </tr>
              ) : isError ? (
                <tr>
                  <td
                    colSpan={4}
                    className="py-6 text-center text-lg text-red-500"
                  >
                    Failed to load applications: {error?.message}
                  </td>
                </tr>
              ) : (
                (() => {
                  const filteredApplications = data?.filter(
                    (app) =>
                      app.applicationStatus?.status === "approved" ||
                      app.applicationStatus?.status === "rejected"
                  );

                  if (
                    !filteredApplications ||
                    filteredApplications.length === 0
                  ) {
                    return (
                      <tr>
                        <td
                          colSpan={4}
                          className="py-6 text-center text-lg text-gray-500"
                        >
                          No approved or rejected applications found.
                        </td>
                      </tr>
                    );
                  }

                  return filteredApplications.map((app, index) => (
                    <tr
                      key={app._id || index}
                      className="border-b-12 border-white bg-gray-100 text-2xl hover:bg-gray-100"
                    >
                      <td className="py-[20px] px-4">{app.fullName}</td>
                      <td className="py-[20px] px-4">
                        {new Date(app.createdAt).toLocaleDateString()}
                      </td>
                      <td className="py-[20px] px-4">
                        {app.applicationStatus?.status}
                      </td>
                      <td className="py-[20px] px-4 flex justify-center gap-2">
                        <button className="bg-[#14EF00] text-white px-3 py-1 rounded-md hover:bg-green-600">
                          Approve
                        </button>
                        <button className="bg-[#FF0000] text-white px-3 py-1 rounded-md hover:bg-red-600">
                          Reject
                        </button>
                      </td>
                    </tr>
                  ));
                })()
              )}
            </tbody>
          </table>
        </div>
      )}

      <div className=" mx-auto p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">View & Edit Driver Profiles</h1>
          <div className="flex gap-4 p-6 bg-white rounded-2xl">
            <button className="flex text-[12px] font-semibold font-[roboto] items-center gap-1 ">
              <span className="font-medium">📍</span> Assign New Route
            </button>
            <button className="flex text-[12px] font-semibold font-[roboto] items-center gap-1 ">
              <span className="font-medium">🚚</span> Assign New Vehicle
            </button>
            <button className="flex text-[12px] font-semibold font-[roboto] items-center gap-1 ">
              <span className=" font-medium">🖋</span> Edit Assignment
            </button>
          </div>
        </div>

        <Swiper
          modules={[Autoplay]}
          spaceBetween={40}
          slidesPerView={3}
          autoplay={{ delay: 6000, disableOnInteraction: false }}
        >
          {drivers.map((driver) => (
            <SwiperSlide key={driver.id}>
              <DriverCard driver={driver} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="w-full mt-8">
        <h2 className="text-black text-2xl mb-4 font-[roboto] font-semibold ">
          Trip History (Past Deliveries & Performance)
        </h2>

        {!isMobile && (
          <div className="overflow-x-auto mt-4 bg-white shadow-lg rounded-lg">
            <table className="w-full border-collapse rounded-lg font-[roboto] shadow-lg">
              <thead>
                <tr className="bg-orange-100 font-semibold text-2xl font-[roboto] border-b-12 border-white text-left">
                  <th className="py-[20px] px-4">Trip Id</th>
                  <th className="py-[20px] px-4">Date</th>
                  <th className="py-[20px] px-4">Route</th>
                  <th className="py-[20px] px-4">Status</th>
                  <th className="py-[20px] px-4">Earnings</th>
                </tr>
              </thead>
              <tbody>
                {history.map((history, index) => (
                  <tr
                    key={index}
                    className="border-b-12 border-white bg-gray-100 text-2xl hover:bg-gray-100"
                  >
                    <td className="py-[20px] px-4">{history.id}</td>
                    <td className="py-[20px] px-4">{history.date}</td>
                    <td className="py-[20px] px-4">{history.route}</td>
                    <td className="py-[20px] px-4">{history.status}</td>
                    <td className="py-[20px] px-4">{history.earnings}</td>
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
    </div>
  );
};

export default Driver;
