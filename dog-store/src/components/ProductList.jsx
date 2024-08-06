import React, { useState, useEffect, useContext } from 'react';
import { getProducts } from '../api/api';
import { Link } from 'react-router-dom';
import { ShoppingCartContext } from '../context/ShoppingCartContext';
import '../styles/ProductList.css';  

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const { addToCart } = useContext(ShoppingCartContext);

  useEffect(() => {
    setProducts(getProducts());
  }, []);

  return (
    <div className="product-list">
      <h1>Product List</h1>
      <div className="product-grid">
        {products.map(product => (
          <div className="product-card" key={product.id}>
            <img src={product.imageUrl} alt={product.name} className="product-image" />
            <div className="product-info">
              <h2>{product.name}</h2>
              <p>${product.price}</p>
              <Link to={`/product/${product.id}`} className="details-link">View Details</Link>
              <button onClick={() => addToCart(product)}>Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
