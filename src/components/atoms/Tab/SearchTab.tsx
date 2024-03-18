import React from "react";

interface TabProps {
  label: string;
  tab: string;
  activeTab: string;
  onTabClick: (tab: string) => void;
}

const SearchTab: React.FC<TabProps> = ({ label, tab, activeTab, onTabClick }) => {
  return (
    <div
      className={`px-4 py-2 cursor-pointer ${
        activeTab === tab
          ? "bg-accent-color text-slate-600 rounded-t-lg"
          : "text-gray-500 hover:text-gray-700"
      }`}
      onClick={() => onTabClick(tab)}
    >
      {label}
    </div>
  );
};

export default SearchTab;