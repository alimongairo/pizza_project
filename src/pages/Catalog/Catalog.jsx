import React from 'react';
import styles from './Catalog.module.css';
import axios from 'axios'

import Categories from '../../components/Categories/Categories';
import PizzaBlock from '../../components/PizzaBlock/PizzaBlock';

function Catalog() {
  const [items, setItems] = React.useState([]);

  React.useEffect(() => {fetchData()}, []);

  async function fetchData() {
    const response = await axios.get('https://6324d7019075b9cbee42fada.mockapi.io/items');
    setItems(response.data);
  }

  return (
    <div>
      <Categories />
      <div className={styles.wrapper}>
        <div className={styles.content}>
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
    </div>
  );
}

export default Catalog;
