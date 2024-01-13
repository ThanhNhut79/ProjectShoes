import { Breadcrumb } from "antd";
import React from "react";
import "./News.css";

const News = () => {
  return (
    <div>
      <div className="introduce">
        <div className="wrap_background_aside margin-bottom-40 container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12">
              <div>
                <Breadcrumb
                  items={[
                    {
                      href: "/",
                      title: "Trang chủ",
                    },

                    {
                      title: "Tin Tức",
                    },
                  ]}
                />
              </div>
              <h1 style={{ marginTop: 10 }}>Tin Tức Thời Trang</h1>
              <div className="band_news">
                <div className="item-1">
                  <a
                    href="https://routine.vn/tin-thoi-trang/4-cach-phoi-do-thong-minh-cung-ao-len-dai-tay"
                    className="card__news"
                  >
                    <div
                      className="thumb"
                      style={{
                        backgroundImage:
                          "url(https://routine.vn/media/magefan_blog/meo-mix-match-thong-minh-cung-ao-len-dai-tay.jpg)",
                      }}
                    />
                    <article>
                      <h1>
                        Những gợi ý phối đồ thông minh cùng chiếc áo len dài tay
                      </h1>
                      <span>8/1/2024</span>
                    </article>
                  </a>
                </div>
                <div className="item-2">
                  <a
                    href="https://routine.vn/tin-thoi-trang/goi-y-cach-phoi-do-voi-ao-len-co-lo"
                    className="card__news"
                  >
                    <div
                      className="thumb"
                      style={{
                        backgroundImage:
                          "url(https://routine.vn/media/magefan_blog/bien-hoa-da-dang-phong-cach-cung-ao-len-co-lo2.jpg)",
                      }}
                    />
                    <article>
                      <h1>
                        Những cách phối đồ với áo len cổ lọ phong cách, cá tính,
                        cool ngầu
                      </h1>
                      <p>
                        Khoảnh khắc giao mùa dịp cuối năm khi thời tiết vào cuối
                        đông, se lạnh, lại chào đón một cái Tết đầm ấm bên gia
                        đình, thì đây có lẽ là khoảng thời gian được rất nhiều
                        bạn trẻ yêu thích..
                      </p>
                      <span>7/1/2024</span>
                    </article>
                  </a>
                </div>
                <div className="item-3">
                  <a
                    href="https://routine.vn/tin-thoi-trang/goi-y-phoi-do-tet-2024-thoi-trang"
                    className="card__news"
                  >
                    <div
                      className="thumb"
                      style={{
                        backgroundImage:
                          "url(https://routine.vn/media/amasty/webp/magefan_blog/phoi-do-tet-thoi-trang_jpg.webp)",
                      }}
                    />
                    <article>
                      <h1>
                        Gợi ý 5 xu hướng phối đồ Tết 2024 thời trang, phong
                        cách, cá tính
                      </h1>
                      <p>
                        Phối đồ đi chơi Tết thời trang, phong cách không chỉ là
                        việc chọn lựa trang phục phù hợp, mà còn thể hiện sự
                        chỉn chu, chào đón năm mới..
                      </p>
                      <span>6/1/2024</span>
                    </article>
                  </a>
                </div>
                <div className="item-4">
                  <a
                    href="https://routine.vn/tin-thoi-trang/tips-phoi-do-mua-dong-dep"
                    className="card__news"
                  >
                    <div
                      className="thumb"
                      style={{
                        backgroundImage:
                          "url(https://routine.vn/media/amasty/webp/magefan_blog/phoi-do-mua-dong-am-ap-trendy_jpg.webp)",
                      }}
                    />
                    <article>
                      <h1>Tips phối đồ mùa đông ấm áp, trendy</h1>
                      {/* <p>We’ll be putting things together so that as you scroll down from the top of the page you’ll see an “Alien Lander” making its way to touch down.</p> */}
                      <span>5/1/2024</span>
                    </article>
                  </a>
                </div>
                <div className="item-5">
                  <a
                    href="https://routine.vn/tin-thoi-trang/chat-lieu-vai-flannel-la-gi"
                    className="card__news"
                  >
                    <div
                      className="thumb"
                      style={{
                        backgroundImage:
                          "url(https://routine.vn/media/amasty/webp/magefan_blog/ao-flannel-la-gi-top-ao-so-mi-flannel-hot-trend-2023_jpg.webp)",
                      }}
                    />
                    <article>
                      <h1>
                        Chất liệu Flannel là gì? Top áo sơ mi flannel hot trend
                        2023
                      </h1>
                      <span>4/1/2024</span>
                    </article>
                  </a>
                </div>
                <div className="item-6">
                  <a
                    href="https://routine.vn/tin-thoi-trang/goi-y-4-cach-phoi-do-di-hoc-nam-hoc-sinh-dep"
                    className="card__news"
                  >
                    <div
                      className="thumb"
                      style={{
                        backgroundImage:
                          "url(https://routine.vn/media/amasty/webp/magefan_blog/goi-y-cac-cach-phoi-do-danh-cho-nam-hoc-sinh_jpg.webp)",
                      }}
                    />
                    <article>
                      <h1>
                        Nam tính, điển trai với 4 cách phối đồ nam học sinh
                      </h1>
                      <span>3/1/2024</span>
                    </article>
                  </a>
                </div>
                <div className="item-7">
                  <a
                    href="https://routine.vn/tin-thoi-trang/cach-phoi-do-di-hoc-sinh-vien-nu-xinh"
                    className="card__news"
                  >
                    <div
                      className="thumb"
                      style={{
                        backgroundImage:
                          "url(https://routine.vn/media/amasty/webp/magefan_blog/luu-ngay-nhung-cach-phoi-do-di-hoc-cho-sinh-vien-nu-cuc-xinh2_jpg.webp)",
                      }}
                    />
                    <article>
                      <h1>
                        Lưu ngay những cách phối đồ đi học cho sinh viên nữ xinh
                        xắn, sành điệu
                      </h1>
                      <span>2/1/2024</span>
                    </article>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
