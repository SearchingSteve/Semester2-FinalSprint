import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Nav.css'; 

const Nav = () => {
  const navigate = useNavigate();

  return (
    <nav className="nav">
      <div className="navIcon" onClick={() => navigate('/')}>
        <img src="../images/apiImages/BoneToy.jpg" alt="Home" className="navIconImage" />
      </div>

    <div className ="navItems">
      <div className="navShoppingCart" onClick={() => navigate('/cart')}>
        <img src="/images/apiImages/shopping-cart-icon.png" alt="Shopping Cart" className="navShoppingCartImage" />
      </div>

      <div className="navCheckout" onClick={() => navigate('/checkout')}>
        <img src="/images/apiImages/shopping-cart-icon.png" alt="Checkout" className="navCheckoutImage" />
      </div>
      </div>
    </nav>
  );
};

export default Nav;
