import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Driver } from "../../../Types/UserTypes/driverTypes";
import { getAllDrivers } from "../../../components/Services/DriverServices";
import { assignShift } from "../../../components/Services/shiftsServices";

const assignShiftSchema = z.object({
  driverId: z.string().min(1, "Driver is required"),
  date: z.string().min(1, "Date is required"),
  startTime: z.string().min(1, "Start time is required"),
  endTime: z.string().min(1, "End time is required"),
});
type AssignShiftFormData = z.infer<typeof assignShiftSchema>;
const Schedules = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AssignShiftFormData>({
    resolver: zodResolver(assignShiftSchema),
  });

  const { data, isLoading: loadingDrivers } = useQuery<Driver[]>({
    queryKey: ["drivers"],
    queryFn: getAllDrivers,
  });
  const { mutate, isPending, isSuccess } = useMutation({
    mutationFn: assignShift,
    onSuccess: () => {
      alert("Shift assigned successfully");
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onError: (error: any) => {
      alert(error?.response?.data?.message || "Failed to assign shift");
    },
  });

  const onSubmit = (data: AssignShiftFormData) => {
    mutate(data);
  };
  return (
    <div className="md:ml-[279px] sm:ml-0 p-4 sm:p-6 bg-gray-100 min-h-screen">
      <h1 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Admin</h1>
      <h2 className="text-[#092C4C] text-lg sm:text-2xl font-bold mb-4">
        Assign and Manage Shifts
      </h2>

      {/* Driver Shift Schedule Table */}
      <div className="mb-4">
        <h3 className="text-base font-medium mb-2">
          Driver Shift Schedule Table
        </h3>
        <div className="overflow-x-auto bg-white shadow-lg rounded-lg mb-8">
          <div className="min-w-full block whitespace-nowrap overflow-x-scroll sm:overflow-x-auto">
            <table className="min-w-full border border-gray-200">
              <thead>
                <tr className="bg-orange-100 text-left">
                  <th className="py-3 sm:py-4 px-2 sm:px-4 text-sm sm:text-base">
                    Driver Name
                  </th>
                  <th className="py-3 sm:py-4 px-2 sm:px-4 text-sm sm:text-base">
                    Shift Date
                  </th>
                  <th className="py-3 sm:py-4 px-2 sm:px-4 text-sm sm:text-base">
                    Start Time
                  </th>
                  <th className="py-3 sm:py-4 px-2 sm:px-4 text-sm sm:text-base">
                    End Time
                  </th>
                  <th className="py-3 sm:py-4 px-2 sm:px-4 text-sm sm:text-base">
                    Status
                  </th>
                  <th className="py-3 sm:py-4 px-2 sm:px-4 text-sm sm:text-base">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>
                {[1, 2, 3, 4].map((item, index) => (
                  <tr
                    key={item}
                    className={index % 2 === 0 ? "bg-white" : "bg-gray-100"}
                  >
                    <td className="py-3 sm:py-4 px-2 sm:px-4 text-sm sm:text-base">
                      Jhone
                    </td>
                    <td className="py-3 sm:py-4 px-2 sm:px-4 text-sm sm:text-base">
                      12-Aug-2024
                    </td>
                    <td className="py-3 sm:py-4 px-2 sm:px-4 text-sm sm:text-base">
                      08:00 AM
                    </td>
                    <td className="py-3 sm:py-4 px-2 sm:px-4 text-sm sm:text-base">
                      08:00 AM
                    </td>
                    <td className="py-3 sm:py-4 px-2 sm:px-4 text-sm sm:text-base">
                      Pending
                    </td>
                    <td className="py-3 sm:py-4 px-2 sm:px-4 text-sm sm:text-base">
                      <button className="text-blue-600 hover:underline">
                        Edit
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Assign Shift Form */}
      <div className="mb-8">
        <form onSubmit={handleSubmit(onSubmit)} className="p-4">
          <h3 className="text-lg font-semibold mb-4">Assign Shift</h3>

          {/* Driver Select */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">
              Driver Name
            </label>
            <select
              {...register("driverId")}
              className="w-full p-2 rounded border bg-gray-100"
            >
              <option value="">Select Driver</option>
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              {data?.map((driver) => (
                <option key={driver._id} value={driver._id}>
                  {driver.fullName}
                </option>
              ))}
            </select>
            {errors.driverId && (
              <p className="text-red-500 text-sm">{errors.driverId.message}</p>
            )}
          </div>

          {/* Date */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Date</label>
            <input
              type="date"
              {...register("date")}
              className="w-full p-2 border rounded bg-gray-100"
            />
            {errors.date && (
              <p className="text-red-500 text-sm">{errors.date.message}</p>
            )}
          </div>

          {/* Start Time */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Start Time</label>
            <input
              type="time"
              {...register("startTime")}
              className="w-full p-2 rounded border bg-gray-100"
            />
            {errors.startTime && (
              <p className="text-red-500 text-sm">{errors.startTime.message}</p>
            )}
          </div>

          {/* End Time */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">End Time</label>
            <input
              type="time"
              {...register("endTime")}
              className="w-full p-2 rounded border bg-gray-100"
            />
            {errors.endTime && (
              <p className="text-red-500 text-sm">{errors.endTime.message}</p>
            )}
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={isPending}
            className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600"
          >
            {isPending ? "Assigning..." : "Assign Shift"}
          </button>

          {isSuccess && (
            <p className="text-green-600 mt-2">Shift successfully assigned!</p>
          )}
        </form>
      </div>

      {/* Professional Info Section */}
      <div className="mb-8">
        <h3 className="text-base font-medium mb-2">Professional Information</h3>
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">
                License Number
              </label>
              <input
                type="text"
                className="w-full p-2 bg-gray-200 border-none rounded"
                placeholder="Enter license number"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                License Expiry
              </label>
              <input
                type="date"
                className="w-full p-2 bg-gray-200 border-none rounded"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                Vehicle Type
              </label>
              <select className="w-full p-2 bg-gray-200 border-none rounded appearance-none">
                <option>Select vehicle type</option>
                <option>Truck</option>
                <option>Van</option>
                <option>Car</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                Years of Experience
              </label>
              <input
                type="number"
                className="w-full p-2 bg-gray-200 border-none rounded"
                placeholder="Enter years of experience"
              />
            </div>
          </div>
          <div className="mt-4">
            <label className="block text-sm font-medium mb-1">
              Additional Certifications
            </label>
            <textarea
              className="w-full p-2 bg-gray-200 border-none rounded h-24"
              placeholder="Enter any additional certifications or qualifications"
            ></textarea>
          </div>
          <div className="flex justify-end mt-4">
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-4 rounded">
              Save Information
            </button>
          </div>
        </div>
      </div>

      {/* Time-Off Requests */}
      <h2 className="text-[#092C4C] text-lg sm:text-2xl font-bold mb-4">
        View & Approve/Reject Time-Off Requests
      </h2>

      <div className="mb-4">
        <h3 className="text-base font-medium mb-2">Time-Off Requests Table</h3>
        <div className="overflow-x-auto bg-white shadow-lg rounded-lg mb-8">
          <div className="min-w-full block whitespace-nowrap overflow-x-scroll sm:overflow-x-auto">
            <table className="min-w-full border border-gray-200">
              <thead>
                <tr className="bg-orange-100 text-left">
                  <th className="py-3 sm:py-4 px-2 sm:px-4 text-sm sm:text-base">
                    Driver Name
                  </th>
                  <th className="py-3 sm:py-4 px-2 sm:px-4 text-sm sm:text-base">
                    Requested Date
                  </th>
                  <th className="py-3 sm:py-4 px-2 sm:px-4 text-sm sm:text-base">
                    Reason
                  </th>
                  <th className="py-3 sm:py-4 px-2 sm:px-4 text-sm sm:text-base">
                    Status
                  </th>
                  <th className="py-3 sm:py-4 px-2 sm:px-4 text-sm sm:text-base">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white">
                  <td className="py-3 sm:py-4 px-2 sm:px-4 text-sm sm:text-base">
                    Jhone
                  </td>
                  <td className="py-3 sm:py-4 px-2 sm:px-4 text-sm sm:text-base">
                    12-Aug-2024
                  </td>
                  <td className="py-3 sm:py-4 px-2 sm:px-4 text-sm sm:text-base">
                    08:00 AM
                  </td>
                  <td className="py-3 sm:py-4 px-2 sm:px-4 text-sm sm:text-base">
                    Pending
                  </td>
                  <td className="py-3 sm:py-4 px-2 sm:px-4 text-sm sm:text-base">
                    <div className="flex gap-2">
                      <button className="bg-green-500 hover:bg-green-600 text-white w-20 h-[30px] rounded text-xs sm:w-[83px]">
                        Approve
                      </button>
                      <button className="bg-red-500 hover:bg-red-600 text-white w-20 h-[30px] rounded text-xs sm:w-[83px]">
                        Reject
                      </button>
                    </div>
                  </td>
                </tr>
                <tr className="bg-gray-100">
                  <td className="py-3 sm:py-4 px-2 sm:px-4 text-sm sm:text-base">
                    Jhone
                  </td>
                  <td className="py-3 sm:py-4 px-2 sm:px-4 text-sm sm:text-base">
                    12-Aug-2024
                  </td>
                  <td className="py-3 sm:py-4 px-2 sm:px-4 text-sm sm:text-base">
                    08:00 AM
                  </td>
                  <td className="py-3 sm:py-4 px-2 sm:px-4 text-sm sm:text-base">
                    Pending
                  </td>
                  <td className="py-3 sm:py-4 px-2 sm:px-4 text-sm sm:text-base">
                    <div className="flex gap-2">
                      <button className="bg-green-500 hover:bg-green-600 text-white w-20 h-[30px] rounded text-xs sm:w-[83px]">
                        Approve
                      </button>
                      <button className="bg-red-500 hover:bg-red-600 text-white w-20 h-[30px] rounded text-xs sm:w-[83px]">
                        Reject
                      </button>
                    </div>
                  </td>
                </tr>
                <tr className="bg-white">
                  <td className="py-3 sm:py-4 px-2 sm:px-4 text-sm sm:text-base">
                    Jhone
                  </td>
                  <td className="py-3 sm:py-4 px-2 sm:px-4 text-sm sm:text-base">
                    12-Aug-2024
                  </td>
                  <td className="py-3 sm:py-4 px-2 sm:px-4 text-sm sm:text-base">
                    08:00 AM
                  </td>
                  <td className="py-3 sm:py-4 px-2 sm:px-4 text-sm sm:text-base">
                    Pending
                  </td>
                  <td className="py-3 sm:py-4 px-2 sm:px-4 text-sm sm:text-base">
                    <div className="flex gap-2">
                      <button className="bg-green-500 hover:bg-green-600 text-white w-20 h-[30px] rounded text-xs sm:w-[83px]">
                        Approve
                      </button>
                      <button className="bg-red-500 hover:bg-red-600 text-white w-20 h-[30px] rounded text-xs sm:w-[83px]">
                        Reject
                      </button>
                    </div>
                  </td>
                </tr>
                <tr className="bg-gray-100">
                  <td className="py-3 sm:py-4 px-2 sm:px-4 text-sm sm:text-base">
                    Jhone
                  </td>
                  <td className="py-3 sm:py-4 px-2 sm:px-4 text-sm sm:text-base">
                    12-Aug-2024
                  </td>
                  <td className="py-3 sm:py-4 px-2 sm:px-4 text-sm sm:text-base">
                    08:00 AM
                  </td>
                  <td className="py-3 sm:py-4 px-2 sm:px-4 text-sm sm:text-base">
                    Pending
                  </td>
                  <td className="py-3 sm:py-4 px-2 sm:px-4 text-sm sm:text-base">
                    <button className="bg-green-500 hover:bg-green-600 text-white w-20 h-[30px] rounded text-xs sm:w-[83px]">
                      Approve
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Automated Notifications */}
      <div className="mb-8">
        <h3 className="text-base font-medium mb-4">Automated Notifications</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white p-3 rounded-lg border border-gray-200">
            <div className="flex items-start mb-2">
              <span className="text-red-500 mr-2">📨</span>
              <h4 className="text-sm font-medium">
                Shift Assignment Notification
              </h4>
            </div>
            <div className="mb-3">
              <label className="block text-xs font-medium mb-1">Subject:</label>
              <input
                type="text"
                className="w-full p-1 bg-gray-100 border border-gray-200 rounded text-xs"
                defaultValue="New Shift Assigned"
              />
            </div>
            <div className="mb-3">
              <textarea
                className="w-full p-2 bg-gray-100 border border-gray-200 rounded text-xs h-24"
                defaultValue="Dear Driver Name, you have been assigned a new shift on Date from Start Time to End Time.

Please confirm your availability."
              ></textarea>
            </div>
            <div className="flex justify-center">
              <button className="bg-orange-500 hover:bg-orange-600 text-white text-xs font-medium py-1.5 px-4 rounded">
                Submit
              </button>
            </div>
          </div>

          <div className="bg-white p-3 rounded-lg border border-gray-200">
            <div className="flex items-start mb-2">
              <span className="text-red-500 mr-2">📨</span>
              <h4 className="text-sm font-medium">
                Shift Assignment Notification
              </h4>
            </div>
            <div className="mb-3">
              <label className="block text-xs font-medium mb-1">Subject:</label>
              <input
                type="text"
                className="w-full p-1 bg-gray-100 border border-gray-200 rounded text-xs"
                defaultValue="New Shift Assigned"
              />
            </div>
            <div className="mb-3">
              <textarea
                className="w-full p-2 bg-gray-100 border border-gray-200 rounded text-xs h-24"
                defaultValue="Dear Driver Name, you have been assigned a new shift on Date from Start Time to End Time.

Please confirm your availability."
              ></textarea>
            </div>
            <div className="flex justify-center">
              <button className="bg-orange-500 hover:bg-orange-600 text-white text-xs font-medium py-1.5 px-4 rounded">
                Submit
              </button>
            </div>
          </div>

          <div className="bg-white p-3 rounded-lg border border-gray-200">
            <div className="flex items-start mb-2">
              <span className="text-red-500 mr-2">📨</span>
              <h4 className="text-sm font-medium">
                Shift Assignment Notification
              </h4>
            </div>
            <div className="mb-3">
              <label className="block text-xs font-medium mb-1">Subject:</label>
              <input
                type="text"
                className="w-full p-1 bg-gray-100 border border-gray-200 rounded text-xs"
                defaultValue="New Shift Assigned"
              />
            </div>
            <div className="mb-3">
              <textarea
                className="w-full p-2 bg-gray-100 border border-gray-200 rounded text-xs h-24"
                defaultValue="Dear Driver Name, you have been assigned a new shift on Date from Start Time to End Time.

Please confirm your availability."
              ></textarea>
            </div>
            <div className="flex justify-center">
              <button className="bg-orange-500 hover:bg-orange-600 text-white text-xs font-medium py-1.5 px-4 rounded">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Schedules;
