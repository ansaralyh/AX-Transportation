import { FaUser, FaCar, FaStar, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const Card = () => {
  return (
    <div className="w-[412px] h-[182px] bg-[#EFEFEF] rounded-lg mt-6 flex justify-center gap-8 p-4">
      <div className="flex flex-col gap-5">
        <img src="/public/assets/Avatar.png" alt="" />
        <FaStar className="text-yellow-500" />
        <span className="text-sm text-gray-600">4.5/2,256</span>
      </div>
      <div className="flex flex-col gap-[8px]">
        <div className="flex items-center gap-2">
          <FaUser className="text-gray-600" />
          <span className="text-lg font-semibold">Michael Nguyen</span>
        </div>
        <div className="flex items-center gap-2">
          <FaCar className="text-gray-600" />
          <span className="text-sm text-gray-600">
            Pontiac - White - 586 5GX
          </span>
        </div>
        <div className="flex items-center gap-2">
          <FaPhone className="text-gray-600" />
          <span className="text-sm text-gray-600">0903001276</span>
        </div>
        <div className="flex items-center gap-2">
          <FaMapMarkerAlt className="text-gray-600" />
          <span className="text-sm text-gray-600">Saigon</span>
        </div>
        <div className="bg-[#95FEA5] rounded-lg w-[190px] text-[14px] px-[12px] py-1 h-9 text-[#2E374C] font-semibold">
          On the way to destination
        </div>
      </div>
      {/* icons */}
      <div className="flex gap-1">
        <img
          src="/public/assets/Icon Button (4).png"
          alt=""
          className="h-6 w-6"
        />
        <img
          src="/public/assets/Icon Button (5).png"
          alt=""
          className="h-6 w-6"
        />
      </div>
     
    </div>
  );
};

export default Card;