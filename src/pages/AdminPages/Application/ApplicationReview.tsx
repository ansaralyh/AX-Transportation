"use client"

const ApplicationReview = () => {
  return (
    <div className="md:ml-[279px] sm:ml-0 p-4 sm:p-6 bg-gray-100 min-h-screen">
      <h1 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Admin</h1>
      <h2 className="text-[#092C4C] text-lg sm:text-2xl font-bold mb-4">Application Review</h2>

      {/* Applications Table */}
      <div className="overflow-x-auto bg-white shadow-lg rounded-lg mb-8">
        <div className="min-w-full block whitespace-nowrap overflow-x-scroll sm:overflow-x-auto">
          <table className="min-w-full border border-gray-200">
            <thead>
              <tr className="bg-amber-50 text-left">
                <th className="py-3 sm:py-4 px-2 sm:px-4 text-sm sm:text-base">Driver Name</th>
                <th className="py-3 sm:py-4 px-2 sm:px-4 text-sm sm:text-base">Email</th>
                <th className="py-3 sm:py-4 px-2 sm:px-4 text-sm sm:text-base">Phone</th>
                <th className="py-3 sm:py-4 px-2 sm:px-4 text-sm sm:text-base">Status</th>
                <th className="py-3 sm:py-4 px-2 sm:px-4 text-sm sm:text-base">Actions</th>
              </tr>
            </thead>
            <tbody>
              {[1, 2, 3, 4].map((item, index) => (
                <tr key={item} className={index % 2 === 0 ? "bg-white" : "bg-gray-100"}>
                  <td className="py-3 sm:py-4 px-2 sm:px-4 text-sm sm:text-base">Jhone</td>
                  <td className="py-3 sm:py-4 px-2 sm:px-4 text-sm sm:text-base">john@example.com</td>
                  <td className="py-3 sm:py-4 px-2 sm:px-4 text-sm sm:text-base">Pending</td>
                  <td className="py-3 sm:py-4 px-2 sm:px-4 text-sm sm:text-base">Pending</td>
                  <td className="py-3 sm:py-4 px-2 sm:px-4 text-sm sm:text-base">
                    <button className="text-blue-600 hover:underline">Review</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Review Driver Details */}
      <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-lg font-semibold">Review Driver Details</h3>
          <button className="text-green-500 hover:text-green-600 font-medium">Review</button>
        </div>

        {/* Personal Information */}
        <div className="mb-8">
          <h4 className="text-base font-medium mb-4">Personal Information</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Driver Name</label>
              <input type="text" className="w-full p-2 bg-gray-200 border-none rounded outline-none"  />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Email Address</label>
              <input type="email" className="w-full p-2 bg-gray-200 border-none rounded outline-none"  />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Phone Number</label>
              <input type="tel" className="w-full p-2 bg-gray-200 border-none rounded outline-none"  />
            </div>
          </div>
          <div className="mt-4">
            <label className="block text-sm font-medium mb-1">Address</label>
            <input type="text" className="w-full p-2 bg-gray-200 border-none rounded outline-none"  />
          </div>
          <div className="mt-4">
            <label className="block text-sm font-medium mb-1">Date of Birth</label>
            <input type="text" className="w-full p-2 bg-gray-200 border-none rounded outline-none"  />
          </div>
        </div>

        {/* Professional Information */}
        <div className="mb-8">
          <h4 className="text-base font-medium mb-4">Professional Information</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">License Number</label>
              <input type="text" className="w-full p-2 bg-gray-200 border-none rounded outline-none"  />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">License Expiry Date</label>
              <input type="text" className="w-full p-2 bg-gray-200 border-none rounded outline-none"  />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Years of Experience</label>
              <input type="text" className="w-full p-2 bg-gray-200 border-none rounded outline-none"  />
            </div>
          </div>
          <div className="mt-4">
            <label className="block text-sm font-medium mb-1">Previous Employment (If Any)</label>
            <input type="text" className="w-full p-2 bg-gray-200 border-none rounded outline-none"  />
          </div>
        </div>

        {/* Uploaded Documents */}
        <div>
          <h4 className="text-base font-medium mb-4">Uploaded Documents:</h4>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="text-sm">Driver's License</span>
              <button className="text-blue-600 hover:underline text-sm">(View</button>
              <span className="text-sm">/</span>
              <button className="text-blue-600 hover:underline text-sm">Download)</button>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm">Insurance Proof</span>
              <button className="text-blue-600 hover:underline text-sm">(View</button>
              <span className="text-sm">/</span>
              <button className="text-blue-600 hover:underline text-sm">Download)</button>
            </div>
          </div>
        </div>
      </div>

      {/* Approve or Reject Applications */}
      <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
        <h3 className="text-lg font-semibold mb-6">Approve or Reject Applications with Comments</h3>

        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-sm font-medium mb-1">Driver Name</label>
            <div className="text-sm">John Doe</div>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Email Address</label>
            <div className="text-sm">johndoe@example.com</div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-6">
          <div>
            <label className="block text-sm font-medium mb-1">Phone Number</label>
            <div className="text-sm">+1 234 567 890</div>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">License No</label>
            <div className="text-sm">ABC12345</div>
          </div>
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium mb-1">Application Status:</label>
          <div className="text-sm">Pending</div>
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium mb-2">Decision</label>
          <div className="flex gap-2">
            <button className="bg-green-500 hover:bg-green-600 text-white text-xs py-1 px-3 rounded">Approve</button>
            <button className="bg-red-500 hover:bg-red-600 text-white text-xs py-1 px-3 rounded">Reject</button>
          </div>
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium mb-2 text-right">Comment</label>
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
  )
}

export default ApplicationReview

