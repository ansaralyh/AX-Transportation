"use client"

const Reports = () => {
  return (
    <div className="md:ml-[279px] sm:ml-0 p-4 sm:p-6 bg-gray-100 min-h-screen">
      <h1 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Admin</h1>
      <h2 className="text-[#092C4C] text-lg sm:text-2xl font-bold">Reports & Analytics</h2>

      {/* Driver Performance */}
      <div className="mt-4">
        <h3 className="text-base sm:text-lg font-semibold mb-2">Driver Performance</h3>
        <div className="overflow-x-auto bg-white shadow-lg rounded-lg">
          <div className="min-w-full block whitespace-nowrap overflow-x-scroll sm:overflow-x-auto">
            <table className="min-w-full border border-gray-200">
              <thead>
                <tr className="bg-orange-100 text-left">
                  <th className="py-3 sm:py-4 px-2 sm:px-4 text-sm sm:text-base">Driver Name</th>
                  <th className="py-3 sm:py-4 px-2 sm:px-4 text-sm sm:text-base">On-Time Deliveries</th>
                  <th className="py-3 sm:py-4 px-2 sm:px-4 text-sm sm:text-base">Safety Score</th>
                  <th className="py-3 sm:py-4 px-2 sm:px-4 text-sm sm:text-base">Total Trips</th>
                  <th className="py-3 sm:py-4 px-2 sm:px-4 text-sm sm:text-base">Total Trips</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white">
                  <td className="py-3 sm:py-4 px-2 sm:px-4 text-sm sm:text-base">John Doe</td>
                  <td className="py-3 sm:py-4 px-2 sm:px-4 text-sm sm:text-base">95%</td>
                  <td className="py-3 sm:py-4 px-2 sm:px-4 text-sm sm:text-base">
                    <div className="flex items-center">
                      <span className="text-yellow-400">★★★★★</span>
                      <span className="ml-1">(5.0)</span>
                    </div>
                  </td>
                  <td className="py-3 sm:py-4 px-2 sm:px-4 text-sm sm:text-base">120</td>
                  <td className="py-3 sm:py-4 px-2 sm:px-4 text-sm sm:text-base">
                    <span className="text-green-600 font-medium">Active</span>
                  </td>
                </tr>
                <tr className="bg-gray-100">
                  <td className="py-3 sm:py-4 px-2 sm:px-4 text-sm sm:text-base">John Doe</td>
                  <td className="py-3 sm:py-4 px-2 sm:px-4 text-sm sm:text-base">95%</td>
                  <td className="py-3 sm:py-4 px-2 sm:px-4 text-sm sm:text-base">
                    <div className="flex items-center">
                      <span className="text-yellow-400">★★★</span>
                      <span className="ml-1">(3.0)</span>
                    </div>
                  </td>
                  <td className="py-3 sm:py-4 px-2 sm:px-4 text-sm sm:text-base">50</td>
                  <td className="py-3 sm:py-4 px-2 sm:px-4 text-sm sm:text-base">
                    <span className="text-amber-600 font-medium">Warning</span>
                  </td>
                </tr>
                <tr className="bg-white">
                  <td className="py-3 sm:py-4 px-2 sm:px-4 text-sm sm:text-base">John Doe</td>
                  <td className="py-3 sm:py-4 px-2 sm:px-4 text-sm sm:text-base">95%</td>
                  <td className="py-3 sm:py-4 px-2 sm:px-4 text-sm sm:text-base">
                    <div className="flex items-center">
                      <span className="text-yellow-400">★★★★★</span>
                      <span className="ml-1">(5.0)</span>
                    </div>
                  </td>
                  <td className="py-3 sm:py-4 px-2 sm:px-4 text-sm sm:text-base">120</td>
                  <td className="py-3 sm:py-4 px-2 sm:px-4 text-sm sm:text-base">
                    <span className="text-green-600 font-medium">Active</span>
                  </td>
                </tr>
                <tr className="bg-gray-100">
                  <td className="py-3 sm:py-4 px-2 sm:px-4 text-sm sm:text-base">John Doe</td>
                  <td className="py-3 sm:py-4 px-2 sm:px-4 text-sm sm:text-base">95%</td>
                  <td className="py-3 sm:py-4 px-2 sm:px-4 text-sm sm:text-base">
                    <div className="flex items-center">
                      <span className="text-yellow-400">★★★★★</span>
                      <span className="ml-1">(5.0)</span>
                    </div>
                  </td>
                  <td className="py-3 sm:py-4 px-2 sm:px-4 text-sm sm:text-base">120</td>
                  <td className="py-3 sm:py-4 px-2 sm:px-4 text-sm sm:text-base">
                    <span className="text-green-600 font-medium">Active</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Trip History & Log */}
      <div className="mt-8">
        <h3 className="text-base sm:text-lg font-semibold mb-2">Trip History & Log</h3>
        <div className="overflow-x-auto bg-white shadow-lg rounded-lg">
          <div className="min-w-full block whitespace-nowrap overflow-x-scroll sm:overflow-x-auto">
            <table className="min-w-full border border-gray-200">
              <thead>
                <tr className="bg-orange-100 text-left">
                  <th className="py-3 sm:py-4 px-2 sm:px-4 text-sm sm:text-base">Trip ID</th>
                  <th className="py-3 sm:py-4 px-2 sm:px-4 text-sm sm:text-base">Driver Name</th>
                  <th className="py-3 sm:py-4 px-2 sm:px-4 text-sm sm:text-base">Date</th>
                  <th className="py-3 sm:py-4 px-2 sm:px-4 text-sm sm:text-base">Pickup Location</th>
                  <th className="py-3 sm:py-4 px-2 sm:px-4 text-sm sm:text-base">Drop-Off Location</th>
                  <th className="py-3 sm:py-4 px-2 sm:px-4 text-sm sm:text-base">Trip Status</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white">
                  <td className="py-3 sm:py-4 px-2 sm:px-4 text-sm sm:text-base">#T1234</td>
                  <td className="py-3 sm:py-4 px-2 sm:px-4 text-sm sm:text-base">John Doe</td>
                  <td className="py-3 sm:py-4 px-2 sm:px-4 text-sm sm:text-base">12-Aug-2024</td>
                  <td className="py-3 sm:py-4 px-2 sm:px-4 text-sm sm:text-base">Warehouse A</td>
                  <td className="py-3 sm:py-4 px-2 sm:px-4 text-sm sm:text-base">Customer B</td>
                  <td className="py-3 sm:py-4 px-2 sm:px-4 text-sm sm:text-base">
                    <span className="flex items-center">
                      <span className="bg-green-500 text-white rounded-sm px-1 mr-1">✓</span>
                      Completed
                    </span>
                  </td>
                </tr>
                <tr className="bg-gray-100">
                  <td className="py-3 sm:py-4 px-2 sm:px-4 text-sm sm:text-base">#T1234</td>
                  <td className="py-3 sm:py-4 px-2 sm:px-4 text-sm sm:text-base">John Doe</td>
                  <td className="py-3 sm:py-4 px-2 sm:px-4 text-sm sm:text-base">12-Aug-2024</td>
                  <td className="py-3 sm:py-4 px-2 sm:px-4 text-sm sm:text-base">Warehouse A</td>
                  <td className="py-3 sm:py-4 px-2 sm:px-4 text-sm sm:text-base">Customer B</td>
                  <td className="py-3 sm:py-4 px-2 sm:px-4 text-sm sm:text-base">
                    <span className="flex items-center">
                      <span className="text-blue-600 mr-1">🔄</span>
                      In Progress
                    </span>
                  </td>
                </tr>
                <tr className="bg-white">
                  <td className="py-3 sm:py-4 px-2 sm:px-4 text-sm sm:text-base">#T1234</td>
                  <td className="py-3 sm:py-4 px-2 sm:px-4 text-sm sm:text-base">John Doe</td>
                  <td className="py-3 sm:py-4 px-2 sm:px-4 text-sm sm:text-base">12-Aug-2024</td>
                  <td className="py-3 sm:py-4 px-2 sm:px-4 text-sm sm:text-base">Warehouse A</td>
                  <td className="py-3 sm:py-4 px-2 sm:px-4 text-sm sm:text-base">Customer B</td>
                  <td className="py-3 sm:py-4 px-2 sm:px-4 text-sm sm:text-base">
                    <span className="flex items-center">
                      <span className="text-amber-500 mr-1">⚠️</span>
                      Delayed
                    </span>
                  </td>
                </tr>
                <tr className="bg-gray-100">
                  <td className="py-3 sm:py-4 px-2 sm:px-4 text-sm sm:text-base">#T1234</td>
                  <td className="py-3 sm:py-4 px-2 sm:px-4 text-sm sm:text-base">John Doe</td>
                  <td className="py-3 sm:py-4 px-2 sm:px-4 text-sm sm:text-base">12-Aug-2024</td>
                  <td className="py-3 sm:py-4 px-2 sm:px-4 text-sm sm:text-base">Warehouse A</td>
                  <td className="py-3 sm:py-4 px-2 sm:px-4 text-sm sm:text-base">Customer B</td>
                  <td className="py-3 sm:py-4 px-2 sm:px-4 text-sm sm:text-base">
                    <span className="flex items-center">
                      <span className="bg-green-500 text-white rounded-sm px-1 mr-1">✓</span>
                      Completed
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Revenue & Expenses Breakdown */}
      <div className="mt-8 mb-8">
        <h3 className="text-base sm:text-lg font-semibold mb-2">Revenue & Expenses Breakdown</h3>
        <div className="overflow-x-auto bg-white shadow-lg rounded-lg">
          <div className="min-w-full block whitespace-nowrap overflow-x-scroll sm:overflow-x-auto">
            <table className="min-w-full border border-gray-200">
              <thead>
                <tr className="bg-orange-100 text-left">
                  <th className="py-3 sm:py-4 px-2 sm:px-4 text-sm sm:text-base">Metric</th>
                  <th className="py-3 sm:py-4 px-2 sm:px-4 text-sm sm:text-base">Amount ($)</th>
                  <th className="py-3 sm:py-4 px-2 sm:px-4 text-sm sm:text-base">Trend</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white">
                  <td className="py-3 sm:py-4 px-2 sm:px-4 text-sm sm:text-base">Total Revenue</td>
                  <td className="py-3 sm:py-4 px-2 sm:px-4 text-sm sm:text-base">50000$</td>
                  <td className="py-3 sm:py-4 px-2 sm:px-4 text-sm sm:text-base">
                    <span className="flex items-center text-green-600">
                      <span className="mr-1">📈</span>
                      +12%
                    </span>
                  </td>
                </tr>
                <tr className="bg-gray-100">
                  <td className="py-3 sm:py-4 px-2 sm:px-4 text-sm sm:text-base">Total Expenses</td>
                  <td className="py-3 sm:py-4 px-2 sm:px-4 text-sm sm:text-base">15,000</td>
                  <td className="py-3 sm:py-4 px-2 sm:px-4 text-sm sm:text-base">
                    <span className="flex items-center text-blue-600">
                      <span className="mr-1">📉</span>
                      -5%
                    </span>
                  </td>
                </tr>
                <tr className="bg-white">
                  <td className="py-3 sm:py-4 px-2 sm:px-4 text-sm sm:text-base">Total Revenue</td>
                  <td className="py-3 sm:py-4 px-2 sm:px-4 text-sm sm:text-base">350000$</td>
                  <td className="py-3 sm:py-4 px-2 sm:px-4 text-sm sm:text-base">
                    <span className="flex items-center text-green-600">
                      <span className="mr-1">📈</span>
                      +20%
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Reports

