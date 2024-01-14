import React, { useState } from "react";
import "./Register.css";
const Register = () => {
  // const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullname, setFullname] = useState("");
  const [mobile, setMobile] = useState("");
  const [address, setAddress] = useState("");

  const handleRegister = async (event) => {
    event.preventDefault();

    try {
      // Gửi yêu cầu đăng ký đến API và nhận phản hồi
      const response = await fetch(
        "https://ecommerce-shopping-api.onrender.com/api/user/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password, fullname, mobile, address }),
        }
      );

      if (response.ok) {
        // Đăng ký thành công
        const data = await response.json();
        // Lưu thông tin đăng nhập vào localStorage
        localStorage.setItem("token", data.token);
        localStorage.setItem("email", email);
        // Chuyển hướng đến trang chủ
        // history.push("/home");
      } else {
        // Xử lý lỗi khi đăng ký không thành công
        throw new Error("Đăng ký không thành công");
      }
    } catch (error) {
      console.error("Lỗi khi đăng ký:", error.message);
      console.error("Mã lỗi:", error.response.status);
      console.error("Thông báo lỗi:", error.response.data);
      // Xử lý lỗi
    }
  };
  return (
    <div className="register-container ">
      <form className="registration-form" onSubmit={handleRegister}>
        <h2>Đăng ký</h2>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Mật khẩu:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="fullname">Họ và tên:</label>
          <input
            type="text"
            id="fullname"
            value={fullname}
            onChange={(event) => setFullname(event.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="mobile">Số điện thoại:</label>
          <input
            type="tel"
            id="mobile"
            value={mobile}
            onChange={(event) => setMobile(event.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="address">Địa chỉ:</label>
          <input
            type="text"
            id="address"
            value={address}
            onChange={(event) => setAddress(event.target.value)}
            required
          />
        </div>
        <button type="submit">Đăng ký</button>
        <div className="form-links">
          <a href="/login" className="form-link">
            Login now ?
          </a>
        </div>
      </form>
    </div>
  );
};

export default Register;
