import React from "react";
import PerformanceCardData from "../../../pages/DashboardContent/PerformanceCardData";

const PerformanceCard: React.FC = () => {
  return (
    <div className="grid grid-cols-2 gap-x-6 gap-y-[13px]">
      {PerformanceCardData.map((card, index) => (
        <div
          key={index}
          className="w-[301px] h-[150px] bg-white rounded-lg shadow-lg p-6 flex flex-col items-center"
        >
          <div className="text-[#000000] text-[18px] font-semibold">
            {card.title}
          </div>
          <div className="text-[36px] font-bold">{card.value}</div>
          <div className="flex items-center w-full">
            <div className="w-[200px] bg-gray-200 rounded-full h-2.5 flex">
              <div
                className={`${card.progressColor} h-2.5 rounded-full`}
                style={{ width: `${card.progress}%` }}
              ></div>
            </div>
            <span className="ml-2 text-[20px] font-bold text-[#000000]">
              {card.progress}%
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PerformanceCard;
