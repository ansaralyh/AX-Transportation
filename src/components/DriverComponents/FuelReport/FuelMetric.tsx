import type React from "react";

interface FuelMetricProps {
  value: string;
  label: string;
}

export const FuelMetric: React.FC<FuelMetricProps> = ({ value, label }) => {
  return (
    <div className="bg-gray-100 py-14 px-12 w-[324px] rounded-lg">
      <div className="text-4xl font-semibold">{value}</div>
      <div className="text-[18px] font-semibold font-[roboto] text-gray-600 mt-1">
        {label}
      </div>
    </div>
  );
};
