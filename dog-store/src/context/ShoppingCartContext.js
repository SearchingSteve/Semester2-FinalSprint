/* Shopping Cart Context */
/* Submission Date: August 12, 2024 */
/* Author: Stephen Crocker, Sara Woodford, Michelle Anderson */

import React, { createContext, useState } from 'react';

// Initialize Shopping Cart Context
export const ShoppingCartContext = createContext();

// Component to manage cart state and provide context to children
export const ShoppingCartProvider = ({ children }) => {
  // State to store cart items
  const [cartItems, setCartItems] = useState([]);

  // Function to add a product to the cart
  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  // Function to remove a product from the cart by its ID
  const removeFromCart = (productId) => {
    setCartItems(cartItems.filter(item => item.id !== productId));
  };

  // Provide cart items and cart respective cart functions to children components
  return (
    <ShoppingCartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </ShoppingCartContext.Provider>
  );
<<<<<<< Updated upstream
};
=======
};
>>>>>>> Stashed changes
