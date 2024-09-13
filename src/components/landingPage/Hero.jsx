import React from "react";
import heroImage from "../../assets/images/property-image1.jpg";
import { heroData } from "../../utils/data.js";
import { Link } from "react-router-dom";
import Image from "../common/Image.jsx";

const Hero = () => {
  return (
    <div className="w-full relative">
      <div className="relative">
        <Image
          className="w-full object-cover h-[70vh] md:h-[80vh] lg:h-[95vh]"
          src={heroImage}
          alt="hero_image"
          priority={true}
        />
        <div className="absolute top-20 md:top-30 lg:top-36 left-8 md:left-16">
          <div className="flex items-center flex-row gap-3 text-sm md:text-base text-[#dadff5] mb-3">
            {heroData.tags.map((tag, index) => (
              <p key={index}>{tag}</p>
            ))}
          </div>
          <h1 className="text-4xl text-white md:text-6xl w-8/12 md:w-6/12 lg:w-5/12 leading-tight font-bold">
            {heroData.title}
          </h1>
          <p className="text-white w-9/12 md:w-5/12 mt-5">
            {heroData.description}
          </p>
          <Link href="/stays">
            <button className="px-10 py-3 bg-blue-500 hover:bg-blue-600 text-white tracking-wide font-medium rounded-md mt-8">
              {heroData.buttonLabel}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
