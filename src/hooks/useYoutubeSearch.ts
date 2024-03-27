import { useNavigate } from 'react-router-dom';

import youtubeSearch from "../services/youtubeApi";

const useYoutubeSearch = () => {
  const navigate = useNavigate();

  const searchVideos = async (title: string) => {
    try {
      const params = {
        q: `吹奏楽 ${title}`
      }
      const data = await youtubeSearch(params);
      navigate('/search-results', { state: { videos: data.items } });
    } catch (error) {
      console.error('Error searching videos:', error);
    }
  };
  return {
    searchVideos,
  };
};

export default useYoutubeSearch;