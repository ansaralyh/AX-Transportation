import Card from "../../components/DriverComponents/UiComponents/Card";

const DashboardContent = () => {
  return (
    <div className="mt-4 ml-6">
      <div className="border-3 flex g">
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
        <div className=" w-full"></div>
      </div>
      <h2>Upcoming Assignments</h2>
      <div className="border-2 border-green-500 w-full h-[340px]"></div>
      <div className="border-2 border-green-500 w-full h-[340px] mt-20"></div>
    </div>
  );
};

export default DashboardContent;
