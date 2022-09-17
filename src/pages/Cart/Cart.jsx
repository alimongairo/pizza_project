import React from 'react';
import styles from './Cart.module.css'

import CartItem from '../../components/CartItem/CartItem';

function Cart() {
  return (
    <div className={styles.cart}>
      <div className={styles.header}>
        <h2>Корзина</h2>
        <span className={styles.clear_btn}>Очистить корзину</span>
      </div>
      <div className={styles.item_container}>
        <CartItem />
      </div>
      <div className={styles.footer}>
        <h2>Сумма:</h2>
      </div>
    </div>
  );
}

export default Cart;
