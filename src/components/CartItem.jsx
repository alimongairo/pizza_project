import React from 'react';

function CartItem() {
  return (
    <div className="cart-item">
      <div className="cart-item__block">
        <img src="./img/pizza_1.png" alt="Added Pizza" className="cart-item__image" />
      </div>
      <div className="cart-item__block">
        <h3 className="cart-item__name">Title</h3>
        <div className="cart-item__params">dough size</div>
      </div>
      <div className="cart-item__block">
        <button className="cart-item__button">&ndash;</button>
        <span>amount</span>
        <button className="cart-item__button">&#10010;</button>
      </div>
      <div className="cart-item__block">price</div>
      <div className="cart-item__block">
        <button className="cart-item__button">&#10006;</button>
      </div>
    </div>
  );
}

export default CartItem;
