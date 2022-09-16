import React from 'react';
import './styles/App.css';
// import items from './data.json';
import axios from 'axios'
// import GetData from './api/GetData';

import Header from './components/Header';
import Categories from './components/Categories';
import PizzaBlock from './components/PizzaBlock';

function App() {
  const [items, setItems] = React.useState([]);

  React.useEffect(() => {fetchData()}, []);

  async function fetchData() {
    const response = await axios.get('https://6324d7019075b9cbee42fada.mockapi.io/items');
    setItems(response.data);
  }

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
            key={obj.id}
          />))}
      </div>
    </div>
  );
}

export default App;
