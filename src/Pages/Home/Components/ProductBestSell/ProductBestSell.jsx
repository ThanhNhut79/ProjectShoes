import { Button } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./ProductBestSell.css";
const ProductBestSell = () => {
  const [arrProduct, setArrProduct] = useState([]);
  const getAllProductApi = async () => {
    const res = await axios({
      // url: "http://ecommerce-shopping-api.onrender.com/api/product",
      url: "https://shop.cyberlearn.vn/api/Product?limit=6",
      method: "GET",
    });
    setArrProduct(res.data.content.slice(6, 14));
  };
  useEffect(() => {
    getAllProductApi();
  }, []);
  return (
    <div>
      <div className="title-content">
        <h2>SẢN PHẨM BEST SELLER</h2>
      </div>
      <div className="row">
        {arrProduct.map((prod) => {
          return (
            <div className="col-3 item-product" key={prod.id}>
              <NavLink
                style={{ textDecoration: "none" }}
                to={`/detail/${prod.id}`}
                className="card"
              >
                <img className="img-list" src={prod.image} alt="..." />
                <div className="card-body">
                  <h3>{prod.name}</h3>
                  <p>Giá :{prod.price} $</p>
                  <p> Còn lại: {prod.quantity} sản phẩm</p>
                  <div className="button-control">
                    <NavLink to={`/detail/${prod.id}`}>
                      <Button>Xem Sản Phẩm</Button>
                    </NavLink>

                    <Button>Them gio hang</Button>
                  </div>
                </div>
              </NavLink>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductBestSell;
