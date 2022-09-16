import React from 'react'

function Header() {
    return (
      <div className="header">
          <div className="header__logo">
            <h1>Project</h1>
          </div>
          <div className="header__cart">
            <a href="/cart.html">
              <img src="img/cart.png" alt="cart" width={25}/>
            </a>
          </div>
      </div>
    );
  }

  export default Header;