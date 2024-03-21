import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

import { SearchParams } from "../types";

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

const useSearchForm = () => {
  const navigate = useNavigate();
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
    try {
      const searchParams = activeTab === "tab1" ? tab1Values : tab2Values;
      const params = {
        q: `吹奏楽 ${searchParams.title}`,
      };

      const response = await fetch(`${API_BASE_URL}/api/search`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(params),
      });
      const data = await response.json();
      // TODO:受け取ったdataをSearchResultsに展開して、表示する
      console.log(data.items);
      navigate('/search-results', { state: { videos: data.items } });

    } catch (error) {
      console.error('Error searching videos:', error);
    }
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