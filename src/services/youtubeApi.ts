import { Videos } from "../types";

interface SearchWord {
  q: string;
}
const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

const youtubeSearch = async ( params: SearchWord): Promise<Videos> => {
  const response = await fetch(`${API_BASE_URL}/api/fetch-videos`, {
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