import React from "react";

interface Props {
  text: string;
}

const PrimaryButton: React.FC<Props> = ({ text }) => (
  <button
    className="
    bg-main-color 
    text-white
      rounded-lg
      px-5
      py-3
      hover:opacity-80
    "
  >
    {text}
  </button>
);

export default PrimaryButton;