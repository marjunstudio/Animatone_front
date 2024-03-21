import React from 'react';
import { useLocation } from 'react-router-dom';

import { SearchResult } from '../../../types';

const SearchResults: React.FC = () => {
  const location = useLocation();
  const videos = location.state?.videos || [];
  return (
    <div>
      <h2>検索結果</h2>
      {videos.map((video: SearchResult) => (
        <div key={video.id.videoId}>
          <img src={video.snippet.thumbnails.medium.url} alt={video.snippet.title} />
          <h3>{video.snippet.title}</h3>
          <p>{video.snippet.description}</p>
        </div>
      ))}
    </div>
  );
};

export default SearchResults;