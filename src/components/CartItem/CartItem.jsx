import React from 'react';
import styles from './CartItem.module.css';

function CartItem() {
  return (
    <div className={styles.cart_item}>
      <div className={styles.block}>
        <img src="./img/pizza_1.png" alt="Added Pizza" className={styles.image} />
      </div>
      <div className={styles.block}>
        <h3 className={styles.title}>Title</h3>
        <div className={styles.params}>dough size</div>
      </div>
      <div className={styles.block}>
        <button className={styles.button}>&ndash;</button>
        <span>amount</span>
        <button className={styles.button}>&#10010;</button>
      </div>
      <div className={styles.block}>price</div>
      <div className={styles.block}>
        <button className={styles.button}>&#10006;</button>
      </div>
    </div>
  );
}

export default CartItem;
