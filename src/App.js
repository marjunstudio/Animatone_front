import React from 'react';
import './App.css';

import Header from './components/organisms/Header/Header';
import Footer from './components/organisms/Footer/Footer';
import SearchForm from './components/molecules/SearchForm/SearchForm';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow bg-base-color">
        <div>
          <SearchForm />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
