import React from "react";
import { Link } from "react-router-dom";

const PropertyListing = () => {
  return (
    <div className="w-11/12 mx-auto flex items-center justify-between flex-col md:flex-col lg:flex-row xl:flex-row mt-10 mb-10 md:mb-0">
      <div className="w-full">
        <h1 className="text-3xl md:text-4xl font-bold">
          Tell us about your place
        </h1>
        <p className="text-gray-500 mt-3">
          Share some basic info, such as where it is and how many guests can
          stay. In this step, we all ask you which type of property you have and
          if guests will book the entire place or just a room. Then let us know
          the location and how many guests can stay.
        </p>

        <Link to="/property_category">
          <button className="px-10 py-3 bg-blue-500 hover:bg-blue-600 text-white tracking-wide font-medium rounded-md mt-8">
            Get Started
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

export default PropertyListing;
