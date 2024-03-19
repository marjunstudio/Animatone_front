import React from "react";

interface Props {
  label: string;
  value: string;
  items: { [key: string]: string };
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const DropDown: React.FC<Props> = ({ label, value, items, onChange}) => {
  return (
    <div>
      <label>{label}</label>
      <select
        className="w-full px-4 py-2 my-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={value}
        onChange={onChange}
      >
        <option value="">選択してください</option>
        {Object.entries(items).map(([key, value]) => (
          <option key={key} value={key}>
            {value}
          </option>
        ))}
      </select>
    </div>
  )
}

export default DropDown;