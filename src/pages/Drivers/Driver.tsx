import Card from "../../components/DriverComponents/UiComponents/Card";
import PerformanceCard from "../../components/DriverComponents/UiComponents/PerformanceCard";
import PerformanceCardData from "../DashboardContent/PerformanceCardData";

const Driver = () => {
  return (
    <div className="mt-4 px-4 md:ml-[279px] sm:px-6 bg-[#F6F6F6] ">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        <h1 className="text-[#092C4C] text-2xl sm:text-3xl font-bold">
          Drivers
        </h1>
        <h2 className="bg-[#FB8A00] w-full sm:w-[283px] h-[50px] sm:h-[64px] px-4 sm:px-[52px] py-[15px] sm:py-[20px] flex justify-center rounded-lg items-center text-xl sm:text-[24px] text-white">
          Driver payroll
        </h2>
      </div>

      <div className="rounded bg-[#FFFFFF] sm:bg-[#F6F6F6] flex flex-col justify-center items-center shadow-lg sm:shadow-2xl w-screen sm:w-full h-auto  mt-4">
        <div className="flex flex-wrap justify-center gap-4 sm:gap-8">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-2 my-6 w-full">
          <button className="hover:bg-[#FB8A00] w-full sm:w-[184px] font-bold h-[50px] sm:h-[60px] hover:text-white text-[#000000] px-4 py-2 rounded-lg border-2 hover:border">
            See More
          </button>
          <button className="hover:bg-[white] hover:text-[#000000] font-bold w-full sm:w-[184px] h-[50px] sm:h-[60px] bg-[#FB8A00] text-[#000000] px-4 py-2 rounded-lg hover:border-2">
            View Profile
          </button>
        </div>
      </div>

      {/* Performance */}
      <div className="w-full pt-7">
        <h2 className="text-[#092C4C] font-bold text-2xl sm:text-[32px]">
          Performance
        </h2>
        {/* Upper cards - performance */}
        <div className="mt-5 flex flex-wrap justify-center sm:justify-start gap-4 sm:gap-8 lg:gap-16">
          {PerformanceCardData.map((item, index) => (
            <PerformanceCard key={index} data={item} />
          ))}
        </div>
      </div>

      <div className="bg-gray-100 w-full mt-5">
        <h2 className="text-[#092C4C] font-bold text-2xl sm:text-3xl pb-4">
          Current Shift
        </h2>

        <div className="flex flex-wrap justify-center gap-4 sm:gap-8 lg:gap-20">
          {/* Shift Timing Section */}
          <div className="bg-white p-4 rounded-lg shadow-sm w-full sm:w-80 h-auto sm:h-40">
            <h3 className="font-bold text-lg sm:text-xl mb-4">Shift Timing</h3>
            <div className="flex gap-3">
              <div className="bg-gray-200 rounded-full py-2 sm:py-3 px-4 sm:px-6 flex-1 text-center">
                <span className="font-medium">9:00</span>{" "}
                <span className="ml-2">Am</span>
              </div>
              <div className="bg-gray-200 rounded-full py-2 sm:py-3 px-4 sm:px-6 flex-1 text-center">
                <span className="font-medium">10:00</span>{" "}
                <span className="ml-2">Pm</span>
              </div>
            </div>
          </div>

          {/* Break Status Section */}
          <div className="bg-white p-4 rounded-lg shadow-sm w-full sm:w-80 h-auto sm:h-40">
            <h3 className="font-bold text-lg sm:text-xl mb-4">Break Status</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-5 sm:w-6 h-5 sm:h-6 rounded-full bg-green-400"></div>
                <span className="font-medium">Break Time</span>
                <div className="ml-auto w-2 sm:w-3 h-2 sm:h-3 rounded-full bg-green-400"></div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 sm:w-6 h-5 sm:h-6 rounded-full bg-purple-600"></div>
                <span className="font-medium">Driving</span>
                <div className="ml-auto w-1 h-1 rounded-full bg-purple-900"></div>
              </div>
            </div>
          </div>

          {/* Real-Time Status Section */}
          <div className="bg-white p-4 rounded-lg shadow-sm w-full sm:w-80 h-auto sm:h-40">
            <h3 className="font-bold text-lg sm:text-xl mb-4">
              Real-Time Status
            </h3>
            <div className="flex gap-3">
              <div className="bg-orange-400 text-white rounded-lg py-2 sm:py-3 px-4 sm:px-6 flex-1 text-center font-medium">
                On Duty
              </div>
              <div className="bg-gray-200 rounded-lg py-2 sm:py-3 px-4 sm:px-6 flex-1 text-center font-medium">
                Off Duty
              </div>
            </div>
          </div>
        </div>

        <div className="w-full mt-5">
          <h2 className="text-[#092C4C] font-bold text-2xl sm:text-3xl mb-6">
            Upcoming Assignments
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {/* Scheduled Routes */}
            <div className="bg-white p-4 rounded-lg shadow-sm h-auto sm:h-48 flex flex-col items-center justify-center">
              <h3 className="font-bold text-lg sm:text-xl mb-4 sm:mb-6 text-center">
                Scheduled Routes
              </h3>
              <div className="relative flex items-center justify-center py-4">
                {/* Gray background circle */}
                <div className="w-16 sm:w-20 h-16 sm:h-20 rounded-full border-6 sm:border-8 border-gray-200"></div>
                {/* Blue progress circle (covers ~60% of the circle) */}
                <div
                  className="absolute w-16 sm:w-20 h-16 sm:h-20 rounded-full border-6 sm:border-8 border-blue-600"
                  style={{
                    clipPath:
                      "polygon(50% 50%, 0 0, 0 50%, 0 100%, 50% 100%, 100% 100%, 100% 70%)",
                  }}
                ></div>
                {/* Value in center */}
                <div className="absolute text-xl sm:text-2xl font-bold">56</div>
              </div>
            </div>

            {/* Pickup & Drop-Off Points */}
            <div className="bg-white p-4 rounded-lg shadow-sm h-auto sm:h-48 flex flex-col items-center justify-center">
              <h3 className="font-bold text-lg sm:text-xl mb-4 sm:mb-6 text-center">
                Pickup & Drop-Off Points
              </h3>
              <div className="relative flex items-center justify-center py-4">
                {/* Gray background circle */}
                <div className="w-16 sm:w-20 h-16 sm:h-20 rounded-full border-6 sm:border-8 border-gray-200"></div>
                {/* Orange progress circle (covers ~45% of the circle) */}
                <div
                  className="absolute w-16 sm:w-20 h-16 sm:h-20 rounded-full border-6 sm:border-8 border-orange-500"
                  style={{
                    clipPath:
                      "polygon(50% 50%, 0 0, 0 50%, 0 100%, 50% 100%, 60% 80%)",
                  }}
                ></div>
                {/* Value in center */}
                <div className="absolute text-xl sm:text-2xl font-bold">45</div>
              </div>
            </div>

            {/* Estimated Time of Completion */}
            <div className="bg-white p-4 rounded-lg shadow-sm h-auto sm:h-48 flex flex-col items-center justify-center">
              <h3 className="font-bold text-lg sm:text-xl mb-4 sm:mb-6 text-center">
                Estimated Time of Completion
              </h3>
              <div className="relative flex items-center justify-center py-4">
                {/* Gray background circle */}
                <div className="w-16 sm:w-20 h-16 sm:h-20 rounded-full border-6 sm:border-8 border-gray-200"></div>
                {/* Green progress circle */}
                <div
                  className="absolute w-16 sm:w-20 h-16 sm:h-20 rounded-full border-6 sm:border-8 border-green-500"
                  style={{
                    clipPath: "polygon(50% 50%, 0 0, 0 50%, 30% 90%)",
                  }}
                ></div>
                {/* Value in center */}
                <div className="absolute text-xl sm:text-2xl font-bold">39</div>
              </div>
            </div>

            {/* Priority Level */}
            <div className="bg-white p-4 rounded-lg shadow-sm h-auto sm:h-48 flex flex-col items-center justify-center">
              <h3 className="font-bold text-lg sm:text-xl mb-4 sm:mb-6 text-center">
                Priority Level
              </h3>
              <div className="relative flex items-center justify-center py-4">
                {/* Gray background circle */}
                <div className="w-16 sm:w-20 h-16 sm:h-20 rounded-full border-6 sm:border-8 border-gray-200"></div>
                {/* Blue progress circle (covers ~80% of the circle) */}
                <div
                  className="absolute w-16 sm:w-20 h-16 sm:h-20 rounded-full border-6 sm:border-8 border-blue-400"
                  style={{
                    clipPath:
                      "polygon(50% 50%, 0 0, 0 50%, 0 100%, 50% 100%, 100% 100%, 100% 30%)",
                  }}
                ></div>
                {/* Value in center */}
                <div className="absolute text-xl sm:text-2xl font-bold">80</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Driver;
