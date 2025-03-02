import React from "react";

interface Data {
  title: string;
  value: string;
  progressColor: string;
  progress: number;
}
interface cardProps {
  data:Data
}

const PerformanceCard: React.FC<cardProps> = ({ data }) => {
  return (
    <div className="flex justify-center flex-wrap gap-8">
      <div className="w-[301px] h-[150px] bg-white rounded-lg shadow-lg p-6 flex flex-col items-center">
        <div className="text-[#000000] text-[18px] font-semibold">{data.title}</div>
        <div className="text-[36px] font-bold">{data.value}</div>
        <div className="flex items-center w-full">
          <div className="w-[200px] bg-gray-200 rounded-full h-2.5 flex">
            <div
              className={`${data.progressColor} h-2.5 rounded-full`}
              style={{ width: `${data.progress}%` }}
            ></div>
          </div>
          <span className="ml-2 text-[20px] font-bold text-[#000000]">{data.progress}%</span>
        </div>
      </div>
    </div>
  );
};

export default PerformanceCard;
