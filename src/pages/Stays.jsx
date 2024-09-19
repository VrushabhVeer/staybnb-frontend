import React from "react";
import Image from "../components/common/Image.jsx";
import propertyImage from "../assets/images/property-image.jpg";

const Stays = () => {
  const fav = true;
  return (
    <div className="w-11/12 mx-auto mt-10 mb-20">
      <h1 className="text-2xl md:text-4xl font-bold">Find Stays</h1>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 w-full gap-x-6 gap-y-10">
        <div className="bg-white overflow-hidden">
          <div className="relative">
            <Image
              className="w-full h-64 object-cover rounded-xl"
              src={
                "https://a0.muscache.com/im/pictures/miso/Hosting-666960593239525442/original/75139f74-4b40-44e1-9a0f-45a2677b41f4.jpeg?im_w=1200"
              }
              alt="propertyImage"
            />
          </div>

          <div className="mt-2">
            <div className="flex items-center justify-between">
              <h3 className="text-md font-semibold">Kharavandi, India</h3>
              <h3 className="text-md font-semibold">
                <span className="text-yellow-500">★</span> 4.5
              </h3>
            </div>
            <p className="text-gray-500">city, country</p>
            <p className="mt-1">₹ 14000, night</p>
          </div>
        </div>
        <div className="bg-white overflow-hidden">
          <div className="relative">
            <Image
              className="w-full h-64 object-cover rounded-xl"
              src="https://a0.muscache.com/im/pictures/miso/Hosting-867054237184940077/original/c62d710c-f76c-4761-b90f-89fd31506788.jpeg?im_w=1200"
              alt="propertyImage"
            />

            {fav ? (
              <div className="bg-white px-3 py-1 rounded-full shadow-lg absolute top-3 left-3 text-sm font-medium">
                Guest <span className="text-red-500">❤︎</span>
              </div>
            ) : (
              <></>
            )}
          </div>

          <div className="mt-2">
            <div className="flex items-center justify-between">
              <h3 className="text-md font-semibold">Kharavandi, India</h3>
              <h3 className="text-md font-semibold">
                <span className="text-yellow-500">★</span> 4.5
              </h3>
            </div>
            <p className="text-gray-500">city, country</p>
            <p className="mt-1">₹ 14000, night</p>
          </div>
        </div>
        <div className="bg-white overflow-hidden">
          <div className="relative">
            <Image
              className="w-full h-64 object-cover rounded-xl"
              src={propertyImage}
              alt="propertyImage"
            />
          </div>

          <div className="mt-2">
            <div className="flex items-center justify-between">
              <h3 className="text-md font-semibold">Kharavandi, India</h3>
              <h3 className="text-md font-semibold">
                <span className="text-yellow-500">★</span> 4.5
              </h3>
            </div>
            <p className="text-gray-500">city, country</p>
            <p className="mt-1">₹ 14000, night</p>
          </div>
        </div>
        <div className="bg-white overflow-hidden">
          <div className="relative">
            <Image
              className="w-full h-64 object-cover rounded-xl"
              src={
                "https://a0.muscache.com/im/pictures/49383668-6a00-41f0-9390-d655dd00f984.jpg?im_w=1200"
              }
              alt="propertyImage"
            />

            <div className="bg-white px-3 py-1 rounded-full shadow-lg absolute top-3 left-3 text-sm font-medium">
              Guest <span className="text-red-500">❤︎</span>
            </div>
          </div>

          <div className="mt-2">
            <div className="flex items-center justify-between">
              <h3 className="text-md font-semibold">Kharavandi, India</h3>
              <h3 className="text-md font-semibold">
                <span className="text-yellow-500">★</span> 4.5
              </h3>
            </div>
            <p className="text-gray-500">city, country</p>
            <p className="mt-1">₹ 14000, night</p>
          </div>
        </div>
        <div className="bg-white overflow-hidden">
          <div className="relative">
            <Image
              className="w-full h-64 object-cover rounded-xl"
              src={
                "https://a0.muscache.com/im/pictures/miso/Hosting-666960593239525442/original/75139f74-4b40-44e1-9a0f-45a2677b41f4.jpeg?im_w=1200"
              }
              alt="propertyImage"
            />
          </div>

          <div className="mt-2">
            <div className="flex items-center justify-between">
              <h3 className="text-md font-semibold">Kharavandi, India</h3>
              <h3 className="text-md font-semibold">
                <span className="text-yellow-500">★</span> 4.5
              </h3>
            </div>
            <p className="text-gray-500">city, country</p>
            <p className="mt-1">₹ 14000, night</p>
          </div>
        </div>
        <div className="bg-white overflow-hidden">
          <div className="relative">
            <Image
              className="w-full h-64 object-cover rounded-xl"
              src="https://a0.muscache.com/im/pictures/miso/Hosting-867054237184940077/original/c62d710c-f76c-4761-b90f-89fd31506788.jpeg?im_w=1200"
              alt="propertyImage"
            />

            {fav ? (
              <div className="bg-white px-3 py-1 rounded-full shadow-lg absolute top-3 left-3 text-sm font-medium">
                Guest <span className="text-red-500">❤︎</span>
              </div>
            ) : (
              <></>
            )}
          </div>

          <div className="mt-2">
            <div className="flex items-center justify-between">
              <h3 className="text-md font-semibold">Kharavandi, India</h3>
              <h3 className="text-md font-semibold">
                <span className="text-yellow-500">★</span> 4.5
              </h3>
            </div>
            <p className="text-gray-500">city, country</p>
            <p className="mt-1">₹ 14000, night</p>
          </div>
        </div>
        <div className="bg-white overflow-hidden">
          <div className="relative">
            <Image
              className="w-full h-64 object-cover rounded-xl"
              src={propertyImage}
              alt="propertyImage"
            />
          </div>

          <div className="mt-2">
            <div className="flex items-center justify-between">
              <h3 className="text-md font-semibold">Kharavandi, India</h3>
              <h3 className="text-md font-semibold">
                <span className="text-yellow-500">★</span> 4.5
              </h3>
            </div>
            <p className="text-gray-500">city, country</p>
            <p className="mt-1">₹ 14000, night</p>
          </div>
        </div>
        <div className="bg-white overflow-hidden">
          <div className="relative">
            <Image
              className="w-full h-64 object-cover rounded-xl"
              src={
                "https://a0.muscache.com/im/pictures/49383668-6a00-41f0-9390-d655dd00f984.jpg?im_w=1200"
              }
              alt="propertyImage"
            />

            <div className="bg-white px-3 py-1 rounded-full shadow-lg absolute top-3 left-3 text-sm font-medium">
              Guest <span className="text-red-500">❤︎</span>
            </div>
          </div>

          <div className="mt-2">
            <div className="flex items-center justify-between">
              <h3 className="text-md font-semibold">Kharavandi, India</h3>
              <h3 className="text-md font-semibold">
                <span className="text-yellow-500">★</span> 4.5
              </h3>
            </div>
            <p className="text-gray-500">city, country</p>
            <p className="mt-1">₹ 14000, night</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stays;
