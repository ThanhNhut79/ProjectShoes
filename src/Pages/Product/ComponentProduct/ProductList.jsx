import React from "react";
import { NavLink } from "react-router-dom";
const ProductList = ({ arrProduct, handleAddToCart }) => (
  <div>
    <div className="productlist">
      {arrProduct.map((prod) => (
        <div className="product">
          <div className="image">
            <img src={prod.image} />
          </div>
          <div className="inventory">
            <h2>{prod.name}</h2>
          </div>
          <div className="cost">${prod.price}</div>
          <div className="cart">
            <button onClick={() => handleAddToCart(prod)}>Add to Cart</button>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default ProductList;
