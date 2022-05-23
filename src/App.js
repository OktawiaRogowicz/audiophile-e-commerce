import React, { useState } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import CategoryPage from './components/CategoryPage';
import DetailedProductPage from './components/DetailedProductPage';
import CheckoutPage from './components/CheckoutPage';
import CartContext from './components/CartContext';

function App() {

  return (
    <div>
      <CartContext.Provider value="blep">
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/:category" element={<CategoryPage/>} />
          <Route path="/:category/:id" element={<DetailedProductPage/>} />
          <Route path="/checkout" element={<CheckoutPage/>} />
        </Routes>
      </CartContext.Provider>
    </div>
  );
}

export default App;
