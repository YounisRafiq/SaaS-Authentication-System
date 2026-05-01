import { useState } from "react";
import "./Register.css";
import { useForm } from "react-hook-form"
import { Link } from "react-router-dom"

const Register = () => {

   const { register , handleSubmit } = useForm();

  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <div className="register-container">
      <div className="register-card">

        <div className="register-left">
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
              {...register("file")}
              onChange={handleImageChange}
              hidden
            />

            <label htmlFor="upload" className="plus">+</label>

          </div>
        </div>

        <div className="register-right">
          <h2>Create Account</h2>
          <p>Sign up to get started</p>

          <form onSubmit={handleSubmit(onSubmit)}>
            <label>Full Name</label>
            <input {...register("fullName")} type="text" placeholder="Enter your name" />

            <label>Email</label>
            <input {...register("email")} type="email" placeholder="you@example.com" />

            <label>Password</label>
            <input {...register("password")} type="password" placeholder="Enter your password" />

            <button type="submit">Register</button>
          </form>

          <p className="login-text">
            Already have an account? <Link to={"/user/login"}>Login</Link>
          </p>
        </div>

      </div>
    </div>
  );
};

export default Register;