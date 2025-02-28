import Card from "../../components/DriverComponents/UiComponents/Card";
import PerformanceCard from "../../components/DriverComponents/UiComponents/PerformanceCard";

const DashboardContent = () => {
  return (
    <div className="mt-4 ml-6 bg-[#F6F6F6]">
      <div className=" flex g">
        <div className="rounded bg-[#FFFFFF] shadow-2xl w-[600px] h-[842px] px-4">
          <h1 className="text-[#092C4C] text-3xl font-bold mb-6">Drivers</h1>
          <input
            type="text"
            placeholder="Q Search Driver"
            className="w-full h-[44px] p-2 border-none bg-[#F4F6F9]  rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F4F6F9]"
          />
          <div className="">
            <Card />
            <Card />
            <Card />
          </div>
          {/* Buttons */}
          <div className="flex  gap-2 mt-4">
            <button className="hover:bg-[#FB8A00] w-[184px] font-bold h-[60px] hover:text-white  text-[#000000] px-4 py-2 rounded-lg border-2 hover:border ">
              See More
            </button>
            <button className="hover:bg-[white] hover:text-[#000000] font-bold w-[184px] h-[60px] bg-[#FB8A00] text-[#000000] px-4 py-2 rounded-lg hover:border-2">
              View Profile
            </button>
          </div>
        </div>
        <div className=" w-full  pt-7">
          <h2 className="text-[#092C4C] font-bold text-[32px] ml-[72px]">
            Performance
          </h2>
          {/* Upper cards - performance */}
          <div className="ml-[72px] mt-5 flex">
            <PerformanceCard />
          </div>
          {/* Documents Section */}
          <div className="mt-10 ml-8 p-6 bg-white shadow-2xl rounded-lg">
            <h2 className="text-[#092C4C] text-2xl font-bold mb-4">
              Documents
            </h2>
            <div className="space-y-4 h-[292px]">
              <div className="flex items-center p-4 border border-orange-400 rounded-lg">
                <span className="text-orange-500 mr-4">📇</span>
                <p className="text-lg font-semibold">Driver's License</p>
              </div>
              <div className="flex items-center p-4 border border-orange-400 rounded-lg">
                <span className="text-orange-500 mr-4">📄</span>
                <p className="text-lg font-semibold">Insurance Papers</p>
              </div>
              <div className="flex items-center p-4 border border-orange-400 rounded-lg">
                <span className="text-orange-500 mr-4">📜</span>
                <p className="text-lg font-semibold">Medical Certificate</p>
              </div>
            </div>
          </div>
        </div>
      </div>
     {/* Upcoming Assignments Section */}
     <h2 className="text-[#092C4C] text-2xl font-bold mt-10">Upcoming Assignments</h2>
      <div className="overflow-x-auto mt-4 bg-white shadow-lg rounded-lg">
        <table className="min-w-full border border-gray-200">
          <thead>
            <tr className="bg-orange-100 text-left ">
              <th className="py-6 px-4 ">Date</th>
              <th className="py-6 px-4 ">Vehicle</th>
              <th className="py-6 px-4 ">Route</th>
              <th className="py-6 px-4 ">Status</th>
            </tr>
          </thead>
          <tbody>
            {[1, 2, 3, 4].map((_, index) => (
              <tr key={index} className={index % 2 === 0 ? "bg-gray-100" : "bg-white"}>
                <td className="py-6 px-4 ">1/12/2025</td>
                <td className="py-6 px-4 ">Truck B</td>
                <td className="py-6 px-4 ">Route Y</td>
                <td className="py-6 px-4 ">Assigned</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
     {/* Upcoming Assignments Section */}
     <h2 className="text-[#092C4C] text-2xl font-bold mt-10">Recent Trips</h2>
      <div className="overflow-x-auto mt-4 bg-white shadow-lg rounded-lg">
        <table className="min-w-full border border-gray-200">
          <thead>
            <tr className="bg-orange-100 text-left ">
              <th className="py-6 px-4 ">Date</th>
              <th className="py-6 px-4 ">Vehicle</th>
              <th className="py-6 px-4 ">Route</th>
              <th className="py-6 px-4 ">Status</th>
              <th className="py-6 px-4 ">Distance</th>
            </tr>
          </thead>
          <tbody>
            {[1, 2, 3, 4].map((_, index) => (
              <tr key={index} className={index % 2 === 0 ? "bg-gray-100" : "bg-white"}>
                <td className="py-6 px-4 ">1/12/2025</td>
                <td className="py-6 px-4 ">Truck B</td>
                <td className="py-6 px-4 ">Route Y</td>
                <td className="py-6 px-4 ">Assigned</td>
                <td className="py-6 px-4 ">45Km</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>


    </div>
  );
};

export default DashboardContent;
