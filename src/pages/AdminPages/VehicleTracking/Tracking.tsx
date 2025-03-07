
const Tracking = () => {
  return (
    <div className="md:ml-[279px] sm:ml-0 p-4 sm:p-6 bg-gray-100 min-h-screen">
      <h1 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Admin</h1>
      <div className="bg-gray-50 p-4 rounded-lg shadow-sm mb-6">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center">
          <div>
            <h2 className="text-[#092C4C] text-lg sm:text-2xl font-bold">Real-Time Vehicle Monitoring on Map</h2>
            <p className="text-sm sm:text-base mt-1">Track the current location of all vehicles</p>
          </div>
          <div className="mt-4 md:mt-0">
            <div className="text-sm font-medium mb-1">Filter:</div>
            <div className="flex flex-col gap-2 w-48">
              <input
                type="text"
                placeholder="Vehicle ID"
                className="border outline-none border-gray-300 rounded px-2 py-1 text-sm"
              />
              <input
                type="text"
                placeholder="Driver Name"
                className="border border-gray-300 rounded px-2 py-1 outline-none text-sm"
              />
              <input type="text" placeholder="Route" className="border outline-none border-gray-300 rounded px-2 py-1 text-sm" />
            </div>
          </div>
        </div>
      </div>

      {/* Status Indicators */}
      <div className="flex flex-wrap justify-center sm:justify-start gap-8 sm:gap-16 mb-8">
        <div className="flex flex-col items-center">
          <div className="w-10 h-10 flex items-center justify-center mb-2">
            <span className="text-2xl">🚚</span>
          </div>
          <span className="text-sm font-medium">In Transit</span>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-10 h-10 flex items-center justify-center mb-2">
            <span className="text-2xl">⏱️</span>
          </div>
          <span className="text-sm font-medium">Delayed</span>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-10 h-10 flex items-center justify-center mb-2">
            <span className="text-2xl">🛑</span>
          </div>
          <span className="text-sm font-medium">Stopped</span>
        </div>
      </div>

      {/* Status Indicators & Alerts */}
      <div className="bg-gray-50 p-4 rounded-lg shadow-sm mb-6">
        <h3 className="text-base sm:text-lg font-semibold mb-3">Status Indicators & Alerts</h3>
        <div className="space-y-3">
          <div className="flex items-start">
            <span className="text-red-500 mr-2">🚨</span>
            <span className="text-sm">Monitor vehicle performance with live status updates</span>
          </div>
          <div className="flex items-start">
            <span className="text-gray-500 mr-2">⚪</span>
            <span className="text-sm">Automatic status updates every few seconds</span>
          </div>
          <div className="flex items-start">
            <span className="text-gray-500 mr-2">🔔</span>
            <span className="text-sm">Alerts for delays</span>
          </div>
          <div className="flex items-start">
            <span className="text-amber-500 mr-2">⚠️</span>
            <span className="text-sm">Breakdown or emergency alerts</span>
          </div>
        </div>
      </div>

      {/* Vehicle Tracking Table */}
      <div className="overflow-x-auto bg-white shadow-lg rounded-lg mb-8">
        <div className="min-w-full block whitespace-nowrap overflow-x-scroll sm:overflow-x-auto">
          <table className="min-w-full border border-gray-200">
            <thead>
              <tr className="bg-orange-100 text-left">
                <th className="py-3 sm:py-4 px-2 sm:px-4 text-sm sm:text-base">Vehicle ID</th>
                <th className="py-3 sm:py-4 px-2 sm:px-4 text-sm sm:text-base">Driver Name</th>
                <th className="py-3 sm:py-4 px-2 sm:px-4 text-sm sm:text-base">Current Location</th>
                <th className="py-3 sm:py-4 px-2 sm:px-4 text-sm sm:text-base">Status</th>
                <th className="py-3 sm:py-4 px-2 sm:px-4 text-sm sm:text-base">Last Update</th>
                <th className="py-3 sm:py-4 px-2 sm:px-4 text-sm sm:text-base">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white">
                <td className="py-3 sm:py-4 px-2 sm:px-4 text-sm sm:text-base">V001</td>
                <td className="py-3 sm:py-4 px-2 sm:px-4 text-sm sm:text-base">John Doe</td>
                <td className="py-3 sm:py-4 px-2 sm:px-4 text-sm sm:text-base">Downtown</td>
                <td className="py-3 sm:py-4 px-2 sm:px-4 text-sm sm:text-base">
                  <span className="flex items-center">
                    <span className="text-amber-500 mr-1">🚚</span>
                    In Transit
                  </span>
                </td>
                <td className="py-3 sm:py-4 px-2 sm:px-4 text-sm sm:text-base">2 min ago</td>
                <td className="py-3 sm:py-4 px-2 sm:px-4 text-sm sm:text-base">
                  <button className="text-blue-600 hover:underline">View Details</button>
                </td>
              </tr>
              <tr className="bg-gray-100">
                <td className="py-3 sm:py-4 px-2 sm:px-4 text-sm sm:text-base">V001</td>
                <td className="py-3 sm:py-4 px-2 sm:px-4 text-sm sm:text-base">
                  <div className="flex items-center">
                    John Doe
                    <span className="ml-1 text-red-500">*</span>
                  </div>
                </td>
                <td className="py-3 sm:py-4 px-2 sm:px-4 text-sm sm:text-base">Downtown</td>
                <td className="py-3 sm:py-4 px-2 sm:px-4 text-sm sm:text-base">
                  <span className="flex items-center">
                    <span className="text-amber-500 mr-1">🚚</span>
                    In Transit
                  </span>
                </td>
                <td className="py-3 sm:py-4 px-2 sm:px-4 text-sm sm:text-base">2 min ago</td>
                <td className="py-3 sm:py-4 px-2 sm:px-4 text-sm sm:text-base">
                  <button className="text-blue-600 hover:underline">View Details</button>
                </td>
              </tr>
              <tr className="bg-white">
                <td className="py-3 sm:py-4 px-2 sm:px-4 text-sm sm:text-base">V001</td>
                <td className="py-3 sm:py-4 px-2 sm:px-4 text-sm sm:text-base">John Doe</td>
                <td className="py-3 sm:py-4 px-2 sm:px-4 text-sm sm:text-base">Downtown</td>
                <td className="py-3 sm:py-4 px-2 sm:px-4 text-sm sm:text-base">
                  <span className="flex items-center">
                    <span className="text-amber-500 mr-1">🚚</span>
                    In Transit
                  </span>
                </td>
                <td className="py-3 sm:py-4 px-2 sm:px-4 text-sm sm:text-base">2 min ago</td>
                <td className="py-3 sm:py-4 px-2 sm:px-4 text-sm sm:text-base">
                  <button className="text-blue-600 hover:underline">View Details</button>
                </td>
              </tr>
              <tr className="bg-gray-100">
                <td className="py-3 sm:py-4 px-2 sm:px-4 text-sm sm:text-base">V001</td>
                <td className="py-3 sm:py-4 px-2 sm:px-4 text-sm sm:text-base">John Doe</td>
                <td className="py-3 sm:py-4 px-2 sm:px-4 text-sm sm:text-base">Downtown</td>
                <td className="py-3 sm:py-4 px-2 sm:px-4 text-sm sm:text-base">
                  <span className="flex items-center">
                    <span className="text-amber-500 mr-1">🚚</span>
                    In Transit
                  </span>
                </td>
                <td className="py-3 sm:py-4 px-2 sm:px-4 text-sm sm:text-base">2 min ago</td>
                <td className="py-3 sm:py-4 px-2 sm:px-4 text-sm sm:text-base">
                  <button className="text-blue-600 hover:underline">View Details</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Route Optimization & Traffic Insights */}
      <div className="bg-gray-50 p-4 rounded-lg shadow-sm mb-6">
        <h3 className="text-base sm:text-lg font-semibold mb-4">Route Optimization & Traffic Insights</h3>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Vehicle Selection</label>
            <div className="relative">
              <select className="w-full p-2 border border-gray-300 rounded appearance-none bg-white">
                <option>Select Vehicle</option>
                <option>V001</option>
                <option>V002</option>
                <option>V003</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                <span className="text-gray-500">▼</span>
              </div>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Current Route</label>
            <div className="relative">
              <select className="w-full p-2 border border-gray-300 rounded appearance-none bg-white">
                <option>Select Route</option>
                <option>Route A</option>
                <option>Route B</option>
                <option>Route C</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                <span className="text-gray-500">▼</span>
              </div>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Suggested Route</label>
            <input
              type="text"
              placeholder="Suggested Route"
              className="w-full p-2 border outline-none border-gray-300 rounded bg-white text-sm"
            />
          </div>

          <div className="flex justify-end mt-4">
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 px-6 rounded-lg text-base">
              Send Route Update
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Tracking

