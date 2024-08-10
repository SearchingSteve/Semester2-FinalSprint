import React, { useContext } from "react";
import { ShoppingCartContext } from '../context/ShoppingCartContext';

// Shopping cart component to display the items in the cart
const ShoppingCart = (props) => {
  const { id, product, price, Image } = props.data;
  const { cartItems, addToCart, removeFromCart, updateCartItemCount } =
    useContext(ShoppingCartContext);

 //Display the shopping cart component 
    return (
    <div className="cartItem">
      <img src={Image} />
      <div className="description">
        <p>
          <b>{product}</b>
        </p>
        <p> Price: ${price}</p>
        <div className="countHandler">
          <button onClick={() => removeFromCart(id)}> - </button>
          <input
            value={cartItems[id]}
            onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
          />
          <button onClick={() => addToCart(id)}> + </button>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart
