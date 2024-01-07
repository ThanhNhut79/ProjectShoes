import React, { useEffect, useState } from "react";
import Banner from "./Components/Banner/Banner";
import Footer from "../../Components/Footer/Footer";
import LeftFilter from "./Components/leftFilter";
import "./Home.css";
import axios from "axios";
import { NavLink } from "react-router-dom";
import { Button } from "antd";

const Home = () => {
  const [arrProduct, setArrProduct] = useState([]);
  const getAllProductApi = async () => {
    const res = await axios({
      // url: "https://ecommerce-shopping-api.onrender.com/api/product",
      url: "https://fakestoreapi.com/products",
      method: "GET",
    });
    setArrProduct(res.data);
  };
  useEffect(() => {
    getAllProductApi();
  }, []);
  return (
    <div>
      <Banner />
      <div className="home_body">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-12 sidebar_index">
              <LeftFilter />{" "}
            </div>
            <div className="col-lg-9 col-12">
              <div className="title-content">
                <h2>SẢN PHẨM MỚI</h2>
              </div>
              <div className="row">
                {arrProduct.map((prod) => {
                  return (
                    <div className="col-4 mt-2" key={prod.id}>
                      <NavLink
                        style={{ textDecoration: "none" }}
                        to={`/detail/${prod.id}`}
                        className="card"
                      >
                        <img className="img-list" src={prod.image} alt="..." />
                        <div className="card-body">
                          <h3>{prod.name}</h3>
                          <p>{prod.price}</p>
                          <p> Còn lại: {prod.quantity} sản phẩm</p>
                          <NavLink
                            className="btn btn-dark"
                            to={`/detail/${prod.id}`}
                          >
                            Xem chi tiết
                          </NavLink>
                          <Button>Thêm vào giỏ hàng</Button>
                        </div>
                      </NavLink>
                    </div>
                  );
                })}
              </div>
              <div>
                <img
                  src="//bizweb.dktcdn.net/100/091/133/themes/880367/assets/banner1.jpg?1676015027577"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
