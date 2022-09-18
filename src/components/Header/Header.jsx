import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import { useSelector } from 'react-redux';

function Header() {
  const { items, totalPrice } = useSelector((state) => state.cart);

  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <Link to="/">
          <h1>Pizza&nbsp;Project</h1>
        </Link>
      </div>
      <div className={styles.cart}>
        <Link to="/cart">
          <div className={styles.logo}>{totalPrice} ₽</div>
          <div className={styles.logo}> | </div>
          <img src="img/cart.png" alt="cart" width={25} />
          <div className={styles.logo}>{items.length}</div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
