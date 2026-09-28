import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setLoginData({
      ...loginData,
      [name]: value,
    });
  };

 const handleSubmit = (e) => {
  e.preventDefault();

  console.log("Login Data:", loginData);

  // Store login status
  localStorage.setItem("isLoggedIn", "true");

  alert("Login successful!");

  navigate("/");
  window.location.reload();
};

  return (
    <div className="auth-container">
      <div className="auth-card">

        <div className="text-center mb-4">
          <img
            src="/shop.png"
            alt="ShopEase"
            className="auth-logo"
          />

          <h2>Welcome Back!</h2>
          <p className="text-muted">
            Login to your ShopEase account
          </p>
        </div>

        <form onSubmit={handleSubmit}>

          <div className="mb-3">
            <label className="form-label">
              Email
            </label>

            <input
              type="email"
              className="form-control"
              name="email"
              placeholder="Enter your email"
              value={loginData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">
              Password
            </label>

            <input
              type="password"
              className="form-control"
              name="password"
              placeholder="Enter your password"
              value={loginData.password}
              onChange={handleChange}
              required
            />
          </div>

          <div className="d-flex justify-content-between mb-3">
            <div>
              <input
                type="checkbox"
                className="form-check-input me-2"
              />
              <label className="form-check-label">
                Remember me
              </label>
            </div>

            <a href="#forgot">
              Forgot Password?
            </a>
          </div>

          <button
            type="submit"
            className="btn btn-primary w-100"
          >
            Login
          </button>

        </form>

        <div className="text-center mt-4">
          <p>
            Don't have an account?{" "}
            <Link to="/signup">
              Sign Up
            </Link>
          </p>
        </div>

      </div>
    </div>
  );
};

export default Login;