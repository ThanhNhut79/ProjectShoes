import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div>
      <footer className="footer-area footer--light">
        <div className="footer-big">
          <div className="container">
            <div className="row">
              <div className="col-md-3 col-sm-12">
                <div className="footer-widget">
                  <div className="widget-about">
                    <img
                      src="https://bizweb.dktcdn.net/100/091/133/themes/880367/assets/logo-footer.png?1676015027577"
                      alt
                      className="img-fluid"
                    />
                    <ul className="contact-details">
                      <li>
                        <span className="icon-envelope-open" />
                        Địa Chỉ :
                        <a href="mailto:support@aazztech.com">
                          Tầng 6,tòa nhà Ladeco,266 Đội Cấn,Hà Nội,Việt Nam, Hà
                          Nội
                        </a>
                      </li>
                      <li>
                        <span className="icon-earphones" /> Call Us:
                        <a href="tel:344-755-111">1900 12345</a>
                      </li>
                      <li>
                        <span className="icon-envelope-open" /> Email:
                        <a href="mailto:support@aazztech.com">
                          mindxQuangTrung@gmail.com.vn
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-sm-4">
                <div className="footer-widget">
                  <div className="footer-menu footer-menu--1">
                    <h4 className="footer-widget-title">Categories</h4>
                    <ul>
                      <li>
                        <a href="#">Ecommerce</a>
                      </li>
                      <li>
                        <a href="#">Shopify</a>
                      </li>
                      <li>
                        <a href="#">Prestashop</a>
                      </li>
                      <li>
                        <a href="#">Opencart</a>
                      </li>
                      <li>
                        <a href="#">Magento</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-sm-4">
                <div className="footer-widget">
                  <div className="footer-menu">
                    <h4 className="footer-widget-title">Information</h4>
                    <ul>
                      <li>
                        <a href="#">Home</a>
                      </li>
                      <li>
                        <a href="#">About Us</a>
                      </li>
                      <li>
                        <a href="#">Contact Us</a>
                      </li>
                      <li>
                        <a href="#">Returns & Exchanges</a>
                      </li>
                      <li>
                        <a href="#">Shipping & Delivery</a>
                      </li>
                      <li>
                        <a href="#">Privacy Policy</a>
                      </li>
                      <li>
                        <a href="#">Blog</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-sm-4">
                <div className="footer-widget">
                  <div className="footer-menu no-padding">
                    <h4 className="footer-widget-title">Help Support</h4>
                    <ul>
                      <li>
                        <a href="#">Support Forum</a>
                      </li>
                      <li>
                        <a href="#">Terms &amp; Conditions</a>
                      </li>
                      <li>
                        <a href="#">Support Policy</a>
                      </li>
                      <li>
                        <a href="#">Refund Policy</a>
                      </li>
                      <li>
                        <a href="#">FAQs</a>
                      </li>
                      <li>
                        <a href="#">Buyers Faq</a>
                      </li>
                      <li>
                        <a href="#">Sellers Faq</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
