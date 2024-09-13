import React from "react";
import { Link } from "react-router-dom";

const Publish = () => {
  return (
    <div className="w-11/12 mx-auto flex items-center justify-between flex-col md:flex-col lg:flex-row xl:flex-row mt-10 mb-10 md:mb-0">
      <div className="w-full">
        <h1 className="text-3xl md:text-4xl font-bold">
          Finish up and publish
        </h1>
        <p className="text-gray-500 mt-3">
          You have successfully completed your listing setup. Please review the
          details to ensure everything is correct. Once you are satisfied,
          confirm your listing to make it available for booking. Remember, you
          can always go back and make changes before publishing, and you can
          manage your listing from your dashboard afterward.
        </p>

        <Link to="/completelisting">
          <button className="px-10 py-3 bg-blue-500 hover:bg-blue-600 text-white tracking-wide font-medium rounded-md mt-8">
            Publish
          </button>
        </Link>
      </div>
      <div className="w-full">
        <video
          src="https://stream.media.muscache.com/zFaydEaihX6LP01x8TSCl76WHblb01Z01RrFELxyCXoNek.mp4?v_q=high"
          autoPlay
          muted
          width="100%"
        />
      </div>
    </div>
  );
};

export default Publish;
