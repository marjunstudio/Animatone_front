import React from 'react';
import { useLocation } from 'react-router-dom';

import useYoutubeSearch from '../../../hooks/useYoutubeSearch';

interface Composer {
  id: number;
  name: string;
}

interface Music {
  id: number;
  title: string;
  composer: Composer;
}

const MusicList: React.FC = () => {
  const { searchVideos } = useYoutubeSearch();
  const location = useLocation();
  const musics = location.state?.musics as Music[] || [];

  const handleSearchClick = (title: string) => {
    searchVideos(title);
  };

  return (
    <>
      <h1>Musicの一覧</h1>
      {musics.length > 0 ? (
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap -m-4">
            {musics.map((music: Music) => (
              <div className="p-4 lg:w-1/4" key={music.id}>
                <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                  <button 
                    className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3 hover:text-gray-500" 
                    onClick={() => handleSearchClick(music.title)}
                  >
                    {music.title}
                  </button>
                  <p className="leading-relaxed mb-3">{music.composer.name}</p>
                  <p className="leading-relaxed mb-3">タグ</p>
                  <div className="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">
                    <span className="text-gray-400 mr-3 inline-flex items-center leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                      <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                        <circle cx="12" cy="12" r="3"></circle>
                      </svg>1.2K
                    </span>
                    <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                      <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                      </svg>6
                    </span>
                  </div>
                </div>
              </div>
              ))}
            </div>
          </div>
        </section>
          ) : (
        <p>該当する楽曲がありません</p>
      )}
    </>
  );
};

export default MusicList;