import React, { useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getProductById } from '../api/api';
import { ShoppingCartContext } from '../context/ShoppingCartContext';
import '../styles/ProductDetails.css';  

const ProductDetails = () => {
  const { productId } = useParams();
  const product = getProductById(parseInt(productId));
  const { addToCart } = useContext(ShoppingCartContext);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="product-details">
      <img src={product.imageUrl} alt={product.name} className="product-image" />
      <div className="product-info">
        <h1>{product.name}</h1>
        <p>{product.description}</p>
        <p>Price: ${product.price}</p>
        <button onClick={() => addToCart(product)}>Add to Cart</button>
        <Link to="/cart" className="cart-link">Go to Shopping Cart</Link>
      </div>
    </div>
  );
};

export default ProductDetails;
