import React, { useState } from "react";

interface SearchParams {
  [key: string]: any;
}

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

const useSearchForm = () => {
  const [activeTab, setActiveTab] = useState("tab1");
  const [tab1Values, setTab1Values] = useState<SearchParams>({
    title: "",
  });
  const [tab2Values, setTab2Values] = useState<SearchParams>({
    title: "",
    composer: "",
    category: "",
  });

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  const handleTab1Change = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>, field: string) => {
    setTab1Values((prevState) => ({
      ...prevState,
      [field]: event.target.value,
    }));
  };

  const handleTab2Change = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>, field: string) => {
    setTab2Values((prevState) => ({
      ...prevState,
      [field]: event.target.value,
    }));
  };

  const handleSearch = async () => {
    const searchParams = activeTab === "tab1" ? tab1Values : tab2Values;
    const response = await fetch(`${API_BASE_URL}/api/search`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(searchParams),
    });
    const data = await response.json();
    // 検索結果を処理する
    console.log(data);
  };

  return {
    activeTab,
    tab1Values,
    tab2Values,
    handleTabClick,
    handleTab1Change,
    handleTab2Change,
    handleSearch,
  };
};

export default useSearchForm;