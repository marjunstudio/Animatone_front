import React, { useEffect, useState } from "react";

import PrimaryButton from "../../atoms/Button/PrimaryButton";
import SearchTab from "../../atoms/Tab/SearchTab";
import InputText from "../../atoms/Input/InputText";
import DropDown from "../../atoms/Input/DropDown";
import useSearchForm from "../../../hooks/useSearchForm";

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

const SearchForm: React.FC = () => {
  const {
    activeTab,
    tabValues,
    handleTabClick,
    handleTabChange,
    handleSearch,
  } = useSearchForm();
  
  const [composers, setComposers] = useState<{id: number, name: string}[]>([]);

  const fetchComposers = async () => {
    const response = await fetch(`${API_BASE_URL}/api/composers`);
    const data = await response.json();
    setComposers(data);
  };

  useEffect(() => {
    fetchComposers();
  }, []);

  return (
    <div className="flex justify-center mt-20">
      <div className="bg-white shadow-md rounded-lg p-4 w-full max-w-4xl mx-4">
        <div className="flex">
          <SearchTab label="詳細検索" tab="tab2" activeTab={activeTab} onTabClick={handleTabClick} />
        </div>
        <div className="mt-4">
          {activeTab === "tab2" && (
            <div>
              <InputText 
                label="楽曲タイトル" 
                placeholder="楽曲タイトル" 
                value={tabValues.title} 
                onChange={(event) => handleTabChange(event, "title")}
              />
              <DropDown
                label="作曲者名" 
                value={tabValues.composer}
                items={composers}
                onChange={(event) => handleTabChange(event, "composer")}
              />
            </div>
          )}
        </div>
        <div className="flex justify-center mt-4">
          <PrimaryButton onClick={handleSearch} text="検索" />
        </div>
      </div>
    </div>
  );
};

export default SearchForm;