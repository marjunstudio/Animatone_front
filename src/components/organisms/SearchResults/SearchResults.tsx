import React from 'react';
import { useLocation } from 'react-router-dom';

import { SearchResult } from '../../../types';

const SearchResults: React.FC = () => {
  const location = useLocation();
  const videos = location.state?.videos || [];
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-4">検索結果</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {videos.map((video: SearchResult) => (
          <div key={video.id.videoId} className="bg-white rounded-lg shadow-md p-4">
            <img
              src={video.snippet.thumbnails.medium.url}
              alt={video.snippet.title}
              className="w-full h-48 object-cover mb-4 rounded"
            />
            <a href={`https://youtu.be/${video.id.videoId}`} className="text-md font-semibold mb-2" >{video.snippet.title}</a>
            <p className="text-gray-500">再生回数: {video.statistics?.viewCount || '-'}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchResults;