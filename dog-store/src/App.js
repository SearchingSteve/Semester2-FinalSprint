import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductList from './components/ProductList';
import ProductDetails from './components/ProductDetails';
import ShoppingCart from './components/ShoppingCart';
import Checkout from './components/Checkout';
import { ShoppingCartProvider } from './context/ShoppingCartContext';
import './styles/App.css';
import Nav from './components/Nav';

const App = () => {
  return (
    <ShoppingCartProvider>
      <Router>
        <div className="appContainer">
          <Nav/> 
          <Routes>
            <Route path="/" element={<ProductList />} />
            <Route path="/product-details" element={<ProductDetails />} />
            <Route path="/shopping-cart" element={<ShoppingCart />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </div>
      </Router>
    </ShoppingCartProvider>
  );
};

export default App;