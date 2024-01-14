import React, { useState } from "react";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(
        "https://ecommerce-shopping-api.onrender.com/api/user/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        }
      );

      if (response.ok) {
        // Đăng nhập thành công
        const data = await response.json();
        // Lưu thông tin đăng nhập vào localStorage
        localStorage.setItem("token", data.token);
        localStorage.setItem("email", email);
        // Chuyển hướng đến trang chủ
        window.location.href = "/";
      } else {
        throw new Error("Đăng nhập không thành công");
      }
    } catch (error) {
      console.error("Lỗi khi đăng nhập:", error.message);
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleLogin}>
        <h2 className="login-title">Đăng nhập</h2>
        <div className="form-group">
          <label htmlFor="email">Username:</label>
          <input
            type="text"
            id="email"
            className="form-input"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            className="form-input"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <button type="submit" className="form-button">
          Đăng nhập
        </button>
        <div className="form-links">
          <a href="/register" className="form-link">
            Đăng ký ?
          </a>
          <a href="/forgetpassword" className="form-link">
            Quên mật khẩu ?
          </a>
        </div>
      </form>
    </div>
  );
};

export default Login;
