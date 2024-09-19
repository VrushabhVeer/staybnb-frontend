import React from "react";
import Image from "../common/Image";
import { Link } from "react-router-dom";
import topRight from "../../assets/icons/top-right.png";
import propertyImage from "../../assets/images/property-image2.jpg";
import calender from "../../assets/icons/calender.png";
import { heroData } from "../../utils/data";

const Hero = () => {
  return (
    <div className="w-11/12 mx-auto h-[100vh] md:h-[90vh] flex flex-col-reverse md:flex-col-reverse lg:flex-row xl:flex-row items-center justify-between gap-8 md:gap-20 mt-52 md:mt-0">
      <div className="w-full">
        <div className="flex items-center flex-row gap-3 text-sm md:text-base text-[#1f9dfa] mb-3">
          {heroData.tags.map((tag, index) => (
            <p key={index}>{tag}</p>
          ))}
        </div>
        <h1 className="text-4xl md:text-6xl leading-loose font-bold">
          {heroData.title}
        </h1>
        <p className="mt-5">{heroData.description}</p>

        <div>
          <Link to="/stays">
            <button className="flex flex-row items-center gap-4 mt-8 px-10 py-3 md:py-4 bg-blue-500 hover:bg-blue-600 text-white tracking-wide font-medium rounded-full">
              {heroData.buttonLabel}
              <Image className="w-3 mt-1" src={topRight} alt="top-right" />
            </button>
          </Link>
        </div>
      </div>

      <div className="w-full relative">
        <Image
          className="w-full rounded-2xl h-[70vh] object-cover"
          src={propertyImage}
          alt={heroData.heroImageAlt}
          priority={true}
        />

        <div className="absolute top-20 md:top-10 left-5 md:left-10 p-3 bg-white bg-opacity-80 rounded-lg">
          <p>Get discount up to</p>
          <h2 className="text-2xl font-bold">50%</h2>
        </div>

        <div className="absolute bottom-5 md:bottom-10 right-5 md:right-10 p-3 bg-white bg-opacity-80 rounded-lg">
          <p>
            More than 1000+ <br />
            properties
          </p>
        </div>

        <div className="absolute bottom-16 md:bottom-20 left-8 md:left-20 p-3 bg-white bg-opacity-80 rounded-lg">
          <p>New properties added</p>
          <div className="flex flex-row items-center gap-4">
            <p>every week</p>

            <Image className="w-5 mt-1" src={calender} alt="calender" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
