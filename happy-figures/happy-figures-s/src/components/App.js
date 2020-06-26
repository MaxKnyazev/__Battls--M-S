import React from 'react';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import Game from './Game';

const App = () => {
  return (
    <div className='App'>
      <Header />
      <Game />
      <Footer />
    </div>
  )
}

export default App;
