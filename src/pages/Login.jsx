import React, { useState, useEffect } from "react";
import loginImage from "../assets/images/login-image.jpg";
import google from "../assets/icons/google.png";
import hide from "../assets/icons/hide.png";
import view from "../assets/icons/view.png";
import Image from "../../src/components/common/Image";
import { Link } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showAlert, setShowAlert] = useState("");

  // Email validation with regex
  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Toggle password visibility
  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  // Real-time password validation
  useEffect(() => {
    if (password.length >= 6) {
      setShowAlert(""); // Clear the alert once password is strong enough
    } else if (password.length > 0 && password.length < 6) {
      setShowAlert("Password must be at least 6 characters long.");
    }
  }, [password]);

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email.trim()) {
      setShowAlert("Email is required.");
      return;
    }

    if (!isValidEmail(email)) {
      setShowAlert("Please enter a valid email.");
      return;
    }

    if (password.trim().length < 6) {
      setShowAlert("Password must be at least 6 characters long.");
      return;
    }

    // Show success toast on valid login
    toast.success("Login successful!", { position: "bottom-right" });
  };

  return (
    <div className="flex items-center mb-20 md:mb-0 mt-10 md:mt-0">
      <div className="hidden w-full md:flex">
        <Image
          className="object-cover w-full h-[100vh]"
          src={loginImage}
          alt="login-image"
          priority={true}
        />
      </div>

      <div className="w-full">
        <div className="w-11/12 md:w-8/12 mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800">
            Welcome Back
          </h2>
          <p className="text-center text-gray-500">
            Welcome back, Please enter your details.
          </p>
          <form onSubmit={handleSubmit} className="mt-8">
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-3 mt-1 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div className="mb-8">
              <label htmlFor="password" className="block text-gray-700">
                Password <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full px-4 py-3 mt-1 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute inset-y-1 right-0 flex items-center px-3 text-gray-500 focus:outline-none"
                >
                  {showPassword ? (
                    <Image
                      className="w-5"
                      src={hide}
                      alt="hide"
                      priority={true}
                    />
                  ) : (
                    <Image
                      className="w-5"
                      src={view}
                      alt="view"
                      priority={true}
                    />
                  )}
                </button>
              </div>
              {showAlert && <p className="text-red-500 mt-2">{showAlert}</p>}
            </div>
            <div>
              <button
                type="submit"
                className="w-full px-4 py-3 font-semibold text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                Login
              </button>
            </div>
          </form>

          <button className="w-full px-4 py-[10px] border border-gray-400 rounded-md font-semibold flex flex-row items-center justify-center gap-3 mt-4">
            <Image className="w-5" src={google} alt="google" priority={true} />
            <p>Login with Google</p>
          </button>

          <p className="mt-10 text-sm text-center text-gray-700">
            Don’t have an account?{" "}
            <Link to="/signup" className="text-blue-500 hover:underline">
              Sign up
            </Link>
          </p>
        </div>
      </div>

      <Toaster />
    </div>
  );
};

export default Login;
