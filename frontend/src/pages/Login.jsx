import React, { useState } from "react";
import "./Login.css";
import shield from "../assets/shield.png";
import { Link } from "react-router-dom"
const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-left">
          <div className="lock-shield">
            <img src={shield} alt="" />
          </div>
        </div>

        <div className="login-right">
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
            Don’t have an account? <Link to={"/user/register"}>Register</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
