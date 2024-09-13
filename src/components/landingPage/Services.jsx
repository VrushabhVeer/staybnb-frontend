import React from "react";
import { servicesData } from "../../utils/data.js";
import Image from "../common/Image.jsx";

const Services = () => {
  return (
    <div className="w-11/12 mx-auto mt-20">
      <h1 className="text-2xl md:text-4xl font-bold text-center">Services</h1>
      <p className="text-center text-gray-500 mt-1">Where Exceptional Service Meets Unforgettable Stays</p>
      <div className="flex items-center flex-col md:flex-row lg:flex-row xl:flex-row gap-10 w-full mt-14">
        {servicesData.map((service, index) => (
          <div key={index} className="w-full">
            <Image className="w-16 mx-auto md:mx-0" src={service.image} alt={service.alt} />
            <div className="text-center md:text-left">
              <h2 className="font-semibold mt-3">{service.title}</h2>
              <p className="text-gray-500 mt-1">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
