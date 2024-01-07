import React from "react";
import "./Introduce.css";
import Footer from "../../Components/Footer/Footer";
import { Breadcrumb } from "antd";
import Home from "../Home/Home";

const Introduce = () => {
  return (
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
                    title: "Giới thiệu",
                  },
                ]}
              />
            </div>
            <div className="page-title category-title">
              <h1 className="title-head">
                <a href="#">Giới thiệu</a>
              </h1>
            </div>
            <div className="content-page rte">
              <p>
                <strong>
                  BRESHKA&nbsp;-SHOES WEBSITE MUA SẮM THỜI TRANG HÀNG HIỆU TRỰC
                  TUYẾN HÀNG ĐẦU VIỆT NAM
                </strong>
              </p>
              <p>
                BẠN ĐANG TÌM KIẾM NHỮNG MẪU THỜI TRANG, QUẦN ÁO, GIÀY DÉP VÀ PHỤ
                KIỆN MỚI NHẤT TRÊN MẠNG? HÃY MUA SẮM NGAY HÔM NAY TẠI
                BRESHKA&nbsp;-SHOES!
              </p>
              <p>
                Breshka-Shoes&nbsp;sẽ mang lại cho khách hàng những trải nghiệm
                mua sắm thời trang hàng hiệu trực tuyến thú vị từ các thương
                hiệu thời trang quốc tế và trong nước, cam kết chất lượng phục
                vụ hàng đầu cùng với những bộ sưu tập quần áo nam nữ khổng lồ từ
                giày dép, trang phục, phụ kiện đến mỹ phẩm cho cả phụ nữ và nam
                giới với những xu hướng thời trang&nbsp;mới nhất. Bạn có thể tìm
                thấy những bộ trang phục mình muốn từ những bộ đồ ở nhà thật
                thoải mái hay tự tin trong những bộ trang phục công sở phù hợp.
                Những trải nghiệm mới chỉ có ở trang mua sắm hàng hiệu trực
                tuyến Breshka-Shoes.
              </p>
              <p>
                <strong>
                  BRESHKA&nbsp;-SHOES&nbsp;MÓN QUÀ TẶNG NGƯỜI THÂN THẬT Ý NGHĨA!
                </strong>
              </p>
              <p>
                Breshka-Shoes&nbsp;sẽ gợi ý cho bạn những món quà thật ý nghĩa
                để tặng người thân, bạn bè. Chúng tôi sẽ làm bạn hài lòng với sự
                lựa chọn của mình bằng giá tốt nhất và chất lượng dịch vụ hoàn
                hảo của Breshka-Shoes.
              </p>
              <p>
                <strong>
                  MUA SẮM Ở BRESHKA&nbsp;-SHOES PHÙ HỢP VỚI TÚI TIỀN TỪ DOANH
                  NHÂN, NHÂN VIÊN VĂN PHÒNG ĐẾN CÁC BẠN TRẺ
                </strong>
              </p>
              <p>
                Breshka-Shoes&nbsp;luôn cập nhật những xu hướng thời trang phong
                cách nhất từ những hãng thời trang cao cấp như Lime Orange hoặc
                Alachic, những đôi giày nổi tiếng mà giá cả phải chăng như Me
                Girl hoặc Bandolini, Juno, JShoes cho tới các thương hiệu thời
                trang tầm trung như Lotus Shoes và Mollet, Lithe S, Om Shoes tất
                cả đều có ở Breshka-Shoes. Đặc biệt, Breshka-Shoes&nbsp;còn có
                nhiều đợt khuyến mãi, giảm giá đặc biệt với giá tốt nhất. Thời
                trang hàng hiệu chất lượng cao, phù hợp túi tiền - chỉ có ở
                Breshka-Shoes!
              </p>
              <p>
                <strong>
                  PHONG CÁCH MUA SẮM HIỆN ĐẠI - THUẬN TIỆN, THANH TOÁN AN TOÀN -
                  DỄ DÀNG
                </strong>
              </p>
              <p>
                Bạn có thể mua sắm thoải mái trên Breshka-Shoes mà không có bất
                kỳ lo lắng nào: trả hàng trong vòng 30 ngày kể từ ngày nhận
                hàng. Nếu bạn có bất kì câu hỏi nào về các sản phẩm của chúng
                tôi từ quần áo nam, trang phục nữ, mỹ phẩm nam hay trang sức hãy
                gọi ngay tới bộ phận chăm sóc khách hàng.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduce;
