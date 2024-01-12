import React, { useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  const [text, setText] = useState("");
  const [dropdown, setDropdown] = useState(false);
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
  const handleShowDropdown = () => {
    setDropdown(!dropdown);
  };
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
      <div className="bot_header">
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
                    onClick={handleShowDropdown}
                  >
                    SẢN PHẨM
                  </a>
                  {/* <ul className="dropdown-menu">
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
                  </ul> */}
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
        {/* dropdown */}
        {dropdown && (
          <div className="dropdown_show">
            <div className="mega-content">
              <div className="container">
                <div className="level0-wrapper2">
                  <div className="nav-block nav-block-center">
                    <ul className="level0">
                      <li className="level1 parent item">
                        <h2 className="h4">
                          <a href="/ssandal" title="Sandal">
                            Sandal
                          </a>
                        </h2>
                        <ul className="level1">
                          <li className="level2">
                            <a href="/ssandal" title="Sandal xỏ ngón">
                              <span>Sandal xỏ ngón</span>
                            </a>
                          </li>
                          <li className="level2">
                            <a href="/ssandal" title="Sandal thường">
                              <span>Sandal thường</span>
                            </a>
                          </li>
                          <li className="level2">
                            <a href="/collections/all" title="Sandal Mỹ">
                              <span>Sandal Mỹ</span>
                            </a>
                          </li>
                          <li className="level2">
                            <a href="/collections/all" title="Sandal Việt Nam">
                              <span>Sandal Việt Nam</span>
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="level1 parent item">
                        <h2 className="h4">
                          <a href="/giay-tay" title="Giày tây">
                            Giày tây
                          </a>
                        </h2>
                        <ul className="level1">
                          <li className="level2">
                            <a href="/collections/all" title="Giày tây cao cấp">
                              <span>Giày tây cao cấp</span>
                            </a>
                          </li>
                          <li className="level2">
                            <a
                              href="/collections/all"
                              title="Giày tây nhập khẩu"
                            >
                              <span>Giày tây nhập khẩu</span>
                            </a>
                          </li>
                          <li className="level2">
                            <a
                              href="/collections/all"
                              title="Giày tây Trung Quốc"
                            >
                              <span>Giày tây Trung Quốc</span>
                            </a>
                          </li>
                          <li className="level2">
                            <a href="/collections/all" title="Giày tây 2017">
                              <span>Giày tây 2017</span>
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="level1 parent item">
                        <h2 className="h4">
                          <a href="/giay-casual" title="Giày Casual">
                            Giày Casual
                          </a>
                        </h2>
                        <ul className="level1">
                          <li className="level2">
                            <a
                              href="/collections/all"
                              title="Giay casual mẫu mới"
                            >
                              <span>Giay casual mẫu mới</span>
                            </a>
                          </li>
                          <li className="level2">
                            <a
                              href="/collections/all"
                              title="Giay casual đặc biệt"
                            >
                              <span>Giay casual đặc biệt</span>
                            </a>
                          </li>
                          <li className="level2">
                            <a href="/collections/all" title="Giay casual 2017">
                              <span>Giay casual 2017</span>
                            </a>
                          </li>
                          <li className="level2">
                            <a href="/collections/all" title="Giay casual hot">
                              <span>Giay casual hot</span>
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="level1 parent item">
                        <h2 className="h4">
                          <a href="/giay-luoi" title="Giày lười">
                            Giày lười
                          </a>
                        </h2>
                        <ul className="level1">
                          <li className="level2">
                            <a
                              href="/collections/all"
                              title="Giày lười cao cấp"
                            >
                              <span>Giày lười cao cấp</span>
                            </a>
                          </li>
                          <li className="level2">
                            <a
                              href="/collections/all"
                              title="Giày lười nhập khẩu"
                            >
                              <span>Giày lười nhập khẩu</span>
                            </a>
                          </li>
                          <li className="level2">
                            <a href="/collections/all" title="Giày lười China">
                              <span>Giày lười China</span>
                            </a>
                          </li>
                          <li className="level2">
                            <a href="/collections/all" title="Giày lười 2017">
                              <span>Giày lười 2017</span>
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="level1 parent item">
                        <h2 className="h4">
                          <a href="/giay-co-cao" title="Giày cao cổ">
                            Giày cao cổ
                          </a>
                        </h2>
                        <ul className="level1">
                          <li className="level2">
                            <a href="/collections/all" title="Giày cao cổ nam">
                              <span>Giày cao cổ nam</span>
                            </a>
                          </li>
                          <li className="level2">
                            <a href="/collections/all" title="Giày cao cổ nữ">
                              <span>Giày cao cổ nữ</span>
                            </a>
                          </li>
                          <li className="level2">
                            <a
                              href="/collections/all"
                              title="Giày cao cổ cao cấp"
                            >
                              <span>Giày cao cổ cao cấp</span>
                            </a>
                          </li>
                          <li className="level2">
                            <a href="/collections/all" title="Giày cao cổ 2017">
                              <span>Giày cao cổ 2017</span>
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="level1 parent item">
                        <h2 className="h4">
                          <a href="/giay-di-choi" title="Giày đi chơi">
                            Giày đi chơi
                          </a>
                        </h2>
                        <ul className="level1">
                          <li className="level2">
                            <a
                              href="/collections/all"
                              title="Giày đi chơi giá rẻ"
                            >
                              <span>Giày đi chơi giá rẻ</span>
                            </a>
                          </li>
                          <li className="level2">
                            <a href="/collections/all" title="Giày đá bóng">
                              <span>Giày đá bóng</span>
                            </a>
                          </li>
                          <li className="level2">
                            <a href="/collections/all" title="Giày bóng bàn">
                              <span>Giày bóng bàn</span>
                            </a>
                          </li>
                          <li className="level2">
                            <a href="/collections/all" title="Giày thể thao">
                              <span>Giày thể thao</span>
                            </a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        {/* dropdown */}
      </div>
    </div>
  );
};

export default Header;
