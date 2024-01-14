import { Button } from "antd";
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
            <NavLink to={`/detail/${prod.id}`}>
              <Button className="view-detail">Xem Sản Phẩm</Button>
            </NavLink>
            <Button
              className="btn-add-cart"
              onClick={() => handleAddToCart(prod)}
            >
              Thêm giỏ hàng
            </Button>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default ProductList;
