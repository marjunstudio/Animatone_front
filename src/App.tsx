import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

import Header from './components/organisms/Header/Header';
import Footer from './components/organisms/Footer/Footer';
import SearchForm from './components/organisms/SearchForm/SearchForm';
import SearchResults from './components/organisms/SearchResults/SearchResults';

const App: React.FC =() => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
        <Router>
          <div className="flex-grow bg-base-color">
            <Routes>
              <Route path="/" element={<SearchForm />} />
              <Route path="/search-results" element={<SearchResults />} />
            </Routes>
          </div>
        </Router>
      <Footer />
    </div>
  );
}

export default App;
