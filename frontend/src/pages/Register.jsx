import React, { useState } from "react";
import "./Register.css";

const Signup = () => {
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  return (
    <div className="container">
      <div className="card">

        <div className="left">
          <div className="icon">

            <div className="circle">
              {image ? (
                <img src={image} alt="preview" />
              ) : (
                <p className="placeholder">Upload</p>
              )}
            </div>

            <input
              type="file"
              accept="image/*"
              id="upload"
              onChange={handleImageChange}
              hidden
            />

            <label htmlFor="upload" className="plus">+</label>

          </div>
        </div>

        <div className="right">
          <h2>Create Account</h2>
          <p>Sign up to get started</p>

          <form>
            <label>Full Name</label>
            <input type="text" placeholder="Enter your name" />

            <label>Email</label>
            <input type="email" placeholder="you@example.com" />

            <label>Password</label>
            <input type="password" placeholder="Enter your password" />

            <button type="submit">Register</button>
          </form>

          <p className="login-text">
            Already have an account? <span>Login</span>
          </p>
        </div>

      </div>
    </div>
  );
};

export default Signup;