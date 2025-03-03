import React from "react";

interface RouteCardProps {
  title: string;
  subtitle: string;
  description: string;
  imageUrl: string;
}

export const RouteCard: React.FC<RouteCardProps> = ({ title, subtitle, description, imageUrl }) => {
  return (
    <div className="bg-white p-4 rounded-xl shadow-md flex flex-wrap gap-10 items-center justify-center md:justify-between w-full">
      <div>
        <p className="font-medium text-[27px]">{title} <span className=" text-[25px]">({subtitle})</span></p>
        <p className=" text-[25px] max-w-[500px] mt-2">{description}</p>
      </div>
      <img src={imageUrl} alt={title}  className=" object-contain" />
    </div>
  );
};