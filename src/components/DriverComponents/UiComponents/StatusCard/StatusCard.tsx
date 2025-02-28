import React from "react";

interface StatusCardProps {
  status: string;
  description: string;
  color: string;
}

export const StatusCard: React.FC<StatusCardProps> = ({
  status,
  description,
  color,
}) => {
  return (
    <div className="bg-white relative p-4 h-[150px] w-[351px] rounded-2xl shadow-md flex items-center space-x-4">
      <div
        className={`w-14 h-14 absolute -top-4 -left-2 rounded-full`}
        style={{ backgroundColor: color }}
      ></div>
      <div>
        <p className="font-medium text-[27px] text-center">{status}</p>
        <p className="text-gray-600 text-[19px]">{description}</p>
      </div>
    </div>
  );
};
