import React, { useEffect, useState } from "react";
import Banner from "./Components/Banner/Banner";
import LeftFilter from "./Components/leftFilter";
import "./Home.css";
import axios from "axios";
import { NavLink } from "react-router-dom";
import { Button } from "antd";
import ProductBestSell from "./Components/ProductBestSell/ProductBestSell";

const Home = () => {
  const [arrProduct, setArrProduct] = useState([]);
  const getAllProductApi = async () => {
    const res = await axios({
      url: "https://shop.cyberlearn.vn/api/Product?limit=6",
      method: "GET",
    });
    setArrProduct(res.data.content.slice(0, 6));
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
            <div className="col-lg-9 col-12 card_pros">
              <div className="title-content">
                <h2>SẢN PHẨM MỚI</h2>
              </div>
              <div className="row">
                {arrProduct.map((prod) => {
                  return (
                    <div className="col-4 item-product" key={prod.id}>
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

              {/* <div>
                <ProductBestSell />
              </div> */}
            </div>
          </div>
          <div className="row">
            <div className="banner-product">
              <img
                src="https://blogchiasekienthuc.com/wp-content/uploads/2022/04/tim-hieu-ve-best-seller.jpg"
                alt=""
              />
              <img
                src="https://blogchiasekienthuc.com/wp-content/uploads/2022/04/tim-hieu-ve-best-seller.jpg"
                alt=""
              />
            </div>
            <div>
              <ProductBestSell />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
