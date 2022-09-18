import React from 'react';
import styles from './CartItem.module.css';
import { useDispatch } from 'react-redux';
import { removeItem } from '../../redux/slices/cartSlice';

function CartItem(props) {
  const dispatch = useDispatch();

  const onClickRemove = () => {
    if (window.confirm('Удалить товар из корзины?')){
      dispatch(removeItem(props.id));
    }
  };

  return (
    <div className={styles.cart_item}>
      <div className={styles.block}>
        <img src={props.image} alt="Added Pizza" className={styles.image} />
      </div>
      <div className={styles.block}>
        <h3 className={styles.title}>{props.title}</h3>
        <div className={styles.params}>
          {props.type}, {props.size} см
        </div>
      </div>
      <div className={styles.block}>
        {/* <button className={styles.button}>&ndash;</button>
        <span>{props.amount}</span>
        <button className={styles.button}>&#10010;</button> */}
      </div>
      <div className={styles.block}>
        <span className={styles.price}>{props.price} ₽</span>
      </div>
      <div className={styles.block}>
        <button className={styles.button} onClick={onClickRemove}>&#10006;</button>
      </div>
    </div>
  );
}

export default CartItem;
