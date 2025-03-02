import Card from "../../components/DriverComponents/UiComponents/Card";
import PerformanceCard from "../../components/DriverComponents/UiComponents/PerformanceCard";
import PerformanceCardData from "../DashboardContent/PerformanceCardData";

const Driver = () => {
  return (
    <div className="mt-4 ml-6 bg-[#F6F6F6]">
      <div className="flex justify-between">
        <h1 className="text-[#092C4C] text-3xl font-bold mb-6">Drivers</h1>
        <h2 className="bg-[#FB8A00] w-[283px] h-[64px] px-[52px] py-[20px] flex justify-center rounded-lg items-center text-[24px] text-white">
          Driver payroll
        </h2>
      </div>
      <div className="rounded bg-[#FFFFFF] flex justify-center items-center flex-wrap gap-8 shadow-2xl w-full h-auto px-4 mt-4">
        <div className="flex flex-wrap gap-8">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
        {/* Buttons */}
        <div className="flex justify-center items-center gap-2 mt-4 pb-8">
          <button className="hover:bg-[#FB8A00] w-[184px] font-bold h-[60px] hover:text-white  text-[#000000] px-4 py-2 rounded-lg border-2 hover:border ">
            See More
          </button>
          <button className="hover:bg-[white] hover:text-[#000000] font-bold w-[184px] h-[60px] bg-[#FB8A00] text-[#000000] px-4 py-2 rounded-lg hover:border-2">
            View Profile
          </button>
        </div>
      </div>

      {/* Performance */}
      <div className=" w-full  pt-7">
        <h2 className="text-[#092C4C] font-bold text-[32px] ">Performance</h2>
        {/* Upper cards - performance */}
        <div className=" mt-5 flex gap-16 ">
          {PerformanceCardData.map((item, index) => (
            <PerformanceCard key={index} data={item} />
          ))}
        </div>
      </div>

      <div className="bg-gray-100 w-full mt-5">
        <h2 className="text-[#092C4C] font-bold text-3xl p pb-4">
          Current Shift
        </h2>

        <div className="flex flex-wrap gap-20 ">
          {/* Shift Timing Section */}
          <div className="bg-white p-4 rounded-lg shadow-sm w-80 h-40">
            <h3 className="font-bold text-xl mb-4">Shift Timing</h3>
            <div className="flex gap-3">
              <div className="bg-gray-200 rounded-full py-3 px-6 flex-1 text-center">
                <span className="font-medium">9:00</span>{" "}
                <span className="ml-2">Am</span>
              </div>
              <div className="bg-gray-200 rounded-full py-3 px-6 flex-1 text-center">
                <span className="font-medium">10:00</span>{" "}
                <span className="ml-2">Pm</span>
              </div>
            </div>
          </div>

          {/* Break Status Section */}
          <div className="bg-white p-4 rounded-lg shadow-sm w-80 h-40">
            <h3 className="font-bold text-xl mb-4">Break Status</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-green-400"></div>
                <span className="font-medium">Break Time</span>
                <div className="ml-auto w-3 h-3 rounded-full bg-green-400"></div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-purple-600"></div>
                <span className="font-medium">Driving</span>
                <div className="ml-auto w-1 h-1 rounded-full bg-purple-900"></div>
              </div>
            </div>
          </div>

          {/* Real-Time Status Section */}
          <div className="bg-white p-4 rounded-lg shadow-sm w-80 h-40">
            <h3 className="font-bold text-xl mb-4">Real-Time Status</h3>
            <div className="flex gap-3">
              <div className="bg-orange-400 text-white rounded-lg py-3 px-6 flex-1 text-center font-medium">
                On Duty
              </div>
              <div className="bg-gray-200 rounded-lg py-3 px-6 flex-1 text-center font-medium">
                Off Duty
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-100 w-full mt-5">
          <h2 className="text-[#092C4C] font-bold text-3xl mb-6">
            Upcoming Assignments
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {/* Scheduled Routes */}
            <div className="bg-white p-4 rounded-lg shadow-sm h-48 flex flex-col items-center justify-center">
              <h3 className="font-bold text-xl mb-6">Scheduled Routes</h3>
              <div className="relative flex items-center justify-center">
                {/* Gray background circle */}
                <div className="w-20 h-20 rounded-full border-8 border-gray-200"></div>
                {/* Blue progress circle (covers ~60% of the circle) */}
                <div
                  className="absolute w-20 h-20 rounded-full border-8 border-blue-600"
                  style={{
                    clipPath:
                      "polygon(50% 50%, 0 0, 0 50%, 0 100%, 50% 100%, 100% 100%, 100% 70%)",
                  }}
                ></div>
                {/* Value in center */}
                <div className="absolute text-2xl font-bold">56</div>
              </div>
            </div>

            {/* Pickup & Drop-Off Points */}
            <div className="bg-white p-4 rounded-lg shadow-sm h-48 flex flex-col items-center justify-center">
              <h3 className="font-bold text-xl mb-6">
                Pickup & Drop-Off Points
              </h3>
              <div className="relative flex items-center justify-center">
                {/* Gray background circle */}
                <div className="w-20 h-20 rounded-full border-8 border-gray-200"></div>
                {/* Orange progress circle (covers ~45% of the circle) */}
                <div
                  className="absolute w-20 h-20 rounded-full border-8 border-orange-500"
                  style={{
                    clipPath:
                      "polygon(50% 50%, 0 0, 0 50%, 0 100%, 50% 100%, 60% 80%)",
                  }}
                ></div>
                {/* Value in center */}
                <div className="absolute text-2xl font-bold">45</div>
              </div>
            </div>

            {/* Estimated Time of Completion */}
            <div className="bg-white p-4 rounded-lg shadow-sm h-48 flex flex-col items-center justify-center">
              <h3 className="font-bold text-xl mb-6">
                Estimated Time of Completion
              </h3>
              <div className="relative flex items-center justify-center">
                {/* Gray background circle */}
                <div className="w-20 h-20 rounded-full border-8 border-gray-200"></div>
               {/* Orange progress circle (covers ~45% of the circle) */}
               <div
                  className="absolute w-20 h-20 rounded-full border-8 border-orange-500"
                  style={{
                    clipPath:
                      "polygon(50% 50%, 0 0, 0 50%, 0 100%, 50% 100%, 60% 80%)",
                  }}
                ></div>
                {/* Value in center */}
                <div className="absolute text-2xl font-bold">39</div>
              </div>
            </div>

            {/* Priority Level */}
            <div className="bg-white p-4 rounded-lg shadow-sm h-48 flex flex-col items-center justify-center">
              <h3 className="font-bold text-xl mb-6">Priority Level</h3>
              <div className="relative flex items-center justify-center">
                {/* Gray background circle */}
                <div className="w-20 h-20 rounded-full border-8 border-gray-200"></div>
                {/* Blue progress circle (covers ~80% of the circle) */}
                <div
                  className="absolute w-20 h-20 rounded-full border-8 border-blue-400"
                  style={{
                    clipPath:
                      "polygon(50% 50%, 0 0, 0 50%, 0 100%, 50% 100%, 100% 100%, 100% 30%)",
                  }}
                ></div>
                {/* Value in center */}
                <div className="absolute text-2xl font-bold">80</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Driver;
