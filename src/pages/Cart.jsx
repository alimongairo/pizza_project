import React from 'react';

import CartItem from '../components/CartItem';

function Cart() {
  return (
    <div className="cart">
      <div className="cart__header">
        <h2>Корзина</h2>
      </div>
      <div className='cart__item-container'>
        <CartItem />
      </div>
      <div className="cart__footer">
        <h2>Сумма:</h2>
      </div>
    </div>
  );
}

export default Cart;
