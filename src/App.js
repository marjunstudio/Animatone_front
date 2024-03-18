import React from 'react';
import './App.css';

import Header from './components/organisms/Header/Header';
import Footer from './components/organisms/Footer/Footer';

function App() {
  return (
    <div className="App flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow bg-slate-300">
        <div>
          <p>アプリ</p>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
