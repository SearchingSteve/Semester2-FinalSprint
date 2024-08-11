import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // This provides additional matchers like `toBeInTheDocument`
import ShoppingCart from '../components/ShoppingCart';
import { ShoppingCartContext } from '../context/ShoppingCartContext';
import { BrowserRouter as Router } from 'react-router-dom';

// Mock context values
const cartItems = [
  {
    image: 'test-image.png',
    product: 'Test Product',
    description: 'Test Description',
    price: 100,
  },
];

const renderWithContext = () => {
  return render(
    <Router>
      <ShoppingCartContext.Provider value={{ cartItems }}>
        <ShoppingCart />
      </ShoppingCartContext.Provider>
    </Router>
  );
};

describe('ShoppingCart Component', () => {
  test('renders cart items correctly', () => {
    // Render the ShoppingCart component with the mock context values
    renderWithContext();

    // Check if the product name is displayed on the screen
    const productNameElement = screen.getByText('Test Product');
    expect(productNameElement).toBeInTheDocument();

    // Check if the product description is displayed on the screen
    const descriptionElement = screen.getByText('Test Description');
    expect(descriptionElement).toBeInTheDocument();

    // Check if the product price is displayed on the screen
    const priceElement = screen.getByText('$100');
    expect(priceElement).toBeInTheDocument();

    // Check if the image element with the correct 'src' attribute is displayed
    const imageElement = screen.getByRole('img', { name: 'Test Product' });
    expect(imageElement).toHaveAttribute('src', 'test-image.png');
  });
});