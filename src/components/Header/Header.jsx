import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';

console.log(styles);

function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <Link to="/">
          <h1>Pizza&nbsp;Project</h1>
        </Link>
      </div>
      <div className={styles.cart}>
        <Link to="/cart">
          <img src="img/cart.png" alt="cart" width={25} />
        </Link>
      </div>
    </div>
  );
}

export default Header;
