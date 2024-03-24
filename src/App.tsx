import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

import Header from './components/organisms/Header/Header';
import Footer from './components/organisms/Footer/Footer';
import SearchForm from './components/organisms/SearchForm/SearchForm';
import SearchResults from './components/organisms/SearchResults/SearchResults';
import MusicList from './components/organisms/MusicList/MusicList';

const App: React.FC =() => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
        <Router>
          <div className="flex-grow bg-base-color">
            <Routes>
              <Route path="/" element={<SearchForm />} />
              <Route path="/search-results" element={<SearchResults />} />
              <Route path="/music-lists" element={<MusicList />} />
            </Routes>
          </div>
        </Router>
      <Footer />
    </div>
  );
}

export default App;
