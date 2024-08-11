import React, { useContext } from 'react';
import { ShoppingCartContext } from '../context/ShoppingCartContext';
import { Link } from 'react-router-dom';
import '../styles/ShoppingCart.css';

const ShoppingCart = () => {
  const { cartItems, removeFromCart } = useContext(ShoppingCartContext);

  return (
    <div className="shopping-cart">
      <h1>Shopping Cart</h1>
      <ul>
        {cartItems.map((item, index) => (
          <li key={index} className="cart-item">
            <img src={item.image} alt={item.product} className="cart-item-image" />
            <div className="cart-item-details">
              <h4>{item.product}</h4>
              <p>{item.description}</p>
              <p className="cart-item-price">${item.price}</p>
            </div>
            <button onClick={() => removeFromCart(index)}>Remove</button>
          </li>
        ))}
      </ul>
      <Link to="/checkout" className="checkout-link">Proceed to Checkout</Link>
    </div>
  );
};

export default ShoppingCart;
