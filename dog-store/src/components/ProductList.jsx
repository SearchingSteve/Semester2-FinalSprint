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
    <div className="productList">
      <h1>Product List</h1>
      <div className="product-grid">
        {products.map(product => (
          <div className="productItemCont" key={product.id}>
            <img src={product.image} alt={product.name} className="productImage" />
            <div className="product-info">
              <h4>{product.name}</h4>
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
