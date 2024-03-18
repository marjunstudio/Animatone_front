import React from "react";

interface ButtonProps {
  text: string;
  onClick?: () => void;
}

const PrimaryButton: React.FC<ButtonProps> = ({ text, onClick }) => (
  <button
    className="
    bg-main-color 
    text-white
      rounded-lg
      px-5
      py-3
      hover:opacity-80
    "
    onClick={onClick}
  >
    {text}
  </button>
);

export default PrimaryButton;