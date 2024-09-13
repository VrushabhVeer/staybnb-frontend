import React, { useEffect } from "react";
import { useState } from "react";
import logo from "../../assets/icons/location.png";
import user from "../../assets/icons/user.png";
import { Link } from "react-router-dom";
import Image from "./Image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollUp, setScrollUp] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const isScrolledUp = window.scrollY > 0;
      setScrollUp(isScrolledUp);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div
        className={`bg-[#f6fafd] px-4 md:px-8 lg:px-12 sticky top-0 z-50 ${scrollUp ? "shadow-md" : ""
          }`}
      >
        <div className="flex flex-row md:flex-row lg:flex-row py-3 md:p-4 items-center justify-between">
          <button className="lg:hidden" onClick={handleToggle}>
            {isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </button>

          <div className="font-semibold text-2xl">
            <Link to="/">
              <div className="flex flex-row items-center">
                <Image
                  className="w-5 md:w-6"
                  src={logo}
                  alt="logo"
                  priority={true}
                />
                <h2 className="text-[22px] md:text-[26px] mt-1 tracking-wide font-bold text-[#1b9dff] font-[khand]">
                  staybnb
                </h2>
              </div>
            </Link>
          </div>

          <div className="hidden md:hidden lg:flex font-medium items-center space-x-8">
            <Link to="/stays">
              <p>Find Stays</p>{" "}
            </Link>
            <Link to="/propertylisting">
              <p>List Property</p>{" "}
            </Link>
            <Link to="/login">
              <p>Login</p>{" "}
            </Link>
          </div>

          <Link to="/profile">
            <Image className="w-6" src={user} alt="user-icon" priority={true} />
          </Link>
        </div>

        {isOpen ? (
          <div className="pb-8 pt-5 lg:hidden">
            <div className="flex flex-col space-y-5 ml-2 font-medium">
              <Link to="/">
                <p>Home</p>{" "}
              </Link>
              <Link to="/stays">
                <p>Find Stays</p>{" "}
              </Link>
              <Link to="propertylisting">
                <p>List Property</p>{" "}
              </Link>
              <Link to="/login">
                <p>Login</p>{" "}
              </Link>
            </div>
          </div>
        ) : null}
      </div>
    </>
  );
}
