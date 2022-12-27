import React from 'react';
import logo from './logo.svg';
import './App.css';

import Navbar from './components/navbar/Navbar';

import Button from './components/Button/Button.js';
import CartWidget from './components/CartWidget/CartWidget';


function App() {
  return (
    <div className="App">
        <CartWidget/>
        <Navbar />
        <Button />
    
    </div>
  );
}

export default App;
