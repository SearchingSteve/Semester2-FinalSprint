import React, { useContext } from 'react';
import { ShoppingCartContext } from '../context/ShoppingCartContext';
import { Link } from 'react-router-dom';
import '../styles/ShoppingCart.css';

const ShoppingCart = () => {
  const { cartItems, removeFromCart } = useContext(ShoppingCartContext);

  return (
    <div>
      <h1>Shopping Cart</h1>
      <ul>
        {cartItems.map(item => (
          <li key={item.id}>
            {item.name} - ${item.price}
            <button onClick={() => removeFromCart(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
      <Link to="/checkout">Proceed to Checkout</Link>
    </div>
  );
};

export default ShoppingCart;
