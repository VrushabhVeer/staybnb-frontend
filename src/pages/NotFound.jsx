import React from "react";
import LottiePlayerWrapper from "../components/common/LottiePlayerWrapper";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="w-full">
      <div className="w-full md:w-8/12 lg:w-9/12 mx-auto pt-10 flex items-center justify-center">
        <LottiePlayerWrapper
          src={
            "https://lottie.host/739b5de8-2ec6-4361-b3d0-a1d24d343632/dxpA8OeQD2.json"
          }
        />
      </div>

      <div className="w-[90%] md:w-[40%] lg:w-[30%] mx-auto mt-8 pb-10 text-center">
        <h1 className="text-5xl md:text-7xl font-bold">404</h1>
        <h2 className="text-3xl md:text-4xl text-[#0055fe] font-bold"> Page not found</h2>
        <p className="text-gray-500 mt-5">
          Sorry, we couldnt find this page, but dont worry, you can go to other
          pages, go to{" "}
          <Link className="text-[#0055fe]" to="/">
            Homepage
          </Link>
        </p>
      </div>
    </div>
  );
};

export default NotFound;
