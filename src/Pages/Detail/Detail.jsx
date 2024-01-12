import React from "react";
import "./Detail.css";
import { Breadcrumb } from "antd";

const Detail = () => {
  return (
    <div className="detail">
      <div className="container">
        <div className="row">
          <div className="bread-crumb">
            <Breadcrumb
              items={[
                {
                  href: "/",
                  title: "Trang chủ",
                },

                {
                  title: "Sản phẩm",
                },
                {
                  title: "Tên sản phẩm",
                },
              ]}
            />
          </div>
          <div className="col-5">
            <div className="img-product">
              <img
                className="img-item"
                src="https://bizweb.dktcdn.net/thumb/1024x1024/100/091/133/products/zal1.jpg?v=1466482812400"
                alt=""
              />
            </div>
            <div className="list-thumb">
              <div className="thumb-item">
                <img
                  src="https://bizweb.dktcdn.net/thumb/small/100/091/133/products/zal1.jpg?v=1466482812400"
                  alt=""
                />
              </div>
              <div className="thumb-item">
                <img
                  src="https://bizweb.dktcdn.net/thumb/small/100/091/133/products/2560102001-2-1-1.jpg?v=1466482812400"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="col-7">
            <div>
              <div className="details-pro">
                <h1 className="title-product">
                  Giày Converse Star Collar Break
                </h1>
                <div className="group-status">
                  <span className="first_status">
                    <span className="a_name">Thương hiệu:</span>{" "}
                    <span className="status_name">Converse</span>
                    <span className="border-xs">&nbsp;&nbsp;|&nbsp;&nbsp;</span>
                  </span>
                  <span className="first_status status_2">
                    <span className="a_name">Tình trạng:</span>
                    <span className="status_name availabel">
                      <link itemProp="availability" href="" />
                      Còn hàng
                    </span>
                  </span>
                </div>
                <div
                  className="fw w_100"
                  itemProp="offers"
                  itemScope
                  itemType="https://schema.org/Offer"
                >
                  <div className="price-box">
                    <span className="special-price">
                      <span className="price product-price">450.000₫</span>
                      <meta itemProp="price" content={450000} />
                      <meta itemProp="priceCurrency" content="VND" />
                    </span>{" "}
                    {/* Giá Khuyến mại */}
                    <span
                      className="old-price"
                      itemProp="priceSpecification"
                      itemScope
                      itemType="https://schema.org/priceSpecification"
                    >
                      <del className="price product-price-old sale">
                        500.000₫
                      </del>
                      <meta itemProp="price" content={500000} />
                      <meta itemProp="priceCurrency" content="VND" />
                    </span>{" "}
                    {/* Giá gốc */}
                  </div>
                  <div className="product-summary">
                    <div className="rte">
                      <em>Mô tả đang cập nhật</em>
                    </div>
                  </div>
                </div>
                <div className="form-product col-sm-12 col-lg-12 col-md-12 col-xs-12">
                  <div className="box-variant clearfix ">
                    <input
                      type="hidden"
                      name="variantId"
                      defaultValue={4599650}
                    />
                  </div>
                  <div className="form-group form_button_details">
                    <div className="form_product_content type1 ">
                      <div className="soluong soluong_type_1 show">
                        <label>Số lượng:</label>
                        <div className="custom input_number_product custom-btn-number form-control">
                          <button
                            className="btn_num num_1 button button_qty"
                            onclick="var result = document.getElementById('qtym'); var qtypro = result.value; if( !isNaN( qtypro ) && qtypro > 1 ) result.value--;return false;"
                            type="button"
                          >
                            <i className="fa fa-minus" />
                          </button>
                          <input
                            type="text"
                            id="qtym"
                            name="quantity"
                            defaultValue={1}
                            maxLength={3}
                            className="form-control prd_quantity "
                            onkeypress="if ( isNaN(this.value + String.fromCharCode(event.keyCode) )) return false;"
                            onchange="if(this.value == 0)this.value=1;"
                          />
                          <button
                            className="btn_num num_2 button button_qty"
                            onclick="var result = document.getElementById('qtym'); var qtypro = result.value; if( !isNaN( qtypro )) result.value++;return false;"
                            type="button"
                          >
                            <i className="fa fa-plus" />
                          </button>
                        </div>
                      </div>
                      <div className="button_actions clearfix">
                        <button
                          type="submit"
                          className="btn btn_base btn_add_cart btn-cart add_to_cart"
                        >
                          <span className="text_1">Thêm vào giỏ hàng</span>
                        </button>
                      </div>
                      <div className="call-phone">
                        <span>
                          Gọi
                          <a href="tell:19006750">1900 6750</a>
                          để được trợ giúp
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="tag-product">
                    <span className="inline">Tags:</span>
                    <a href="/search?query=converse" title="converse">
                      converse{" "}
                    </a>
                    <a href="/search?query=Giày%20vải" title="Giày vải">
                      Giày vải{" "}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="description">
          <div>
            <ul className="nav nav-tabs" id="myTab" role="tablist">
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link active"
                  id="home-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#home-tab-pane"
                  type="button"
                  role="tab"
                  aria-controls="home-tab-pane"
                  aria-selected="true"
                >
                  Thông tin sản phẩm
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="profile-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#profile-tab-pane"
                  type="button"
                  role="tab"
                  aria-controls="profile-tab-pane"
                  aria-selected="false"
                >
                  Thanh toán vận chuyển
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="contact-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#contact-tab-pane"
                  type="button"
                  role="tab"
                  aria-controls="contact-tab-pane"
                  aria-selected="false"
                >
                  Đánh giá sản phẩm
                </button>
              </li>
            </ul>
            <div className="tab-content" id="myTabContent">
              <div
                className="tab-pane fade show active"
                id="home-tab-pane"
                role="tabpanel"
                aria-labelledby="home-tab"
                tabIndex={0}
              >
                <div>
                  <p style={{ textAlign: "justify" }}>
                    Giày thể thao&nbsp;nam đẹp da màu nâu cao cấp, thanh lịch từ
                    thương hiệu Converse®
                    <br />
                    Chất liệu giày bằng da bò mềm với chi tiết mũi giày cap-toe
                    <br />
                    Mắt xỏ dây âm với dây cột nylon
                    <br />
                    Lót trong bằng da thoáng khí tự nhiên
                    <br />
                    Đệm lót giày bằng da bọc thoải mái và hỗ trợ chân
                    <br />
                    Đế ngoài băng cao su hấp thụ sốc tốt và bám tốt trên mọi bề
                    mặt.
                  </p>
                  <p style={{ textAlign: "justify" }}>
                    Được thành lập vào năm 1978, thương hiệu Nine West xuất phát
                    từ địa chỉ ở thành phố New York. Trong 30 năm, Nine West đã
                    phát triển và trở thành người đứng đầu trong lĩnh vực thời
                    trang nổi tiếng thế giới. Ngày nay, giầy - túi xách - trang
                    sức Nine West được yêu mến bởi phụ nữ trên toàn thế giới và
                    được xem như một chuyên gia tư vấn đáng tin cậy trong mọi
                    lĩnh vực thời trang, bao gồm cả thời trang trẻ em.
                  </p>
                </div>
              </div>
              <div
                className="tab-pane fade "
                id="profile-tab-pane"
                role="tabpanel"
                aria-labelledby="profile-tab"
                tabIndex={0}
              >
                <div>
                  <p>Nội dung tùy chỉnh viết ở đây</p>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="contact-tab-pane"
                role="tabpanel"
                aria-labelledby="contact-tab"
                tabIndex={0}
              >
                <div>
                  <p>...</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="list-related-products">
          <div className="row">
            <div className="col-3">
              <div className="product-item">
                <img src="" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
