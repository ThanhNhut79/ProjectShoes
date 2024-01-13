import React, { useState } from "react";
import "./Login.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = (event) => {
    event.preventDefault();

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find(
      (u) => u.username === username && u.password === password
    );

    if (user) {
      alert("Đăng nhập thành công!");
      window.location.href = "/";
    } else {
      alert("Đăng nhập thất bại. Vui lòng kiểm tra lại thông tin đăng nhập.");
    }
  };
  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleLogin}>
        <h2 className="login-title">Đăng nhập</h2>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            className="form-input"
            value={username}
            onChange={handleUsernameChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            className="form-input"
            value={password}
            onChange={handlePasswordChange}
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
