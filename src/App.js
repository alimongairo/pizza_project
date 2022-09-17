import React from 'react';
import './styles/App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Cart from './pages/Cart';
import Catalog from './pages/Catalog';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/" element={<Catalog/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
