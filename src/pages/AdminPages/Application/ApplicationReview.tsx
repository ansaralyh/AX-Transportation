import { useQuery } from "@tanstack/react-query";
import { getAllDrivers } from "../../../components/Services/DriverServices";
import { Driver } from "../../../Types/UserTypes/driverTypes";
import { useState } from "react";

const ApplicationReview = () => {
  const [selectedDriver, setSelectedDriver] = useState<Driver | null>(null);
  const { data, isLoading, isError, error } = useQuery<Driver[]>({
    queryKey: ["DriverDetails"],
    queryFn: getAllDrivers,
  });
  const firstJob = selectedDriver?.employmentHistory[0];
const firstJobExperience = firstJob?.startDate && firstJob?.endDate
  ? (
      (new Date(firstJob.endDate).getTime() - new Date(firstJob.startDate).getTime()) /
      (1000 * 60 * 60 * 24 * 365)
    ).toFixed(1)
  : "0.0";
  return (
    <div className="md:ml-[279px] sm:ml-0 p-4 sm:p-6 bg-gray-100 min-h-screen">
      <h1 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Admin</h1>
      <h2 className="text-[#092C4C] text-lg sm:text-2xl font-bold mb-4">
        Application Review
      </h2>

      <div className="overflow-x-auto bg-white shadow-lg rounded-lg mb-8">
        <div className="min-w-full block whitespace-nowrap overflow-x-scroll sm:overflow-x-auto">
          <table className="min-w-full border border-gray-200">
            <thead>
              <tr className="bg-amber-50 text-left">
                <th className="py-3 sm:py-4 px-2 sm:px-4 text-sm sm:text-base">
                  Driver Name
                </th>
                <th className="py-3 sm:py-4 px-2 sm:px-4 text-sm sm:text-base">
                  Email
                </th>
                <th className="py-3 sm:py-4 px-2 sm:px-4 text-sm sm:text-base">
                  Phone
                </th>
                <th className="py-3 sm:py-4 px-2 sm:px-4 text-sm sm:text-base">
                  Status
                </th>
                <th className="py-3 sm:py-4 px-2 sm:px-4 text-sm sm:text-base">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {isLoading ? (
                <tr>
                  <td colSpan={5} className="text-center py-6 text-gray-500">
                    Loading applications...
                  </td>
                </tr>
              ) : isError ? (
                <tr>
                  <td colSpan={5} className="text-center py-6 text-red-500">
                    Failed to load applications: {error?.message}
                  </td>
                </tr>
              ) : data && data.length > 0 ? (
                data.map((app, index) => (
                  <tr
                    key={app._id || index}
                    className={index % 2 === 0 ? "bg-white" : "bg-gray-100"}
                  >
                    <td className="py-3 sm:py-4 px-2 sm:px-4 text-sm sm:text-base">
                      {app.fullName}
                    </td>
                    <td className="py-3 sm:py-4 px-2 sm:px-4 text-sm sm:text-base">
                      {app.emailAddress}
                    </td>
                    <td className="py-3 sm:py-4 px-2 sm:px-4 text-sm sm:text-base">
                      {app.phoneNumber || "-"}
                    </td>
                    <td className="py-3 sm:py-4 px-2 sm:px-4 text-sm sm:text-base">
                      {app.applicationStatus?.status || "N/A"}
                    </td>
                    <td className="py-3 sm:py-4 px-2 sm:px-4 text-sm sm:text-base">
                      <button
                        onClick={() => setSelectedDriver(app)}
                        className="text-blue-600 hover:underline"
                      >
                        Review
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={5} className="text-center py-6 text-gray-500">
                    No applications found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Review Driver Details */}
      <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-lg font-semibold">Review Driver Details</h3>
          <button className="text-green-500 hover:text-green-600 font-medium">
            Review
          </button>
        </div>

        {/* Personal Information */}
        <div className="mb-8">
          <h4 className="text-base font-medium mb-4">Personal Information</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">
                Driver Name
              </label>
              <input
                value={selectedDriver?.fullName || ""}
                type="text"
                className="w-full p-2 bg-gray-200 border-none rounded outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                Email Address
              </label>
              <input
                value={selectedDriver?.emailAddress || ""}
                type="email"
                className="w-full p-2 bg-gray-200 border-none rounded outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                Phone Number
              </label>
              <input
                value={selectedDriver?.phoneNumber || ""}
                type="tel"
                className="w-full p-2 bg-gray-200 border-none rounded outline-none"
              />
            </div>
          </div>
          <div className="mt-4">
            <label className="block text-sm font-medium mb-1">Address</label>
            <input
              value={selectedDriver?.address.city || ""}
              type="text"
              className="w-full p-2 bg-gray-200 border-none rounded outline-none"
            />
          </div>
          <div className="mt-4">
            <label className="block text-sm font-medium mb-1">
              Date of Birth
            </label>
            <input
              value={
                selectedDriver?.dateOfBirth
                  ? new Date(selectedDriver.dateOfBirth).toLocaleDateString()
                  : ""
              }
              type="text"
              className="w-full p-2 bg-gray-200 border-none rounded outline-none"
            />
          </div>
        </div>

        {/* Professional Information */}
        <div className="mb-8">
          <h4 className="text-base font-medium mb-4">
            Professional Information
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">
                License Number
              </label>
              <input
                value={selectedDriver?.cdl.number || ""}
                type="text"
                className="w-full p-2 bg-gray-200 border-none rounded outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                License Expiry Date
              </label>
              <input
                value={
                  selectedDriver?.cdl.expirationDate
                    ? new Date(selectedDriver.cdl.expirationDate).toLocaleDateString()
                    : ""
                }
                type="text"
                className="w-full p-2 bg-gray-200 border-none rounded outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                Years of Experience
              </label>
              <input
                value={`${firstJobExperience} years`}
                type="text"
                className="w-full p-2 bg-gray-200 border-none rounded outline-none"
              />
            </div>
          </div>
          <div className="mt-4">
            <label className="block text-sm font-medium mb-1">
              Previous Employment (If Any)
            </label>
            <input
              value={selectedDriver?.employmentHistory[0]?.companyName || ""}
              type="text"
              className="w-full p-2 bg-gray-200 border-none rounded outline-none"
            />
          </div>
        </div>

        {/* Uploaded Documents */}
        <div>
          <h4 className="text-base font-medium mb-4">Uploaded Documents:</h4>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="text-sm">Driver's License</span>
              <button className="text-blue-600 hover:underline text-sm">
                (View
              </button>
              <span className="text-sm">/</span>
              <button className="text-blue-600 hover:underline text-sm">
                Download)
              </button>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm">Insurance Proof</span>
              <button className="text-blue-600 hover:underline text-sm">
                (View
              </button>
              <span className="text-sm">/</span>
              <button className="text-blue-600 hover:underline text-sm">
                Download)
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Approve or Reject Applications */}
      <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
        <h3 className="text-lg font-semibold mb-6">
          Approve or Reject Applications with Comments
        </h3>

        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-sm font-medium mb-1">
              Driver Name
            </label>
            <div className="text-sm">John Doe</div>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">
              Email Address
            </label>
            <div className="text-sm">johndoe@example.com</div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-6">
          <div>
            <label className="block text-sm font-medium mb-1">
              Phone Number
            </label>
            <div className="text-sm">+1 234 567 890</div>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">License No</label>
            <div className="text-sm">ABC12345</div>
          </div>
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium mb-1">
            Application Status:
          </label>
          <div className="text-sm">Pending</div>
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium mb-2">Decision</label>
          <div className="flex gap-2">
            <button className="bg-green-500 hover:bg-green-600 text-white text-xs py-1 px-3 rounded">
              Approve
            </button>
            <button className="bg-red-500 hover:bg-red-600 text-white text-xs py-1 px-3 rounded">
              Reject
            </button>
          </div>
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium mb-2 text-right">
            Comment
          </label>
          <textarea
            className="w-full p-2 border border-gray-200 rounded h-24 text-sm outline-none"
            placeholder="Enter your comments here..."
          ></textarea>
        </div>

        <div className="flex justify-end">
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-1.5 px-4 rounded">
            Submit Decision
          </button>
        </div>
      </div>
    </div>
  );
};

export default ApplicationReview;
