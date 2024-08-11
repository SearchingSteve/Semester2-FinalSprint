import React, { useContext } from 'react';
import { ShoppingCartContext } from '../context/ShoppingCartContext';
import '../styles/Checkout.css';

const Checkout = () => {
  const { cartItems } = useContext(ShoppingCartContext);

  // Calculate total cost
  const totalCost = cartItems.reduce((sum, item) => sum + item.price, 0);

  // Format order details
  const orderDetails = cartItems
    .map(item => `${item.product} - $${item.price}`)
    .join('\n');

  // Handle checkout
  const handleCheckout = () => {
    alert(`Order Details:\n\n${orderDetails}\n\nTotal Cost: $${totalCost.toFixed(2)}\n\nCheckout successful!`);
  };

  return (
    <div className="checkout">
      <h1>Checkout</h1>
      <ul>
        {cartItems.map(item => (
          <li key={item.id} className="checkout-item">
            <img src={item.image} alt={item.product} className="checkout-item-image" />
            <div className="checkout-item-details">
              <h4>{item.product}</h4>
              <p>{item.description}</p>
              <p className="checkout-item-price">${item.price}</p>
            </div>
          </li>
        ))}
      </ul>
      <div className="checkout-summary">
        <p>Total Cost: <strong>${totalCost.toFixed(2)}</strong></p>
        <button onClick={handleCheckout}>Checkout</button>
      </div>
    </div>
  );
};

export default Checkout;
