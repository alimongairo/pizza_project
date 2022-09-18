import React from 'react';
import styles from './Catalog.module.css';
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux';

import Categories from '../../components/Categories/Categories';
import PizzaBlock from '../../components/PizzaBlock/PizzaBlock';
import { setCategoryID } from '../../redux/slices/filterSlice';

function Catalog() {
  const [items, setItems] = React.useState([]);
  const categoryID = useSelector(state => state.filter.categoryID);
  const dispatch = useDispatch();

  React.useEffect(() => {fetchData(categoryID)}, [categoryID]);

  async function fetchData(catID) {
    const response = await axios.get(`https://6324d7019075b9cbee42fada.mockapi.io/items?${catID > 0 ? `category=${catID}` : ''}`);
    setItems(response.data);
  }

  const onClickCategory = (id) => {
    dispatch(setCategoryID(id));
  }

  // console.log(items);

  return (
    <div>
      <Categories id={categoryID} onClickCat={onClickCategory}/>
      <div className={styles.wrapper}>
        <div className={styles.content}>
            {items.map((obj) => (
            <PizzaBlock
                id={obj.id}
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
