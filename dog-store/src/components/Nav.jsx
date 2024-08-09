import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Nav.css'; 

const Nav = () => {
  const navigate = useNavigate();

  return (
    <nav className="navBar">
      <div className="navIcon" onClick={() => navigate('/')}>
        <img src="../images/apiImages/BoneToy.jpg" alt="Home" className="navIconImage" />
      </div>
      <div className="navCheckout" onClick={() => navigate('/checkout')}>
        <img src="/images/apiImages/shopping-cart-icon.png" alt="Checkout" className="navCheckoutImage" />
      </div>
    </nav>
  );
};

export default Nav;
