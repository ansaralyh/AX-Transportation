import { Search } from "lucide-react";

const Maintenance = () => {
  return (
    <div className="bg-[#F5F5F5] p-6 rounded-lg md:ml-[279px]">
      {/* Header */}
      <h2 className="text-2xl font-bold mb-6">
        Maintenance Overview
        <span className="text-red-500">*</span>
      </h2>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        <div className="bg-white shadow-lg p-6 rounded-lg flex flex-col">
          <span className="text-4xl font-bold text-black">56</span>
          <div className="text-gray-600 flex items-center gap-2 mt-2">
            <span className="text-orange-500 text-2xl">🚗</span>
            Total Vehicles Due for Maintenance
          </div>
        </div>

        <div className="bg-white shadow-lg p-6 rounded-lg flex flex-col">
          <span className="text-4xl font-bold text-black">4</span>
          <div className="text-gray-600 flex items-center gap-2 mt-2">
            <span className="text-orange-500 text-2xl">📊</span>
            Upcoming Services This Week
          </div>
        </div>

        <div className="bg-white shadow-lg p-6 rounded-lg flex flex-col">
          <span className="text-4xl font-bold text-black">34</span>
          <div className="text-gray-600 flex items-center gap-2 mt-2">
            <span className="text-orange-500 text-2xl">🔧</span>
            Completed Maintenance Last Month
          </div>
        </div>

        <div className="bg-white shadow-lg p-6 rounded-lg flex flex-col">
          <span className="text-4xl font-bold text-black">300$</span>
          <div className="text-gray-600 flex items-center gap-2 mt-2">
            <span className="text-orange-500 text-2xl">🏠</span>
            Average Service Cost
          </div>
        </div>
      </div>

      {/* Search Bar */}
      <div className="mt-6 relative max-w-xl">
        <input
          type="text"
          placeholder="Search by vehicle ID, type, or driver"
          className="w-full p-4 border border-gray-300 rounded-full pl-4 pr-12 focus:outline-none"
        />
        <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-orange-500 cursor-pointer" />
      </div>
      {/* Section Title */}
      <h2 className="text-[#092C4C] text-2xl font-bold mt-10">
        Maintenance Alerts
      </h2>

      {/* Table Container */}
      <div className="overflow-x-auto mt-4 bg-white shadow-lg rounded-lg">
        <table className="min-w-full border border-gray-200">
          <thead>
            <tr className="bg-orange-100 text-left">
              <th className="py-4 px-6">Vehicle ID</th>
              <th className="py-4 px-6">Vehicle Type</th>
              <th className="py-4 px-6">Issue</th>
              <th className="py-4 px-6">Due Date</th>
              <th className="py-4 px-6">Priority</th>
            </tr>
          </thead>
          <tbody>
            {[
              {
                id: "Truck A",
                type: "Delivery Truck",
                issue: "Oil Change",
                due: "01/20/2025",
                priority: "High",
              },
              {
                id: "Truck A",
                type: "Delivery Truck",
                issue: "Oil Change",
                due: "01/20/2025",
                priority: "High",
              },
              {
                id: "Truck A",
                type: "Delivery Truck",
                issue: "Oil Change",
                due: "01/20/2025",
                priority: "High",
              },
              {
                id: "Truck A",
                type: "Delivery Truck",
                issue: "Oil Change",
                due: "01/20/2025",
                priority: "High",
              },
            ].map((item, index) => (
              <tr
                key={index}
                className={index % 2 === 0 ? "bg-gray-100" : "bg-white"}
              >
                <td className="py-4 px-6">{item.id}</td>
                <td className="py-4 px-6">{item.type}</td>
                <td className="py-4 px-6">{item.issue}</td>
                <td className="py-4 px-6">{item.due}</td>
                <td className="py-4 px-6 text-red-600 font-semibold">
                  {item.priority}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Section Title */}
      <h2 className="text-[#092C4C] text-2xl font-bold mt-10">
        Upcoming Maintenance
      </h2>

      {/* Table Container */}
      <div className="overflow-x-auto mt-4 bg-white shadow-lg rounded-lg">
        <table className="min-w-full border border-gray-200">
          <thead>
            <tr className="bg-orange-100 text-left">
              <th className="py-4 px-6">Vehicle ID</th>
              <th className="py-4 px-6">Vehicle Type</th>
              <th className="py-4 px-6">Scheduled Date</th>
              <th className="py-4 px-6">Service Type</th>
              <th className="py-4 px-6">Assigned Mechanic</th>
            </tr>
          </thead>
          <tbody>
            {[
              {
                id: "Bike B",
                type: "Motorcycle",
                date: "01/22/2025",
                service: "Brake Check",
                mechanic: "John Smith",
              },
              {
                id: "Bike B",
                type: "Motorcycle",
                date: "01/22/2025",
                service: "Brake Check",
                mechanic: "John Smith",
              },
              {
                id: "Bike B",
                type: "Motorcycle",
                date: "01/22/2025",
                service: "Brake Check",
                mechanic: "John Smith",
              },
              {
                id: "Bike B",
                type: "Motorcycle",
                date: "01/22/2025",
                service: "Brake Check",
                mechanic: "John Smith",
              },
            ].map((item, index) => (
              <tr
                key={index}
                className={index % 2 === 0 ? "bg-gray-100" : "bg-white"}
              >
                <td className="py-4 px-6">{item.id}</td>
                <td className="py-4 px-6">{item.type}</td>
                <td className="py-4 px-6">{item.date}</td>
                <td className="py-4 px-6">{item.service}</td>
                <td className="py-4 px-6">{item.mechanic}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Section Title */}
      <h2 className="text-[#092C4C] text-2xl font-bold mt-10">
        Maintenance History
      </h2>

      {/* Table Container */}
      <div className="overflow-x-auto mt-4 bg-white shadow-lg rounded-lg">
        <table className="min-w-full border border-gray-200">
          <thead>
            <tr className="bg-orange-100 text-left">
              <th className="py-4 px-6">Vehicle ID</th>
              <th className="py-4 px-6">Service Date</th>
              <th className="py-4 px-6">Service Type</th>
              <th className="py-4 px-6">Cost</th>
              <th className="py-4 px-6">Status</th>
            </tr>
          </thead>
          <tbody>
            {[
              {
                id: "Van C",
                date: "01/10/2025",
                service: "Tire Replacement",
                cost: "$150",
                status: "Completed",
              },
              {
                id: "Van C",
                date: "01/10/2025",
                service: "Tire Replacement",
                cost: "$150",
                status: "Completed",
              },
              {
                id: "Van C",
                date: "01/10/2025",
                service: "Tire Replacement",
                cost: "$150",
                status: "Completed",
              },
              {
                id: "Van C",
                date: "01/10/2025",
                service: "Tire Replacement",
                cost: "$150",
                status: "Completed",
              },
            ].map((item, index) => (
              <tr
                key={index}
                className={index % 2 === 0 ? "bg-gray-100" : "bg-white"}
              >
                <td className="py-4 px-6">{item.id}</td>
                <td className="py-4 px-6">{item.date}</td>
                <td className="py-4 px-6">{item.service}</td>
                <td className="py-4 px-6">{item.cost}</td>
                <td className="py-4 px-6 text-green-600 font-semibold">
                  {item.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Maintenance;
