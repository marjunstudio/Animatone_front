import React, { useEffect, useState } from 'react';
import axios from 'axios';

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

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

const MusicList: React.FC = () => {
  const [musics, setMusics] = useState<Music[]>([]);
  const { searchVideos } = useYoutubeSearch();

  useEffect(() => {
    const fetchMusics = async () => {
      try {
        const response = await axios.get<Music[]>(`${API_BASE_URL}/api/music-lists`);
        setMusics(response.data);
        console.log(response.data);
        
      } catch (error) {
        console.error('Error fetching musics:', error);
      }
    };

    fetchMusics();
  }, []);

  const handleSearchClick = (title: string) => {
    searchVideos(title);
  };

  return (
    <div>
      <h1>Musicの一覧</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>タイトル</th>
            <th>作曲者名</th>
          </tr>
        </thead>
        <tbody>
          {musics && musics.map((music: Music) => (
            <tr key={music.id}>
              <td>{music.id}</td>
              
              <td>
                <button onClick={() => handleSearchClick(music.title)}>{music.title}</button>
              </td>
              <td>{music.composer.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MusicList;