import { Search, FileText, ChevronDown } from "lucide-react";
import Button from "../../../components/DriverComponents/UiComponents/Button/Button";

function DriverDetails() {
  return (
    <div className="md:ml-[279px]">
      <div className="p-6 ">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-[Poppins] font-semibold text-[#092C4C]">
            Driver Payroll Management
          </h1>
          <div className="relative w-[650px]">
            <input
              type="text"
              placeholder="Search Driver"
              className="w-full p-6 pl-4 pr-12 font-[Poppins] bg-gray-100 rounded-full border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:outline-none"
            />
            <button className="absolute right-3 top-1/2 -translate-y-1/2 bg-orange-500 p-2 rounded-full text-white hover:bg-orange-600 transition">
              <Search size={34} />
            </button>{" "}
          </div>
        </div>

        <div className="mt-4">
          <div className="flex justify-end gap-3">
            <Button text="Export as CSV" icon={<FileText size={16} />} />;
            <Button text="Export as PDF" variant="outline" />;
          </div>
        </div>
      </div>

      <div className="w-full mx-auto bg-[#D9D9D963] p-6 rounded-4xl">
        {/* Driver Details Section */}
        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            Driver Details
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col gap-1">
              <label className="text-sm font-[poppins] text-black font-semibold">
                Driver Name
              </label>
              <input
                type="text"
                className="w-full p-5 font-[poppins] rounded-3xl bg-white focus:outline-none focus:ring-2 focus:ring-gray-300"
                placeholder=""
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-sm font-[poppins] text-black font-semibold">
                Driver Name
              </label>
              <input
                type="text"
                className="w-full p-5 font-[poppins] rounded-3xl bg-white focus:outline-none focus:ring-2 focus:ring-gray-300"
                placeholder=""
              />
            </div>
          </div>

          {/* Dropdown for Status */}
          <div className="mt-4 relative">
            <select className="w-full p-5 bg-white outline-0 font-[poppins] rounded-3xl border border-gray-300 appearance-none pr-10">
              <option>Current Status</option>
              <option>OTR</option>
              <option>Local</option>
            </select>
            {/* Custom Dropdown Icon */}
            <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
              <ChevronDown />
            </div>
          </div>
        </div>

        {/* Pay Structure Selection */}
        <div className="mt-8">
          <h2 className="text-3xl font-semibold font-[poppins] text-[#092C4C] mb-9">
            Pay Structure Selection
          </h2>
          <div className="grid grid-cols-1 font-[poppins] md:grid-cols-2 gap-4">
            {[
              "Per Mile Rate ($/mile)",
              "Hourly Rate ($/hour)",
              "Daily/Flat Rate",
              "Breakdown Pay ($)",
              "Special Assignment Pay ($)", 
              "Overnight Pay ($)",
              "Holiday Pay ($)",
            ].map((label, index) => (
              <div key={index} className="">
                <label className="block font-[poppins] font-medium text-black">
                  {label}
                </label>
                <input
                  type="text"
                  placeholder="50$"
                  className="w-full p-5 outline-0 font-[poppins] bg-white  rounded-3xl"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full mt-8 mx-auto bg-[#D9D9D963] p-6 rounded-4xl">
          <h2 className="text-3xl font-semibold font-[poppins] text-[#092C4C] mb-6">
          Pay Structure Selection
          </h2>
          <div className="grid grid-cols-1 font-[poppins] md:grid-cols-2 gap-4">
            {[
              "Total Miles Driven",
              "Total Hours Worked",
              "Total Earnings",
            ].map((label, index) => (
              <div key={index} className="">
                <label className="block font-[poppins] mb-4 font-medium text-black">
                  {label}
                </label>
                <input
                  type="text"
                  
                  className="w-full p-5 outline-0 font-[poppins] bg-white  rounded-3xl"
                />
              </div>
            ))}
          </div>
        </div>
        <div className="mt-8">
          <div className="flex justify-end gap-3">
            <Button text="Save Payroll" icon={<FileText size={16} />} />;
            <Button text="Save Payroll" variant="outline" />;
          </div>
        </div>
    </div>
  );
}

export default DriverDetails;
