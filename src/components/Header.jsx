import React from 'react'
import { Link } from 'react-router-dom';

function Header() {
    return (
      <div className="header">
          <div className="header__logo">
            <h1>Project</h1>
          </div>
          <div className="header__cart">
            <Link to="/cart">
              <img src="img/cart.png" alt="cart" width={25}/>
            </Link>
          </div>
      </div>
    );
  }

  export default Header;