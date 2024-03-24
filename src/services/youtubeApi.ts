import { SearchParams2, Videos } from "../types";

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

const youtubeSearch = async ( params: SearchParams2): Promise<Videos> => {
  const response = await fetch(`${API_BASE_URL}/api/search`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(params),
  });
  const data = await response.json();
  return data;
};

export default youtubeSearch;