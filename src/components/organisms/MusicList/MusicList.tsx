import React from 'react';
import { useLocation } from 'react-router-dom';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

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
      <div className="flex flex-col text-center w-full mt-12">
        <h1 className="sm:text-4xl text-3xl font-medium title-font text-gray-900">楽曲一覧</h1>
      </div>
      <p className='text-center mt-6'>{musics.length}件の楽曲が見つかりました。</p>
      {musics.length > 0 ? (
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-16 mx-auto">
            <div className="flex flex-wrap justify-start -m-4">
            {musics.map((music: Music) => (
              <div className="p-3 lg:w-1/4" key={music.id}>
                <div className="h-full bg-cover bg-tile-image px-8 pt-10 pb-24 rounded-lg overflow-hidden text-center relative">
                  <button 
                    className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3 hover:text-gray-500" 
                    onClick={() => handleSearchClick(music.title)}
                  >
                    {music.title}
                  </button>
                  <p className="flex flex-wrap justify-start text-sm text-gray-500 leading-relaxed mb-3">楽曲の説明文楽曲の説明文楽曲の説明文楽曲の説明文</p>
                  <p className="flex justify-start leading-relaxed mb-3">{music.composer.name}</p>
                  <p className="flex justify-start eading-relaxed mb-3">#タグ</p>
                  <div className="mt-2 flex justify-end absolute bottom-0 right-4 w-full py-4">
                    <FavoriteBorderIcon></FavoriteBorderIcon>
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