import { RouteCard } from "../../components/DriverComponents/UiComponents/RouteCard/RouteCard";
import { StatusCard } from "../../components/DriverComponents/UiComponents/StatusCard/StatusCard";

interface DriverProfileProps {
  driver: {
    name: string;
    age: number;
    experience: string;
    status: string;
    photo: string;
  };
  vehicle: {
    id: string;
    location: string;
    speed: string;
    eta: string;
  };
}
const routes = [
  {
    title: "Best Route Suggestion",
    subtitle: "AI-based optimal path",
    description: "Lorem ipsum dolor sit amet consectetur. Mi quam sed in vitae bibendum quam facilisis nisi.",
    imageUrl: "/assets/map.png",
  },
  {
    title: "Alternative Routes",
    subtitle: "With estimated travel time",
    description: "Lorem ipsum dolor sit amet consectetur. Mi quam sed in vitae bibendum quam facilisis nisi.",
    imageUrl: "/assets/road.png",
  },
  {
    title: "Live Traffic Data",
    subtitle: "",
    description: "Lorem ipsum dolor sit amet consectetur. Mi quam sed in vitae bibendum quam facilisis nisi.",
    imageUrl: "/assets/monitor.png",
  },
];
const statuses = [
  { status: "In Transit", description: "Vehicle is moving as expected", color: "#00FF00" },
  { status: "Delayed", description: "Encountering traffic or other issues slowing progress.", color: "#FFD700" },
  { status: "In Transit", description: "Vehicle is not moving, possibly at a halt or facing an issue.", color: "#FF0000" },
];
const TimeTrack = ({
  driver = {
    name: "John",
    age: 34,
    experience: "6+ year",
    status: "Active",
    photo: "/placeholder.svg?height=100&width=100",
  },
  vehicle = {
    id: "T442452",
    location: "Mg road USA",
    speed: "56 Km",
    eta: "2 Hours",
  },
}: DriverProfileProps) => {
  return (
    <div className="md:ml-[279px]">
      <h1 className="font-semibold text-4xl my-3.5">Interactive Map</h1>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d53155171.15103263!2d-160.60217620000003!3d35.5948225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8859f3568d8b6629%3A0xab51504f9034595b!2sMG%20Road%20Bar%20%26%20Lounge!5e0!3m2!1sen!2s!4v1740770472017!5m2!1sen!2s"
        width="100%"
        height="415"
        style={{ border: "0" }}
        allowFullScreen
        className="mt-9 mb-16"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>

      <div className="flex flex-col md:flex-row rounded-lg  max-w-7xl ">
        {/* Driver Information Section */}
        <div className="bg-white p-6 rounded-3xl shadow-lg flex flex-col items-center w-80 h-[290px] mx-auto relative">
          <div className="absolute top-0 w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-md">
            <img
              src="/assets/user.png"
              alt="danish"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full  flex gap-32 items-center mt-28">
            <div>
              <p className="text-sm text-gray-500">Name</p>
              <p className="text-2xl font-bold">{driver.name}</p>
            </div>
            <div className="">
              <p className="text-sm text-gray-500">Age</p>
              <p className="text-2xl font-bold">{driver.age}</p>
            </div>
          </div>

          <div className="w-full flex gap-22 mt-4">
            <div>
              <p className="text-sm text-gray-500">Experiences</p>
              <p className="text-2xl font-bold">{driver.experience}</p>
            </div>
            <div className="">
              <p className="text-sm text-gray-500">Driver</p>
              <p className="text-2xl font-bold">{driver.status}</p>
            </div>
          </div>
        </div>

        {/* Vehicle Information Section */}
        <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-4 p-6">
          <div className="mb-4">
            <h3 className="text-3xl font-medium mb-2">Vehicle ID</h3>
            <div className="p-4 bg-white rounded-md">
              <p className="text-3xl">{vehicle.id}</p>
            </div>
          </div>

          <div className="mb-4">
            <h3 className="text-3xl font-medium mb-2">Last Known Location</h3>
            <div className="p-4 bg-white rounded-md">
              <p className="text-3xl">{vehicle.location}</p>
            </div>
          </div>

          <div className="mb-4">
            <h3 className="text-3xl font-medium mb-2">Current Speed</h3>
            <div className="p-4 bg-white rounded-md">
              <p className="text-3xl">{vehicle.speed}</p>
            </div>
          </div>

          <div className="mb-4">
            <h3 className="text-3xl font-medium mb-2">ETA</h3>
            <div className="p-4 bg-white rounded-md">
              <p className="text-3xl">{vehicle.eta}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex space-x-4 gap-7 ml-14">
      {statuses.map((item, index) => (
        <StatusCard key={index} {...item} />
      ))}
    </div>

    <div className="bg-gray-100 p-6 rounded-xl mt-10 w-full max-w-7xl mx-auto">
      <p className="font-bold text-[27px] mb-4">Route Optimization Panel</p>
      <div className="space-y-4">
        {routes.map((route, index) => (
          <RouteCard key={index} {...route} />
        ))}
      </div>
    </div>
    </div>
  );
};

export default TimeTrack;
