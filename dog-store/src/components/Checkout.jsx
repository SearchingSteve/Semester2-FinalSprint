/* Checkout Component */
/* Submission Date: August 12, 2024 */
/* Author: Stephen Crocker */


import React, { useContext } from 'react';
import { ShoppingCartContext } from '../context/ShoppingCartContext';
import '../styles/Checkout.css';


// Checkout component to display the items in the cart and handle the checkout process
const Checkout = () => {
  const { cartItems } = useContext(ShoppingCartContext);

// Calculate the total cost of the items in the cart
  const totalCost = cartItems.reduce((sum, item) => sum + item.price, 0);

// Create a string of order details to display to the user
  const orderDetails = cartItems
    .map(item => `${item.name} - $${item.price}`)
    .join('\n');

// Function to handle the checkout process and alert user
  const handleCheckout = () => {
    alert(`Order Complete! \n\n Order Info:\n\n${orderDetails}\n\nTotal Cost: $${totalCost.toFixed(2)}`);
  };

// Display the checkout component
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
