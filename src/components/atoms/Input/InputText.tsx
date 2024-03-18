import React from "react";

interface Props {
  label: string;
  placeholder: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputText: React.FC<Props> = ({ label, placeholder, value, onChange}) => {
  return(
    <div>
      <label>{label}</label>
      <input
        type="text"
        className="w-full px-4 py-2 my-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  )
}

export default InputText;