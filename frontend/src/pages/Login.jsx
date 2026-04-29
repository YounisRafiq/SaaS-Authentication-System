import React, { useState } from "react";
import "./Login.css";
import shield from "../assets/shield.png";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="container">
      <div className="card">
        <div className="left">
          <div className="lock-shield">
            <img src={shield} alt="" />
          </div>
        </div>

        <div className="right">
          <h2>Welcome Back 👋</h2>
          <p>Login to your account</p>

          <form>
            <label>Email</label>
            <input type="email" placeholder="you@example.com" />

            <label>Password</label>
            <div className="password-box">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
              />
              <span
                className="eye"
                onClick={() => setShowPassword(!showPassword)}
              >
                👁
              </span>
            </div>

            <div className="options">
                <label className="remember">
                  <input type="checkbox" />
                  Remember me
                </label>
                <a href="#" className="forgot">Forgot password ?</a>
            </div>

            <button type="submit">Login</button>
          </form>

          <p className="register-text">
            Don’t have an account? <a href="#">Register</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
