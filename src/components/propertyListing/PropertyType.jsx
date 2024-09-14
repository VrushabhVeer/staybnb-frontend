import React, { useState } from "react";
import { placeOptions } from "../../utils/data";
import Image from "../common/Image";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setPropertyType } from "../../redux/dataSlice";

const PropertyType = () => {
  const [selectedItem, setSelectedItem] = useState("");
  const dispatch = useDispatch();

  const handleSelect = (item) => {
    setSelectedItem(item);
    dispatch(setPropertyType(item))
  }

  return (
    <div className="w-11/12 md:w-8/12 lg:w-6/12 mx-auto mt-10 mb-20">
      <div>
        <h1 className="text-2xl md:text-3xl font-bold">
          What type of place will guests have?
        </h1>
        <p className="mt-2 text-blue-600">
          {selectedItem ? `${selectedItem}` : "No selection made yet"}
        </p>
      </div>

      <div className="w-full mt-10">
        {placeOptions.map(({ label, description, imageSrc, alt }) => (
          <div
            key={label}
            onClick={() => handleSelect(label)}
            className={`flex flex-row items-center justify-between p-5 border rounded-md cursor-pointer mt-8 first:mt-0 ${
              selectedItem === label ? "border-gray-500" : "border-gray-300"
            } hover:border-gray-500`}
          >
            <div>
              <p className="text-lg font-semibold">{label}</p>
              <p className="text-gray-500">{description}</p>
            </div>
            <div>
              <Image className="w-10" src={imageSrc} alt={alt} />
            </div>
          </div>
        ))}
      </div>

      <Link to="/amenities">
        <button className="px-10 py-3 bg-blue-500 hover:bg-blue-600 text-white tracking-wide font-medium rounded-md mt-8">
          Next
        </button>
      </Link>
    </div>
  );
};

export default PropertyType;
