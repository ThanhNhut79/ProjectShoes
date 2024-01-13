import React, { useState } from "react";
import "./Register.css";
const Register = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleFullNameChange = (event) => {
    setFullName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleRegister = (event) => {
    event.preventDefault();
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find((u) => u.username === username);
    if (password !== confirmPassword) {
      alert("Mật khẩu và xác nhận mật khẩu không khớp. Vui lòng nhập lại !");
      return;
    }

    if (user) {
      alert("Username đã tồn tại. Vui lòng chọn username khác.");
      return;
    } else {
      users.push({ fullName, email, username, password });
      localStorage.setItem("users", JSON.stringify(users));
      alert("Đăng ký thành công!");
      window.location.href = "/login";
    }
    setFullName("");
    setEmail("");
    setUsername("");
    setPassword("");
    setConfirmPassword("");
  };
  return (
    <div className="register-container ">
      <form className="registration-form" onSubmit={handleRegister}>
        <div></div>
        <h2>Đăng ký</h2>
        <div className="form-group">
          <label htmlFor="fullName">Họ tên:</label>
          <input
            type="text"
            id="fullName"
            value={fullName}
            onChange={handleFullNameChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={handleUsernameChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
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
