import React from "react";
import propertyImage from "../../assets/images/property-image2.jpg";
import { Link } from "react-router-dom";
import Image from "../common/Image";

const RentBanner = () => {
  return (
    <div className="w-11/12 mx-auto mt-20">
      <div className="relative">
        <Image
          className="w-full object-cover h-[60vh] md:h-[70vh] lg:h-[80vh] rounded-md"
          src={propertyImage}
          alt="property-image"
        />
        <div className="absolute top-10 md:top-20 left-10 md:left-20">
          <h1 className="w-11/12 md:w-6/12 text-4xl md:text-5xl font-bold text-white leading-[40px] md:leading-[55px]">
            List your property on staybnb
          </h1>
          <p className="w-10/12 md:w-6/12 text-white mt-3">List your property on Staybnb and start earning by welcoming guests from around the world. It's easy to get started and share your space with travelers looking for unique stays.</p>
          <Link href="/propertylisting">
            <button className="px-10 py-3 bg-blue-500 hover:bg-blue-600 text-white tracking-wide font-medium rounded-md mt-8">
              List property
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RentBanner;
