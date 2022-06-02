import React, { useState, useEffect } from 'react';
import './App.css';
import { Routes, Route, Navigate, } from 'react-router-dom';
import HomePage from './components/HomePage';
import CategoryPage from './components/CategoryPage';
import DetailedProductPage from './components/DetailedProductPage';
import CheckoutPage from './components/CheckoutPage';
import CartContext from './components/CartContext';

function App() {

  return (
    <div>
      <CartContext.Provider value="">
        <Routes>
          <Route index element={<HomePage/>} />
          <Route path="home" element={<HomePage/>}/>
          <Route path="*" element={<Navigate to="/" replace />}/>
          <Route path="headphones" element={<CategoryPage/>}/>
          <Route path="headphones/:id" element={<DetailedProductPage />} />
          <Route path="earphones" element={<CategoryPage/>}/>
          <Route path="earphones/:id" element={<DetailedProductPage />} />
          <Route path="speakers" element={<CategoryPage/>}/>
          <Route path="speakers/:id" element={<DetailedProductPage />} />
          <Route path="/checkout" element={<CheckoutPage/>} />
        </Routes>
      </CartContext.Provider>
    </div>
  );
}

export default App;
