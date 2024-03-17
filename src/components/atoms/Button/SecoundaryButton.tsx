import React from "react";

interface Props {
  text: string;
}

const SecondaryButton: React.FC<Props> = ({ text }) => (
  <button
    className="
    bg-white 
    text-main-color
      rounded-lg
      px-5
      py-3
      hover:bg-slate-200
    "
  >
    {text}
  </button>
);

export default SecondaryButton;