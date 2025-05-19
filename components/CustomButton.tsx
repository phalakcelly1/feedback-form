import React from "react";

interface CustomButtonProps {
  type: "submit" | "button" | "reset";
  label: string;
  onClick?: () => void;
  className?: string;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  type,
  label,
  onClick,
  className = "",
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`px-4 py-2 rounded-md text-white bg-red-500 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 ${className}`}
    >
      {label}
    </button>
  );
};

export default CustomButton;