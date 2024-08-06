import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductList from './components/ProductList';
import ProductDetails from './components/ProductDetails';
import ShoppingCart from './components/ShoppingCart';
import Checkout from './components/Checkout';
import { ShoppingCartProvider } from './context/ShoppingCartContext';

const App = () => {
  return (
    <ShoppingCartProvider>
      <Router>
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/product/:productId" element={<ProductDetails />} />
          <Route path="/cart" element={<ShoppingCart />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </Router>
    </ShoppingCartProvider>
  );
};

export default App;
