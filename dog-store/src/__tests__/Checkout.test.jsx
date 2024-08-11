/* Checkout Tests */
/* Submission Date: August 12, 2024 */
/* Author: Stephen Crocker */

import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Checkout from '../components/Checkout'; 
import { ShoppingCartContext } from '../context/ShoppingCartContext';

// Create mock ShoppingCartContext
const mockCartItems = [
  { id: 1, product: 'Product 1', price: 10 },
  { id: 2, product: 'Product 2', price: 20 },
];
// Assign children to the context provider
const MockShoppingCartProvider = ({ children }) => (
  <ShoppingCartContext.Provider value={{ cartItems: mockCartItems }}>
    {children}
  </ShoppingCartContext.Provider>
);

// Test Suite for Checkout Component
describe('Checkout Component', () => {


  // Test 1: Test that the total cost is displayed correctly
  test('displays the correct total cost', () => {
    render(
      <MockShoppingCartProvider>
        <Checkout />
      </MockShoppingCartProvider>
    );

    // Check that total cost is displayed correctly
    expect(screen.getByText(/Total Cost: \$30\.00/)).toBeInTheDocument();
  });


  // Test 2: Test that the alert is called with the correct message when the checkout button
  test('handles checkout button click', () => {
    // Mock the alert function
    global.alert = jest.fn();

    render(
      <MockShoppingCartProvider>
        <Checkout />
      </MockShoppingCartProvider>
    );

    // Click the checkout button
    fireEvent.click(screen.getByRole('button', { name: /Checkout/ }));

    // Check that the alert is called with the correct message
    expect(global.alert).toHaveBeenCalledWith(
    `Order Details:\n\nProduct 1 - $10\nProduct 2 - $20\n\nTotal Cost: $30.00\n\nCheckout successful!`
    );
  });
});
