import React from "react";
import LottiePlayerWrapper from "../common/LottiePlayerWrapper";

const CompleteListing = () => {
  return (
    <div className="mb-20">
      <div className="w-[45%] md:w-[35%] lg:w-[25%] mx-auto flex items-center justify-center">
        <LottiePlayerWrapper src={"https://lottie.host/fb15b2b7-2cf1-4e5f-adbf-a58a9b31f94c/vf3EdX1BTp.json"} />
      </div>

      <div className="text-center w-[90%] md:w-[40%] mx-auto">
        <h1 className="font-bold text-[25px] md:text-[30px] text-green-500">
          Property listed successfully!
        </h1>
        <p className="mt-3 text-gray-500">
          You have completed your listing successfully. Need to change something
          or add something, you can change it anytime.
        </p>
      </div>
    </div>
  );
};

export default CompleteListing;