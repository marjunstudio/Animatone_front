import React, { useEffect, useState } from "react";

import PrimaryButton from "../../atoms/Button/PrimaryButton";
import SearchTab from "../../atoms/Tab/SearchTab";
import InputText from "../../atoms/Input/InputText";
import DropDown from "../../atoms/Input/DropDown";
import useSearchForm from "./useSearchForm";

interface SearchParams {
  [key: string]: any;
}

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

const SearchForm: React.FC = () => {
  const {
    activeTab,
    tab1Values,
    tab2Values,
    handleTabClick,
    handleTab1Change,
    handleTab2Change,
    handleSearch,
  } = useSearchForm();
  
  const [composers, setComposers] = useState<SearchParams>({})
  const [categories, setCategories] = useState<SearchParams>({})

  const fetchComposers = async () => {
    const response = await fetch(`${API_BASE_URL}/api/composers`);
    const data = await response.json();
    setComposers(data);
  };

  const fetchCategories = async () => {
    const response = await fetch(`${API_BASE_URL}/api/categories`);
    const data = await response.json();
    setCategories(data);
  };

  useEffect(() => {
    fetchComposers();
    fetchCategories();
  }, []);

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
                value={tab1Values.title} 
                onChange={(event) => handleTab1Change(event, "title")}
              />
            </>
          )}
          {activeTab === "tab2" && (
            <div>
              <InputText 
                label="楽曲タイトル" 
                placeholder="楽曲タイトル" 
                value={tab2Values.title} 
                onChange={(event) => handleTab2Change(event, "title")}
              />
              <DropDown
                label="作曲者名" 
                value={tab2Values.composer}
                items={composers}
                onChange={(event) => handleTab2Change(event, "composer")}
              />
              <DropDown
                label="カテゴリ" 
                value={tab2Values.category}
                items={categories}
                onChange={(event) => handleTab2Change(event, "category")}
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