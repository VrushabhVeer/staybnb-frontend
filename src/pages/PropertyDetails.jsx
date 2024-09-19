import React from "react";
import Image from "../components/common/Image";
import { Link } from "react-router-dom";

const PropertyDetails = () => {
  const images = [
    "https://a0.muscache.com/im/pictures/miso/Hosting-666960593239525442/original/75139f74-4b40-44e1-9a0f-45a2677b41f4.jpeg?im_w=1200",
    "https://a0.muscache.com/im/pictures/miso/Hosting-666960593239525442/original/75139f74-4b40-44e1-9a0f-45a2677b41f4.jpeg?im_w=1200",
    "https://a0.muscache.com/im/pictures/miso/Hosting-666960593239525442/original/75139f74-4b40-44e1-9a0f-45a2677b41f4.jpeg?im_w=1200",
    "https://a0.muscache.com/im/pictures/miso/Hosting-666960593239525442/original/75139f74-4b40-44e1-9a0f-45a2677b41f4.jpeg?im_w=1200",
    "https://a0.muscache.com/im/pictures/miso/Hosting-666960593239525442/original/75139f74-4b40-44e1-9a0f-45a2677b41f4.jpeg?im_w=1200",
  ];

  return (
    <div className="w-11/12 md:w-9/12 mx-auto mt-10 mb-20">
      <div className="flex flex-col md:flex-row items-center justify-between gap-2">
        {/* Left side: Large image */}
        <div className="w-full md:w-1/2">
          <Image
            className="w-full h-[51vh] object-cover rounded-t-xl md:rounded-l-xl"
            src="https://a0.muscache.com/im/pictures/7b73b10d-44bb-4736-b93f-301a86158820.jpg?im_w=1200"
            alt="property-image"
          />
        </div>

        {/* Right side: Grid of smaller images */}
        <div className="w-full md:w-1/2 grid grid-cols-2 gap-2">
          <div>
            <Image
              className="w-full h-[25vh] object-cover"
              src="https://a0.muscache.com/im/pictures/0962bd50-0223-4efb-8428-d3883736741f.jpg?im_w=720"
              alt="property-image"
            />
          </div>

          <div>
            <Image
              className="w-full h-[25vh] object-cover md:rounded-tr-xl"
              src="https://a0.muscache.com/im/pictures/6e0a8a6c-b12b-4ba0-9327-f2f15f6d0b14.jpg?im_w=720"
              alt="property-image"
            />
          </div>

          <div>
            <Image
              className="w-full h-[25vh] rounded-bl-xl md:rounded-none object-cover"
              src="https://a0.muscache.com/im/pictures/6dc816b3-8d6b-4db1-a6c2-35872c4d1f04.jpg?im_w=720"
              alt="property-image"
            />
          </div>

          <div>
            <Image
              className="w-full h-[25vh] object-cover rounded-br-xl md:rounded-br-xl"
              src="https://a0.muscache.com/im/pictures/fcd9512e-36fb-4973-a2b6-f6b232cf7afb.jpg?im_w=1200"
              alt="property-image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;
