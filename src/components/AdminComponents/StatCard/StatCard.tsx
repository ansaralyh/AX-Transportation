import React from "react";

interface StatCardProps {
  icon: React.ElementType;
  value: number;
  label: string;
}

const StatCard: React.FC<StatCardProps> = ({ icon: Icon, value, label }) => {
  return (
    <div className="flex flex-col items-start justify-center bg-white  border-gray-300  p-4 w-78">
      <Icon className="w-12 h-12 text-black" />
      <div className="w-full flex justify-center">
        <h2 className="text-[64px] font-medium font-[poppins]">{value}</h2>
      </div>
      <p className="font-[poppins] font-medium text-[22px]">{label}</p>
    </div>
  );
};

export default StatCard;
