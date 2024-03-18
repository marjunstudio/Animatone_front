import React from "react";

interface Props {
  text: string;
  onClick?: () => void;
}

const SecondaryButton: React.FC<Props> = ({ text, onClick }) => (
  <button
    className="
    bg-white 
    text-main-color
      rounded-lg
      px-5
      py-3
      hover:bg-slate-200
    "
    onClick={onClick}
  >
    {text}
  </button>
);

export default SecondaryButton;