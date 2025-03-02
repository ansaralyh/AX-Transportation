import React from "react";

interface ButtonProps {
  text: string;
  icon?: React.ReactNode;
  variant?: "primary" | "outline";
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ text, icon, variant = "primary", onClick }) => {
  const baseClasses = `flex font-[Poppins] items-center gap-2 font-semibold px-6 py-4 rounded-2xl shadow transition`;
  const primaryClasses = `bg-[#FB8A00] text-white hover:bg-orange-600`;
  const outlineClasses = `border border-[#FB8A00] text-black hover:bg-gray-200`;

  return (
    <button
      className={`${baseClasses} ${variant === "primary" ? primaryClasses : outlineClasses}`}
      onClick={onClick}
    >
      {icon && <span>{icon}</span>}
      {text}
    </button>
  );
};

export default Button;
