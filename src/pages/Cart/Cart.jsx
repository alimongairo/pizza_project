import React from 'react';
import styles from './Cart.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { clearItems} from '../../redux/slices/cartSlice';

import CartItem from '../../components/CartItem/CartItem';

function Cart() {
  // const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  const dispatch = useDispatch();

  const onClickClear = () => {
    if (window.confirm('Очистить корзину?')){
      dispatch(clearItems());
    }
  };

  return (
    <div className={styles.cart}>
      <div className={styles.header}>
        <h2>Корзина</h2>
        <span className={styles.clear_btn} onClick={onClickClear}>Очистить корзину</span>
      </div>
      {items.length ? (
        <div className={styles.item_container}>
          {items.map((item) => (
            <CartItem {...item} key={item.id} />
          ))}
        </div>
      ) : (
        <div className={styles.empty}>
          <h2>Ваша корзина пуста</h2>
        </div>
      )}
      <div className={styles.footer}>
        <h2>Количество товаров: {items.length}</h2>
        <h2>Сумма: {totalPrice} ₽</h2>
      </div>
    </div>
  );
}

export default Cart;
