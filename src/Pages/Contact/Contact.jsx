import { Breadcrumb } from "antd";
import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact">
      <div className="container">
        <div class="row">
          <div className="bread-crumb">
            <Breadcrumb
              items={[
                {
                  href: "/",
                  title: "Trang chủ",
                },

                {
                  title: "Liên hệ",
                },
              ]}
            />
          </div>
          <div className="col-8 ">
            <div className="section-left-contact">
              <h1 className="title-head-contact">Liên hệ với chúng tôi</h1>
              <p className="text-contact">
                Bạn hãy điền nội dung tin nhắn vào form dưới đây và gửi chúng
                tôi.Chúng tôi sẽ trả lời bạn sau khi nhận được
              </p>
              <div className="form-contact">
                <div>
                  <form
                    method="post"
                    action="/postcontact"
                    id="contact"
                    acceptCharset="UTF-8"
                  >
                    <input
                      name="FormType"
                      type="hidden"
                      defaultValue="contact"
                    />
                    <input name="utf8" type="hidden" defaultValue="true" />
                    <input
                      type="hidden"
                      id="Token-3cc413393958438da97708365f7cee85"
                      name="Token"
                      defaultValue="03AFcWeA7T_dYud08jWUbtPNfAHlFi7P6F2SKRawyMWarqtxqnjsGixGGybuJksnJCRTlAqWd0VAu28Ef27jTRKgjboZuFo7qJSzzYXojOQhgWUGSPKTkRa32xLmo6HUAYaX8zP9LOHK5N16oaaqSVxDWXaILl5RHsDKVCFNnSTljqj3iK5doI5Xq4DHF9kzqjn9N3jlyPbJcjl7mTzd9rhwA5wC0LJFE9V5YvnE97PnJHpocw2XUPGKb-zJoOUqt8q7rO_Nma0PCVu7pR8Q7r8ULkHIKVKZxt5viP2wgtVNWnhwwVP-hqJkX3F17HuXe1xRQOEpuYz1MPoUM7mDBm1s67PefFc6ILdd4XMmhQeH1eK4hzOA2fRpYcvI6HqFkTYCf60xTauDQb5QBrOQWznHKPdr_QLnn4xvNbBnUF-rVERkSQIGz5mXgScqOpu1BZ6LYOxHXta-HmTO7DTvvSaQCBVMZMweGxM-EHMK69mk3wJ7lh0APi635-RvuezzSzBn6umx0sL1JPyTNmUk2f8xKXRHhMe9EilltKuSNT_eL_b_pnXFpP3tj4ju7SelhCzuPfeFpUfDbFlGp6XSHpFK0sbwLvvclx_g"
                    />
                    <div className="form-signup clearfix">
                      <div className="row group_contact">
                        <fieldset className="form-group col-lg-12 col-md-12 col-sm-12 col-xs-12">
                          <label>
                            Họ và tên <em>*</em>
                          </label>
                          <input
                            placeholder
                            type="text"
                            className="form-control  form-control-lg"
                            required
                            name="contact[Name]"
                          />
                        </fieldset>
                        <fieldset className="form-group col-lg-12 col-md-12 col-sm-12 col-xs-12">
                          <label>
                            Email <em>*</em>
                          </label>
                          <input
                            placeholder
                            type="email"
                            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                            required
                            id="email1"
                            className="form-control form-control-lg"
                            name="contact[email]"
                          />
                        </fieldset>
                        <fieldset className="form-group col-lg-12 col-md-12 col-sm-12 col-xs-12">
                          <label>
                            Nội dung <em>*</em>
                          </label>
                          <textarea
                            placeholder
                            name="contact[body]"
                            id="comment"
                            className="form-control content-area form-control-lg"
                            rows={5}
                            required
                            defaultValue={""}
                          />
                        </fieldset>
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                          <button type="submit" className="btn-contact">
                            Gửi tin nhắn
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className="section-right-contact">
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
              <div className="info-contact">
                <div className="content-contact">
                  <div className="icon">
                    <i class="fa-solid fa-location-dot"></i>
                  </div>

                  <span>
                    Tầng 6,tòa nhà Ladeco,266 Đội Cấn,Hà Nội,Việt Nam, Hà Nội,
                  </span>
                </div>
                <div className="content-contact">
                  <div className="icon">
                    <i className="fa-solid fa-phone" />
                  </div>

                  <a href="">1900 6750</a>
                </div>
                <div className="content-contact">
                  <div className="icon">
                    <i class="far fa-envelope"></i>
                  </div>

                  <a href="">hellocafein@gmail.com</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
