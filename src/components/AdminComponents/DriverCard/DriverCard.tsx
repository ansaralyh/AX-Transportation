import {
  Car,
  ChevronRight,
  MapPin,
  MoreHorizontal,
  Phone,
  Star,
} from "lucide-react";
export type DriverProfile = {
  id: string;
  name: string;
  avatar: string;
  car: {
    make: string;
    color: string;
    licensePlate: string;
  };
  rating: number;
  totalRatings: number;
  phone: string;
  location: string;
};
const DriverCard = ({ driver }: { driver: DriverProfile }) => {
  return (
    <div className="bg-white relative rounded-lg shadow-md overflow-hidden">
      <div className="p-4 pb-0">
        <div className="flex absolute top-0 right-0 justify-end items-center mb-4">
          <button className="bg-green-500 text-white px-6 py-1.5 rounded-md font-medium">
            Approval
          </button>
         
        </div>

        <div className="flex items-center mt-6 justify-between gap-9">
          <div className="relative w-16 h-16 rounded-full overflow-hidden">
            <img
              src={"/assets/admin.png"}
              alt={driver.name}
              className="object-cover"
            />
          </div>
          <div>
            <h3 className="text-lg font-medium">{driver.name}</h3>
            <div className="flex items-center gap-1 text-sm text-gray-600 mt-1">
              <Car className="w-4 h-4" />
              <span>
                {driver.car.make} - {driver.car.color} -{" "}
                {driver.car.licensePlate}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-1">
            <button className="p-1 rounded-full hover:bg-gray-100">
              <MoreHorizontal className="w-5 h-5 text-gray-500" />
            </button>
            <button className="p-1 rounded-full hover:bg-gray-100">
              <ChevronRight className="w-5 h-5 text-gray-500" />
            </button>
          </div>
        </div>

        <div className="flex justify-start items-center mb-10 gap-20">
          <div>
            <div className="flex items-center mt-3 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} filled={i < Math.floor(driver.rating)} />
              ))}
            </div>
            <span className="text-sm text-gray-600 ml-2">
              {driver.rating} / {driver.totalRatings}
            </span>
          </div>
          <div>
            <div className="flex items-center gap-2 text-sm text-gray-600 mt-2">
              <Phone className="w-4 h-4" />
              <span>{driver.phone}</span>
            </div>

            <div className="flex items-center gap-2 text-sm text-gray-600 mt-2 mb-4">
              <MapPin className="w-4 h-4" />
              <span>{driver.location}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DriverCard;

function Star({ filled }: { filled: boolean }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill={filled ? "#FFB800" : "none"}
      stroke={filled ? "#FFB800" : "#D1D5DB"}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}
