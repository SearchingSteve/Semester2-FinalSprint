import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductList from './components/ProductList';
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
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </div>
      </Router>
    </ShoppingCartProvider>
  );
};

export default App;