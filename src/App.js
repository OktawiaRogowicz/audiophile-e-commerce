import React, { useState } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Category from './components/Category';
import Product from './components/Product';
import ProductDescription from './components/ProductDescription';

function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/:category" element={<Category/>} />
        <Route path="/:category/:id" element={<ProductDescription/>} />
      </Routes>
    </div>
  );
}

export default App;
