import React, { useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  const [text, setText] = useState("");

  const onSubmit = (evt) => {
    evt.preventDefault();
    if (text === "") {
      alert("Please enter something!");
    } else {
      alert(text);
      setText("");
    }
  };

  const onChange = (evt) => setText(evt.target.value);

  return (
    <div className="header-menu wid_100">
      <div className="tophead">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-6">
              <div className="logo_center">
                <div className="logo">
                  <a href="/" className="logo-wrapper ">
                    <img
                      width={240}
                      height={46}
                      className="lazyload loaded"
                      src="//bizweb.dktcdn.net/100/091/133/themes/880367/assets/logo.png?1676015027577"
                      data-src="//bizweb.dktcdn.net/100/091/133/themes/880367/assets/logo.png?1676015027577"
                      alt="logo Breshka shoes"
                      data-was-processed="true"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-9 col-6">
              <div className="content-header">
                <div className="cartgroup d_flex_center">
                  <div className="header-right inline-block">
                    <div className="top-cart-contain f-right">
                      <div className="mini-cart text-xs-center">
                        <div className="heading-cart cart_header">
                          <a
                            className="img_hover_cart"
                            to="/cart"
                            title="Giỏ hàng"
                          >
                            <i className="fa fa-shopping-cart" />
                            <span className="count_item count_item_pr">0</span>
                            Giỏ hàng
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="login_header d_flex_center ">
                  <Link className="btnx" to="/login">
                    <i className="fa fa-user" />
                    <span>Đăng nhập</span>
                  </Link>
                </div>
                <div className="register_header d_flex_center">
                  <Link to="/register">
                    <i className="fa fa-unlock" />
                    <span>Đăng ký</span>
                  </Link>
                </div>
                <div className="search-box-pc d_flex_center">
                  <div className="header-search search_form">
                    <div>
                      <form className="form-search" onSubmit={onSubmit}>
                        <input
                          type="text"
                          name="text"
                          placeholder="Tìm kiếm..."
                          value={text}
                          onChange={onChange}
                          className="bg-white p-2 w-3/4 "
                        />
                        <button
                          type="submit"
                          className="p-2 text-center text-blue-500 w-1/4 border-l btn-search1 "
                        >
                          <i className=" fa-solid fa-magnifying-glass"></i>
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
                <div className="phone-header d_flex_center">
                  <i className="fa-solid fa-phone" />
                  <a className="fone" to>
                    1900 6750
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <nav
          className="navbar navbar-expand-lg bg-body-tertiary"
          data-bs-theme="dark"
        >
          <div className="container">
            <Link className="navbar-brand" to="/">
              TRANG CHỦ
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to="/introduce"
                  >
                    GIỚI THIỆU
                  </Link>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    to="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    SẢN PHẨM
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        Action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Another action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Something else here
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="tintuc">
                    TIN TỨC
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="bando">
                    BẢN ĐỒ
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/contact">
                    LIÊN HỆ
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
