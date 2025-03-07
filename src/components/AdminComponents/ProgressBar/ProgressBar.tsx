import React from "react";

interface ProgressBarProps {
  value: number;
  max?: number;
  color: string;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ value, max = 100, color }) => {
  const percentage = (value / max) * 100;
  return (
    <div className="w-full bg-gray-200 rounded-lg overflow-hidden">
      <div
        className={`h-4 ${color}`}
        style={{ width: `${percentage}%` }}
      ></div>
    </div>
  );
};

export default ProgressBar;