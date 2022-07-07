import React from 'react';
import './App.scss';
import Home from './Components/Home';
import { CartProvider } from './Context/CartContext';

function App() {
  return (
    <CartProvider>
      <Home />
    </CartProvider>
  );
}

export default App;
