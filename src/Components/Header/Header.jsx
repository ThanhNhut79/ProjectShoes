import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div class="header-menu wid_100">
      <div class="tophead">
        <div class="container">
          <div class="row">
            <div class="col-lg-3 col-6">
              <div class="logo_center">
                <div class="logo">
                  <a href="/" class="logo-wrapper ">
                    <img
                      width="240"
                      height="46"
                      class="lazyload loaded"
                      src="//bizweb.dktcdn.net/100/091/133/themes/880367/assets/logo.png?1676015027577"
                      data-src="//bizweb.dktcdn.net/100/091/133/themes/880367/assets/logo.png?1676015027577"
                      alt="logo Breshka shoes"
                      data-was-processed="true"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div class="col-lg-9 col-6">
              <div class="content-header">
                <div class="cartgroup d_flex_center">
                  <div class="header-right inline-block">
                    <div class="top-cart-contain f-right">
                      <div class="mini-cart text-xs-center">
                        <div class="heading-cart cart_header">
                          <a
                            class="img_hover_cart"
                            href="/cart"
                            title="Giỏ hàng"
                          >
                            <i class="fa fa-shopping-cart"></i>
                            <span class="count_item count_item_pr">0</span>
                            Giỏ hàng
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="login_header d_flex_center ">
                  <a class="btnx" href="/account/login">
                    <i class="fa fa-user"></i>
                    <span>Đăng nhập</span>
                  </a>
                </div>
                <div className="register_header d_flex_center">
                  <a href="/account/register">
                    <i class="fa fa-unlock"></i>
                    <span>Đăng ký</span>
                  </a>
                </div>
                <div class="search-box-pc d_flex_center">
                  <div class="header-search search_form">
                    <form
                      action="/search"
                      method="get"
                      class="input-group search-bar search_form"
                      role="search"
                    >
                      <span class="input-group-btn">
                        <button type="submit" class="btn icon-fallback-text">
                          <span class="fa fa-search"></span>
                        </button>
                      </span>
                      <input
                        type="text"
                        name="query"
                        value=""
                        autocomplete="off"
                        placeholder="Tìm kiếm..."
                        class="input-group-field auto-search"
                        required=""
                      />
                    </form>
                  </div>
                </div>
                <div class="phone-header d_flex_center">
                  <i class="fa-solid fa-phone"></i>
                  <a class="fone" href="">
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
          class="navbar navbar-expand-lg bg-body-tertiary"
          data-bs-theme="dark"
        >
          <div class="container">
            <a class="navbar-brand" href="#">
              TRANG CHỦ
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">
                    GIỚI THIỆU
                  </a>
                </li>
                <li class="nav-item dropdown">
                  <a
                    class="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    SẢN PHẨM
                  </a>
                  <ul class="dropdown-menu">
                    <li>
                      <a class="dropdown-item" href="#">
                        Action
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Another action
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Something else here
                      </a>
                    </li>
                  </ul>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    TIN TỨC
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    BẢN ĐỒ
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    LIÊN HỆ
                  </a>
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
