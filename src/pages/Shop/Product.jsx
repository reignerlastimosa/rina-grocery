import React, { useContext } from "react";
import { ShopContext } from "../../context/Shop-context";

export const Product = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { addToCart, cartItems } = useContext(ShopContext);

  const cartItemCount = cartItems[id];

  const backToLogin = () =>{
    window.location.href="/login";
  }
  return (
    <div className="product">
      <img src={productImage} className="productImage" />
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p> &#8369;{price}</p>
      </div>

      {
        props.login ?
        <button className="addToCartBttn" onClick={() => addToCart(id)}>
        Add To Cart {cartItemCount > 0 && <> ({cartItemCount})</>}
      </button>
      :
      <button className="addToCartBttn" onClick={backToLogin}>
        Add To Cart 
      </button>
      }
      
    </div>
  );
};