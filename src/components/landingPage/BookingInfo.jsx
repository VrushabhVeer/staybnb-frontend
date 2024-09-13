import React from "react";
import { infoItems } from "../../utils/data.js";
import Image from "../common/Image";

const BookingInfo = () => {
  return (
    <div className="w-11/12 mx-auto m-10 md:mt-20">
      <p className="text-left md:text-center text-lg md:text-xl font-bold text-[#1b9dff]">
        The easy way to get more bookings
      </p>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-12">
        {infoItems.map((item, index) => (
          <div key={index}>
            <Image className="w-10" src={item.icon} alt="" loading="lazy" />
            <p className="font-semibold mt-3">{item.title}</p>
            <p className="text-gray-500 mt-1">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookingInfo;
