import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductList from './components/ProductList';
import ProductDetails from './components/ProductDetails';
import ShoppingCart from './components/ShoppingCart';
import Checkout from './components/Checkout';
import { ShoppingCartProvider } from './context/ShoppingCartContext';
import Nav from './components/Nav';

const App = () => {
  return (
    
    <ShoppingCartProvider>
      <Router>
      <Nav/>
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
