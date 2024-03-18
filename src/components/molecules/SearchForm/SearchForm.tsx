import React, { useState } from "react";

import PrimaryButton from "../../atoms/Button/PrimaryButton";
import SearchTab from "../../atoms/Tab/SearchTab";
import InputText from "../../atoms/Input/InputText";
import DropDown from "../../atoms/Input/DropDown";

interface SearchParams {
  [key: string]: {
    [key: string]: string;
  };
}

const SearchForm: React.FC = () => {
  const [activeTab, setActiveTab] = useState("tab1");
  const [searchValues, setSearchValues] = useState<SearchParams>({
    tab1: {
      title: "",
      composer: "",
    },
    tab2: {
      title: "",
    }
  });

  const composers = ["作曲者1", "作曲者2", "作曲者3", "作曲者4"]
  const categories = ["マーチ", "課題曲", "ポップス"]

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    tab: string,
    field: string
  ) => {
    setSearchValues((prevState) => ({
      ...prevState,
      [tab]: {
        ...prevState[tab],
        [field]: event.target.value,
      },
    }));
  };


  const handleSelectChange = (
    event: React.ChangeEvent<HTMLSelectElement>,
    tab: string,
    field: string
  ) => {
    setSearchValues((prevState) => ({
      ...prevState,
      [tab]: {
        ...prevState[tab],
        [field]: event.target.value,
      },
    }));
  };

  const handleSearch =() => {
    const searchParams = searchValues[activeTab];
    console.log("Search params:", searchParams);

  }

  return (
    <div className="flex justify-center mt-20">
      <div className="bg-white shadow-md rounded-lg p-4 w-full max-w-4xl mx-4">
        <div className="flex">
          <SearchTab label="簡単検索" tab="tab1" activeTab={activeTab} onTabClick={handleTabClick} />
          <SearchTab label="詳細検索" tab="tab2" activeTab={activeTab} onTabClick={handleTabClick} />
        </div>
        <div className="mt-4">
          {activeTab === "tab1" && (
            <>
              <InputText 
                label="楽曲タイトル" 
                placeholder="楽曲タイトル" 
                value={searchValues.tab1.title} 
                onChange={(event) => handleInputChange(event, "tab1", "title")}
              />
            </>
          )}
          {activeTab === "tab2" && (
            <div>
              <InputText 
                label="楽曲タイトル" 
                placeholder="楽曲タイトル" 
                value={searchValues.tab2.title} 
                onChange={(event) => handleInputChange(event, "tab2", "title")}
              />
              <DropDown
                label="作曲者名" 
                value={searchValues.tab2.composer}
                items={composers}
                onChange={(event) => handleSelectChange(event, "tab2", "composer")}
              />
              <DropDown
                label="カテゴリ" 
                value={searchValues.tab2.category}
                items={categories}
                onChange={(event) => handleSelectChange(event, "tab2", "category")}
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