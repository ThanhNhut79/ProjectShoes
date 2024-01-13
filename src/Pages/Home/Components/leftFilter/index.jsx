import React, { useState } from "react";
import "./style.css";
import { Avatar, Carousel, Menu } from "antd";

const LeftFilter = () => {
  return (
    <div className="left_filter">
      <div className="title-shop">
        <h2>Breshka Shoes</h2>
        <img
          style={{ width: "100%" }}
          src="	https://bizweb.dktcdn.net/100/091/133/themes/880367/assets/banner-qc.jpg?1676015027577"
          alt=""
        />
      </div>
      <div className="content-contact">
        <div className="contact-left">
          <img
            src="//bizweb.dktcdn.net/100/091/133/themes/880367/assets/feature1.png?1676015027577"
            alt=""
          />
        </div>
        <div className="contact-right">
          <span>Hỗ trợ trực tuyến</span>
          <a href="tel:19006750">1900 6750</a>
        </div>
      </div>
      <div className="feedback">
        <h2>Phản Hồi Khách Hàng</h2>
        <Carousel className="carousel-feed" autoplay>
          <div className="items-carousel">
            <div className="ava-feedback">
              <Avatar
                className="avatar-user"
                src="https://cdn.sforum.vn/sforum/wp-content/uploads/2023/11/avatar-dep-89.jpg"
              />
            </div>
            <h3>Alex Amina</h3>
            <p>Giày đẹp , giá tốt, nhân viên tư vấn thân thiện .</p>
          </div>
          <div className="items-carousel">
            <div className="ava-feedback">
              <Avatar
                className="avatar-user"
                src="https://i.pinimg.com/474x/38/aa/0f/38aa0f27ed96a833645b8f442c82ce16.jpg"
              />
            </div>
            <h3>Lucas Nguyễn</h3>
            <p>
              Nhận hàng gần 2 tuần mà thi nhiều quá mình quên ko feedback, giày
              đi êm, đẹp và mượt chân lắm nhé shop
            </p>
          </div>
          <div className="items-carousel">
            <div className="ava-feedback">
              <Avatar
                className="avatar-user"
                src="https://s1.media.ngoisao.vn/resize_580/news/2020/11/20/huynh-anh-thay-ava-5-ngoisaovn-w960-h960.jpg"
              />
            </div>
            <h3>Trâm Anh Đào</h3>
            <p>
              Mình nhận hàng r nha shop. Tuyệt vời luôn. Mang vừa khít chân và
              đi rất êm
            </p>
          </div>
          <div className="items-carousel">
            <div className="ava-feedback">
              <Avatar
                className="avatar-user"
                src="https://antimatter.vn/wp-content/uploads/2022/04/avatar-doi-nguoi-that-ngau-dep-cho-nam.jpg"
              />
            </div>
            <h3>Nắng Hạ</h3>
            <p>100đ về chất lượng, Sẽ ủng hộ lần sau .</p>
          </div>
        </Carousel>
      </div>
    </div>
  );
};
export default LeftFilter;
