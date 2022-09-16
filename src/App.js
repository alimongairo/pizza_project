import React from 'react';
// import { useState } from 'react';
import './styles/App.css';
import items from './data.json';

import Header from './components/Header';
import Categories from './components/Categories';
import PizzaBlock from './components/PizzaBlock';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <Categories />
      <div className="content">
        {items.map((obj) => (
          <PizzaBlock
            title={obj.name}
            prices={obj.prices}
            img={obj.imgUrl}
            sizes={obj.sizes}
            types={obj.types}
          />))}
      </div>
    </div>
  );
}

export default App;
