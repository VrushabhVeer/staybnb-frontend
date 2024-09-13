import React, { useState } from "react";
import loginImage from "../assets/images/signup-image.jpg";
import google from "../assets/icons/google.png";
import hide from "../assets/icons/hide.png";
import view from "../assets/icons/view.png";
import Image from "../../src/components/common/Image";
import { Link } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

const Signup = () => {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showAlert, setShowAlert] = useState("");

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    if (!isValidEmail(e.target.value)) {
      setShowAlert("Please enter a valid email.");
    } else {
      setShowAlert("");
    }
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    if (e.target.value.length < 6) {
      setShowAlert("Password must be at least 6 characters long.");
    } else {
      setShowAlert("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!fullname.trim()) {
      setShowAlert("Full name is required.");
      return;
    }

    if (!email.trim()) {
      setShowAlert("Email is required.");
      return;
    }

    if (!isValidEmail(email)) {
      setShowAlert("Please enter a valid email.");
      return;
    }

    if (password.length < 6) {
      setShowAlert("Password must be at least 6 characters long.");
      return;
    }

    // Handle form submission logic here
    toast.success("Account created successfully!", {
      position: "bottom-right",
    });

    // Clear form fields after submission
    setFullname("");
    setEmail("");
    setPassword("");

    // Clear form and show success (e.g., using toast)
  };

  return (
    <div className="flex items-center mb-20 md:mb-0 mt-10 md:mt-0">
      <div className="hidden w-full md:flex">
        <Image
          className="object-cover w-full h-[100vh]"
          src={loginImage}
          alt="signup-image"
          priority={true}
        />
      </div>

      <div className="w-full">
        <div className="w-11/12 md:w-8/12 mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800">
            Get Started
          </h2>
          <p className="text-center text-gray-500">
            Welcome to staybnb - Let's create your account.
          </p>
          <form onSubmit={handleSubmit} className="mt-8">
            <div className="mb-4">
              <label htmlFor="fullname" className="block text-gray-700">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="fullname"
                value={fullname}
                onChange={(e) => setFullname(e.target.value)}
                required
                className="w-full px-4 py-3 mt-1 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={handleEmailChange}
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
                  onChange={handlePasswordChange}
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
            </div>

            {showAlert && <p className="text-red-500">{showAlert}</p>}

            <div>
              <button
                type="submit"
                className="w-full px-4 py-3 font-semibold text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                Sign up
              </button>
            </div>
          </form>
          <button className="w-full px-4 py-[10px] border border-gray-400 rounded-md font-semibold flex flex-row items-center justify-center gap-3 mt-4">
            <Image className="w-5" src={google} alt="google" priority={true} />
            <p>Signup with Google</p>
          </button>
          <p className="mt-10 text-sm text-center text-gray-700">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-500 hover:underline">
              Login
            </Link>
          </p>
        </div>
      </div>

      <Toaster position="top-center" />
    </div>
  );
};

export default Signup;
