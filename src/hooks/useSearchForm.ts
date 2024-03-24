import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

import { SearchParams } from "../types";

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

const useSearchForm = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("tab2");
  const [tabValues, settabValues] = useState<SearchParams>({
    title: "",
    composer: "",
    category: "",
  });

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  const handleTabChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>, field: string) => {
    settabValues((prevState) => ({
      ...prevState,
      [field]: event.target.value,
    }));
  };

  const handleSearch = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/search`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(tabValues),
      });
      const data = await response.json();
      console.log(tabValues);
      console.log(data.items);
      navigate('/music-lists', { state: { musics: data.items } });

    } catch (error) {
      console.error('Error searching videos:', error);
    }
  };

  return {
    activeTab,
    tabValues,
    handleTabClick,
    handleTabChange,
    handleSearch,
  };
};

export default useSearchForm;