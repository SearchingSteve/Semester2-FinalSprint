import React, { useContext } from 'react';
import { ShoppingCartContext } from '../context/ShoppingCartContext';
import '../styles/Checkout.css';

const Checkout = () => {
  const { cartItems } = useContext(ShoppingCartContext);

  // Calculate total cost
  const totalCost = cartItems.reduce((sum, item) => sum + item.price, 0);

  // Format order details
  const orderDetails = cartItems
    .map(item => `${item.name} - $${item.price}`)
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
          <li key={item.id}>
            {item.name} - ${item.price}
          </li>
        ))}
      </ul>
      <button onClick={handleCheckout}>Checkout</button>
    </div>
  );
};

export default Checkout;
