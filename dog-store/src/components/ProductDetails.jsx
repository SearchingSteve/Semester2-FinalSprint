import React, { useContext } from "react";
import { ShoppingCartContext } from '../context/ShoppingCartContext';


// Product Details component to display the item details being viewed
const ProductDetails = () => {
    const { id, product, description, price, image } = props.data;
    const { addToCart, cartItems } = useContext(ShoppingCartContext);
  
    const cartItemCount = cartItems[id];


 //Dislay the Product details 
    return (
      <div className="product">
        <img src={image} />
        <div className="description">
          <p>
            <b>{product}</b></p>
          <p>{description}</p>
          <p> ${price}</p>
        </div>
        <button className="addToCartBttn" onClick={() => addToCart(id)}>
          Add To Cart {cartItemCount > 0 && <> ({cartItemCount})</>}
        </button>
      </div>
    );
  };


export default ProductDetails
